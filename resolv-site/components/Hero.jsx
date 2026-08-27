import HeroDemo from './HeroDemo';
import HeroStats from './HeroStats';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-text">
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            AI customer support for Shopify
          </div>
          <h1>
            Stop answering the<br />same <span className="accent">customer questions</span>.
          </h1>
          <p className="hero-sub">
            tResolv answers your customers, checks their orders, and handles common support requests like
            tracking, returns, address changes, and product questions. You approve refunds and cancellations
            before they happen.
          </p>
          <div className="hero-actions">
            <a href="https://app.tresolv.online" target="_blank" rel="noopener" className="btn btn-primary" style={{ fontSize: 15, padding: '13px 26px' }}>
              Try tResolv free →
            </a>
            <a href="https://calendar.app.google/YkSqLTsYr18bUP2Z6" target="_blank" rel="noopener" className="btn btn-ghost-light" style={{ fontSize: 15, padding: '13px 26px' }}>
              Watch it handle a real ticket →
            </a>
          </div>
          <div className="hero-trust" style={{ display: 'flex', gap: 24, flexWrap: 'wrap', marginTop: 24 }}>
            <span className="hero-assurance">No credit card · Setup help included · You stay in control</span>
          </div>
        </div>

        <HeroDemo />
      </div>

      <HeroStats />
    </section>
  );
}
