-- Distinguish the founder from ordinary Lead Acquisition team members. No RLS is weakened: the
-- founder's row is still governed by the exact same policies as everyone else's. (Already applied.)
alter table public.team_members add column is_founder boolean not null default false;

create or replace function public.team_members_guard() returns trigger language plpgsql set search_path = '' as $$
begin
  if (select auth.uid()) is not null and not public.is_admin() then
    if (new.application_id, new.auth_user_id, new.email, new.name, new.role, new.status,
        new.activated_at, new.deactivated_at, new.deactivation_reason, new.is_founder, new.created_at)
       is distinct from
       (old.application_id, old.auth_user_id, old.email, old.name, old.role, old.status,
        old.activated_at, old.deactivated_at, old.deactivation_reason, old.is_founder, old.created_at) then
      raise exception 'team members can only update their own last_login_at' using errcode = '42501';
    end if;
  end if;
  if new.status is distinct from old.status then
    new.deactivated_at := case when new.status = 'inactive' then now() else null end;
  end if;
  return new;
end $$;
grant update (activated_at, status, deactivation_reason, is_founder) on public.team_members to authenticated;

-- Founder-flagged rows never receive Lead Acquisition starter tasks.
create or replace function public.assign_starter_tasks() returns trigger language plpgsql set search_path = '' as $$
begin
  if new.is_founder then
    return new;
  end if;
  insert into public.tasks (team_member_id, template_id, position, title, description, priority, resource_url, due_date)
  select new.id, t.id, t.position, t.title, t.description, t.priority, t.resource_url,
         case when new.activated_at is null then null else (new.activated_at::date + t.day_offset) end
  from public.task_templates t where t.active
  on conflict do nothing;
  return new;
end $$;

-- 'founder' is a sentinel engagement state that bypasses every accountability rule below it.
create or replace function public.team_member_engagement(p_member_id uuid)
returns table (
  engagement_status text, overdue_tasks int, completed_tasks int, total_tasks int,
  onboarding_done int, onboarding_total int, days_since_activation numeric,
  last_meaningful_activity_at timestamptz
)
language sql stable security invoker set search_path = '' as $$
  with m as (select id, status, activated_at, is_founder from public.team_members where id = p_member_id),
  t as (
    select count(*) filter (where due_date is not null and due_date < current_date and status <> 'done') as overdue,
           count(*) filter (where status = 'done') as done, count(*) as total, max(completed_at) as last_activity
    from public.tasks where team_member_id = p_member_id
  ),
  o as (select count(*) as done_count, max(completed_at) as last_activity from public.onboarding_progress where team_member_id = p_member_id),
  om as (select count(*) as total from public.onboarding_modules where published),
  a as (select greatest(t.last_activity, o.last_activity) as last_meaningful_activity_at from t, o)
  select
    case
      when m.is_founder then 'founder'
      when m.status = 'inactive' then 'deactivated'
      when m.activated_at is null then 'unknown'
      when t.overdue >= 2
        or (now() - m.activated_at >= interval '7 days' and t.done = 0 and o.done_count = 0)
        or (a.last_meaningful_activity_at is not null and now() - a.last_meaningful_activity_at >= interval '7 days')
        then 'inactive'
      when t.overdue >= 1 or (now() - m.activated_at >= interval '3 days' and t.done = 0 and o.done_count = 0)
        then 'at_risk'
      else 'active'
    end,
    t.overdue, t.done, t.total, o.done_count, om.total,
    round(extract(epoch from (now() - m.activated_at)) / 86400.0, 1),
    a.last_meaningful_activity_at
  from m, t, o, om, a;
$$;

drop function if exists public.reminder_candidates();
drop view if exists public.team_ops_overview cascade;

-- Added application_id (so admin can link through) and is_founder.
create view public.team_ops_overview with (security_invoker = true) as
select
  tm.id as team_member_id, tm.application_id, tm.name, tm.email, tm.role, tm.status, tm.is_founder,
  tm.activated_at, tm.deactivated_at, tm.deactivation_reason, tm.created_at, tm.welcome_email_sent_at, tm.last_login_at,
  coalesce(t.total, 0) as tasks_total, coalesce(t.done, 0) as tasks_done, coalesce(t.overdue, 0) as tasks_overdue,
  coalesce(o.done_count, 0) as onboarding_done,
  (select count(*) from public.onboarding_modules where published) as onboarding_total,
  greatest(t.last_activity, o.last_activity) as last_meaningful_activity_at,
  e.engagement_status
from public.team_members tm
left join lateral (
  select count(*) filter (where due_date is not null and due_date < current_date and status <> 'done') as overdue,
         count(*) filter (where status = 'done') as done, count(*) as total, max(completed_at) as last_activity
  from public.tasks where team_member_id = tm.id
) t on true
left join lateral (select count(*) as done_count, max(completed_at) as last_activity from public.onboarding_progress where team_member_id = tm.id) o on true
left join lateral (select engagement_status from public.team_member_engagement(tm.id)) e on true;
grant select on public.team_ops_overview to authenticated;

create function public.reminder_candidates()
returns table (team_member_id uuid, name text, email text, reminder_type text, reason text)
language sql stable security invoker set search_path = '' as $$
  select team_member_id, name, email, 'activation_48h',
         'activated ' || round(extract(epoch from (now() - activated_at)) / 3600) || 'h ago, 0 completed tasks'
  from public.team_ops_overview
  where status = 'active' and not is_founder and activated_at is not null
    and now() - activated_at >= interval '48 hours' and now() - activated_at < interval '96 hours'
    and tasks_done = 0
  union all
  select team_member_id, name, email, 'overdue', tasks_overdue || ' task(s) overdue'
  from public.team_ops_overview where status = 'active' and not is_founder and tasks_overdue > 0
  union all
  select team_member_id, name, email, 'inactivity_7d', 'engagement status is inactive'
  from public.team_ops_overview where status = 'active' and not is_founder and engagement_status = 'inactive';
$$;
grant execute on function public.reminder_candidates() to authenticated;

-- One-time data fix, matched by exact email only: the founder's own row, created during earlier
-- testing before this distinction existed, is flagged and its 5 starter tasks are removed.
update public.team_members set is_founder = true where email = 'syedahafsa772@gmail.com';
delete from public.tasks where team_member_id = (select id from public.team_members where email = 'syedahafsa772@gmail.com');
