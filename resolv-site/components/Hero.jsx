import HeroDemo from './HeroDemo';
import HeroStats from './HeroStats';

export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero-top">
        <div className="eyebrow">
          <span className="eyebrow-dot" />
          AI customer support employee for Shopify brands
        </div>
        <h1 className="hero-display">
          Stop repeating answers.<br />
          Start <em className="serif-accent">resolving</em> tickets.
        </h1>
      </div>

      <div className="wrap hero-split">
        <div className="hero-copy">
          <p className="hero-sub">
            tResolv is an AI customer support employee that understands customer requests, checks your
            Shopify data, and handles routine support for you.
          </p>
          <div className="hero-actions">
            <a href="https://app.tresolv.online" target="_blank" rel="noopener" className="btn btn-primary" style={{ fontSize: 15, padding: '13px 26px' }}>
              Try tResolv free →
            </a>
            <a href="#product-demo" className="hero-watch-link">
              See it resolve a ticket
              <span className="hero-watch-icon">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
              </span>
            </a>
          </div>
          <div className="hero-trust" style={{ display: 'flex', gap: 24, flexWrap: 'wrap', marginTop: 24 }}>
            <span className="hero-assurance">14 days free · No credit card · Shopify + Gmail · You stay in control</span>
          </div>
          <div className="hero-feat-row">
            <div className="hero-feat">
              <span className="hero-feat-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" /></svg>
              </span>
              <span>
                <span className="hero-feat-title">Instant AI replies</span>
                <span className="hero-feat-sub">24/7</span>
              </span>
            </div>
            <div className="hero-feat">
              <span className="hero-feat-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>
              </span>
              <span>
                <span className="hero-feat-title">Auto order lookup</span>
                <span className="hero-feat-sub">No extra steps</span>
              </span>
            </div>
            <div className="hero-feat">
              <span className="hero-feat-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21a8 8 0 0 0-16 0" /><circle cx="12" cy="7" r="4" /></svg>
              </span>
              <span>
                <span className="hero-feat-title">Human approval</span>
                <span className="hero-feat-sub">You stay in control</span>
              </span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <HeroDemo />
        </div>
      </div>

      <HeroStats />
    </section>
  );
}
