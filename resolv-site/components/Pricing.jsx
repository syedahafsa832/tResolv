import Link from 'next/link';
import { tiers } from '@/content/pricing';
// `linkToPage`: the homepage summary links through to the full /pricing page.
export default function Pricing({ linkToPage = false }) {
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
        {linkToPage && (
          <p className="section-sub" style={{ marginTop: 28, maxWidth: 'none' }}>
            <Link href="/pricing" className="inline-link">See full pricing and trial terms →</Link>
          </p>
        )}
      </div>
    </section>
  );
}
