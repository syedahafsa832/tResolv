import Reveal from '@/components/Reveal';

export default function Hero() {
  return (
    <section className="home-hero">
      <div className="home-hero-scene" aria-hidden="true">
        <div className="home-hero-scene-drift" />
      </div>

      <div className="wrap home-hero-content">
        <Reveal as="div" className="eyebrow home-hero-eyebrow">
          <span className="eyebrow-dot" />
          AI customer support employee for Shopify brands
        </Reveal>
        <h1 className="home-hero-headline">
          <Reveal as="span" className="reveal-inline" delay={80}>Your Shopify store</Reveal>{' '}
          <Reveal as="span" className="reveal-inline headline-accent" delay={200}>
            shouldn&apos;t need you
            <svg className="headline-accent-underline" viewBox="0 0 200 9" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M2.5 6.5C50 2.5 150 2.5 197.5 6.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </Reveal>{' '}
          <Reveal as="span" className="reveal-inline" delay={140}>for every customer question.</Reveal>
        </h1>
        <Reveal as="p" className="home-hero-sub" delay={280}>
          Luna handles customer support, checks live order data, and resolves routine tickets for
          you. You step in only when it matters.
        </Reveal>
        <Reveal as="div" className="home-hero-actions" delay={360}>
          <a href="https://app.tresolv.online" target="_blank" rel="noopener" className="btn btn-primary">
            Try tResolv free <span className="btn-arrow">→</span>
          </a>
          <a href="#product-demo" className="home-hero-watch">Watch Luna work</a>
        </Reveal>
        <Reveal as="p" className="home-hero-assurance" delay={420}>14 days free · No credit card · Shopify + Gmail · You stay in control</Reveal>
      </div>
    </section>
  );
}
