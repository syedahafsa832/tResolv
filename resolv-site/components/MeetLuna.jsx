const REASONING_STEPS = [
  {
    num: '01',
    title: 'Understand',
    body: "Luna reads the customer's email or storefront message and works out what they actually need.",
  },
  {
    num: '02',
    title: 'Check',
    body: 'She checks your Shopify order data, tracking status, and store policies before saying anything back.',
  },
  {
    num: '03',
    title: 'Decide',
    body: 'Based on what she finds, she works out the right response or the next step to take.',
  },
  {
    num: '04',
    title: 'Resolve',
    body: 'Routine requests, tracking, product questions, policy questions, get answered right away.',
  },
  {
    num: '05',
    title: 'Escalate',
    body: 'Refunds, cancellations, and anything sensitive get staged for your approval instead.',
    isEscalate: true,
  },
];

export default function MeetLuna() {
  return (
    <section className="section" id="meet-luna">
      <div className="wrap">
        <div className="eyebrow"><span className="eyebrow-dot" />Meet Luna</div>
        <h2 className="section-title">It doesn&apos;t just answer.<br />It checks.</h2>
        <p className="section-sub">
          Luna is tResolv&apos;s AI customer support employee for Shopify brands. Before she responds or
          takes action, she checks the information that matters.
        </p>
        <div className="luna-steps">
          {REASONING_STEPS.map(({ num, title, body, isEscalate }) => (
            <div key={num} className={`luna-step${isEscalate ? ' is-escalate' : ''}`}>
              <div className="luna-step-num">{num}</div>
              <h3 className="luna-step-title">{title}</h3>
              <p className="luna-step-body">{body}</p>
            </div>
          ))}
        </div>
        <div className="luna-identity">
          <span className="cw-avatar" style={{ width: 44, height: 44, fontSize: 17 }}>L</span>
          <div>
            <div className="luna-identity-name">Luna, your AI customer support employee</div>
            <p className="luna-identity-body">
              She reads your inbox and storefront chat, checks Shopify before she answers, resolves the
              routine requests herself, and hands anything sensitive back to you for approval.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
