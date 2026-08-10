export const page = {
  path: '/ai-return-automation',
  seo: {
    title: 'AI Return Automation | tResolv',
    description:
      'tResolv checks return eligibility and drafts an accurate reply for every request, staging the resulting refund for your approval. Exchanges are routed to your support team.',
    keywords: 'AI return automation, Shopify return automation, AI returns assistant',
  },
  hero: {
    eyebrow: 'AI Return Automation',
    title: 'Returns, handled:',
    titleAccent: 'without losing customer trust.',
    sub: 'tResolv checks return eligibility, drafts the reply, and stages the resulting refund for your approval, so returns move fast without becoming a liability. Exchanges are routed to your support team.',
  },
  problem: {
    id: 'problem',
    eyebrow: 'The problem',
    title: 'Returns are slow, and slow feels bad.',
    paragraphs: [
      'A return request usually needs a reply within hours to feel responsive, but the process, checking eligibility, explaining next steps, staging a refund or exchange, takes real time to do by hand.',
      'Automating the reply badly is worse than being slow: customers notice a return response that ignores their actual order or policy exceptions.',
    ],
  },
  solution: {
    id: 'solution',
    alt: true,
    eyebrow: 'The solution',
    title: 'Fast, because it\'s grounded in the real order.',
    paragraphs: [
      'tResolv checks the order against your return policy, explains the process clearly, and stages the resulting refund for your approval, all within minutes of the request arriving.',
      'Because every step is grounded in your actual Shopify data, the reply holds up to scrutiny instead of reading like a generic returns FAQ. When a return resolves to an exchange, it\'s routed to your support team, not yet a one-tap Shopify action.',
    ],
    checks: [
      { label: 'Fast first response:', detail: 'return requests are answered in minutes, not hours.' },
      { label: 'Policy-grounded:', detail: 'checks the order against the available return window information before responding, not a guess.' },
      { label: 'Refunds staged, exchanges routed:', detail: 'a refund resolution always waits for your approval; an exchange is handed to your support team.' },
    ],
  },
  steps: {
    title: 'From return request to resolution',
    steps: [
      { num: '01', title: 'Return request arrives', body: 'tResolv identifies the request type, exchange or refund, and matches it to the order.' },
      { num: '02', title: 'Eligibility is checked', body: 'The order is checked against your return window and policy before any commitment is made in the reply.' },
      { num: '03', title: 'Refunds stage, exchanges route to your team', body: 'A refund resolution waits in your approval queue. An exchange is routed to your support team to complete — full automation is coming soon.' },
    ],
  },
  features: {
    title: 'Return handling that respects your policy',
    features: [
      { icon: 'returns', title: 'Policy-aware return logic', body: 'Return eligibility is checked against your store\'s actual return window and product rules.', note: 'Built around your store\'s return workflow' },
      { icon: 'refund', title: 'Staged refunds, routed exchanges', body: 'A refund resolution is staged for your one-tap approval. An exchange resolution is routed to your support team while full automation is being built.', note: 'Refunds never automatic; exchanges coming soon' },
      { icon: 'clock', title: 'Fast first response', body: 'Return requests get an accurate, policy-grounded reply within minutes of arriving.', note: 'No overnight wait' },
      { icon: 'shield', title: 'Order-state checks', body: 'Verifies the order hasn\'t already been returned or refunded before staging a new action.', note: 'No duplicate processing' },
    ],
  },
  useCases: {
    title: 'Return scenarios tResolv handles',
    items: [
      { title: 'Size or fit exchanges', body: 'Drafted with your sizing information and routed to your support team to complete (coming soon to full automation).' },
      { title: 'Damaged item returns', body: 'Handled with an empathetic reply and staged as a refund or replacement.' },
      { title: 'Out-of-window returns', body: 'Explained accurately against your policy rather than promised automatically.' },
      { title: 'Return shipping questions', body: 'Answered using your store\'s configured return shipping process.' },
      { title: 'Disputed returns', body: 'Escalated to a human when the situation falls outside your confidence threshold.' },
    ],
  },
  faqs: [
    { q: 'Does tResolv decide return eligibility on its own?', a: 'It checks eligibility against the order and available return information, but a resulting refund is always staged for your approval, and a resulting exchange is routed to your support team.' },
    { q: 'Can it process an exchange directly in Shopify?', a: 'Not yet. Exchanges are drafted and routed to your support team to complete manually — full automation is coming soon. Refunds and cancellations are staged for your one-tap approval today.' },
    { q: 'How is this different from the refund automation page?', a: 'Refund automation covers requests that start as "refund me." Return automation covers the broader return flow, which can resolve to an exchange or a refund.' },
  ],
  relatedLinks: [
    { href: '/ai-refund-automation', label: 'AI Refund Automation' },
    { href: '/ai-order-tracking-automation', label: 'AI Order Tracking Automation' },
    { href: '/shopify-ai-customer-support', label: 'Shopify AI Customer Support' },
    { href: '/tresolv-vs-gorgias', label: 'tResolv vs Gorgias' },
    { href: '/blog/best-ai-customer-support-tools', label: 'Best AI Customer Support Tools for Shopify Brands' },
  ],
  cta: {
    title: 'Make returns fast without losing control.',
    sub: 'Start your 14-day free trial. No credit card required.',
  },
};
