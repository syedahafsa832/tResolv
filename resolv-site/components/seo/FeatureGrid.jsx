import { ICONS } from './icons';

// Reuses the homepage's .feat-grid card pattern. `features` items:
// { icon: 'mail', title, body, note }
export default function FeatureGrid({ id = 'features', alt = true, eyebrow = 'Features', title, sub, features }) {
  return (
    <section className={`section${alt ? ' section-alt' : ''}`} id={id}>
      <div className="wrap">
        <div className="eyebrow"><span className="eyebrow-dot" />{eyebrow}</div>
        <h2 className="section-title">{title}</h2>
        {sub && <p className="section-sub">{sub}</p>}
        <div className="feat-grid">
          {features.map(({ icon, title: t, body, note }) => (
            <div key={t} className="feat-card">
              <div className="feat-icon">{ICONS[icon] || ICONS.bolt}</div>
              <h3 className="feat-title">{t}</h3>
              <p className="feat-body">{body}</p>
              {note && (
                <div className="feat-note">
                  {ICONS.check}
                  {note}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
