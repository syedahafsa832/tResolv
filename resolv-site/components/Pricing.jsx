const tiers = [
  {
    id: 'starter',
    name: 'Starter',
    originalPrice: '$149',
    price: '$99',
    per: '/month',
    desc: 'For a growing Shopify store getting started with AI support.',
    cta: 'Claim your founding spot →',
    href: 'https://app.tresolv.online',
    features: [
      '500 conversations per month',
      'Supervised AI support',
      'Gmail + Shopify integration',
      'Chat widget',
      'Email support',
    ],
    featured: false,
    popular: false,
  },
  {
    id: 'growth',
    name: 'Growth',
    originalPrice: '$349',
    price: '$249',
    per: '/month',
    desc: 'For a store that wants full autopilot and Shopify action execution.',
    cta: 'Claim your founding spot →',
    href: 'https://app.tresolv.online',
    features: [
      'Unlimited conversations',
      'Autopilot mode',
      'Shopify actions (refunds, cancellations, updates)',
      'Chat widget',
      'AfterShip tracking',
      'Priority support',
    ],
    featured: true,
    popular: true,
  },
  {
    id: 'scale',
    name: 'Scale',
    price: null,
    per: null,
    desc: 'For high-volume stores needing custom infrastructure and SLAs.',
    cta: 'Talk to us →',
    href: 'https://calendar.app.google/YkSqLTsYr18bUP2Z6',
    features: [
      'Unlimited conversations',
      'Dedicated account manager',
      'Chat widget',
      'Custom agent name and branding',
      'SLA guarantee',
      'Custom integrations',
    ],
    featured: false,
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section className="section" id="pricing">
      <div className="wrap">
        <div className="eyebrow"><span className="eyebrow-dot" />Pricing</div>
        <h2 className="section-title">Founding Launch Pricing.</h2>
        <p className="section-sub">
          Locked in for our first 20 stores. No setup fees, no per-ticket charges.
        </p>
        <div className="price-grid">
          {tiers.map(({ id, name, originalPrice, price, per, desc, cta, href, features, featured, popular }) => (
            <div key={id} className={`price-card${featured ? ' featured' : ''}`}>
              {popular && <div className="price-popular">Most popular</div>}
              <div className="price-tier">{name}</div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 10 }}>
                {price ? (
                  <>
                    {originalPrice && <span className="price-original">{originalPrice}</span>}
                    <span className="price-amount">{price}</span>
                    <span className="price-per">{per}</span>
                  </>
                ) : (
                  <span className="price-amount custom">Contact us</span>
                )}
              </div>
              <p className="price-desc">{desc}</p>
              <a href={href} target="_blank" rel="noopener" className="price-btn">{cta}</a>
              <ul className="price-features">
                {features.map((f) => (
                  <li key={f} className="price-feat">
                    <span className="price-check">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
