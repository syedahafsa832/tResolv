export default function Hero() {
  return (
    <section className="home-hero">
      <div className="home-hero-scene" aria-hidden="true" />

      <div className="wrap home-hero-content">
        <div className="eyebrow home-hero-eyebrow">
          <span className="eyebrow-dot" />
          AI customer support employee for Shopify brands
        </div>
        <h1 className="home-hero-headline">
          Your Shopify store shouldn&apos;t need you for every customer question.
        </h1>
        <p className="home-hero-sub">
          Luna handles customer support, checks live order data, and resolves routine tickets for
          you. You step in only when it matters.
        </p>
        <div className="home-hero-actions">
          <a href="https://app.tresolv.online" target="_blank" rel="noopener" className="btn btn-primary">
            Try tResolv free →
          </a>
          <a href="#product-demo" className="home-hero-watch">Watch Luna work</a>
        </div>
        <p className="home-hero-assurance">14 days free · No credit card · Shopify + Gmail · You stay in control</p>
      </div>
    </section>
  );
}
