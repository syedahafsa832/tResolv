-- Per-member "seen" state for announcements, so the portal can show one as a sticky banner
-- until a member acknowledges it, then never again. Mirrors onboarding_progress exactly:
-- same composite-PK shape, same "own rows only" RLS, same insert-once-to-acknowledge flow.

create table public.announcement_acknowledgements (
  team_member_id uuid not null references public.team_members (id) on delete cascade,
  announcement_id uuid not null references public.announcements (id) on delete cascade,
  acknowledged_at timestamptz not null default now(),
  primary key (team_member_id, announcement_id)
);
create index announcement_acknowledgements_announcement_idx on public.announcement_acknowledgements (announcement_id);

alter table public.announcement_acknowledgements enable row level security;
revoke all on public.announcement_acknowledgements from anon, authenticated;
grant select, insert on public.announcement_acknowledgements to authenticated;

create policy "read own acknowledgements" on public.announcement_acknowledgements for select to authenticated
  using (team_member_id = public.my_team_member_id());
create policy "acknowledge own" on public.announcement_acknowledgements for insert to authenticated
  with check (team_member_id = public.my_team_member_id()
    and exists (select 1 from public.announcements a where a.id = announcement_id and a.published));
create policy "admins read acknowledgements" on public.announcement_acknowledgements for select to authenticated
  using (public.is_admin());

-- the kickoff announcement itself, shown as the portal's sticky banner until each member
-- taps "got it" (see components/team/AnnouncementBanner.jsx)
insert into public.announcements (title, message, resource_url, published) values (
  'starting tomorrow 🚀',
  E'we''re officially starting.\n\nthe goal isn''t just to complete tasks. **the goal is to get a real customer.**\n\nlet''s see who becomes the **first person on the team to bring in a paying tResolv customer and earn their commission 👀💰**\n\nremember, you''re joining a growing startup while it''s still being built. you have the chance to actually make an impact here, not just follow instructions.\n\n**research → reach out → learn → improve → get results.**\n\nlet''s see who gets the first one :)',
  'https://www.tresolv.online/team/playbook',
  true
);
