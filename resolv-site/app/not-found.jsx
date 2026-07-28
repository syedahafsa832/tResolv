import PageShell from '@/components/seo/PageShell';

export default function NotFound() {
  return (
    <PageShell>
      <section className="section">
        <div className="wrap" style={{ textAlign: 'center' }}>
          <p className="eyebrow" style={{ justifyContent: 'center' }}>
            <span className="eyebrow-dot" />404
          </p>
          <h1 className="section-title">This page doesn&apos;t exist.</h1>
          <p className="section-sub">
            The page you&apos;re looking for may have moved or the link may be out of date.
          </p>
          <a href="/" className="btn btn-primary" style={{ marginTop: 24, display: 'inline-flex' }}>
            Back to home →
          </a>
        </div>
      </section>
    </PageShell>
  );
}
