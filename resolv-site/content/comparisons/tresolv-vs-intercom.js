import { sharedRows, OFFICIAL_SOURCES } from './shared';

export const page = {
  path: '/tresolv-vs-intercom',
  seo: {
    title: 'tResolv vs Intercom | AI Customer Support Compared | tResolv',
    description:
      'How tResolv compares to Intercom for Shopify customer support: a dedicated Shopify AI employee vs. a broad AI-first communication platform.',
    keywords: 'tResolv vs Intercom, Intercom alternative, Intercom comparison',
  },
  hero: {
    eyebrow: 'tResolv vs Intercom',
    title: 'tResolv vs Intercom:',
    titleAccent: 'a dedicated Shopify worker vs. a communication platform.',
    sub: 'Intercom is a strong, broadly positioned AI-first customer communication platform. tResolv is a dedicated AI employee built around one job: Shopify support email.',
  },
  intro: [
    'Intercom has invested heavily in AI-first customer service and serves a broad range of businesses well beyond ecommerce. That breadth is a genuine strength for teams needing a general communication platform.',
    'tResolv narrows the scope deliberately: it is built around Gmail and Shopify specifically, for brands who want AI handling that one workflow well rather than a general platform they configure themselves.',
  ],
  table: {
    competitorName: 'Intercom',
    rows: [
      { label: 'Category', resolv: 'AI customer support employee', competitor: 'AI-first customer service platform' },
      { label: 'Primary focus', resolv: 'Shopify order support via Gmail', competitor: 'Broad customer communication across channels' },
      { label: 'Shopify order-state awareness', resolv: 'Yes, checks live fulfillment and refund status before replying', competitor: 'Not publicly confirmed.' },
      { label: 'Financial actions always require approval', resolv: true, competitor: 'Not publicly confirmed.' },
      { label: 'AI draft confidence visibility', resolv: 'Confidence score shown on every drafted reply.', competitor: 'Check current product documentation.' },
      { label: 'Setup time', resolv: 'Typically under 10 minutes', competitor: 'Varies depending on configuration.' },
      ...sharedRows('Intercom', { aiClaim: 'Yes, an AI-first customer service platform (per Intercom)' }),
    ],
  },
  sources: OFFICIAL_SOURCES.Intercom,
  differences: {
    id: 'differences',
    eyebrow: 'Key differences',
    title: 'What are the main differences between tResolv and Intercom?',
    checks: [
      { label: 'Scope:', detail: 'Intercom is a broadly positioned AI-first customer service platform used across businesses and channels. tResolv is a dedicated AI employee for Shopify support email and storefront chat.' },
      { label: 'Purpose-built vs. configured:', detail: 'tResolv comes set up around Gmail and Shopify. A general-purpose platform is configured toward a use case; how much configuration Shopify support needs in Intercom: not verified here.' },
      { label: 'Approvals for money:', detail: 'tResolv stages every refund, cancellation, and address change for your one-tap approval. Intercom\'s approval behavior: not verified here, see its documentation.' },
      { label: 'Setup and pricing:', detail: 'tResolv typically connects to Gmail and Shopify in under 10 minutes. tResolv plans are $49, $99, and $249+ per month with a 14-day free trial and no credit card required. Intercom setup time and pricing: not verified here, see its pricing page.' },
    ],
  },
  whoFor: {
    left: {
      title: 'Choose Intercom if…',
      items: [
        'You need a broad AI-first communication platform across multiple channels.',
        'Your team is outside Shopify-specific ecommerce.',
        'You want a general-purpose customer messaging platform that you configure yourself.',
      ],
    },
    right: {
      title: 'Choose tResolv if…',
      items: [
        'You are a Shopify brand and want AI handling Gmail support specifically.',
        'You want order-aware replies without connecting a separate messaging layer.',
        'You want financial actions staged for approval by default, not configured after the fact.',
      ],
    },
  },
  whenBetter: {
    id: 'when-better',
    alt: true,
    eyebrow: 'When tResolv is the better fit',
    title: 'Choose tResolv when Shopify email support is the job to be done.',
    paragraphs: [
      'If the problem you\'re solving is specifically "resolve Shopify support email automatically, with financial actions staged for approval," tResolv is purpose-built for that scope rather than a broader platform you\'d need to configure toward it.',
      'If you need a general-purpose AI communication layer across many channels and use cases beyond ecommerce support, Intercom\'s broader platform may be the more natural fit.',
    ],
  },
  migration: {
    id: 'migration',
    eyebrow: 'Switching or adding tResolv',
    title: 'What should you consider before adding tResolv alongside or instead of Intercom?',
    paragraphs: [
        'Start by naming the job. If it is Shopify support email, tResolv is scoped to it. If Intercom also serves other kinds of customer messaging, that work stays outside tResolv\'s scope.',
      ],
    checks: [
      { label: 'Your inbox:', detail: 'tResolv reads a Gmail support address. Check that your customer email can reach one.' },
      { label: 'Live chat:', detail: 'tResolv includes a storefront chat widget. Intercom\'s chat capabilities: not verified here.' },
      { label: 'Try it first:', detail: 'The 14-day free trial needs no credit card, so you can evaluate tResolv on your real inbox before changing anything.' },
    ],
  },
  faqs: [
    { q: 'Is Intercom a bad fit for Shopify brands?', a: 'Not necessarily, many businesses use Intercom successfully. The distinction here is scope: Intercom is a broad platform, tResolv is a focused Shopify support employee.' },
    { q: 'Can tResolv do live chat like Intercom?', a: 'tResolv includes a storefront chat widget that answers order, refund, and shipping questions with the same guardrails as email. Intercom\'s chat capabilities are not verified here; check its documentation before assuming feature parity.' },
    { q: 'Which is easier to set up?', a: 'tResolv is designed for a fast, no-code setup connecting Gmail and Shopify, typically live within 10 minutes. Setup time for Intercom depends on your configuration, check current documentation for a direct comparison.' },
    { q: 'Do both keep financial actions under human approval?', a: 'tResolv always stages refunds, cancellations, and address changes for your one-tap approval. Check Intercom\'s current documentation for its approval workflow behavior.' },
    { q: 'What is the main difference between tResolv and Intercom?', a: 'Intercom is a broad AI-first customer service platform. tResolv is a focused AI employee for Shopify brands that works inside Gmail and stages every refund, cancellation, and address change for approval.' },
    { q: 'How does tResolv pricing compare with Intercom?', a: 'tResolv plans are $49, $99, and $249+ per month with a 14-day free trial and no credit card required. Intercom pricing is not verified here; check its pricing page for current plans.' },
  ],
  relatedLinks: [
    { href: '/ai-customer-support-employee', label: 'AI Customer Support Employee' },
    { href: '/ai-email-customer-support', label: 'AI Email Customer Support' },
    { href: '/tresolv-vs-gorgias', label: 'tResolv vs Gorgias' },
    { href: '/blog/what-is-an-ai-customer-support-agent', label: 'What Is an AI Customer Support Agent?' },
  ],
  cta: {
    title: 'A dedicated AI employee for your Shopify inbox.',
    sub: 'Start your 14-day free trial. No credit card required.',
  },
};
