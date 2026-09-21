'use client';

import { useState } from 'react';
import Link from 'next/link';
const BACKEND = process.env.NEXT_PUBLIC_CAREERS_BACKEND_URL || 'https://backend.tresolv.online';

export default function TeamLogin() {
  const [email, setEmail] = useState('');
  const [state, setState] = useState('idle'); // idle | sending | sent | limited | error
  const submit = async (e) => {
    e.preventDefault();
    setState('sending');
    try {
      // The backend emails a link ONLY to active team members, and answers the same either way.
      const r = await fetch(`${BACKEND}/api/careers/team-login`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email: email.trim().toLowerCase() }),
      });
      const j = await r.json().catch(() => ({}));
      setState(!r.ok ? 'error' : j.status === 'ok' ? 'sent' : j.status === 'not_on_team' ? 'notteam' : 'error');
    } catch { setState('error'); }
  };

  return (
    <div className="tm">
      <header className="tm-head">
        <Link href="/careers" className="cr-logo"><span className="cr-wordmark"><span className="cr-logo-t">t</span>Resolv</span><span className="cr-head-pill">team</span></Link>
      </header>
      <form className="cr-ad-login" onSubmit={submit}>
        <h1>team sign in</h1>
        <p>use the email you applied with. we’ll send you a sign-in link, no password needed.</p>
        {state === 'sent' ? (
          <div className="cr-notice"><b>check your inbox 👀</b><p>if that address is on the team, a sign-in link is on its way.</p></div>
        ) : (
          <>
            <label className="cr-label-q" htmlFor="tm-email">email</label>
            <input id="tm-email" className="cr-input" type="email" autoComplete="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
            {state === 'limited' && <div className="cr-banner" role="alert">too many requests. wait a minute and try again.</div>}
            {state === 'notteam' && (
              <div className="cr-banner" role="alert">
                this email isn’t on the team portal, so no link was sent. only selected applicants get access. use the email you applied with, or <Link href="/careers" style={{ textDecoration: 'underline' }}>see the open role</Link>.
              </div>
            )}
            {state === 'error' && <div className="cr-banner" role="alert">couldn’t send the link right now. try again in a minute.</div>}
            <button type="submit" className="cr-btn cr-btn-primary" disabled={state === 'sending'} style={{ marginTop: 22, width: '100%' }}>
              {state === 'sending' ? 'sending…' : 'email me a link'}
            </button>
          </>
        )}
      </form>
    </div>
  );
}
