-- Team accountability: activation dates, dynamic task deadlines, engagement flagging,
-- and reminder infrastructure (sending stays disabled). Careers project ONLY.
-- Does not touch applications, application status, welcome-email behavior, or send any email.

-- 1) activation date + deactivation audit trail on team_members.
--    activated_at is never auto-derived from application/welcome-email dates (admin sets it by hand).
alter table public.team_members add column activated_at timestamptz;
alter table public.team_members add column deactivated_at timestamptz;
alter table public.team_members add column deactivation_reason text check (deactivation_reason is null or char_length(deactivation_reason) <= 500);

-- 2) explicit day offsets on task templates (task 1 = activation day ... task 5 = +4 days).
--    Stored in the table, not hardcoded in application code, so re-ordering/adding templates stays correct.
alter table public.task_templates add column day_offset int;
update public.task_templates set day_offset = position - 1;
alter table public.task_templates alter column day_offset set default 0;
alter table public.task_templates alter column day_offset set not null;
alter table public.task_templates add constraint task_templates_day_offset_check check (day_offset between 0 and 30);

-- 3) starter tasks now get a due_date computed from the member's activated_at (null until it is set).
create or replace function public.assign_starter_tasks() returns trigger language plpgsql set search_path = '' as $$
begin
  insert into public.tasks (team_member_id, template_id, position, title, description, priority, resource_url, due_date)
  select new.id, t.id, t.position, t.title, t.description, t.priority, t.resource_url,
         case when new.activated_at is null then null else (new.activated_at::date + t.day_offset) end
  from public.task_templates t where t.active
  on conflict do nothing;
  return new;
end $$;

-- 4) when an admin sets/changes activated_at, recompute due dates on that member's starter tasks.
create function public.recompute_task_deadlines() returns trigger language plpgsql set search_path = '' as $$
begin
  if new.activated_at is distinct from old.activated_at then
    update public.tasks t
    set due_date = case when new.activated_at is null then null else (new.activated_at::date + tt.day_offset) end
    from public.task_templates tt
    where t.team_member_id = new.id and t.template_id = tt.id;
  end if;
  return new;
end $$;
create trigger team_members_recompute_deadlines after update on public.team_members
  for each row execute function public.recompute_task_deadlines();

-- 5) guard: a team member may only ever change their own last_login_at (existing behavior).
--    Everything else on team_members - activated_at, status, deactivation_reason, role, email, name -
--    can only be changed by an admin. This is enforced here (a trigger), not just by RLS/grants,
--    because Postgres RLS has no native column-level granularity: an UPDATE that an existing row policy
--    allows would otherwise be free to touch any granted column regardless of which one actually changed.
--    Deactivating (status -> 'inactive') and reactivating (-> 'active') stamps deactivated_at automatically.
create function public.team_members_guard() returns trigger language plpgsql set search_path = '' as $$
begin
  if (select auth.uid()) is not null and not public.is_admin() then
    if (new.application_id, new.auth_user_id, new.email, new.name, new.role, new.status,
        new.activated_at, new.deactivated_at, new.deactivation_reason, new.created_at)
       is distinct from
       (old.application_id, old.auth_user_id, old.email, old.name, old.role, old.status,
        old.activated_at, old.deactivated_at, old.deactivation_reason, old.created_at) then
      raise exception 'team members can only update their own last_login_at' using errcode = '42501';
    end if;
  end if;
  if new.status is distinct from old.status then
    new.deactivated_at := case when new.status = 'inactive' then now() else null end;
  end if;
  return new;
end $$;
create trigger team_members_guard before update on public.team_members
  for each row execute function public.team_members_guard();

grant update (activated_at, status, deactivation_reason) on public.team_members to authenticated;
create policy "admins manage team members" on public.team_members for update to authenticated
  using (public.is_admin()) with check (public.is_admin());

-- 6) engagement classification - COMPUTED ON READ, never persisted/mutated by a background job
--    (there is no cron in this stack; a stored value could go stale or require one).
--    'deactivated' is a direct read of team_members.status='inactive' (an admin's manual decision).
--    Otherwise, with activated_at set:
--      inactive  if 2+ overdue tasks, OR 7+ days since activation with zero completed tasks/onboarding
--                ticks ever, OR 7+ days since the last meaningful activity that did happen
--      at_risk   if 1+ overdue task, OR 3+ days since activation with zero meaningful activity yet
--      active    otherwise
--    activated_at IS NULL -> 'unknown': nothing is computable yet; the founder needs to set one.
--    "Meaningful activity" = a completed task or a ticked onboarding item - never a page visit.
--    SECURITY INVOKER + RLS on tasks/onboarding_progress/team_members means a non-admin calling this
--    for someone else's id gets an empty result, never another member's data.
create function public.team_member_engagement(p_member_id uuid)
returns table (
  engagement_status text, overdue_tasks int, completed_tasks int, total_tasks int,
  onboarding_done int, onboarding_total int, days_since_activation numeric,
  last_meaningful_activity_at timestamptz
)
language sql stable security invoker set search_path = '' as $$
  with m as (select id, status, activated_at from public.team_members where id = p_member_id),
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
grant execute on function public.team_member_engagement(uuid) to authenticated;

-- 7) one view for both the member's own summary and the admin's team-wide list.
--    security_invoker=true is required: without it a view runs as its OWNER (bypassing RLS for
--    every caller), which would leak every member's data to every other signed-in member.
create view public.team_ops_overview with (security_invoker = true) as
select
  tm.id as team_member_id, tm.name, tm.email, tm.role, tm.status, tm.activated_at,
  tm.deactivated_at, tm.deactivation_reason, tm.created_at, tm.welcome_email_sent_at, tm.last_login_at,
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

-- 8) reminder infrastructure: read-only, admin-visible "who would get a nudge and why".
--    Nothing calls this automatically. No cron exists. No email is sent from here or anywhere in
--    this migration. This exists only so the founder (or a future scheduled job) can see the exact
--    trigger conditions before sending is ever turned on.
create function public.reminder_candidates()
returns table (team_member_id uuid, name text, email text, reminder_type text, reason text)
language sql stable security invoker set search_path = '' as $$
  select team_member_id, name, email, 'activation_48h',
         'activated ' || round(extract(epoch from (now() - activated_at)) / 3600) || 'h ago, 0 completed tasks'
  from public.team_ops_overview
  where status = 'active' and activated_at is not null
    and now() - activated_at >= interval '48 hours' and now() - activated_at < interval '96 hours'
    and tasks_done = 0
  union all
  select team_member_id, name, email, 'overdue', tasks_overdue || ' task(s) overdue'
  from public.team_ops_overview where status = 'active' and tasks_overdue > 0
  union all
  select team_member_id, name, email, 'inactivity_7d', 'engagement status is inactive'
  from public.team_ops_overview where status = 'active' and engagement_status = 'inactive';
$$;
grant execute on function public.reminder_candidates() to authenticated;

-- 9) new onboarding module: accountability expectations. Appended after the existing 13 (not editing
--    their content). This is new copy I'm adding per the founder's instructions, NOT from the original
--    onboarding document, and references (never restates) the verified commission document.
insert into public.onboarding_modules (slug, title, description, content, position, required, published) values
($t$being-on-the-team$t$, $t$Being on the team$t$, $t$commission, deadlines, and what "active" means$t$,
$c$## Being on the team

This is a commission-based role. There is no guaranteed payment just for being part of the team.

You earn commission when a real customer you brought actually pays tResolv, exactly as described in the commission document. Nothing here changes those terms.

Being on the team means actively doing the work: researching brands, reaching out, and moving prospects forward. It is not a title you hold, it is work you do.

## Deadlines matter

Your tasks have dates attached. They exist to build momentum in your first week, not to create busywork. If you're falling behind, the portal will tell you, plainly, on your home page.

## If work stops happening

Consistently inactive team members may be removed from the active team. This isn't about hours logged, it's about real progress: leads found, conversations started, outreach sent. If you're stuck or need more time, say so, that's completely different from going quiet.

See [Commission and compensation](/team/documents#commission) for the exact terms.
$c$, 14, true, true)
on conflict (slug) do update set title = excluded.title, description = excluded.description, content = excluded.content, position = excluded.position, published = true;
