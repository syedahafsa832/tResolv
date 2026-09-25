import RelatedLinks from './seo/RelatedLinks';

const TRADITIONAL = ['Customer', 'Ticket', 'Agent opens Shopify', 'Finds order', 'Checks policy', 'Decides', 'Responds', 'Updates order'];
const TRESOLV = ['Customer', 'Luna', 'Shopify + policies', 'Decision', 'Resolution'];

const compareLinks = [
  { href: '/tresolv-vs-gorgias', label: 'tResolv vs Gorgias' },
  { href: '/tresolv-vs-zendesk', label: 'tResolv vs Zendesk' },
  { href: '/tresolv-vs-intercom', label: 'tResolv vs Intercom' },
];

export default function WhyTresolv() {
  return (
    <>
      <section className="section" id="why-tresolv">
        <div className="wrap">
          <div className="eyebrow"><span className="eyebrow-dot" />Why tResolv</div>
          <h2 className="section-title">Your helpdesk stores the conversation.<br />Luna works on it.</h2>
          <p className="section-sub">
            A traditional helpdesk gives your team a place to see the ticket. tResolv gives Luna a way to
            check the order and resolve it herself.
          </p>
          <div className="flow-compare">
            <div className="flow-col">
              <div className="flow-col-label">Traditional support workflow</div>
              <div className="flow-steps">
                {TRADITIONAL.map((step, i) => (
                  <div key={step}>
                    <div className="flow-step">{step}</div>
                    {i < TRADITIONAL.length - 1 && <div className="flow-arrow">↓</div>}
                  </div>
                ))}
              </div>
            </div>
            <div className="flow-col is-tresolv">
              <div className="flow-col-label">With tResolv</div>
              <div className="flow-steps">
                {TRESOLV.map((step, i) => (
                  <div key={step}>
                    <div className="flow-step">{step}</div>
                    {i < TRESOLV.length - 1 && <div className="flow-arrow">↓</div>}
                  </div>
                ))}
              </div>
              <div className="flow-result">Your team gets involved when they actually need to.</div>
            </div>
          </div>
        </div>
      </section>
      <RelatedLinks title="Compare tResolv" links={compareLinks} />
    </>
  );
}
