-- Careers team portal (applicant -> team member). Careers Supabase project ONLY. (Already applied.)
-- Privileged writes (creating auth users, team_members rows, sending email) happen in the
-- existing tResolv backend with the service key. Browsers only ever use RLS-protected access.

-- helpers (SECURITY INVOKER: they run under the caller's own RLS, so they can't be abused)
create function public.is_admin() returns boolean language sql stable set search_path = '' as $$
  select exists (select 1 from public.admin_users a where a.user_id = (select auth.uid()))
$$;
create function public.my_team_member_id() returns uuid language sql stable set search_path = '' as $$
  select t.id from public.team_members t where t.auth_user_id = (select auth.uid()) and t.status = 'active'
$$;
create function public.is_team_member() returns boolean language sql stable set search_path = '' as $$
  select public.my_team_member_id() is not null
$$;

alter table public.applications add column selected_at timestamptz;
create function public.applications_set_selected_at() returns trigger language plpgsql set search_path = '' as $$
begin
  if new.status = 'selected' and old.status is distinct from 'selected' and new.selected_at is null then
    new.selected_at := now();
  end if;
  return new;
end $$;
create trigger applications_selected_at before update on public.applications
  for each row execute function public.applications_set_selected_at();

-- team members: one per selected application, linked to a real Supabase Auth user id
create table public.team_members (
  id uuid primary key default gen_random_uuid(),
  application_id uuid not null unique references public.applications (id),
  auth_user_id uuid unique references auth.users (id) on delete set null,
  email text not null check (email = lower(email)),
  name text not null,
  role text not null,
  status text not null default 'active' check (status in ('active', 'inactive')),
  welcome_email_claimed_at timestamptz,
  welcome_email_sent_at timestamptz,
  last_login_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create trigger team_members_set_updated_at before update on public.team_members
  for each row execute function public.set_updated_at();

create table public.tasks (
  id uuid primary key default gen_random_uuid(),
  team_member_id uuid not null references public.team_members (id) on delete cascade,
  title text not null check (char_length(title) between 1 and 200),
  description text not null default '' check (char_length(description) <= 4000),
  status text not null default 'todo' check (status in ('todo', 'in_progress', 'done')),
  priority text not null default 'normal' check (priority in ('low', 'normal', 'high')),
  due_date date,
  resource_url text check (resource_url is null or resource_url ~* '^https?://'),
  created_at timestamptz not null default now(),
  completed_at timestamptz,
  updated_at timestamptz not null default now()
);
create index tasks_team_member_idx on public.tasks (team_member_id);
-- Team members may change ONLY the status of their own tasks (admins may edit anything).
create function public.tasks_guard() returns trigger language plpgsql set search_path = '' as $$
begin
  if (select auth.uid()) is not null and not public.is_admin() then
    if (new.team_member_id, new.title, new.description, new.priority, new.due_date, new.resource_url, new.created_at)
       is distinct from
       (old.team_member_id, old.title, old.description, old.priority, old.due_date, old.resource_url, old.created_at) then
      raise exception 'team members can only change task status' using errcode = '42501';
    end if;
  end if;
  new.completed_at := case when new.status = 'done' then coalesce(old.completed_at, now()) else null end;
  new.updated_at := now();
  return new;
end $$;
create trigger tasks_guard before update on public.tasks for each row execute function public.tasks_guard();

create table public.onboarding_modules (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  description text not null default '',
  content text not null default '',
  position int not null default 0,
  required boolean not null default true,
  published boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create trigger onboarding_modules_updated before update on public.onboarding_modules
  for each row execute function public.set_updated_at();

create table public.onboarding_progress (
  team_member_id uuid not null references public.team_members (id) on delete cascade,
  module_id uuid not null references public.onboarding_modules (id) on delete cascade,
  completed_at timestamptz not null default now(),
  primary key (team_member_id, module_id)
);
create index onboarding_progress_module_idx on public.onboarding_progress (module_id);

create table public.team_documents (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  kind text not null default 'other',
  summary text not null default '',
  content text not null default '',
  position int not null default 0,
  published boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create trigger team_documents_updated before update on public.team_documents
  for each row execute function public.set_updated_at();

create table public.announcements (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  message text not null default '',
  resource_url text check (resource_url is null or resource_url ~* '^https?://'),
  published boolean not null default true,
  created_at timestamptz not null default now()
);

-- RLS everywhere
alter table public.team_members enable row level security;
alter table public.tasks enable row level security;
alter table public.onboarding_modules enable row level security;
alter table public.onboarding_progress enable row level security;
alter table public.team_documents enable row level security;
alter table public.announcements enable row level security;

revoke all on public.team_members, public.tasks, public.onboarding_modules, public.onboarding_progress,
  public.team_documents, public.announcements from anon, authenticated;
revoke execute on function public.is_admin(), public.my_team_member_id(), public.is_team_member() from public, anon;
grant execute on function public.is_admin(), public.my_team_member_id(), public.is_team_member() to authenticated;

grant select on public.team_members to authenticated;
grant update (last_login_at) on public.team_members to authenticated;
grant select, insert, update, delete on public.tasks, public.onboarding_modules, public.team_documents, public.announcements to authenticated;
grant select, insert, delete on public.onboarding_progress to authenticated;

-- team_members: a person sees only their own row; admins see all. Members may only stamp last_login_at.
create policy "read own team member row" on public.team_members for select to authenticated
  using (auth_user_id = (select auth.uid()));
create policy "admins read team members" on public.team_members for select to authenticated
  using (public.is_admin());
create policy "stamp own last login" on public.team_members for update to authenticated
  using (auth_user_id = (select auth.uid()) and status = 'active')
  with check (auth_user_id = (select auth.uid()));

-- tasks
create policy "read own tasks" on public.tasks for select to authenticated
  using (team_member_id = public.my_team_member_id());
create policy "update own tasks" on public.tasks for update to authenticated
  using (team_member_id = public.my_team_member_id()) with check (team_member_id = public.my_team_member_id());
create policy "admins manage tasks" on public.tasks for all to authenticated
  using (public.is_admin()) with check (public.is_admin());

-- content tables: active team members read published rows; only admins write
create policy "members read published modules" on public.onboarding_modules for select to authenticated
  using (published and public.is_team_member());
create policy "admins manage modules" on public.onboarding_modules for all to authenticated
  using (public.is_admin()) with check (public.is_admin());
create policy "members read published documents" on public.team_documents for select to authenticated
  using (published and public.is_team_member());
create policy "admins manage documents" on public.team_documents for all to authenticated
  using (public.is_admin()) with check (public.is_admin());
create policy "members read published announcements" on public.announcements for select to authenticated
  using (published and public.is_team_member());
create policy "admins manage announcements" on public.announcements for all to authenticated
  using (public.is_admin()) with check (public.is_admin());

-- onboarding progress: own rows only
create policy "read own progress" on public.onboarding_progress for select to authenticated
  using (team_member_id = public.my_team_member_id());
create policy "mark own progress" on public.onboarding_progress for insert to authenticated
  with check (team_member_id = public.my_team_member_id()
    and exists (select 1 from public.onboarding_modules m where m.id = module_id and m.published));
create policy "unmark own progress" on public.onboarding_progress for delete to authenticated
  using (team_member_id = public.my_team_member_id());
create policy "admins read progress" on public.onboarding_progress for select to authenticated
  using (public.is_admin());

-- starter content (drafts only: nothing invented about pay or terms)
insert into public.onboarding_modules (slug, title, description, content, position) values
('about-tresolv', 'about tResolv', 'what we are building', E'tResolv is an AI support employee for Shopify brands.\n\nIt reads a brand''s support inbox, checks order details in Shopify, drafts replies, and handles routine tickets. Anything involving money (refunds, cancellations) always waits for the brand''s approval.', 1),
('how-it-works', 'how tResolv works', 'the product in plain words', E'1. a brand connects its Gmail and Shopify.\n2. tResolv classifies each email, matches it to live order data and drafts a reply with a confidence score.\n3. routine replies can go out automatically; financial actions always need the brand''s tap.', 2),
('what-the-team-does', 'what the team does', 'who does what', E'draft: the founder will add how the team works here.', 3),
('role-expectations', 'your role: lead acquisition', 'what you are here to do', E'you will help tResolv find the right customers: find and research shopify brands, start real conversations, try different ways to find customers, and learn from what worked.\n\ndraft: the founder will add more detail here.', 4),
('communication', 'communication rules', 'how we talk', E'draft: the founder will add the communication rules here.', 5),
('outreach', 'outreach guidelines', 'real conversations, not spam', E'the goal is real conversations with brands that could actually use tResolv, not mass messaging.\n\ndraft: the founder will add the detailed guidelines here.', 6),
('lead-qualification', 'lead qualification', 'who is worth reaching out to', E'a good lead is a shopify brand that could actually use tResolv.\n\ndraft: the founder will add the exact criteria here.', 7),
('first-week', 'first-week checklist', 'your first few days', E'work through the onboarding items above and tick each one off. check the tasks tab for what to do next. ask questions early.', 8);

insert into public.team_documents (slug, title, kind, summary, content, position) values
('onboarding-guide', 'onboarding guide', 'onboarding_guide', 'start here', E'welcome. the onboarding tab walks you through everything, in order. tick items off as you go.', 1),
('commission', 'commission and compensation', 'compensation', 'how the money works', E'this role is currently commission-based.\n\nthe exact details have not been added yet. the founder will publish them here before you start:\n\n- compensation model: (to be added)\n- commission rules: (to be added)\n- when commission is earned: (to be added)\n- payment timing: (to be added)\n- examples: (to be added)\n- important notes: (to be added)', 2),
('role-expectations', 'role expectations', 'role_expectations', 'what lead acquisition means here', E'draft: the founder will add the role expectations here.', 3),
('outreach-sop', 'outreach sop', 'outreach_sop', 'how we reach out', E'draft: the founder will add the outreach process here.', 4),
('communication-guidelines', 'communication guidelines', 'communication', 'how we communicate', E'draft: the founder will add the communication guidelines here.', 5);
