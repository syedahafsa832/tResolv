const CheckIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

const features = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
      </svg>
    ),
    title: 'Resolution engine',
    body: 'tResolv classifies every incoming email, finds the right answer, and sends the reply automatically when confidence is high. No human needed for routine tickets.',
    note: '86.5% resolution rate out of the box',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
        <path d="M12 8v4" /><path d="M12 16h.01" />
      </svg>
    ),
    title: 'Staged financial actions',
    body: 'Refunds, cancellations, exchanges, and address changes are always staged for your one-tap approval. They never execute automatically. Ever.',
    note: 'Refunds and cancellations always require your approval',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" x2="18" y1="20" y2="10" /><line x1="12" x2="12" y1="20" y2="4" /><line x1="6" x2="6" y1="20" y2="14" />
      </svg>
    ),
    title: 'Confidence scoring',
    body: 'Every AI draft shows a confidence percentage. You set where the autopilot threshold sits. Below that line, drafts queue for your review before anything is sent.',
    note: 'Fully configurable threshold',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" />
        <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
        <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" /><path d="M2 7h20" />
      </svg>
    ),
    title: 'One console for all your brands',
    body: 'Running multiple Shopify stores? One tResolv dashboard shows all of them. Each brand\'s conversations, approvals, and settings stay fully separate.',
    note: 'One login for all your brands',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
    title: 'Gmail native',
    body: "tResolv connects via Google OAuth and processes emails inside Google's own infrastructure. Your customer emails are never copied to or stored on tResolv's servers.",
    note: 'Your emails never leave Google',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
      </svg>
    ),
    title: 'Smart quarantine',
    body: 'Promotions, auto-replies, and email loop risks are filtered before the AI sees them. Your resolution rate stays accurate and your inbox stays clean.',
    note: 'Stops email loops before they start',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><path d="M12 8v4" /><path d="M12 16h.01" />
      </svg>
    ),
    title: 'Order state awareness',
    body: "Before drafting any reply, tResolv checks the live order state in Shopify. It will not attempt to cancel an already cancelled order, or refund one that has already been refunded. It knows what has already happened.",
    note: 'No duplicate actions, no embarrassing errors',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    title: 'Address auto-parsing',
    body: "When a customer writes their new address in plain language, tResolv parses it into a clean structured format and stages it as a one-tap Shopify address update. You review the parsed address before it is applied.",
    note: 'Always staged for your approval before Shopify is updated',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
    title: 'Chat Widget',
    body: "Add a floating AI chat bubble to your Shopify storefront. Customers get instant answers about orders, returns, and refunds, handled live by Luna. Cancellations and refunds always stage for your approval, same as email.",
    note: "Set your agent's name, color, and quick actions",
    isNew: true,
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 11l18-5v12L3 14v-3z" /><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
      </svg>
    ),
    title: 'Live Tracking Updates',
    body: 'When a customer asks where their order is, Luna queries real-time carrier data and replies with the actual status, "Your package is in Lahore, expected delivery June 10", not a link to go check yourself.',
    note: 'Works with TCS, Leopards, DHL and 1100+ carriers',
    isNew: true,
    isWide: true,
  },
];

export default function Features() {
  return (
    <section className="section section-alt" id="features">
      <div className="wrap">
        <div className="eyebrow"><span className="eyebrow-dot" />Features</div>
        <h2 className="section-title">Everything you need.<br />Nothing you don't.</h2>
        <div className="feat-grid">
          {features.map(({ icon, title, body, note, isNew, isWide }) => (
            <div key={title} className={`feat-card${isWide ? ' feat-wide' : ''}`}>
              <div className="feat-icon">{icon}</div>
              {isNew && <span className="feat-badge">New</span>}
              <h3 className="feat-title">{title}</h3>
              <p className="feat-body">{body}</p>
              <div className="feat-note">
                <CheckIcon />
                {note}
              </div>
            </div>
          ))}
        </div>
        <div className="why-card">
          <div className="why-eyebrow">Why tResolv?</div>
          <p className="why-statement">Gorgias and Zendesk show your agents the order. <em>tResolv&apos;s AI acts on it.</em></p>
          <p className="why-body">Refunds, cancellations, and address changes execute directly in Shopify, with your approval, without a human in the loop.</p>
        </div>
      </div>
    </section>
  );
}
