'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getAdminClient, adminConfigured } from '@/lib/careers/adminClient';

// Renders children only for a signed-in user who has a row in admin_users.
// The row lookup is enforced by RLS, so this gate is UX; the data itself is
// protected in the database.
export default function AdminGate({ children }) {
  const [phase, setPhase] = useState('loading'); // loading | signedOut | denied | error | ready | unconfigured
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (!adminConfigured) { setPhase('unconfigured'); return undefined; }
    const sb = getAdminClient();
    let alive = true;

    const check = async (session) => {
      if (!session) { if (alive) setPhase('signedOut'); return; }
      const { data, error } = await sb.from('admin_users').select('user_id').eq('user_id', session.user.id).maybeSingle();
      if (!alive) return;
      if (error) setPhase('error');
      else if (data) { setEmail(session.user.email || ''); setPhase('ready'); }
      else { setEmail(session.user.email || ''); setPhase('denied'); }
    };

    sb.auth.getSession().then(({ data }) => check(data.session));
    const { data: sub } = sb.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN' || event === 'SIGNED_OUT') setTimeout(() => check(session), 0);
    });
    return () => { alive = false; sub.subscription.unsubscribe(); };
  }, []);

  const signOut = () => getAdminClient().auth.signOut();

  return (
    <div className="cr-ad">
      <header className="cr-ad-head">
        <Link href="/careers/admin" className="cr-logo" aria-label="tResolv careers admin">
          <span className="cr-wordmark"><span className="cr-logo-t">t</span>Resolv</span>
          <span className="cr-head-pill">admin</span>
        </Link>
        {(phase === 'ready' || phase === 'denied') && (
          <div className="cr-ad-user">
            <span>{email}</span>
            <button type="button" className="cr-btn cr-btn-ghost cr-btn-sm" onClick={signOut}>sign out</button>
          </div>
        )}
      </header>

      {phase === 'loading' && <p className="cr-ad-state">loading…</p>}
      {phase === 'unconfigured' && <p className="cr-ad-state">the careers database isn’t configured for this deployment.</p>}
      {phase === 'error' && <p className="cr-ad-state cr-err">couldn’t verify your access. refresh and try again.</p>}
      {phase === 'signedOut' && <SignIn />}
      {phase === 'denied' && (
        <div className="cr-ad-state">
          <h1>not authorized</h1>
          <p>this account doesn’t have admin access.</p>
        </div>
      )}
      {phase === 'ready' && children}
    </div>
  );
}

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState('');

  const submit = async (e) => {
    e.preventDefault();
    setBusy(true); setErr('');
    const { error } = await getAdminClient().auth.signInWithPassword({ email: email.trim(), password });
    if (error) { setErr('wrong email or password.'); setBusy(false); }
    // on success the gate's auth listener takes over
  };

  return (
    <form className="cr-ad-login" onSubmit={submit}>
      <h1>admin sign in</h1>
      <p>founder access only.</p>
      <label className="cr-label-q" htmlFor="ad-email">email</label>
      <input id="ad-email" className="cr-input" type="email" autoComplete="username" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <label className="cr-label-q" htmlFor="ad-pw" style={{ marginTop: 18 }}>password</label>
      <input id="ad-pw" className="cr-input" type="password" autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      {err && <div className="cr-banner" role="alert">{err}</div>}
      <button type="submit" className="cr-btn cr-btn-primary" disabled={busy} style={{ marginTop: 22, width: '100%' }}>
        {busy ? 'signing in…' : 'sign in'}
      </button>
    </form>
  );
}
