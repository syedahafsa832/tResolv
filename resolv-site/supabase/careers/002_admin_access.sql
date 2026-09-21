-- Careers admin access. Run ONLY in the careers Supabase project (already applied).
--
-- To make yourself an admin: create your user in Supabase Dashboard > Authentication > Users,
-- then run (with your real user id):
--   insert into public.admin_users (user_id) values ('<your-auth-user-id>');
-- Also turn OFF "Allow new users to sign up" (Authentication > Sign In / Providers) so nobody else can register.

create table public.admin_users (
  user_id uuid primary key references auth.users (id) on delete cascade,
  created_at timestamptz not null default now()
);
alter table public.admin_users enable row level security;
revoke all on public.admin_users from anon, authenticated;
grant select on public.admin_users to authenticated;

-- A signed-in user can only ever see their own row (the dashboard uses it to check admin status).
create policy "users can read their own admin row"
  on public.admin_users for select to authenticated
  using (user_id = (select auth.uid()));

-- Admins can read applications and change ONLY the status column. Nobody can delete.
grant select on public.applications to authenticated;
grant update (status) on public.applications to authenticated;

create policy "admins can read applications"
  on public.applications for select to authenticated
  using (exists (select 1 from public.admin_users a where a.user_id = (select auth.uid())));

create policy "admins can update application status"
  on public.applications for update to authenticated
  using (exists (select 1 from public.admin_users a where a.user_id = (select auth.uid())))
  with check (exists (select 1 from public.admin_users a where a.user_id = (select auth.uid())));
