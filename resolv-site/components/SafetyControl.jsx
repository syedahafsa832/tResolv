const ROUTINE = [
  'Order tracking',
  'Product questions',
  'Shipping questions',
  'Store policies',
  'Common support replies',
];

const SENSITIVE = [
  'Refunds',
  'Cancellations',
  'Supported order changes',
];

export default function SafetyControl() {
  return (
    <section className="section section-alt" id="safety">
      <div className="wrap">
        <div className="eyebrow"><span className="eyebrow-dot" />Safety</div>
        <h2 className="section-title">Let Luna handle the work.<br />Keep control of the risky parts.</h2>
        <p className="section-sub">
          Routine support can run automatically. Sensitive actions stay under your control.
        </p>
        <div className="who-for-grid">
          <div className="who-for-card">
            <h3>Routine support</h3>
            <ul className="safety-list">
              {ROUTINE.map((item) => (
                <li key={item}>
                  <span className="safety-check ok">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="safety-footer ok">Can run automatically.</div>
          </div>
          <div className="who-for-card is-caution">
            <h3>Sensitive actions</h3>
            <ul className="safety-list">
              {SENSITIVE.map((item) => (
                <li key={item}>
                  <span className="safety-check warn">!</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="safety-footer warn">Require your approval.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
