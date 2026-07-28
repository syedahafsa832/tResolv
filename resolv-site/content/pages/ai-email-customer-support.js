export const page = {
  path: '/ai-email-customer-support',
  seo: {
    title: 'AI Email Customer Support | tResolv',
    description:
      'tResolv reads and replies to customer support email directly inside Gmail, processed inside Google\'s infrastructure, never copied to tResolv\'s servers.',
    keywords: 'AI email customer support, AI email support, AI email responder',
  },
  hero: {
    eyebrow: 'AI Email Support',
    title: 'AI support that lives',
    titleAccent: 'inside your inbox.',
    sub: 'No new inbox to check, no widget to install. tResolv connects to the Gmail address you already use for support and starts drafting replies from there.',
    secondaryLabel: 'Your emails never leave Google.',
  },
  problem: {
    id: 'problem',
    eyebrow: 'The problem',
    title: 'Email is still where most support happens.',
    paragraphs: [
      'Chat widgets get attention, but for most Shopify brands, email is still the primary support channel, and the one that piles up fastest.',
      'Moving support into a separate helpdesk tool means migrating your inbox, retraining your team, and hoping customers adjust to a new "portal" experience.',
    ],
  },
  solution: {
    id: 'solution',
    alt: true,
    eyebrow: 'The solution',
    title: 'tResolv works with the inbox you already have.',
    paragraphs: [
      'tResolv connects to your existing Gmail address with one OAuth click. There is no migration, no new customer-facing portal, and no change to the email address your customers already use.',
      'Emails are processed inside Google\'s own infrastructure via the Gmail API, nothing is copied to or stored on tResolv\'s servers.',
    ],
    checks: [
      { label: 'No inbox migration:', detail: 'connects to the Gmail address you already use for support.' },
      { label: 'Google-native processing:', detail: 'emails are never copied to or stored on tResolv\'s servers.' },
      { label: 'Confidence-scored drafts:', detail: 'every reply shows how sure the AI is before it sends.' },
    ],
  },
  steps: {
    title: 'From inbox to resolved email',
    steps: [
      { num: '01', title: 'Connect Gmail', body: 'One Google OAuth click. tResolv starts reading new mail immediately, no forwarding rules or migration.' },
      { num: '02', title: 'AI classifies and drafts', body: 'Each email is classified, checked against your Shopify order data if relevant, and drafted with a confidence score.' },
      { num: '03', title: 'Send automatically or review', body: 'High-confidence, non-financial replies send on their own. Everything else queues for your review.' },
    ],
  },
  features: {
    title: 'Built around Gmail, not a separate inbox',
    features: [
      { icon: 'mail', title: 'Gmail native', body: 'Connects via Google OAuth and reads mail using the Gmail API directly, no forwarding, no separate mailbox.', note: 'Emails never leave Google' },
      { icon: 'quarantine', title: 'Smart quarantine', body: 'Promotional email, automated notifications, and loop-risk messages are filtered out before the AI ever sees them.', note: 'Keeps your inbox and metrics clean' },
      { icon: 'gauge', title: 'Confidence scoring', body: 'Every draft carries a visible confidence score, so you always know how sure the AI is before it sends.', note: 'You set the threshold' },
      { icon: 'shield', title: 'Approval-gated actions', body: 'Refunds, cancellations, and address changes are staged in an approval queue, not sent automatically.', note: 'Zero unauthorized financial actions' },
    ],
  },
  useCases: {
    title: 'What gets automated in your inbox',
    items: [
      { title: 'Order status emails', body: 'The most common email type, answered with live Shopify data.' },
      { title: 'Refund and cancellation requests', body: 'Drafted and staged for your approval, never sent as automatic actions.' },
      { title: 'Policy questions', body: 'Answered from your store\'s actual return and shipping policy.' },
      { title: 'Spam and automated mail', body: 'Filtered by quarantine before it reaches the AI or your inbox metrics.' },
      { title: 'Thread continuity', body: 'Replies stay grounded in the full email thread, not just the latest message.' },
      { title: 'Human handoff', body: 'Low-confidence threads are escalated to a person instead of guessed at.' },
    ],
  },
  faqs: [
    { q: 'Do I need to change my support email address?', a: 'No. tResolv connects to the Gmail address you already use, customers keep emailing the same address.' },
    { q: 'Are customer emails stored on tResolv\'s servers?', a: "No. tResolv processes email inside Google's infrastructure using the Gmail API. Emails are never copied to or stored on tResolv's servers." },
    { q: 'What happens to spam or newsletter mail sent to my support address?', a: 'It is filtered out by quarantine before the AI drafts anything, so it never affects your resolution numbers.' },
    { q: 'Can I still see and reply to email manually?', a: 'Yes. You can take over any conversation at any time, and the AI pauses on that thread until you release it back.' },
  ],
  relatedLinks: [
    { href: '/ai-customer-support-employee', label: 'AI Customer Support Employee' },
    { href: '/shopify-ai-customer-support', label: 'Shopify AI Customer Support' },
    { href: '/ai-order-tracking-automation', label: 'AI Order Tracking Automation' },
    { href: '/tresolv-vs-intercom', label: 'tResolv vs Intercom' },
    { href: '/blog/ai-automation-for-shopify-stores', label: 'AI Automation for Shopify Stores' },
  ],
  cta: {
    title: 'Let tResolv handle your inbox.',
    sub: 'Start your 14-day free trial. No credit card required.',
  },
};
