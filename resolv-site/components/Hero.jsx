import Reveal from '@/components/Reveal';

export default function Hero() {
  return (
    <section className="home-hero">
      <div className="home-hero-scene" aria-hidden="true">
        <div className="home-hero-scene-drift" />
      </div>

      <div className="wrap home-hero-content">
        {/* Eyebrow, H1, and subtitle render immediately (no Reveal/opacity-gating):
            this is the primary above-the-fold content and, per production HTML,
            the LCP candidate. Gating it behind IntersectionObserver + hydration
            was adding the ~2.3s "element render delay" Lighthouse reported, since
            .reveal starts at opacity:0 in the server-rendered HTML itself, before
            any JS runs. Buttons and the trust line below stay animated: they're
            secondary and don't affect LCP. */}
        <div className="eyebrow home-hero-eyebrow">
          <span className="eyebrow-dot" />
          AI customer support employee for Shopify brands
        </div>
        <h1 className="home-hero-headline">
          <span className="reveal-inline">Your Shopify store</span>{' '}
          <span className="reveal-inline headline-accent">
            shouldn&apos;t need you
            <svg className="headline-accent-underline" viewBox="0 0 200 9" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M2.5 6.5C50 2.5 150 2.5 197.5 6.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </span>{' '}
          <span className="reveal-inline">for every customer question.</span>
        </h1>
        <p className="home-hero-sub">
          Luna handles customer support, checks live order data, and resolves routine tickets for
          you. You step in only when it matters.
        </p>
        {/* Was Reveal-gated too; Lighthouse then flagged this CTA itself as the
            LCP element with a ~730ms render delay (the delay+transition time).
            Renders immediately now, same as the headline above. */}
        <div className="home-hero-actions">
          <a href="https://app.tresolv.online" target="_blank" rel="noopener" className="btn btn-primary">
            Try tResolv free <span className="btn-arrow">→</span>
          </a>
          <a href="#product-demo" className="home-hero-watch">Watch Luna work</a>
        </div>
        <Reveal as="div" className="home-hero-assurance" delay={80}>
          <span className="home-hero-assurance-item">
            <svg className="home-hero-assurance-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
            </svg>
            14-day free trial
          </span>
          <span className="home-hero-assurance-sep">•</span>
          <span className="home-hero-assurance-item">
            <svg className="home-hero-assurance-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
            </svg>
            No credit card required
          </span>
        </Reveal>
      </div>
    </section>
  );
}
