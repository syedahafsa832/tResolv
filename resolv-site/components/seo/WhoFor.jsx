// Two-column "who each product is for" / "when tResolv is better" cards.
export default function WhoFor({ left, right }) {
  return (
    <section className="section section-alt">
      <div className="wrap">
        <div className="who-for-grid">
          <div className="who-for-card">
            <h3>{left.title}</h3>
            <ul>{left.items.map((item, i) => <li key={i}>{item}</li>)}</ul>
          </div>
          <div className="who-for-card">
            <h3>{right.title}</h3>
            <ul>{right.items.map((item, i) => <li key={i}>{item}</li>)}</ul>
          </div>
        </div>
      </div>
    </section>
  );
}
