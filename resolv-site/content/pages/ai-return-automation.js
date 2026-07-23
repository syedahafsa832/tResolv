export const page = {
  path: '/ai-return-automation',
  seo: {
    title: 'AI Return Automation | Resolv',
    description:
      'Resolv handles return requests end to end — checking eligibility, drafting the reply, and staging exchanges or refunds for your approval.',
    keywords: 'AI return automation, Shopify return automation, AI returns assistant',
  },
  hero: {
    eyebrow: 'AI Return Automation',
    title: 'Returns, handled —',
    titleAccent: 'without losing customer trust.',
    sub: 'Resolv checks return eligibility, drafts the reply, and stages the exchange or refund for your approval — so returns move fast without becoming a liability.',
  },
  problem: {
    id: 'problem',
    eyebrow: 'The problem',
    title: 'Returns are slow, and slow feels bad.',
    paragraphs: [
      'A return request usually needs a reply within hours to feel responsive, but the process — checking eligibility, explaining next steps, staging a refund or exchange — takes real time to do by hand.',
      'Automating the reply badly is worse than being slow: customers notice a return response that ignores their actual order or policy exceptions.',
    ],
  },
  solution: {
    id: 'solution',
    alt: true,
    eyebrow: 'The solution',
    title: 'Fast, because it\'s grounded in the real order.',
    paragraphs: [
      'Resolv checks the order against your return policy, explains the process clearly, and stages the resulting exchange or refund for your approval — all within minutes of the request arriving.',
      'Because every step is grounded in your actual Shopify data and policy settings, the reply holds up to scrutiny instead of reading like a generic returns FAQ.',
    ],
    checks: [
      { label: 'Fast first response —', detail: 'return requests are answered in minutes, not hours.' },
      { label: 'Policy-grounded —', detail: 'eligibility reflects your actual return window and rules, not a guess.' },
      { label: 'Exchanges and refunds staged —', detail: 'the resulting action always waits for your approval.' },
    ],
  },
  steps: {
    title: 'From return request to resolution',
    steps: [
      { num: '01', title: 'Return request arrives', body: 'Resolv identifies the request type — exchange, refund, or store credit — and matches it to the order.' },
      { num: '02', title: 'Eligibility is checked', body: 'The order is checked against your return window and policy before any commitment is made in the reply.' },
      { num: '03', title: 'Action is staged for approval', body: 'The resulting exchange or refund waits in your queue until you approve it.' },
    ],
  },
  features: {
    title: 'Return handling that respects your policy',
    features: [
      { icon: 'returns', title: 'Policy-aware return logic', body: 'Return eligibility is checked against your store\'s actual return window and product rules.', note: 'Configurable per brand' },
      { icon: 'refund', title: 'Staged exchanges and refunds', body: 'Whatever the return resolves to, the resulting Shopify action is staged for your one-tap approval.', note: 'Never automatic' },
      { icon: 'clock', title: 'Fast first response', body: 'Return requests get an accurate, policy-grounded reply within minutes of arriving.', note: 'No overnight wait' },
      { icon: 'shield', title: 'Order-state checks', body: 'Verifies the order hasn\'t already been returned or refunded before staging a new action.', note: 'No duplicate processing' },
    ],
  },
  useCases: {
    title: 'Return scenarios Resolv handles',
    items: [
      { title: 'Size or fit exchanges', body: 'Drafted with your sizing information and staged as an exchange.' },
      { title: 'Damaged item returns', body: 'Handled with an empathetic reply and staged as a refund or replacement.' },
      { title: 'Store credit requests', body: '[Requires validation] — confirm current support for store-credit-specific return flows.' },
      { title: 'Out-of-window returns', body: 'Explained accurately against your policy rather than promised automatically.' },
      { title: 'Return shipping questions', body: 'Answered using your store\'s configured return shipping process.' },
      { title: 'Disputed returns', body: 'Escalated to a human when the situation falls outside your confidence threshold.' },
    ],
  },
  faqs: [
    { q: 'Does Resolv decide return eligibility on its own?', a: 'It checks eligibility against your store\'s configured return window and policy, but the resulting refund or exchange is always staged for your approval.' },
    { q: 'Can it process an exchange directly in Shopify?', a: 'It stages the exchange as an action tied to the order; you approve before it is finalized.' },
    { q: 'What about return shipping labels?', a: '[Requires validation] — confirm current support for generating return labels automatically.' },
    { q: 'How is this different from the refund automation page?', a: 'Refund automation covers requests that start as "refund me." Return automation covers the broader return flow, which can resolve to an exchange, store credit, or refund.' },
  ],
  relatedLinks: [
    { href: '/ai-refund-automation', label: 'AI Refund Automation' },
    { href: '/ai-order-tracking-automation', label: 'AI Order Tracking Automation' },
    { href: '/shopify-ai-customer-support', label: 'Shopify AI Customer Support' },
  ],
  cta: {
    title: 'Make returns fast without losing control.',
    sub: 'Start your 14-day free trial. No credit card required.',
  },
};
