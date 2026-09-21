'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { getTeamClient, teamConfigured } from '@/lib/careers/teamClient';

// Landing page for the welcome-email link: signs the person in straight away and sends them to /team.
// The sign-in happens in the browser (verifyOtp), so link scanners that only fetch the page can't use up
// the one-time token. The token type is fixed in code, never read from the URL.
export default function TeamAuth() {
  const router = useRouter();
  const started = useRef(false);
  const [state, setState] = useState('working'); // working | failed | invalid

  useEffect(() => {
    if (started.current) return; // one-time token: never try twice
    started.current = true;
    const token = new URLSearchParams(window.location.search).get('token_hash');
    if (!token) { setState('invalid'); return; }
    if (!teamConfigured) { setState('failed'); return; }
    getTeamClient().auth.verifyOtp({ token_hash: token, type: 'magiclink' }).then(({ error }) => {
      if (error) setState('failed'); else router.replace('/team');
    });
  }, [router]);

  return (
    <div className="tm">
      <header className="tm-head">
        <Link href="/careers" className="cr-logo"><span className="cr-wordmark"><span className="cr-logo-t">t</span>Resolv</span><span className="cr-head-pill">team</span></Link>
      </header>
      <div className="cr-ad-login">
        {state === 'working' && (
          <>
            <h1>you’re in 👀</h1>
            <p>signing you in to your team portal…</p>
          </>
        )}
        {state === 'invalid' && (
          <>
            <h1>hmm.</h1>
            <p>this link isn’t valid.</p>
            <Link href="/team/login" className="cr-btn cr-btn-primary" style={{ width: '100%' }}>get a new sign-in link</Link>
          </>
        )}
        {state === 'failed' && (
          <>
            <h1>link expired</h1>
            <div className="cr-banner" role="alert">this link has expired or was already used.</div>
            <Link href="/team/login" className="cr-btn cr-btn-primary" style={{ width: '100%', marginTop: 18 }}>get a new sign-in link</Link>
          </>
        )}
      </div>
    </div>
  );
}
