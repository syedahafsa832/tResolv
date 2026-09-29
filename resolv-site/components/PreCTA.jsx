'use client';

import { useEffect, useState } from 'react';
import { isLoggedIn } from '@/lib/auth';
import Reveal from '@/components/Reveal';

export default function PreCTA() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    setLoggedIn(isLoggedIn());
  }, []);

  return (
    <section className="section pre-cta">
      <div className="wrap">
        <Reveal as="div" className="eyebrow">
          <span className="eyebrow-dot pre-cta-eyebrow-dot" />
          AI customer support for Shopify
        </Reveal>
        <Reveal as="h2" className="pre-cta-title" delay={80}>
          Stop repeating answers.<br />Start{' '}
          <span className="headline-accent">
            resolving
            <svg className="headline-accent-underline" viewBox="0 0 200 9" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M2.5 6.5C50 2.5 150 2.5 197.5 6.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </span>{' '}
          tickets.
        </Reveal>
        <Reveal as="p" delay={140}>Give the repetitive support work to Luna and keep your team focused on the customers who actually need them.</Reveal>
        <Reveal as="div" className="pre-cta-actions" delay={200}>
          <a
            href={loggedIn ? 'https://app.tresolv.online/dashboard' : 'https://app.tresolv.online'}
            target="_blank"
            rel="noopener"
            className="btn btn-primary pre-cta-btn"
          >
            {loggedIn ? 'Dashboard →' : <>Try tResolv free <span className="btn-arrow">→</span></>}
          </a>
          <a href="#scenario-explorer" className="btn btn-ghost-light pre-cta-btn">
            See what tResolv can handle
          </a>
        </Reveal>
        <Reveal as="p" className="hero-assurance" delay={260} style={{ justifyContent: 'center', marginTop: 20 }}>
          14 days free · No credit card required
        </Reveal>
      </div>
    </section>
  );
}
