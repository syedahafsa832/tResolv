import { buildMetadata, organizationSchema, breadcrumbListSchema, orgRef } from '@/lib/seo';
import { absoluteUrl } from '@/lib/site';
import PageShell from '@/components/seo/PageShell';
import PageHero from '@/components/seo/PageHero';
import TextSection from '@/components/seo/TextSection';
import CTABand from '@/components/seo/CTABand';
import RelatedLinks from '@/components/seo/RelatedLinks';

const path = '/about';
const seo = {
  title: 'About tResolv | AI Support Employee for Shopify Brands',
  description:
    'tResolv is an AI customer support employee for Shopify brands. It resolves routine emails and chat, and needs your approval for every refund or cancellation.',
};

export const metadata = buildMetadata({ ...seo, path });

const relatedLinks = [
  { href: '/contact', label: 'Contact tResolv' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/faq', label: 'Frequently Asked Questions' },
  { href: '/ai-customer-support-employee', label: 'AI Customer Support Employee' },
  { href: '/security', label: 'Security' },
  { href: '/privacy', label: 'Privacy Policy' },
];

export default function Page() {
  const breadcrumb = [{ label: 'Home', path: '/' }, { label: 'About' }];
  const schema = [
    organizationSchema(),
    {
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      name: seo.title,
      description: seo.description,
      url: absoluteUrl(path),
      about: orgRef,
    },
    breadcrumbListSchema(breadcrumb),
  ];
  return (
    <PageShell schema={schema} breadcrumb={breadcrumb}>
      <PageHero
        eyebrow="About tResolv"
        title="About tResolv:"
        titleAccent="an AI support employee for Shopify brands."
        descriptor="What tResolv is, what it handles, and how it treats approvals and customer data."
        sub="tResolv is an AI-powered customer support tool for Shopify brands, based online at tresolv.online."
      />
      <TextSection
        id="what-it-is"
        eyebrow="What tResolv is"
        title="An AI customer support employee, not another chatbot"
        paragraphs={[
          'tResolv connects to the Gmail address you use for support and to your Shopify store. It reads incoming customer requests, checks the order, and drafts or sends the reply.',
          'Its default AI agent is named Luna. You can rename it and set its accent color to match your brand.',
        ]}
      />
      <TextSection
        id="what-it-handles"
        alt
        eyebrow="What it handles"
        title="The repetitive support work Shopify brands see every day"
        checks={[
          { label: 'Order status and tracking:', detail: '“where is my order” answered from live Shopify fulfillment data.' },
          { label: 'Refunds and cancellations:', detail: 'checked against your policy and the order, then staged for your approval.' },
          { label: 'Address changes:', detail: 'parsed from the customer email and staged for your review.' },
          { label: 'Returns, product, and policy questions:', detail: 'answered from your store’s own information. Exchanges are routed to your support team.' },
        ]}
      />
      <TextSection
        id="approvals-and-data"
        eyebrow="Approvals and data"
        title="How tResolv handles approvals and customer data"
        paragraphs={[
          'Refunds, cancellations, and address changes always appear in your approval queue and never execute without your tap, regardless of confidence level.',
          'Every drafted reply shows a confidence score and reasoning, and you can take over any conversation at any time.',
          'tResolv processes emails inside Google’s infrastructure using the Gmail API. Your customers’ emails are never copied to or stored on tResolv’s servers.',
        ]}
      />
      <CTABand
        title="See tResolv on your own Shopify inbox."
        sub="Start your 14-day free trial. No credit card required."
      />
      <RelatedLinks links={relatedLinks} />
    </PageShell>
  );
}
