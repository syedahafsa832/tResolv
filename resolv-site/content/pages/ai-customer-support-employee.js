// Pillar page, the category-defining page for "AI Customer Support Employee".
// Every other money page links back here.
export const page = {
  path: '/ai-customer-support-employee',
  seo: {
    title: 'AI Customer Support Employee for Shopify Brands | tResolv',
    description:
      'tResolv is an AI customer support employee that reads your inbox, resolves routine emails automatically, and stages every refund or cancellation for your approval.',
    keywords: 'AI customer support employee, AI support employee, AI customer service employee',
  },
  hero: {
    eyebrow: 'AI Customer Support Employee',
    title: 'Hire an AI employee.',
    titleAccent: 'Not another helpdesk.',
    sub: 'tResolv reads your support inbox, resolves routine customer emails on its own, and stops before every refund, cancellation, or address change until you approve it.',
    secondaryLabel: 'Your emails never leave Google.',
  },
  problem: {
    id: 'problem',
    eyebrow: 'The problem',
    title: 'Support software still expects a human to run it.',
    paragraphs: [
      'Most "AI customer service" tools are still a helpdesk with an AI feature bolted on. Someone on your team still has to triage the inbox, write replies, and decide what to escalate.',
      'Every repetitive email, "where is my order," "I want to cancel," "can I get a refund", takes time away from the parts of the business that actually need a person.',
    ],
  },
  solution: {
    id: 'solution',
    alt: true,
    eyebrow: 'The solution',
    title: 'An employee, not a platform.',
    paragraphs: [
      'tResolv reads incoming email, classifies the request, checks the live Shopify order, and drafts a reply grounded in what actually happened to that order, not a generic template.',
      'Routine, high-confidence replies go out on their own. Anything involving money, refunds, cancellations, exchanges, address changes, is staged in your approval queue. It never executes without your tap.',
    ],
    checks: [
      { label: 'Resolves routine emails automatically:', detail: 'Routine tickets are resolved without a human touching them, based on real Shopify order data.' },
      { label: 'Never moves money without you:', detail: 'refunds and cancellations always wait for your one-tap approval.' },
      { label: 'Grounded in real order data:', detail: 'checks Shopify before replying, so it never contradicts what already happened to an order.' },
    ],
  },
  steps: {
    title: 'Set it up once. tResolv handles the rest.',
    sub: 'Three steps. No ongoing configuration required.',
    steps: [
      { num: '01', title: 'Connect Gmail and Shopify', body: 'One Google OAuth click connects your inbox. Add your Shopify store and tResolv starts reading orders in real time.' },
      { num: '02', title: 'AI drafts with a confidence score', body: 'Every incoming email is classified, matched against the live order, and drafted with a visible confidence percentage.' },
      { num: '03', title: 'Approve or let autopilot run', body: 'High-confidence, non-financial replies send automatically. Refunds and cancellations always wait for your approval.' },
    ],
  },
  features: {
    title: 'What the AI employee actually does',
    features: [
      { icon: 'bolt', title: 'Resolution engine', body: 'Classifies every incoming email and answers routine questions, order status, shipping, sizing, policy questions, without a human in the loop.', note: 'Resolves routine tickets automatically' },
      { icon: 'shield', title: 'Staged financial actions', body: 'Refunds, cancellations, exchanges, and address changes are staged for your one-tap approval. They never execute automatically.', note: 'Zero unauthorized financial actions' },
      { icon: 'gauge', title: 'Confidence scoring', body: 'Every draft shows a confidence score. You set the autopilot threshold, anything below it queues for your review first.', note: 'Fully configurable threshold' },
      { icon: 'quarantine', title: 'Smart quarantine', body: 'Promotions, automated notifications, and email-loop risks are filtered out before the AI ever drafts a reply.', note: 'Keeps resolution numbers accurate' },
    ],
  },
  useCases: {
    title: 'Where the AI employee replaces manual work',
    items: [
      { title: 'Order status', body: 'Answers "where is my order" with live tracking data instead of a canned response.' },
      { title: 'Refund requests', body: 'Checks eligibility against the order, drafts the response, and stages the refund for approval.' },
      { title: 'Cancellations', body: 'Confirms the order has not shipped before staging a cancellation, never a duplicate or invalid action.' },
      { title: 'Address changes', body: 'Parses a plain-language address from the customer email into a staged Shopify update.' },
      { title: 'Escalations', body: 'Hands off automatically to a human when confidence is low or the conversation needs judgment.' },
      { title: 'Storefront chat', body: 'The same AI employee answers live on your storefront chat widget, not just email.' },
    ],
  },
  faqs: [
    { q: 'Is this a chatbot or a real employee replacement?', a: 'tResolv works inside your existing Gmail inbox and Shopify store, the same way a support hire would, reading email, checking orders, and drafting replies. It is not a website widget; it is built to take over the inbox work itself.' },
    { q: 'Does the AI ever send a refund or cancellation on its own?', a: 'No. Financial actions always require your one-tap approval, regardless of the AI\'s confidence score or which mode you run in.' },
    { q: 'How much of my inbox will this actually resolve?', a: 'tResolv resolves routine, repetitive support emails automatically without a human touching them. More complex or uncertain requests are escalated or staged for your approval.' },
    { q: 'What happens to emails the AI is not confident about?', a: 'They queue for human review instead of sending. You set the confidence threshold, so you control how cautious the AI is.' },
  ],
  relatedLinks: [
    { href: '/shopify-ai-customer-support', label: 'Shopify AI Customer Support' },
    { href: '/ai-refund-automation', label: 'AI Refund Automation' },
    { href: '/ai-return-automation', label: 'AI Return Automation' },
    { href: '/ai-email-customer-support', label: 'AI Email Customer Support' },
    { href: '/tresolv-vs-gorgias', label: 'tResolv vs Gorgias' },
    { href: '/blog/what-is-an-ai-customer-support-agent', label: 'What Is an AI Customer Support Agent?' },
  ],
  cta: {
    title: 'Hire your first AI support employee.',
    sub: 'Start your 14-day free trial. No credit card required.',
  },
};
