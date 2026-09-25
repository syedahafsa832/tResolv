import Nav              from '@/components/Nav';
import Hero             from '@/components/Hero';
import ProductVideo     from '@/components/ProductVideo';
import HowItWorks       from '@/components/HowItWorks';
import Features         from '@/components/Features';
import LiveFeed         from '@/components/LiveFeed';
import ChatWidgetSection from '@/components/ChatWidgetSection';
import Pricing          from '@/components/Pricing';
import FAQ              from '@/components/FAQ';
import PreCTA           from '@/components/PreCTA';
import Footer           from '@/components/Footer';
import RelatedLinks     from '@/components/seo/RelatedLinks';
import JsonLd           from '@/components/seo/JsonLd';
import { buildMetadata, softwareApplicationSchema, faqPageSchema, organizationSchema } from '@/lib/seo';
import { SITE } from '@/lib/site';
import { faqs as homepageFaqs } from '@/content/homepageFaqs';

export const metadata = buildMetadata({
  title: 'tResolv | AI Support Employee for Shopify Brands',
  description:
    'tResolv reads your inbox, handles storefront live chat, and resolves routine support tickets. Every refund and cancellation requires your one-tap approval.',
  path: '/',
});

const schema = [
  softwareApplicationSchema({
    name: SITE.legalName,
    description:
      'AI support employee for Shopify brands. Resolves customer support tickets over email and live chat, with human approval required for every financial action.',
    path: '/',
  }),
  faqPageSchema(homepageFaqs),
  organizationSchema(),
];

const relatedLinks = [
  { href: '/ai-customer-support-employee', label: 'AI Customer Support Employee' },
  { href: '/shopify-ai-customer-support', label: 'Shopify AI Customer Support' },
  { href: '/ai-order-tracking-automation', label: 'AI Order Tracking Automation' },
  { href: '/ai-support-agent-ecommerce', label: 'AI Support Agent for Ecommerce' },
  { href: '/tresolv-vs-gorgias', label: 'tResolv vs Gorgias' },
  { href: '/tresolv-vs-zendesk', label: 'tResolv vs Zendesk' },
  { href: '/blog', label: 'Blog' },
];

export default function Home() {
  return (
    <>
      <JsonLd data={schema} />
      <Nav />
      <main>
        <Hero />
        <ProductVideo />
        <HowItWorks />
        <Features />
        <LiveFeed />
        <ChatWidgetSection />
        <Pricing linkToPage />
        <FAQ linkToPage />
        <PreCTA />
        <RelatedLinks links={relatedLinks} />
      </main>
      <Footer />
    </>
  );
}
