import HeroDemo from './HeroDemo';
import HeroStats from './HeroStats';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-text">
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            AI support for Shopify brands
          </div>
          <h1>
            Your AI<br />support<br /><span className="accent">employee</span>
          </h1>
          <p className="hero-sub">
            tResolv reads your inbox, handles live chat on your storefront, and resolves routine
            customer support tickets without you lifting a finger. Every refund and cancellation requires your
            one-tap approval.
          </p>
          <div className="hero-actions">
            <a href="https://app.tresolv.online" target="_blank" rel="noopener" className="btn btn-primary" style={{ fontSize: 15, padding: '13px 26px' }}>
              Claim your free spot →
            </a>
            <a href="https://calendar.app.google/YkSqLTsYr18bUP2Z6" target="_blank" rel="noopener" className="btn btn-ghost-dark" style={{ fontSize: 15, padding: '13px 26px' }}>
              Book a demo →
            </a>
          </div>
          <div className="hero-trust" style={{ display: 'flex', gap: 24, flexWrap: 'wrap', marginTop: 24 }}>
            <span className="hero-assurance">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              Your emails never leave Google.
            </span>
            <span className="hero-assurance">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
              Built to reduce support cost and complexity.
            </span>
          </div>
        </div>

        <HeroDemo />
      </div>

      <HeroStats />
    </section>
  );
}
