// Simple 3-column grid for "use cases" sections.
export default function UseCaseGrid({ id = 'use-cases', eyebrow = 'Use cases', title, sub, items }) {
  return (
    <section className="section" id={id}>
      <div className="wrap">
        <div className="eyebrow"><span className="eyebrow-dot" />{eyebrow}</div>
        <h2 className="section-title">{title}</h2>
        {sub && <p className="section-sub">{sub}</p>}
        <div className="use-case-grid">
          {items.map(({ title: t, body }) => (
            <div key={t} className="use-case-card">
              <div className="use-case-title">{t}</div>
              <div className="use-case-body">{body}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
