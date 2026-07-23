'use client';

import { useEffect, useState } from 'react';

const ResolvMark = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
    <rect x="2.5" y="4" width="35" height="25" rx="8.5" fill="#5B5BD6" />
    <path d="M12 27 L12 37.5 L22 28.5 Z" fill="#5B5BD6" />
    <path d="M12.4 16.4 l5 5 l10.2 -11.6" stroke="#fff" strokeWidth="3.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleAnchor = (e, href) => {
    // Section anchors (#how-it-works etc.) only exist on the homepage. On
    // every other page, let the link navigate normally to /#anchor instead
    // of silently doing nothing.
    if (window.location.pathname !== '/') return;
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-inner">
        <a href="#" className="nav-logo">
          <ResolvMark size={24} />
          Resolv
        </a>
        <div className="nav-links">
          {[
            { href: '/#how-it-works', label: 'How it works' },
            { href: '/#features',     label: 'Features' },
            { href: '/#pricing',      label: 'Pricing' },
            { href: '/#faq',          label: 'FAQ' },
            { href: '/blog',          label: 'Blog' },
          ].map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="nav-link"
              onClick={(e) => href.includes('#') && handleAnchor(e, href.slice(1))}
            >
              {label}
            </a>
          ))}
        </div>
        <div className="nav-cta">
          <a href="#" className="btn btn-ghost-dark" style={{ fontSize: 13, padding: '9px 18px' }}>
            Book a demo →
          </a>
        </div>
      </div>
    </nav>
  );
}
