import { SITE } from '@/lib/site';

// Shorter hero band for interior SEO pages, reuses the homepage's dark
// hero styling (.hero, eyebrow, h1) but without the 100vh height or the
// console mockup, since interior pages have content below the fold.
export default function PageHero({ eyebrow, title, titleAccent, sub, primaryLabel = 'Start free trial →', secondaryLabel }) {
  return (
    <section className="hero" style={{ minHeight: 'auto', padding: '150px 0 72px' }}>
      <div className="wrap" style={{ maxWidth: 780 }}>
        <div className="eyebrow"><span className="eyebrow-dot" />{eyebrow}</div>
        <h1 style={{ fontSize: 'clamp(34px, 4.4vw, 54px)' }}>
          {title} {titleAccent && <span className="accent">{titleAccent}</span>}
        </h1>
        <p className="hero-sub" style={{ maxWidth: 620 }}>{sub}</p>
        <div className="hero-actions">
          <a href={SITE.appUrl} target="_blank" rel="noopener" className="btn btn-primary" style={{ fontSize: 15, padding: '13px 26px' }}>
            {primaryLabel}
          </a>
          {secondaryLabel && (
            <span className="hero-assurance">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              {secondaryLabel}
            </span>
          )}
        </div>
      </div>
    </section>
  );
}
