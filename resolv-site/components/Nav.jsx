'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

const NAV_LINKS = [
  { href: '/#how-it-works', label: 'How it works' },
  { href: '/#features',     label: 'Features' },
  { href: '/#chat-widget',  label: 'Chat Widget' },
  { href: '/#pricing',      label: 'Pricing' },
  { href: '/#faq',          label: 'FAQ' },
  { href: '/blog',          label: 'Blog' },
  { href: 'mailto:hello@tresolv.online', label: 'Contact' },
];

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  // Every page except /blog starts with a dark hero/breadcrumb bar behind
  // the fixed nav, so white nav text reads fine there from the top. Blog
  // pages start on a plain light background, so the nav needs its
  // "scrolled" (dark-text) styling immediately, not just after scrolling.
  const isLightTop = pathname?.startsWith('/blog');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('nav-menu-open', menuOpen);
    return () => document.body.classList.remove('nav-menu-open');
  }, [menuOpen]);

  const handleAnchor = (e, href) => {
    // Section anchors (#how-it-works etc.) only exist on the homepage. On
    // every other page, let the link navigate normally to /#anchor instead
    // of silently doing nothing.
    setMenuOpen(false);
    if (window.location.pathname !== '/') return;
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <nav className={`nav${scrolled || isLightTop ? ' scrolled' : ''}${menuOpen ? ' menu-open' : ''}`}>
      <div className="nav-inner">
        <a href="/" className="nav-logo" onClick={() => setMenuOpen(false)}>
          <span className="logo-t">t</span>Resolv
        </a>
        <button
          type="button"
          className="nav-burger"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
        <div className="nav-links">
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="nav-link"
              onClick={(e) => href.includes('#') && handleAnchor(e, href.slice(1))}
            >
              {label}
            </a>
          ))}
          <a
            href="https://app.tresolv.online"
            target="_blank"
            rel="noopener"
            className="btn btn-primary nav-cta-mobile"
            onClick={() => setMenuOpen(false)}
          >
            Claim your free spot →
          </a>
        </div>
        <div className="nav-cta">
          <a
            href="https://app.tresolv.online"
            target="_blank"
            rel="noopener"
            className="btn btn-primary"
            style={{ fontSize: 13, padding: '9px 18px' }}
          >
            Claim your free spot →
          </a>
        </div>
      </div>
    </nav>
  );
}
