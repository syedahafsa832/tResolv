import { sharedRows, OFFICIAL_SOURCES } from './shared';

export const page = {
  path: '/gorgias-alternatives',
  seo: {
    title: 'Gorgias Alternatives for Shopify Support | tResolv',
    description:
      'Looking for a Gorgias alternative? See how tResolv\'s AI-employee approach, staged financial actions, Gmail-native processing, compares.',
    keywords: 'Gorgias alternatives, Gorgias alternative, best Gorgias alternative',
  },
  hero: {
    eyebrow: 'Gorgias Alternatives',
    title: 'Looking for a',
    titleAccent: 'Gorgias alternative?',
    sub: 'If you\'re evaluating options beyond Gorgias, here\'s how tResolv\'s approach, an AI employee that works inside Gmail and stages financial actions for approval, differs.',
  },
  intro: [
    'Brands look for Gorgias alternatives for different reasons, pricing, wanting AI to work inside the inbox they already use, or wanting a different approach to governance around automated actions.',
    'This page is not a claim that Gorgias is bad. It\'s a look at one specific alternative, tResolv, and the philosophy behind it, so you can decide if it fits what you\'re looking for.',
  ],
  table: {
    competitorName: 'Gorgias',
    rows: [
      { label: 'Category', resolv: 'AI customer support employee', competitor: 'Conversational AI platform for ecommerce' },
      { label: 'Built for Shopify', resolv: true, competitor: true },
      { label: 'Works inside your existing Gmail inbox', resolv: true, competitor: 'Not publicly confirmed.' },
      { label: 'Financial actions always require approval', resolv: 'Yes, by default, not a setting to configure', competitor: 'Gorgias offers configurable workflows. Check current documentation for how financial actions are handled in your implementation.' },
      { label: 'AI draft confidence visibility', resolv: 'Confidence score shown on every drafted reply.', competitor: 'Check current product documentation.' },
      { label: 'AI resolution approach', resolv: 'Designed to automate a large share of repetitive customer conversations while keeping financial actions under human approval.', competitor: 'Not publicly confirmed.' },
      { label: 'Setup time', resolv: 'Typically under 10 minutes', competitor: 'Varies depending on configuration.' },
      ...sharedRows('Gorgias', { aiClaim: 'Yes, a conversational AI platform for ecommerce (per Gorgias)' }),
    ],
  },
  sources: OFFICIAL_SOURCES.Gorgias,
  differences: {
    id: 'differences',
    eyebrow: 'Key differences',
    title: 'What should you look for in a Gorgias alternative?',
    checks: [
      { label: 'Where the AI works:', detail: 'Inside a separate helpdesk interface, or inside the inbox you already use. tResolv works inside Gmail.' },
      { label: 'Financial governance:', detail: 'Whether refunds, cancellations, and address changes need human approval by default or are configurable. tResolv stages all three for your one-tap approval by default.' },
      { label: 'Shopify depth:', detail: 'How much of your Shopify order data and how many order actions the tool can use. Compare current documentation rather than marketing pages. tResolv supports staged refunds, cancellations, and address changes, and routes exchanges to your support team.' },
      { label: 'Setup effort and pricing:', detail: 'How long it takes to go live and how pricing scales with volume. tResolv typically connects in under 10 minutes. tResolv plans are $49, $99, and $249+ per month with a 14-day free trial and no credit card required.' },
    ],
  },
  whoFor: {
    left: {
      title: 'Choose Gorgias if…',
      items: [
        'You need its established, deep Shopify action library today.',
        'Your team is already trained on the Gorgias helpdesk interface.',
        'You are happy with your current setup and are only comparing out of curiosity.',
      ],
    },
    right: {
      title: 'Choose tResolv if…',
      items: [
        'You want AI working directly inside Gmail instead of a separate helpdesk inbox.',
        'You want every refund and cancellation staged for approval by default.',
        'You want a transparent confidence score on every AI-drafted reply.',
      ],
    },
  },
  whenBetter: {
    id: 'when-better',
    alt: true,
    eyebrow: 'When tResolv is the better fit',
    title: 'The clearest signal: where do you want AI to work?',
    paragraphs: [
      'If the answer is "inside the Gmail inbox I already use, with financial actions always staged for my approval," tResolv is built around exactly that answer.',
      'If you need the broadest existing feature set for Shopify-specific automations today, it\'s worth evaluating Gorgias\'s current documentation directly alongside a tResolv trial.',
    ],
  },
  migration: {
    id: 'migration',
    eyebrow: 'Switching or adding tResolv',
    title: 'What should you consider when moving off Gorgias?',
    paragraphs: [
        'This page covers one alternative. Other options exist, including Zendesk and Intercom, which are compared with tResolv on their own pages.',
      ],
    checks: [
      { label: 'Your inbox:', detail: 'tResolv reads a Gmail support address. Check that your customer email can reach one.' },
      { label: 'Your workflows:', detail: 'List what you rely on in Gorgias today and confirm what would need a different approach.' },
      { label: 'Try it first:', detail: 'The 14-day free trial needs no credit card, so you can evaluate tResolv on your real inbox before changing anything.' },
    ],
  },
  faqs: [
    { q: 'What is the biggest difference between tResolv and Gorgias?', a: 'tResolv works inside your existing Gmail inbox and stages every financial action for approval by default. Gorgias is a broader conversational AI helpdesk platform with its own dedicated interface.' },
    { q: 'Is switching from Gorgias difficult?', a: 'Migration effort depends on your current setup. tResolv itself is designed to connect to Gmail and Shopify in about 10 minutes.' },
    { q: 'Are there other Gorgias alternatives besides tResolv?', a: 'Yes, the broader market includes several customer service platforms. This page focuses specifically on the tResolv approach rather than surveying every alternative.' },
    { q: 'Can I try tResolv without committing?', a: 'Yes. The 14-day free trial requires no credit card.' },
    { q: 'How much does tResolv cost?', a: 'tResolv plans are $49, $99, and $249+ per month with a 14-day free trial and no credit card required. See the pricing page for what each plan includes.' },
    { q: 'Does tResolv work with platforms other than Shopify?', a: 'No. tResolv is built specifically for Shopify and does not currently support other ecommerce platforms.' },
  ],
  relatedLinks: [
    { href: '/tresolv-vs-gorgias', label: 'tResolv vs Gorgias' },
    { href: '/tresolv-vs-zendesk', label: 'tResolv vs Zendesk' },
    { href: '/tresolv-vs-intercom', label: 'tResolv vs Intercom' },
    { href: '/ai-customer-support-employee', label: 'AI Customer Support Employee' },
    { href: '/shopify-ai-customer-support', label: 'Shopify AI Customer Support' },
    { href: '/blog/best-ai-customer-support-tools', label: 'Best AI Customer Support Tools for Shopify Brands' },
  ],
  cta: {
    title: 'See the alternative for yourself.',
    sub: 'Start your 14-day free trial. No credit card required.',
  },
};
