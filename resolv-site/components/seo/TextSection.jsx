// Generic text section used for Problem / Solution / Benefits blocks.
// `checks` renders a checklist (reuses the site's existing green .price-check
// icon styling); omit it for a plain prose section.
export default function TextSection({ id, alt, eyebrow, title, sub, paragraphs = [], checks }) {
  return (
    <section className={`section${alt ? ' section-alt' : ''}`} id={id}>
      <div className="wrap" style={{ maxWidth: 760 }}>
        <div className="eyebrow"><span className="eyebrow-dot" />{eyebrow}</div>
        <h2 className="section-title">{title}</h2>
        {sub && <p className="section-sub" style={{ maxWidth: 640 }}>{sub}</p>}
        {paragraphs.map((p, i) => (
          <p key={i} className="section-sub" style={{ maxWidth: 640, marginTop: i === 0 && !sub ? 0 : 16 }}>{p}</p>
        ))}
        {checks && (
          <ul className="check-list">
            {checks.map((c, i) => {
              const item = typeof c === 'string' ? { label: c } : c;
              return (
                <li key={i} className="check-item">
                  <span className="price-check" style={{ marginTop: 3 }}>✓</span>
                  <span>
                    {item.label && <strong>{item.label} </strong>}
                    {item.detail}
                  </span>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </section>
  );
}
