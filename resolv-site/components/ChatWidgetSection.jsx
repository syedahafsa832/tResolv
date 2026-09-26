const POINTS = [
  {
    title: 'Live order lookup',
    body: 'Customers ask about their order right on your storefront and get a real answer, pulled straight from Shopify, not a canned reply.',
  },
  {
    title: 'Shopify action cards',
    body: 'Refunds and cancellations show up as structured cards inside the chat, staged for your one-tap approval. Returns and exchanges are routed to your support team (coming soon to full automation).',
  },
  {
    title: 'Customizable identity',
    body: "Set your agent's name, accent color, and quick-action buttons. It looks and sounds like part of your brand.",
  },
  {
    title: 'Same safety rails',
    body: 'Every guardrail from email support carries over, confidence scoring, quarantine, and approval-gated financial actions.',
  },
];

export default function ChatWidgetSection() {
  return (
    <section className="section" id="chat-widget">
      <div className="wrap">
        <div className="cw-layout">
          <div className="cw-copy">
            <div className="eyebrow"><span className="eyebrow-dot" />Chat Widget</div>
            <h2 className="section-title">
              Your AI support employee,<br />now on your storefront too.
            </h2>
            <div className="cw-points">
              {POINTS.map((point) => (
                <div key={point.title} className="cw-point">
                  <h3 className="cw-point-title">{point.title}</h3>
                  <p className="cw-point-body">{point.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="cw-widget">
            <div className="cw-widget-header">
              <div className="cw-avatar">L</div>
              <div className="cw-widget-name">
                Luna <span className="cw-online-dot" />
              </div>
            </div>
            <div className="cw-widget-body">
              <div className="cw-bubble">Hi there 👋 I&apos;m Luna. What can I help you with?</div>
              <div className="cw-chips">
                <span className="cw-chip">Track order</span>
                <span className="cw-chip">Request refund</span>
                <span className="cw-chip">Ask about a return</span>
              </div>
            </div>
            <div className="cw-widget-input">
              <span>Message Luna…</span>
            </div>
            <div className="cw-widget-footer">Powered by tResolv</div>
          </div>
        </div>
      </div>
    </section>
  );
}
