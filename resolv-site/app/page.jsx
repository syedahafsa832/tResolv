import Nav              from '@/components/Nav';
import Hero             from '@/components/Hero';
import InboxQuiets      from '@/components/InboxQuiets';
import ProductVideo     from '@/components/ProductVideo';
import HowItWorks       from '@/components/HowItWorks';
import MeetLuna         from '@/components/MeetLuna';
import SafetyControl    from '@/components/SafetyControl';
import Features         from '@/components/Features';
import ChatWidgetSection from '@/components/ChatWidgetSection';
import WhyTresolv       from '@/components/WhyTresolv';
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

// Comparison pages (Gorgias/Zendesk/Intercom) are already linked by the
// Why tResolv section right above Pricing, so this list covers the money
// pages and blog instead of repeating the same three links twice on one page.
const relatedLinks = [
  { href: '/ai-customer-support-employee', label: 'AI Customer Support Employee' },
  { href: '/shopify-ai-customer-support', label: 'Shopify AI Customer Support' },
  { href: '/ai-order-tracking-automation', label: 'AI Order Tracking Automation' },
  { href: '/ai-support-agent-ecommerce', label: 'AI Support Agent for Ecommerce' },
  { href: '/ai-refund-automation', label: 'AI Refund Automation' },
  { href: '/ai-return-automation', label: 'AI Return Automation' },
  { href: '/blog', label: 'Blog' },
];

export default function Home() {
  return (
    <>
      <JsonLd data={schema} />
      <Nav />
      <main>
        <Hero />
        <InboxQuiets />
        <ProductVideo />
        <HowItWorks />
        <MeetLuna />
        <SafetyControl />
        <Features />
        <ChatWidgetSection />
        <WhyTresolv />
        <Pricing linkToPage />
        <FAQ linkToPage />
        <PreCTA />
        <RelatedLinks links={relatedLinks} />
      </main>
      <Footer />
    </>
  );
}
