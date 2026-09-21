'use client';

import { useState } from 'react';
import Link from 'next/link';
import { getTeamClient, teamConfigured } from '@/lib/careers/teamClient';

export default function TeamLogin() {
  const [email, setEmail] = useState('');
  const [state, setState] = useState('idle'); // idle | sending | sent | limited | error
  const submit = async (e) => {
    e.preventDefault();
    if (!teamConfigured) { setState('error'); return; }
    setState('sending');
    const { error } = await getTeamClient().auth.signInWithOtp({
      email: email.trim().toLowerCase(),
      options: { shouldCreateUser: false, emailRedirectTo: `${window.location.origin}/team` },
    });
    // Same message whether or not the address is on the team (no account enumeration).
    setState(error && error.status === 429 ? 'limited' : 'sent');
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
            {state === 'error' && <div className="cr-banner" role="alert">sign-in isn’t available right now.</div>}
            <button type="submit" className="cr-btn cr-btn-primary" disabled={state === 'sending'} style={{ marginTop: 22, width: '100%' }}>
              {state === 'sending' ? 'sending…' : 'email me a link'}
            </button>
          </>
        )}
      </form>
    </div>
  );
}
