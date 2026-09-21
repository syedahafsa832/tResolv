'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { getTeamClient, teamConfigured } from '@/lib/careers/teamClient';

// Landing page for the welcome-email link. The one-time token is only used when the person
// clicks the button, so email link scanners can't burn it. The type is fixed in code, not read from the URL.
export default function TeamAuth() {
  const router = useRouter();
  const [token, setToken] = useState(null);
  const [state, setState] = useState('idle'); // idle | working | failed
  useEffect(() => { setToken(new URLSearchParams(window.location.search).get('token_hash') || ''); }, []);

  const enter = async () => {
    if (!teamConfigured) { setState('failed'); return; }
    setState('working');
    const { error } = await getTeamClient().auth.verifyOtp({ token_hash: token, type: 'magiclink' });
    if (error) { setState('failed'); return; }
    router.replace('/team');
  };

  return (
    <div className="tm">
      <header className="tm-head">
        <Link href="/careers" className="cr-logo"><span className="cr-wordmark"><span className="cr-logo-t">t</span>Resolv</span><span className="cr-head-pill">team</span></Link>
      </header>
      <div className="cr-ad-login">
        <h1>you’re in 👀</h1>
        {token === null && <p>one sec…</p>}
        {token === '' && (
          <>
            <p>this link isn’t valid.</p>
            <Link href="/team/login" className="cr-btn cr-btn-primary" style={{ width: '100%' }}>get a new sign-in link</Link>
          </>
        )}
        {token && state !== 'failed' && (
          <>
            <p>tap below to enter your private team portal.</p>
            <button type="button" className="cr-btn cr-btn-primary" onClick={enter} disabled={state === 'working'} style={{ width: '100%' }}>
              {state === 'working' ? 'signing you in…' : 'enter your team portal →'}
            </button>
          </>
        )}
        {state === 'failed' && (
          <>
            <div className="cr-banner" role="alert">this link has expired or was already used.</div>
            <Link href="/team/login" className="cr-btn cr-btn-primary" style={{ width: '100%', marginTop: 18 }}>get a new sign-in link</Link>
          </>
        )}
      </div>
    </div>
  );
}
