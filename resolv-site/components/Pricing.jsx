const tiers = [
  {
    id: 'starter',
    name: 'Starter',
    price: '$149',
    per: '/month',
    desc: 'For brands getting started with AI support.',
    cta: 'Book a demo →',
    features: [
      '1 brand',
      'Up to 300 conversations per month',
      'Supervised mode — drafts for your review',
      'Gmail and Shopify integration',
      'Email support',
    ],
    featured: false,
    popular: false,
  },
  {
    id: 'growth',
    name: 'Growth',
    price: '$349',
    per: '/month',
    desc: 'For growing brands that want full autopilot and direct Shopify action execution.',
    cta: 'Book a demo →',
    features: [
      'Up to 3 brands',
      'Unlimited conversations',
      'Autopilot and supervised modes',
      'Cancel, refund and address execution in Shopify',
      'Custom confidence threshold',
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
    desc: 'For operators running many brands who need dedicated support and SLAs.',
    cta: 'Talk to us →',
    features: [
      'Unlimited brands',
      'Unlimited conversations',
      'Dedicated account manager',
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
        <h2 className="section-title">Simple, honest pricing.</h2>
        <p className="section-sub">
          No setup fees. No per-email charges. Pick the plan that fits your brand and scale from there.
        </p>
        <div className="price-grid">
          {tiers.map(({ id, name, price, per, desc, cta, features, featured, popular }) => (
            <div key={id} className={`price-card${featured ? ' featured' : ''}`}>
              {popular && <div className="price-popular">Most popular</div>}
              <div className="price-tier">{name}</div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 3, marginBottom: 10 }}>
                {price ? (
                  <>
                    <span className="price-amount">{price}</span>
                    <span className="price-per">{per}</span>
                  </>
                ) : (
                  <span className="price-amount custom">Contact us</span>
                )}
              </div>
              <p className="price-desc">{desc}</p>
              <a href="#" className="price-btn">{cta}</a>
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
