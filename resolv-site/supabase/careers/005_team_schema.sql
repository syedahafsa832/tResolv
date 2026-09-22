-- Team portal content structures (Careers project ONLY). Idempotent-friendly; already applied.
-- Adds: team_resources (e.g. the team WhatsApp link), task_templates + automatic starter-task assignment.
-- Does not touch applications, statuses, team_members rows, auth users, or send any email.

create table public.team_resources (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  description text not null default '',
  url text not null check (url ~* '^https?://'),
  position int not null default 0,
  published boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create trigger team_resources_updated before update on public.team_resources
  for each row execute function public.set_updated_at();

create table public.task_templates (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  position int not null default 0,
  title text not null check (char_length(title) between 1 and 200),
  description text not null default '' check (char_length(description) <= 4000),
  priority text not null default 'normal' check (priority in ('low', 'normal', 'high')),
  resource_url text check (resource_url is null or resource_url ~* '^https?://'),
  active boolean not null default true,
  created_at timestamptz not null default now()
);

alter table public.tasks add column position int not null default 0;
alter table public.tasks add column template_id uuid references public.task_templates (id) on delete set null;
create unique index tasks_member_template_key on public.tasks (team_member_id, template_id) where template_id is not null;
create index tasks_template_idx on public.tasks (template_id);

-- members may still change ONLY status: extend the guard to the new columns
create or replace function public.tasks_guard() returns trigger language plpgsql set search_path = '' as $$
begin
  if (select auth.uid()) is not null and not public.is_admin() then
    if (new.team_member_id, new.title, new.description, new.priority, new.due_date, new.resource_url, new.created_at, new.position, new.template_id)
       is distinct from
       (old.team_member_id, old.title, old.description, old.priority, old.due_date, old.resource_url, old.created_at, old.position, old.template_id) then
      raise exception 'team members can only change task status' using errcode = '42501';
    end if;
  end if;
  new.completed_at := case when new.status = 'done' then coalesce(old.completed_at, now()) else null end;
  new.updated_at := now();
  return new;
end $$;

-- every NEW team member automatically gets the active starter tasks (idempotent via the unique index)
create function public.assign_starter_tasks() returns trigger language plpgsql set search_path = '' as $$
begin
  insert into public.tasks (team_member_id, template_id, position, title, description, priority, resource_url)
  select new.id, t.id, t.position, t.title, t.description, t.priority, t.resource_url
  from public.task_templates t where t.active
  on conflict do nothing;
  return new;
end $$;
revoke execute on function public.assign_starter_tasks() from public, anon, authenticated;
create trigger team_members_starter_tasks after insert on public.team_members
  for each row execute function public.assign_starter_tasks();

alter table public.team_resources enable row level security;
alter table public.task_templates enable row level security;
revoke all on public.team_resources, public.task_templates from anon, authenticated;
grant select, insert, update, delete on public.team_resources, public.task_templates to authenticated;

create policy "members read published resources" on public.team_resources for select to authenticated
  using (published and public.is_team_member());
create policy "admins manage resources" on public.team_resources for all to authenticated
  using (public.is_admin()) with check (public.is_admin());
-- task templates are admin-only (members only ever see their own tasks)
create policy "admins manage task templates" on public.task_templates for all to authenticated
  using (public.is_admin()) with check (public.is_admin());
