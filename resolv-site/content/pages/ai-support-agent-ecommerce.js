export const page = {
  path: '/ai-support-agent-ecommerce',
  seo: {
    title: 'AI Support Agent for Ecommerce | tResolv',
    description:
      'An AI support agent built for ecommerce brands, resolves routine post-purchase questions automatically and stages every refund or cancellation for approval.',
    keywords: 'AI support agent ecommerce, ecommerce AI support, AI customer support ecommerce',
  },
  hero: {
    eyebrow: 'AI Support Agent for Ecommerce',
    title: 'The support agent',
    titleAccent: 'ecommerce brands actually need.',
    sub: 'Post-purchase questions, order status, refunds, exchanges, cancellations, are the bulk of ecommerce support. tResolv resolves them automatically and keeps financial actions under your approval.',
  },
  problem: {
    id: 'problem',
    eyebrow: 'The problem',
    title: 'Post-purchase support is repetitive by nature.',
    paragraphs: [
      'Ecommerce support tickets are overwhelmingly the same handful of requests: order status, refund requests, cancellations, exchanges, and address corrections.',
      'General-purpose helpdesk software wasn\'t built around that pattern, it treats every ticket type the same, leaving your team to do the repetitive work by hand.',
    ],
  },
  solution: {
    id: 'solution',
    alt: true,
    eyebrow: 'The solution',
    title: 'An agent built around the ecommerce ticket pattern.',
    paragraphs: [
      'tResolv is built specifically around the post-purchase questions ecommerce brands get every day. It reads the order, understands what the customer is asking, and drafts (or stages) the correct response.',
      'High-confidence, non-financial replies send automatically. Anything involving money always waits for your approval first.',
    ],
    checks: [
      { label: 'Built for post-purchase support:', detail: 'order status, refunds, exchanges, and cancellations are the core use case, not an afterthought.' },
      { label: 'Confidence-gated automation:', detail: 'you control how much the AI is trusted to send on its own.' },
      { label: 'Approval required for money:', detail: 'refunds and cancellations never execute without your tap.' },
    ],
  },
  steps: {
    title: 'How the agent handles a ticket',
    steps: [
      { num: '01', title: 'Email arrives', body: 'tResolv classifies the request and matches it to the customer\'s order automatically.' },
      { num: '02', title: 'AI drafts with confidence', body: 'The reply is grounded in the order\'s real state, with a visible confidence score.' },
      { num: '03', title: 'Send or stage for approval', body: 'Routine replies go out automatically. Refunds and cancellations wait for your review.' },
    ],
  },
  features: {
    title: 'Purpose-built for ecommerce tickets',
    features: [
      { icon: 'bolt', title: 'Resolution engine', body: 'Resolves the majority of routine post-purchase emails without a human touching them.', note: '86.5% resolution rate across real Shopify workflows' },
      { icon: 'shield', title: 'Staged financial actions', body: 'Refunds, cancellations, and exchanges are staged for your one-tap approval, never automatic.', note: 'Zero unauthorized financial actions' },
      { icon: 'gauge', title: 'Confidence scoring', body: 'Every draft carries a confidence percentage so you know how sure the AI is before anything sends.', note: 'You set the threshold' },
      { icon: 'clock', title: '24/7 coverage', body: 'Support requests are read and answered outside business hours, not just during your team\'s shift.', note: 'No overnight backlog' },
    ],
  },
  useCases: {
    title: 'What ecommerce brands automate first',
    items: [
      { title: 'Order status inquiries', body: 'The single most common ticket type, answered instantly with live order data.' },
      { title: 'Refund requests', body: 'Checked against your return policy before a refund is staged for approval.' },
      { title: 'Cancellation requests', body: 'Verified against fulfillment status before staging.' },
      { title: 'Exchanges', body: 'Sized and product-swap requests are routed with the relevant order context attached.' },
      { title: 'Address corrections', body: 'Parsed from plain language and staged as an order update.' },
      { title: 'Escalations', body: 'Anything below your confidence threshold is handed to a human instead of guessed at.' },
    ],
  },
  faqs: [
    { q: 'How is this different from a live chat widget?', a: 'tResolv works inside your email inbox, where most ecommerce support actually happens, rather than only inside an on-site chat widget.' },
    { q: 'Does it require a developer to set up?', a: 'No. Connecting Gmail and Shopify takes about 10 minutes and requires no code.' },
    { q: 'Can I control how aggressive the automation is?', a: 'Yes. The confidence threshold is yours to set, and financial actions always require approval regardless of that setting.' },
    { q: 'What ecommerce platforms does this work with?', a: 'tResolv is built Shopify-first. Support for other ecommerce platforms is not currently confirmed.' },
  ],
  relatedLinks: [
    { href: '/ai-customer-support-employee', label: 'AI Customer Support Employee' },
    { href: '/shopify-ai-customer-support', label: 'Shopify AI Customer Support' },
    { href: '/ai-refund-automation', label: 'AI Refund Automation' },
    { href: '/ai-order-tracking-automation', label: 'AI Order Tracking Automation' },
    { href: '/gorgias-alternatives', label: 'Gorgias Alternatives' },
    { href: '/blog/ai-automation-for-shopify-stores', label: 'AI Automation for Shopify Stores' },
  ],
  cta: {
    title: 'Put an AI agent on your ecommerce inbox.',
    sub: 'Start your 14-day free trial. No credit card required.',
  },
};
