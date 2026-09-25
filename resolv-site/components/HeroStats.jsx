// Every line here has to be defensible as written: no invented counts, rates,
// or stats. "Respond in seconds" and "24/7" describe how Luna operates;
// the middle two make the automatic/approval split visible immediately,
// right under the hero, instead of buried further down the page.
export default function HeroStats() {
  return (
    <div className="hero-band">
      <div className="hero-band-inner">
        <div className="hb-item">
          <div className="hb-val">Respond in seconds</div>
          <div className="hb-label">with Luna</div>
        </div>
        <div className="hb-item">
          <div className="hb-val">Routine tickets</div>
          <div className="hb-label">Resolved automatically</div>
        </div>
        <div className="hb-item">
          <div className="hb-val">Refunds &amp; cancellations</div>
          <div className="hb-label">Your approval required</div>
        </div>
        <div className="hb-item">
          <div className="hb-val">24/7</div>
          <div className="hb-label">chat + email coverage</div>
        </div>
      </div>
    </div>
  );
}
