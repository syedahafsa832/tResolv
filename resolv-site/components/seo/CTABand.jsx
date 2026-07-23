import { SITE } from '@/lib/site';

// Reuses the homepage's .pre-cta closing-section pattern.
export default function CTABand({ title, sub, label = 'Start free trial →' }) {
  return (
    <section className="section pre-cta">
      <div className="wrap">
        <h2>{title}</h2>
        <p>{sub}</p>
        <a href={SITE.appUrl} target="_blank" rel="noopener" className="btn btn-primary" style={{ fontSize: 16, padding: '14px 32px' }}>
          {label}
        </a>
      </div>
    </section>
  );
}
