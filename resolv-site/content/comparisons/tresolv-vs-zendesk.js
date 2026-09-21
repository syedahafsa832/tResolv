import { sharedRows, OFFICIAL_SOURCES } from './shared';

export const page = {
  path: '/tresolv-vs-zendesk',
  seo: {
    title: 'tResolv vs Zendesk | AI Support for Shopify Brands | tResolv',
    description:
      'How tResolv compares to Zendesk for Shopify customer support: a focused AI employee for ecommerce vs. a broad enterprise service platform.',
    keywords: 'tResolv vs Zendesk, Zendesk alternative, Zendesk comparison',
  },
  hero: {
    eyebrow: 'tResolv vs Zendesk',
    title: 'tResolv vs Zendesk:',
    titleAccent: 'built for Shopify, not enterprise support teams.',
    sub: 'Zendesk is a mature, broad enterprise customer service platform. tResolv is a focused AI employee built specifically around Shopify order and inbox workflows.',
  },
  intro: [
    'Zendesk serves a very wide range of support teams, from small businesses to large enterprises, across many industries. That breadth is a real strength for complex, multi-channel enterprise support operations.',
    'tResolv is not trying to be a general-purpose enterprise platform. It is built specifically for Shopify brands who want an AI employee handling their Gmail inbox and Shopify order questions.',
  ],
  table: {
    competitorName: 'Zendesk',
    rows: [
      { label: 'Category', resolv: 'AI customer support employee', competitor: 'Enterprise customer service platform' },
      { label: 'Shopify-native order actions', resolv: 'Yes, refunds, cancellations, address changes staged directly from order data', competitor: 'Not a primary focus of Zendesk\'s publicly available positioning. Check current documentation for specifics.' },
      { label: 'Setup complexity', resolv: 'Gmail + Shopify connection, typically live within 10 minutes', competitor: 'Designed for enterprise deployments and a wide range of support use cases. Setup varies depending on configuration.' },
      { label: 'Primary buyer', resolv: 'Shopify brand owners and small support teams', competitor: 'Enterprise support organizations' },
      { label: 'Financial approval workflow', resolv: 'Refunds, cancellations, and address changes require approval before execution.', competitor: 'Not publicly confirmed as a default workflow.' },
      { label: 'AI draft confidence visibility', resolv: 'Confidence score shown on every drafted reply.', competitor: 'Check current product documentation.' },
      ...sharedRows('Zendesk'),
    ],
  },
  sources: OFFICIAL_SOURCES.Zendesk,
  differences: {
    id: 'differences',
    eyebrow: 'Key differences',
    title: 'What are the main differences between tResolv and Zendesk?',
    checks: [
      { label: 'Scope:', detail: 'Zendesk is a broad customer service platform used by teams from small businesses to large enterprises across many industries. tResolv is deliberately narrow: an AI employee for Shopify support email and storefront chat.' },
      { label: 'Shopify focus:', detail: 'tResolv is built around Shopify order data and staged Shopify actions. Zendesk\'s Shopify-specific capabilities: not verified here, see its documentation.' },
      { label: 'Approvals for money:', detail: 'tResolv stages every refund, cancellation, and address change for your one-tap approval. Zendesk\'s default approval workflow: not verified here.' },
      { label: 'Setup and pricing:', detail: 'tResolv typically connects to Gmail and Shopify in about 10 minutes. tResolv plans are $49, $99, and $249+ per month with a 14-day free trial and no credit card required. Zendesk timelines vary by plan and use case; its pricing is not verified here.' },
    ],
  },
  whoFor: {
    left: {
      title: 'Choose Zendesk if…',
      items: [
        'You run a large or enterprise support organization with complex, multi-channel needs.',
        'You need extensive customization and third-party integrations across many departments.',
        'Your business is outside Shopify-first ecommerce.',
      ],
    },
    right: {
      title: 'Choose tResolv if…',
      items: [
        'You are a Shopify brand and want to avoid standing up a full enterprise support stack.',
        'You are a small team and want the AI to resolve tickets, not just organize them.',
        'You want to keep using Gmail rather than migrate to a new platform.',
      ],
    },
  },
  whenBetter: {
    id: 'when-better',
    alt: true,
    eyebrow: 'When tResolv is the better fit',
    title: 'Choose tResolv when you want simplicity, not enterprise scope.',
    paragraphs: [
      'If your team is a Shopify brand looking for an AI that resolves order-related email automatically without a lengthy enterprise implementation, tResolv is built around exactly that scope.',
      'If you run a large, multi-department support organization with needs beyond ecommerce, Zendesk\'s breadth may be a better structural fit, this page is not suggesting otherwise.',
    ],
  },
  migration: {
    id: 'migration',
    eyebrow: 'Switching or adding tResolv',
    title: 'What should you consider before moving from Zendesk to tResolv?',
    paragraphs: [
        'If Zendesk already runs your support across several channels, tResolv is more likely to take over one part of your workflow than to replace all of it.',
      ],
    checks: [
      { label: 'Channels:', detail: 'tResolv covers a Gmail support inbox and a storefront chat widget. If you rely on other channels in Zendesk, confirm how you would cover them.' },
      { label: 'Scope:', detail: 'Multi-department workflows and enterprise-scale customization are outside tResolv\'s intended scope.' },
      { label: 'Try it first:', detail: 'The 14-day free trial needs no credit card, so you can evaluate tResolv on your real inbox before changing anything.' },
    ],
  },
  faqs: [
    { q: 'Is tResolv trying to replace Zendesk for enterprise teams?', a: 'No. tResolv is built specifically for Shopify brands, not as a general enterprise service platform replacement.' },
    { q: 'We already have Zendesk set up, is switching worth it?', a: 'That depends on your team\'s needs. If Zendesk manages your support well, the more relevant question is whether AI is actually resolving tickets inside it or just organizing them.' },
    { q: 'Can I use tResolv alongside Zendesk?', a: 'tResolv is designed primarily for Shopify brands using Gmail and Shopify workflows. If your team already uses Zendesk, evaluate whether your support process requires both systems. Check current integration options before planning a deployment.' },
    { q: 'How long does tResolv take to set up compared to Zendesk?', a: 'Most Shopify brands connect Gmail and Shopify and are live within about 10 minutes. Zendesk implementation timelines vary by plan and use case, check current documentation for a direct comparison.' },
    { q: 'What is the main difference between tResolv and Zendesk?', a: 'Zendesk is a broad customer service platform for many kinds of teams. tResolv is a focused AI employee for Shopify brands that works inside Gmail and stages every refund, cancellation, and address change for approval.' },
    { q: 'How does tResolv pricing compare with Zendesk?', a: 'tResolv plans are $49, $99, and $249+ per month with a 14-day free trial and no credit card required. Zendesk pricing is not verified here; check its pricing page for current plans.' },
  ],
  relatedLinks: [
    { href: '/ai-customer-support-employee', label: 'AI Customer Support Employee' },
    { href: '/shopify-ai-customer-support', label: 'Shopify AI Customer Support' },
    { href: '/tresolv-vs-intercom', label: 'tResolv vs Intercom' },
    { href: '/blog/ai-support-agent-vs-chatbot', label: 'AI Support Agent vs Chatbot: What\'s the Difference?' },
  ],
  cta: {
    title: 'Simpler than an enterprise helpdesk. Built for Shopify.',
    sub: 'Start your 14-day free trial. No credit card required.',
  },
};
