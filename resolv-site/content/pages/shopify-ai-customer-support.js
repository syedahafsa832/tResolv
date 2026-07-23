export const page = {
  path: '/shopify-ai-customer-support',
  seo: {
    title: 'Shopify AI Customer Support | Resolv',
    description:
      'Resolv connects to your Shopify store and Gmail inbox to answer order, refund, and shipping questions automatically — grounded in your real order data.',
    keywords: 'Shopify AI customer support, Shopify AI support, Shopify customer service AI',
  },
  hero: {
    eyebrow: 'Shopify AI Support',
    title: 'AI customer support',
    titleAccent: 'built for Shopify.',
    sub: 'Resolv reads your Shopify order data before it replies, so answers about shipping, refunds, and cancellations are grounded in what actually happened — not a generic script.',
    secondaryLabel: 'Install in under 10 minutes.',
  },
  problem: {
    id: 'problem',
    eyebrow: 'The problem',
    title: 'Generic helpdesks don\'t know your orders.',
    paragraphs: [
      'Most support tools treat every ticket the same, whether it\'s a marketing question or "where is my order #4471." Agents end up tabbing into Shopify to look up order status, shipping, and refund eligibility for almost every email.',
      'That lookup step is where most of the time goes — not writing the reply.',
    ],
  },
  solution: {
    id: 'solution',
    alt: true,
    eyebrow: 'The solution',
    title: 'Order-aware replies, not templates.',
    paragraphs: [
      'Resolv is connected directly to your Shopify store. Before it drafts a reply, it checks the order: has it shipped, is it cancelled already, is it eligible for a refund under your policy.',
      'That context means the AI does not attempt to cancel an order that already shipped, or refund one that was already refunded — the class of mistake that makes AI support feel careless.',
    ],
    checks: [
      { label: 'Live order lookups —', detail: 'every reply about an order is checked against Shopify first.' },
      { label: 'Policy-aware refund logic —', detail: 'your return-window settings decide what the AI can promise.' },
      { label: 'Multi-store support —', detail: 'run more than one Shopify brand from a single Resolv console.' },
    ],
  },
  steps: {
    title: 'From Shopify order to resolved ticket',
    sub: 'No manual lookups. No copy-pasting order numbers between tabs.',
    steps: [
      { num: '01', title: 'Connect your Shopify store', body: 'Resolv reads order, fulfillment, and customer data the moment you connect — no manual sync required.' },
      { num: '02', title: 'Customer email arrives', body: 'Resolv matches the email to the right order automatically, even when the customer doesn\'t include the order number.' },
      { num: '03', title: 'Reply reflects the real order state', body: 'The draft — or the staged refund/cancellation — is built from what Shopify actually shows right now.' },
    ],
  },
  features: {
    title: 'Shopify-native, not Shopify-adjacent',
    features: [
      { icon: 'package', title: 'Order state awareness', body: 'Checks fulfillment and refund status before replying, so it never contradicts what already happened to an order.', note: 'No duplicate actions' },
      { icon: 'refund', title: 'Refund and cancellation actions', body: 'Stages refunds, cancellations, and address changes directly against the Shopify order for your approval.', note: 'Always requires your tap' },
      { icon: 'layers', title: 'Multi-brand console', body: 'Manage every Shopify store you run from one login, with conversations and approvals kept separate per brand.', note: 'One login, every brand' },
      { icon: 'mail', title: 'Gmail native', body: 'Connects via Google OAuth and processes email inside Google\'s infrastructure — nothing is copied to Resolv\'s servers.', note: 'Emails never leave Google' },
    ],
  },
  useCases: {
    title: 'Common Shopify support requests, automated',
    items: [
      { title: '"Where is my order?"', body: 'Answered with live tracking and fulfillment status, not a generic shipping policy link.' },
      { title: '"I want to cancel"', body: 'Checked against fulfillment status before staging the cancellation for approval.' },
      { title: '"Can I get a refund?"', body: 'Checked against your return window and order state before a refund is staged.' },
      { title: '"Can you change my address?"', body: 'The new address is parsed and staged as a Shopify order update for your review.' },
      { title: 'Size and product questions', body: 'Answered from your store\'s product and sizing information.' },
      { title: 'Multiple stores', body: 'Every brand\'s Shopify data and conversations stay separate in one console.' },
    ],
  },
  faqs: [
    { q: 'Does Resolv need custom setup to work with my Shopify store?', a: 'No. Connecting Shopify is a single step, and Resolv begins reading order data immediately. Most brands are fully live within 10 minutes.' },
    { q: 'Can it handle more than one Shopify store?', a: 'Yes. Multi-brand plans let you run several Shopify stores from one Resolv console, with each store\'s data and approvals kept separate.' },
    { q: 'Will it ever refund or cancel an order without asking me?', a: 'No. Refunds, cancellations, exchanges, and address changes are always staged for your one-tap approval before Shopify is updated.' },
    { q: 'What if the order data in Shopify changes after the AI drafts a reply?', a: 'Resolv checks the live order state at the time of each action, so a stale draft cannot trigger an action against outdated order information.' },
  ],
  relatedLinks: [
    { href: '/ai-customer-support-employee', label: 'AI Customer Support Employee' },
    { href: '/ai-refund-automation', label: 'AI Refund Automation' },
    { href: '/ai-return-automation', label: 'AI Return Automation' },
    { href: '/ai-order-tracking-automation', label: 'AI Order Tracking Automation' },
  ],
  cta: {
    title: 'Give your Shopify inbox an AI employee.',
    sub: 'Start your 14-day free trial. No credit card required.',
  },
};
