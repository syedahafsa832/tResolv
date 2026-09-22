-- Refined "being on the team" wording (active participation, not passive membership), plus a
-- server-side sanity bound on activation dates matching the admin UI's own validation. (Already applied.)

insert into public.onboarding_modules (slug, title, description, content, position, required, published) values
($t$being-on-the-team$t$, $t$Being on the team$t$, $t$commission, deadlines, and what "active" means$t$,
$c$## Being on the team

This is a commission-based role. There is no guaranteed payment just for being part of the team.

You earn commission when a real customer you brought actually pays tResolv, exactly as described in the commission document. Nothing here changes those terms.

## Active participation, not passive membership

Being on the team means actively doing the work: researching brands, reaching out, and moving prospects forward. It is not a title you hold or a group you sit in, it is work you do. "Commission-based" does not mean "whenever I feel like it" — it means you're free to choose your own methods, not free to opt out of doing the work.

## Deadlines matter

Your first-week tasks have real dates attached, starting from the day you're activated. They exist to build momentum, not to create busywork. If you're falling behind, the portal will tell you plainly on your home page.

Your research, outreach, follow-through, and results are what count here, not hours logged.

## If work stops happening

Missed deadlines and prolonged inactivity can put your active team status at risk. Consistently inactive team members may be removed from the active team by the founder. This isn't about one missed date, it's about a pattern of no real progress: no leads found, no conversations started, no outreach sent.

If you're stuck or need more time, say so, that's completely different from going quiet.

See [Commission and compensation](/team/documents#commission) for the exact terms.
$c$, 14, true, true)
on conflict (slug) do update set title = excluded.title, description = excluded.description, content = excluded.content, position = excluded.position, published = true;

create or replace function public.team_members_guard() returns trigger language plpgsql set search_path = '' as $$
declare v_applied_at timestamptz;
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
  if new.activated_at is distinct from old.activated_at and new.activated_at is not null then
    if new.activated_at > now() + interval '1 day' then
      raise exception 'activation date cannot be in the future' using errcode = '22007';
    end if;
    select a.created_at into v_applied_at from public.applications a where a.id = new.application_id;
    if v_applied_at is not null and new.activated_at < v_applied_at - interval '1 day' then
      raise exception 'activation date cannot be before the application was submitted' using errcode = '22007';
    end if;
  end if;
  if new.status is distinct from old.status then
    new.deactivated_at := case when new.status = 'inactive' then now() else null end;
  end if;
  return new;
end $$;
