import { buildMetadata, faqPageSchema, breadcrumbListSchema } from '@/lib/seo';
import PageShell from '@/components/seo/PageShell';
import PageHero from '@/components/seo/PageHero';
import FAQSection from '@/components/seo/FAQSection';
import CTABand from '@/components/seo/CTABand';
import RelatedLinks from '@/components/seo/RelatedLinks';
import { faqs } from '@/content/homepageFaqs';

const path = '/faq';
const seo = {
  title: 'tResolv FAQ: Trial, Approvals, Data and Setup',
  description:
    'Answers about the tResolv free trial, human approval for refunds and cancellations, the chat widget, how Gmail data is handled, and setup time.',
};

export const metadata = buildMetadata({ ...seo, path });

const relatedLinks = [
  { href: '/pricing', label: 'Pricing' },
  { href: '/contact', label: 'Contact tResolv' },
  { href: '/about', label: 'About tResolv' },
  { href: '/shopify-ai-customer-support', label: 'Shopify AI Customer Support' },
  { href: '/security', label: 'Security' },
];

export default function Page() {
  const breadcrumb = [{ label: 'Home', path: '/' }, { label: 'FAQ' }];
  const schema = [faqPageSchema(faqs), breadcrumbListSchema(breadcrumb)];
  return (
    <PageShell schema={schema} breadcrumb={breadcrumb}>
      <PageHero
        eyebrow="FAQ"
        title="tResolv FAQ:"
        titleAccent="trial, approvals, data, and setup."
        descriptor="Frequently asked questions about tResolv, the AI customer support employee for Shopify brands."
        sub="How the free trial works, when tResolv acts without approval, and how your customers’ emails are handled."
      />
      <FAQSection faqs={faqs} />
      <CTABand
        title="Still have a question? Try tResolv on your own inbox."
        sub="Start your 14-day free trial. No credit card required."
      />
      <RelatedLinks links={relatedLinks} />
    </PageShell>
  );
}
