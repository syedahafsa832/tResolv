export const page = {
  path: '/ai-refund-automation',
  seo: {
    title: 'AI Refund Automation | tResolv',
    description:
      'tResolv drafts refund responses and stages the Shopify refund for your one-tap approval, it never issues a refund without you.',
    keywords: 'AI refund automation, refund automation Shopify, AI refund assistant',
  },
  hero: {
    eyebrow: 'AI Refund Automation',
    title: 'Refunds, drafted.',
    titleAccent: 'Never sent without you.',
    sub: 'tResolv checks a refund request against the order and your return policy, drafts the response, and stages the Shopify refund for your one-tap approval, every time.',
  },
  problem: {
    id: 'problem',
    eyebrow: 'The problem',
    title: 'Refunds are the request brands trust AI with least.',
    paragraphs: [
      'Refund requests need real judgment: is the order eligible, is it within the return window, has it already been refunded. Getting it wrong costs money or damages trust.',
      'That is exactly why most brands won\'t let AI touch refunds at all, even though the reply itself (checking eligibility, explaining the process) is repetitive work.',
    ],
  },
  solution: {
    id: 'solution',
    alt: true,
    eyebrow: 'The solution',
    title: 'AI drafts it. You approve it.',
    paragraphs: [
      'tResolv checks the order against your return policy and current refund status, then drafts a reply and stages the refund in Shopify, but the refund itself does not execute until you tap approve.',
      'This is a deliberate design choice, not a limitation: the repetitive part (checking eligibility, writing the response) is automated, and the part with real financial consequence stays with you.',
    ],
    checks: [
      { label: 'Never executes automatically:', detail: 'every refund waits for your one-tap approval, regardless of confidence score.' },
      { label: 'Checked against your policy:', detail: 'checks the order and available store information before preparing a refund for review.' },
      { label: 'No duplicate refunds:', detail: 'checks whether the order was already refunded before staging anything.' },
    ],
  },
  steps: {
    title: 'How a refund request is handled',
    steps: [
      { num: '01', title: 'Customer requests a refund', body: 'tResolv matches the email to the order and checks its refund and return-eligibility status.' },
      { num: '02', title: 'Refund is staged, not sent', body: 'A reply is drafted and the Shopify refund is prepared, waiting in your approval queue.' },
      { num: '03', title: 'You approve with one tap', body: 'Only after your approval does the refund execute in Shopify and the reply send.' },
    ],
  },
  features: {
    title: 'Built for the highest-stakes ticket type',
    features: [
      { icon: 'refund', title: 'Staged refund actions', body: 'Every refund is prepared against the real Shopify order and held for your approval before it executes.', note: 'Zero unauthorized financial actions' },
      { icon: 'shield', title: 'Policy-aware eligibility', body: 'Refund eligibility is checked against the order and available store information before a refund is prepared, not a generic assumption.', note: 'Built around your store\'s refund workflow' },
      { icon: 'package', title: 'Duplicate-refund protection', body: 'Checks current order state so it never stages a second refund on an order already refunded.', note: 'No embarrassing double refunds' },
      { icon: 'gauge', title: 'Confidence scoring', body: 'Every drafted response shows a confidence score, so you know how the AI reasoned about the request.', note: 'Full visibility before you approve' },
    ],
  },
  useCases: {
    title: 'Refund scenarios tResolv handles',
    items: [
      { title: 'Standard return-window refunds', body: 'Checked against your policy and staged for approval.' },
      { title: 'Damaged or defective items', body: 'Drafted with an empathetic response and staged as a refund or replacement candidate.' },
      { title: 'Already-refunded orders', body: 'Recognized and explained instead of staging a duplicate action.' },
      { title: 'Out-of-window requests', body: 'Drafted with a policy-accurate explanation rather than an automatic refund.' },
      { title: 'Escalated disputes', body: 'Handed to a human when the situation falls outside your confidence threshold.' },
    ],
  },
  faqs: [
    { q: 'Can tResolv issue a refund without my approval?', a: 'No. Every refund is staged and requires your one-tap approval before it executes in Shopify, regardless of confidence level.' },
    { q: 'How does it decide if an order is refund-eligible?', a: 'It checks the order\'s current state and the available information about your return window and policies before deciding whether a refund is eligible.' },
    { q: 'What if a customer asks for a refund on an already-refunded order?', a: 'tResolv checks the live order state, recognizes it was already refunded, and drafts an explanation instead of staging a duplicate refund.' },
    { q: 'When does tResolv ask for approval?', a: 'Refunds always require approval before they are executed in Shopify.' },
  ],
  relatedLinks: [
    { href: '/ai-return-automation', label: 'AI Return Automation' },
    { href: '/shopify-ai-customer-support', label: 'Shopify AI Customer Support' },
    { href: '/ai-customer-support-employee', label: 'AI Customer Support Employee' },
    { href: '/gorgias-alternatives', label: 'Gorgias Alternatives' },
    { href: '/blog/how-to-reduce-ecommerce-support-tickets', label: 'How to Reduce Ecommerce Support Tickets' },
  ],
  cta: {
    title: 'Automate the refund reply. Keep the refund decision.',
    sub: 'Start your 14-day free trial. No credit card required.',
  },
};
