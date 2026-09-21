import { sharedRows, OFFICIAL_SOURCES } from './shared';

export const page = {
  path: '/tresolv-vs-gorgias',
  seo: {
    title: 'tResolv vs Gorgias | AI Customer Support Compared | tResolv',
    description:
      'How tResolv compares to Gorgias for Shopify customer support: AI employee positioning, staged financial actions, and approval-first governance.',
    keywords: 'tResolv vs Gorgias, Gorgias alternative, Gorgias comparison',
  },
  hero: {
    eyebrow: 'tResolv vs Gorgias',
    title: 'tResolv vs Gorgias:',
    titleAccent: 'an AI employee vs a helpdesk platform.',
    sub: 'Both connect to Shopify. The difference is philosophy, Gorgias is a conversational AI platform you operate; tResolv is an AI employee that works the inbox and asks before it touches money.',
  },
  intro: [
    'Gorgias is a well-established conversational AI platform built for ecommerce, with deep Shopify action support. If you already use Gorgias, this page is not trying to tell you it\'s bad, it\'s explaining what tResolv does differently.',
    'The core difference is not a feature list. It\'s whether the tool is something your team operates, or something that works on its own and asks for your approval only when money is involved.',
  ],
  table: {
    competitorName: 'Gorgias',
    rows: [
      { label: 'Category', resolv: 'AI customer support employee', competitor: 'Conversational AI platform for ecommerce' },
      { label: 'Built for Shopify', resolv: true, competitor: true },
      { label: 'Financial actions always require approval', resolv: 'Yes, refunds, cancellations, and address changes always stage for your one-tap approval', competitor: 'Gorgias offers configurable workflows. Check current documentation for how financial actions are handled in your implementation.' },
      { label: 'AI draft confidence visibility', resolv: 'Confidence score shown on every drafted reply.', competitor: 'Check current product documentation.' },
      { label: 'Gmail-native (no separate inbox)', resolv: true, competitor: 'Uses a dedicated customer support workspace. See Gorgias documentation for current email workflow options.' },
      { label: 'AI resolution approach', resolv: 'Designed to automate a large share of repetitive customer conversations while keeping financial actions under human approval.', competitor: 'Not publicly confirmed.' },
      ...sharedRows('Gorgias', { aiClaim: 'Yes, a conversational AI platform for ecommerce (per Gorgias)' }),
    ],
  },
  sources: OFFICIAL_SOURCES.Gorgias,
  differences: {
    id: 'differences',
    eyebrow: 'Key differences',
    title: 'What are the main differences between tResolv and Gorgias?',
    checks: [
      { label: 'Scope:', detail: 'Gorgias is a conversational AI platform for ecommerce with broad Shopify action support (per Gorgias\'s own positioning). tResolv is narrower: an AI employee for Shopify support email and storefront chat.' },
      { label: 'Where the work happens:', detail: 'tResolv works inside the Gmail inbox you already use. Gorgias uses a dedicated customer support workspace (see the table above).' },
      { label: 'Approvals for money:', detail: 'tResolv stages every refund, cancellation, and address change for your one-tap approval by default. How financial actions are handled in a Gorgias setup: not verified here, see Gorgias\'s documentation.' },
      { label: 'Setup and pricing:', detail: 'tResolv typically connects to Gmail and Shopify in under 10 minutes. tResolv plans are $49, $99, and $249+ per month with a 14-day free trial and no credit card required. Gorgias setup time and pricing: not verified here, see its pricing page.' },
    ],
  },
  whoFor: {
    left: {
      title: 'Choose Gorgias if…',
      items: [
        'You want a full conversational AI platform with broad Shopify action support (per Gorgias\'s own positioning).',
        'Your team is already invested in the Gorgias ecosystem and workflows.',
        'You want a dedicated helpdesk interface separate from your email inbox.',
      ],
    },
    right: {
      title: 'Choose tResolv if…',
      items: [
        'You want AI to work directly inside the Gmail inbox you already use.',
        'You want every refund, cancellation, and address change staged for your approval by default.',
        'You want a visible confidence score on every AI-drafted reply.',
      ],
    },
  },
  whenBetter: {
    id: 'when-better',
    alt: true,
    eyebrow: 'When tResolv is the better fit',
    title: 'Choose tResolv when governance matters as much as automation.',
    paragraphs: [
      'If your priority is a platform that resolves conversations autonomously while keeping an explicit, visible approval step on anything financial, tResolv is built around that requirement specifically, not as a setting to configure, but as the default behavior.',
      'If your evaluation depends on specific Shopify workflows, compare the latest feature documentation from both products before making a decision.',
    ],
  },
  migration: {
    id: 'migration',
    eyebrow: 'Switching or adding tResolv',
    title: 'What should you consider before moving from Gorgias to tResolv?',
    paragraphs: [
        'tResolv is not a drop-in replacement for a full helpdesk, so the useful question is what you would change and what you would keep.',
      ],
    checks: [
      { label: 'Your inbox:', detail: 'tResolv reads a Gmail support address. Check that your customer email can reach one before planning a move.' },
      { label: 'Your workflows:', detail: 'List the Gorgias workflows you rely on and confirm what would need a different approach. tResolv focuses on Shopify order questions, refunds, cancellations, and address changes, and routes exchanges to your support team.' },
      { label: 'Try it first:', detail: 'The 14-day free trial needs no credit card, so you can evaluate tResolv on your real inbox before changing anything.' },
      { label: 'Running both:', detail: 'Whether this makes sense depends on your setup. Not verified here.' },
    ],
  },
  faqs: [
    { q: 'We already use Gorgias, why would we switch?', a: 'You may not need to switch entirely. The question worth asking is whether you need another helpdesk platform to operate, or fewer repetitive conversations reaching your team in the first place, that\'s the problem tResolv is built to solve.' },
    { q: 'Is Gorgias worse than tResolv?', a: 'This page does not claim that. Gorgias has real strengths, particularly its established Shopify action depth. The comparison here is about philosophy, platform vs. employee, not a feature-by-feature "better/worse" claim.' },
    { q: 'Does tResolv have the same Shopify actions as Gorgias?', a: 'tResolv supports staged refunds, cancellations, and address changes, all requiring your approval; exchanges are routed to your support team. For a full feature-by-feature comparison, check Gorgias\'s current documentation directly.' },
    { q: 'Can I run tResolv alongside Gorgias?', a: 'This depends on your specific setup, evaluate your support workflow to determine whether running both systems makes sense for your team.' },
    { q: 'What is the main difference between tResolv and Gorgias?', a: 'Gorgias is a conversational AI platform for ecommerce with its own support workspace. tResolv is an AI employee that works inside your Gmail inbox and stages every refund, cancellation, and address change for your approval.' },
    { q: 'How does tResolv pricing compare with Gorgias?', a: 'tResolv plans are $49, $99, and $249+ per month with a 14-day free trial and no credit card required. Gorgias pricing is not verified here; check its pricing page for current plans.' },
  ],
  relatedLinks: [
    { href: '/ai-customer-support-employee', label: 'AI Customer Support Employee' },
    { href: '/gorgias-alternatives', label: 'Gorgias Alternatives' },
    { href: '/tresolv-vs-zendesk', label: 'tResolv vs Zendesk' },
    { href: '/blog/best-ai-customer-support-tools', label: 'Best AI Customer Support Tools for Shopify Brands' },
  ],
  cta: {
    title: 'See the AI employee approach for yourself.',
    sub: 'Start your 14-day free trial. No credit card required.',
  },
};
