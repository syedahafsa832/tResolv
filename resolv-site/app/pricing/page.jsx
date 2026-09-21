import { buildMetadata, softwareApplicationSchema, breadcrumbListSchema } from '@/lib/seo';
import PageShell from '@/components/seo/PageShell';
import PageHero from '@/components/seo/PageHero';
import TextSection from '@/components/seo/TextSection';
import CTABand from '@/components/seo/CTABand';
import RelatedLinks from '@/components/seo/RelatedLinks';
import Pricing from '@/components/Pricing';

const path = '/pricing';
const seo = {
  title: 'tResolv Pricing: AI Support Plans from $49/month',
  description:
    'tResolv plans: Starter $49, Growth $99, and Scale from $249 per month. 14-day free trial, no credit card required, no setup fees, no per-ticket charges.',
};

export const metadata = buildMetadata({ ...seo, path });

const relatedLinks = [
  { href: '/shopify-ai-customer-support', label: 'Shopify AI Customer Support' },
  { href: '/ai-customer-support-employee', label: 'AI Customer Support Employee' },
  { href: '/faq', label: 'Frequently Asked Questions' },
  { href: '/contact', label: 'Contact tResolv' },
  { href: '/tresolv-vs-gorgias', label: 'tResolv vs Gorgias' },
];

export default function Page() {
  const breadcrumb = [{ label: 'Home', path: '/' }, { label: 'Pricing' }];
  const schema = [
    softwareApplicationSchema({ name: 'tResolv', description: seo.description, path }),
    breadcrumbListSchema(breadcrumb),
  ];
  return (
    <PageShell schema={schema} breadcrumb={breadcrumb}>
      <PageHero
        eyebrow="Pricing"
        title="tResolv pricing:"
        titleAccent="plans from $49 a month."
        descriptor="Pricing for tResolv, the AI customer support employee for Shopify brands: Starter $49, Growth $99, and Scale from $249 per month, with a 14-day free trial."
        sub="Founding launch pricing with no setup fees and no per-ticket charges. Start with a 14-day free trial; no credit card required."
      />
      <Pricing />
      <TextSection
        id="trial-terms"
        alt
        eyebrow="Free trial"
        title="How the 14-day free trial works"
        paragraphs={[
          'You get 14 days of full access, and no credit card is required to start.',
          'When your trial ends, we ask you directly whether you want to continue on a paid plan. There are no surprise charges and no auto-billing.',
          'Most brands go live in under 10 minutes: connect Gmail with one Google OAuth click, connect Shopify, and tResolv starts reading your inbox.',
        ]}
      />
      <CTABand
        title="Try tResolv on your own Shopify inbox."
        sub="Start your 14-day free trial. No credit card required."
      />
      <RelatedLinks links={relatedLinks} />
    </PageShell>
  );
}
