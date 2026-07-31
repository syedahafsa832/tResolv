import PageShell from '@/components/seo/PageShell';

export default function NotFound() {
  return (
    <PageShell>
      <section className="section nf">
        <div className="wrap nf-wrap">
          <div className="nf-illo" aria-hidden="true">
            <svg width="220" height="180" viewBox="0 0 220 180" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="110" cy="164" rx="70" ry="10" fill="var(--bg-3)" />
              <g className="nf-box">
                <rect x="46" y="70" width="100" height="70" rx="10" fill="var(--accent-light)" stroke="var(--accent)" strokeWidth="2.5" />
                <path d="M46 92h100" stroke="var(--accent)" strokeWidth="2.5" />
                <path d="M84 70v70M108 70v70" stroke="var(--accent)" strokeWidth="2" strokeDasharray="4 5" opacity="0.6" />
                <path d="M46 92 74 70M146 92 118 70" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" />
              </g>
              <g className="nf-glass">
                <circle cx="160" cy="58" r="26" fill="white" stroke="var(--accent)" strokeWidth="4" />
                <path d="M178 76l16 16" stroke="var(--accent)" strokeWidth="6" strokeLinecap="round" />
                <text x="160" y="66" textAnchor="middle" fontFamily="system-ui,sans-serif" fontWeight="700" fontSize="17" fill="var(--accent)">?</text>
              </g>
              <circle className="nf-dot nf-dot-1" cx="30" cy="60" r="4" fill="var(--accent)" opacity="0.5" />
              <circle className="nf-dot nf-dot-2" cx="200" cy="120" r="5" fill="var(--accent)" opacity="0.35" />
              <circle className="nf-dot nf-dot-3" cx="20" cy="120" r="3" fill="var(--accent)" opacity="0.4" />
            </svg>
          </div>

          <p className="eyebrow nf-eyebrow">
            <span className="eyebrow-dot" />Error 404
          </p>
          <h1 className="nf-title">Hmm, we couldn&apos;t track this page down.</h1>
          <p className="section-sub nf-sub">
            Looks like it moved, got renamed, or never existed — the link you followed may be out of date.
          </p>

          <div className="nf-actions">
            <a href="/" className="btn btn-primary">Back to home →</a>
            <a href="/#pricing" className="btn nf-btn-ghost">View pricing</a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
