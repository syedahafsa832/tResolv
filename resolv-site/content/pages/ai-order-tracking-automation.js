export const page = {
  path: '/ai-order-tracking-automation',
  seo: {
    title: 'AI Order Tracking Automation | tResolv',
    description:
      'tResolv answers "where is my order" automatically using live Shopify fulfillment and tracking data — no manual lookups required.',
    keywords: 'AI order tracking automation, order status automation, AI order status assistant',
  },
  hero: {
    eyebrow: 'AI Order Tracking Automation',
    title: '"Where is my order?"',
    titleAccent: 'Answered automatically.',
    sub: 'Order status is the single most common support email. tResolv checks live Shopify fulfillment and tracking data and answers it without a human involved.',
  },
  problem: {
    id: 'problem',
    eyebrow: 'The problem',
    title: 'Order status questions dominate the inbox.',
    paragraphs: [
      '"Where is my order" is consistently one of the highest-volume support requests for any Shopify brand — and one of the least interesting to answer manually.',
      'Every one requires the same lookup: open Shopify, find the order, check fulfillment and tracking, then write essentially the same reply.',
    ],
  },
  solution: {
    id: 'solution',
    alt: true,
    eyebrow: 'The solution',
    title: 'Live tracking data, drafted automatically.',
    paragraphs: [
      'tResolv matches the incoming email to the customer\'s order, checks the current fulfillment and tracking status in Shopify, and drafts a reply that reflects exactly where the order is right now.',
      'Because it checks live data every time, the answer is never a stale template — if the order shipped an hour ago, the reply reflects that.',
    ],
    checks: [
      { label: 'Live fulfillment lookups —', detail: 'checked against Shopify at the moment of reply, not cached.' },
      { label: 'Automatic order matching —', detail: 'finds the right order even when the customer doesn\'t include a number.' },
      { label: 'No manual tab-switching —', detail: 'no one on your team has to open Shopify to answer this question.' },
    ],
  },
  steps: {
    title: 'From "where is my order" to resolved',
    steps: [
      { num: '01', title: 'Email arrives', body: 'tResolv identifies this as an order-status request and matches it to the customer\'s order.' },
      { num: '02', title: 'Fulfillment is checked live', body: 'Current shipping and tracking status is pulled directly from Shopify.' },
      { num: '03', title: 'Reply sends automatically', body: 'A grounded, accurate reply is sent — no lookup, no copy-pasting a tracking link.' },
    ],
  },
  features: {
    title: 'Built around accurate order status',
    features: [
      { icon: 'package', title: 'Order state awareness', body: 'Checks whether an order has shipped, is in transit, or has been delivered before replying.', note: 'Always current, never cached' },
      { icon: 'location', title: 'Address and shipment matching', body: 'Matches the customer\'s email to the correct order automatically, even without an order number.', note: 'No manual matching' },
      { icon: 'bolt', title: 'Automatic resolution', body: 'Order-status emails are one of the highest-confidence ticket types tResolv handles.', note: 'Resolved without a human, in most cases' },
      { icon: 'clock', title: '24/7 coverage', body: 'Tracking questions get answered outside business hours instead of waiting for your team to log in.', note: 'No overnight backlog' },
    ],
  },
  useCases: {
    title: 'Related order-tracking scenarios',
    items: [
      { title: 'Delayed shipments', body: 'Explains a delay using the real carrier status instead of a generic apology.' },
      { title: 'Lost package claims', body: 'Recognizes when tracking shows delivered but the customer says otherwise, and escalates appropriately.' },
      { title: 'Multiple items, one order', body: 'Reflects partial shipments and split fulfillment accurately.' },
      { title: 'Address mismatches', body: 'Flags when a shipping address looks incorrect based on tracking exceptions.' },
      { title: 'International shipments', body: '[Requires validation] for carrier-specific international tracking detail.' },
      { title: 'Escalation to a human', body: 'Unusual tracking situations are handed off instead of guessed at.' },
    ],
  },
  faqs: [
    { q: 'Does this replace my shipping carrier\'s tracking page?', a: 'No — it answers the support email itself, using the same underlying fulfillment and tracking data, so the customer doesn\'t have to go find that page themselves.' },
    { q: 'What if the order hasn\'t shipped yet?', a: 'tResolv explains the current fulfillment status accurately instead of guessing at a ship date.' },
    { q: 'Does it work with third-party tracking tools?', a: '[Requires validation] — check current integration support before relying on this for a specific tracking provider.' },
    { q: 'Can it handle "my package says delivered but I don\'t have it"?', a: 'Yes — this is treated as a higher-risk case and can be routed to a human rather than resolved automatically, depending on your confidence threshold.' },
  ],
  relatedLinks: [
    { href: '/shopify-ai-customer-support', label: 'Shopify AI Customer Support' },
    { href: '/ai-customer-support-employee', label: 'AI Customer Support Employee' },
    { href: '/ai-email-customer-support', label: 'AI Email Customer Support' },
    { href: '/tresolv-vs-zendesk', label: 'tResolv vs Zendesk' },
    { href: '/blog/how-shopify-stores-automate-customer-support', label: 'How Shopify Stores Automate Customer Support' },
  ],
  cta: {
    title: 'Stop answering "where is my order" by hand.',
    sub: 'Start your 14-day free trial. No credit card required.',
  },
};
