const steps = [
  {
    num: '01',
    title: 'Connect your stack',
    body: 'Link your Gmail and Shopify in under 10 minutes. tResolv starts reading your inbox in real time from the moment you connect.',
  },
  {
    num: '02',
    title: 'AI drafts the reply',
    body: 'Every email is classified, matched to live Shopify order data, and drafted with a confidence score. Nothing goes out below your threshold.',
  },
  {
    num: '03',
    title: 'Approve or run autopilot',
    body: 'Financial actions always need your tap. Confident routine replies go out automatically. You stay in control of what matters.',
  },
];

export default function HowItWorks() {
  return (
    <section className="section" id="how-it-works">
      <div className="wrap">
        <div className="eyebrow"><span className="eyebrow-dot" />How it works</div>
        <h2 className="section-title">Set it up once.<br />tResolv handles the rest.</h2>
        <p className="section-sub">
          Three steps. No ongoing configuration. tResolv starts working from the moment you connect.
        </p>
        <div className="steps">
          {steps.map(({ num, title, body }) => (
            <div key={num} className="step">
              <div className="step-num">{num}</div>
              <h3 className="step-title">{title}</h3>
              <p className="step-body">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
