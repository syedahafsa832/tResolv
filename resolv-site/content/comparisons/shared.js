// Shared comparison-table rows and official sources for /tresolv-vs-* and
// /gorgias-alternatives. The tResolv column is drawn from this site's own
// product and pricing content. Competitor cells never assert a capability the
// site cannot support: they point to the competitor's own website instead.
// Cell values: string | boolean | { prefix?, text, href }.

export const OFFICIAL_SOURCES = {
  Gorgias: [
    { label: 'Gorgias website', href: 'https://www.gorgias.com/' },
    { label: 'Gorgias pricing', href: 'https://www.gorgias.com/pricing' },
  ],
  Zendesk: [
    { label: 'Zendesk website', href: 'https://www.zendesk.com/' },
    { label: 'Zendesk pricing', href: 'https://www.zendesk.com/pricing/' },
  ],
  Intercom: [
    { label: 'Intercom website', href: 'https://www.intercom.com/' },
    { label: 'Intercom pricing', href: 'https://www.intercom.com/pricing' },
  ],
};

function seeOfficial(name) {
  const [site] = OFFICIAL_SOURCES[name];
  return { prefix: 'Not verified here.', text: `See ${name}'s website`, href: site.href };
}

// `aiClaim`: the competitor's AI positioning if this site already states it,
// otherwise omitted and the cell links out.
export function sharedRows(name, { aiClaim } = {}) {
  const [, pricing] = OFFICIAL_SOURCES[name];
  return [
    {
      label: 'AI customer support',
      resolv: 'Yes, an AI employee that answers Shopify support email and storefront chat',
      competitor: aiClaim || seeOfficial(name),
    },
    { label: 'Email support', resolv: 'Yes, works inside your Gmail inbox', competitor: seeOfficial(name) },
    { label: 'Chat widget', resolv: 'Yes, a storefront chat widget with the same guardrails as email', competitor: seeOfficial(name) },
    {
      label: 'Refund automation',
      resolv: 'Checked against your return policy, then staged for one-tap approval',
      competitor: seeOfficial(name),
    },
    {
      label: 'Cancellation handling',
      resolv: 'Checked against fulfillment status, then staged for approval',
      competitor: seeOfficial(name),
    },
    {
      label: 'Knowledge base',
      resolv: 'Products, policies, and pages are imported to ground replies',
      competitor: seeOfficial(name),
    },
    {
      label: 'Pricing',
      resolv: { prefix: '$49, $99, and $249+ per month. 14-day free trial.', text: 'See tResolv pricing', href: '/pricing' },
      competitor: { prefix: 'Plans and prices change.', text: `See ${name}'s pricing page`, href: pricing.href },
    },
  ];
}
