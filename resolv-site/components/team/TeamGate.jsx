'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { getTeamClient, teamConfigured } from '@/lib/careers/teamClient';

const TeamCtx = createContext(null);
export const useTeam = () => useContext(TeamCtx);

const NAV = [
  ['/team', 'home'],
  ['/team/onboarding', 'onboarding'],
  ['/team/tasks', 'tasks'],
  ['/team/documents', 'documents'],
  ['/team/updates', 'updates'],
];

// Only a signed-in Supabase user who has an ACTIVE team_members row (found through RLS by their
// auth user id) gets in. Someone who was once a member but was deactivated sees a distinct message
// from someone who was never a member at all - both are "no access", but not the same story.
export default function TeamGate({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const [phase, setPhase] = useState('loading'); // loading | ready | denied | deactivated | error
  const [member, setMember] = useState(null);

  useEffect(() => {
    if (!teamConfigured) { setPhase('error'); return undefined; }
    const sb = getTeamClient();
    let alive = true;

    const check = async (session) => {
      if (!session) { router.replace('/team/login'); return; }
      const { data, error } = await sb.from('team_members').select('id,name,email,role,status,is_founder')
        .eq('auth_user_id', session.user.id).maybeSingle();
      if (!alive) return;
      if (error) { setPhase('error'); return; }
      if (!data) { setPhase('denied'); return; }
      if (data.status !== 'active') { setPhase('deactivated'); return; }
      setMember(data); setPhase('ready');
      try {
        if (!sessionStorage.getItem('tm_login_stamped')) {
          sessionStorage.setItem('tm_login_stamped', '1');
          sb.from('team_members').update({ last_login_at: new Date().toISOString() }).eq('id', data.id).then(() => {});
        }
      } catch { /* optional */ }
    };

    sb.auth.getSession().then(({ data }) => check(data.session));
    const { data: sub } = sb.auth.onAuthStateChange((event) => { if (event === 'SIGNED_OUT') router.replace('/team/login'); });
    return () => { alive = false; sub.subscription.unsubscribe(); };
  }, [router]);

  const signOut = async () => { await getTeamClient().auth.signOut(); router.replace('/team/login'); };

  return (
    <div className="tm">
      <header className="tm-head">
        <Link href="/team" className="cr-logo" aria-label="tResolv team">
          <span className="cr-wordmark"><span className="cr-logo-t">t</span>Resolv</span>
          <span className="cr-head-pill">team</span>
        </Link>
        {phase === 'ready' && <button type="button" className="cr-btn cr-btn-ghost cr-btn-sm" onClick={signOut}>sign out</button>}
      </header>

      {phase === 'ready' && (
        <nav className="tm-nav" aria-label="team portal">
          {NAV.map(([href, label]) => (
            <Link key={href} href={href} className={pathname === href ? 'is-on' : ''}>{label}</Link>
          ))}
        </nav>
      )}

      {phase === 'loading' && <p className="cr-ad-state">loading…</p>}
      {phase === 'error' && <p className="cr-ad-state cr-err">couldn’t load the portal. refresh and try again.</p>}
      {phase === 'denied' && (
        <div className="cr-ad-state">
          <h1>no access</h1>
          <p>this account isn’t on the team portal.</p>
          <button type="button" className="cr-btn cr-btn-ghost cr-btn-sm" onClick={signOut}>sign out</button>
        </div>
      )}
      {phase === 'deactivated' && (
        <div className="cr-ad-state">
          <h1>your team access is currently inactive</h1>
          <p>contact the founder if you believe this is incorrect.</p>
          <button type="button" className="cr-btn cr-btn-ghost cr-btn-sm" onClick={signOut}>sign out</button>
        </div>
      )}
      {phase === 'ready' && <TeamCtx.Provider value={{ sb: getTeamClient(), member }}><main className="tm-body">{children}</main></TeamCtx.Provider>}
    </div>
  );
}
