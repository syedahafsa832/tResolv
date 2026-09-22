import Link from 'next/link';

// Careers-only header and footer: no product navigation, no trial CTA.
export function CareersHeader() {
  return (
    <header className="cr-head">
      <Link href="/careers" className="cr-logo" aria-label="tResolv careers">
        <span className="cr-wordmark"><span className="cr-logo-t">t</span>Resolv</span>
        <span className="cr-head-pill">careers</span>
      </Link>
      <a href="/" className="cr-head-link">back to main site ↗</a>
    </header>
  );
}

export function CareersFooter() {
  return (
    <footer className="cr-foot-bar">
      <span>© 2026 tResolv</span>
      <span style={{ display: 'flex', gap: 20 }}>
        <Link href="/team/login">already on the team? sign in →</Link>
        <a href="/">tresolv.online ↗</a>
      </span>
    </footer>
  );
}
