'use client';

import { useEffect, useState } from 'react';
import { isLoggedIn } from '@/lib/auth';

export default function PreCTA() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    setLoggedIn(isLoggedIn());
  }, []);

  return (
    <section className="section pre-cta">
      <div className="wrap">
        <h2>Stop repeating answers.<br />Start <em className="serif-accent">resolving</em> tickets.</h2>
        <p>Give the repetitive support work to Luna and keep your team focused on the customers who actually need them.</p>
        <div style={{ display: 'flex', gap: 18, flexWrap: 'wrap', justifyContent: 'center' }}>
          <a
            href={loggedIn ? 'https://app.tresolv.online/dashboard' : 'https://app.tresolv.online'}
            target="_blank"
            rel="noopener"
            className="btn btn-primary"
            style={{ fontSize: 16, padding: '14px 32px' }}
          >
            {loggedIn ? 'Dashboard →' : 'Try tResolv free →'}
          </a>
          <a href="#scenario-explorer" className="btn btn-ghost-light" style={{ fontSize: 16, padding: '14px 32px' }}>
            See what tResolv can handle
          </a>
        </div>
        <p className="hero-assurance" style={{ justifyContent: 'center', marginTop: 20 }}>
          14 days free · No credit card required
        </p>
      </div>
    </section>
  );
}
