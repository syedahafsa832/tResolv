-- tResolv careers: applications table for the SEPARATE careers Supabase project.
--
-- !! Run this ONLY in the careers project (SQL Editor -> paste -> run).
-- !! Never run it in the tResolv product Supabase project.
--
-- Security model
--   * RLS is on. anon/authenticated can ONLY insert; there is no SELECT/UPDATE/DELETE
--     policy and no table grant for them, so applications can't be read from the browser.
--   * Column-level INSERT grant: applicants can't set id/status/role/timestamps.
--   * You manage applications from the Supabase dashboard (Table Editor / SQL Editor),
--     which runs as the postgres role and bypasses RLS. Server-side automation uses the
--     service_role key, which must NEVER be shipped in client code.
--
-- Future selection automation (not built yet): a Database Webhook on UPDATE of
-- public.applications, filtered to new.status = 'selected' and old.status <> 'selected',
-- calls the existing tResolv backend; the backend stamps selection_email_sent_at once
-- the email is sent so it is never sent twice.

create type public.application_status as enum
  ('new', 'reviewing', 'shortlisted', 'interview', 'selected', 'rejected');

create table public.applications (
  id            uuid primary key default gen_random_uuid(),
  status        public.application_status not null default 'new',
  role          text not null default 'lead-acquisition',

  -- about you
  full_name     text not null check (char_length(btrim(full_name)) between 2 and 200),
  email         text not null check (char_length(email) <= 320
                                     and email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'),
  linkedin_url  text not null check (char_length(linkedin_url) between 10 and 500
                                     and linkedin_url ~* '^https?://'),
  location      text not null check (char_length(btrim(location)) between 2 and 200),

  -- how you think
  proud_of              text not null check (char_length(btrim(proud_of)) between 1 and 4000),
  why_pick_you          text not null check (char_length(btrim(why_pick_you)) between 1 and 4000),
  shopify_brand_approach text not null check (char_length(btrim(shopify_brand_approach)) between 1 and 4000),
  brand_name            text not null check (char_length(btrim(brand_name)) between 1 and 300),
  brand_reason          text not null check (char_length(btrim(brand_reason)) between 1 and 4000),
  first_message         text not null check (char_length(btrim(first_message)) between 1 and 4000),
  no_reply_plan         text not null check (char_length(btrim(no_reply_plan)) between 1 and 4000),
  one_week_plan         text not null check (char_length(btrim(one_week_plan)) between 1 and 4000),
  unusually_good_at     text not null check (char_length(btrim(unusually_good_at)) between 1 and 4000),
  improving_at          text not null check (char_length(btrim(improving_at)) between 1 and 4000),

  -- logistics
  weekly_hours  text not null check (char_length(btrim(weekly_hours)) between 1 and 200),
  start_when    text not null check (char_length(btrim(start_when)) between 1 and 200),

  -- future selection automation (nullable, set by the backend, never by applicants)
  selection_email_sent_at timestamptz,

  created_at    timestamptz not null default now(),
  updated_at    timestamptz not null default now()
);

-- One application per person per role (case-insensitive email).
create unique index applications_role_email_key
  on public.applications (role, lower(email));

create index applications_status_created_idx
  on public.applications (status, created_at desc);

create function public.set_updated_at() returns trigger
language plpgsql
set search_path = ''
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger applications_set_updated_at
  before update on public.applications
  for each row execute function public.set_updated_at();

alter table public.applications enable row level security;

-- Start from zero access, then grant only what applicants need.
revoke all on public.applications from anon, authenticated;

grant insert (
  full_name, email, linkedin_url, location,
  proud_of, why_pick_you, shopify_brand_approach, brand_name, brand_reason,
  first_message, no_reply_plan, one_week_plan, unusually_good_at, improving_at,
  weekly_hours, start_when
) on public.applications to anon;

-- Insert-only. Applicants can never read, update or delete anything.
create policy "anyone can submit an application"
  on public.applications
  for insert
  to anon
  with check (true);
