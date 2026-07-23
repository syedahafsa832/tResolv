// "How it works" — reuses the homepage's numbered .steps pattern.
export default function StepsSection({ id = 'how-it-works', eyebrow = 'How it works', title, sub, steps }) {
  return (
    <section className="section" id={id}>
      <div className="wrap">
        <div className="eyebrow"><span className="eyebrow-dot" />{eyebrow}</div>
        <h2 className="section-title">{title}</h2>
        {sub && <p className="section-sub">{sub}</p>}
        <div className="steps">
          {steps.map(({ num, title: stepTitle, body }) => (
            <div key={num} className="step">
              <div className="step-num">{num}</div>
              <h3 className="step-title">{stepTitle}</h3>
              <p className="step-body">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
