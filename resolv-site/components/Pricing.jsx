const tiers = [
  {
    id: 'starter',
    tier: 'Starter',
    kicker: 'Get help',
    name: 'The Support Sidekick',
    desc: 'For founders who are tired of answering the same customer questions.',
    price: '$49',
    per: '/month',
    founding: 'Founding price — limited founding spots',
    cta: 'Claim your founding spot →',
    href: 'https://app.tresolv.online',
    features: [
      '100 conversations per month',
      'Gmail + Shopify',
      'AI email support',
      'Live chat widget',
      'Live Shopify order lookup',
      'Shipping & tracking questions',
      'Product/order questions',
      'Returns & policy questions',
      'AI-drafted replies',
      'Human approval before replies/actions',
      'Confidence scoring',
      'Email quarantine / loop protection',
    ],
    quote: 'Let Luna handle the repetitive stuff. You handle the business.',
    featured: false,
    popular: false,
  },
  {
    id: 'growth',
    tier: 'Growth',
    kicker: 'Get out of the inbox',
    name: 'The AI Support Employee',
    desc: 'For Shopify brands ready to stop managing their inbox themselves.',
    price: '$99',
    per: '/month',
    founding: 'Founding price',
    cta: 'Claim your founding spot →',
    href: 'https://app.tresolv.online',
    plusNote: 'Includes everything in Starter, plus:',
    features: [
      '250 conversations per month',
      'Autopilot for high-confidence routine tickets',
      'Shopify action workflows',
      'Refund approval workflows',
      'Cancellation approval workflows',
      'Address-change workflows',
      'AfterShip live tracking',
      'Live storefront chat',
      'Customizable Luna identity',
      'Priority support',
    ],
    quote: 'Your AI support employee.',
    featured: true,
    popular: true,
  },
  {
    id: 'scale',
    tier: 'Scale',
    kicker: 'Build your support operation',
    name: 'The Support Department',
    desc: 'For brands where support is becoming a real operational bottleneck.',
    price: '$249',
    per: '/month+',
    founding: null,
    cta: 'Talk to us →',
    href: 'https://calendar.app.google/YkSqLTsYr18bUP2Z6',
    features: [
      'Higher/custom conversation volume',
      'Full autopilot where supported',
      'Shopify action execution with existing approval safeguards',
      'Custom integrations',
      'Custom agent identity/branding',
      'AfterShip',
      'Priority support',
      'Dedicated onboarding',
      'Custom SLA options',
    ],
    quote: "Your support team shouldn't be the reason you stop growing.",
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
          {tiers.map(({ id, tier, kicker, name, desc, price, per, founding, cta, href, plusNote, features, quote, featured, popular }) => (
            <div key={id} className={`price-card${featured ? ' featured' : ''}`}>
              {popular && <div className="price-popular">Most popular</div>}
              <div className="price-tier">{tier}</div>
              <div className="price-kicker">{kicker}</div>
              <div className="price-name">{name}</div>
              {founding && <div className="price-founding">{founding}</div>}
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 10 }}>
                <span className="price-amount">{price}</span>
                <span className="price-per">{per}</span>
              </div>
              <p className="price-desc">{desc}</p>
              <a href={href} target="_blank" rel="noopener" className="price-btn">{cta}</a>
              {plusNote && <p className="price-plus-note">{plusNote}</p>}
              <ul className="price-features">
                {features.map((f) => (
                  <li key={f} className="price-feat">
                    <span className="price-check">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <p className="price-quote">"{quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
