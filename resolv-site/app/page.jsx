import Nav              from '@/components/Nav';
import Hero             from '@/components/Hero';
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
import { buildMetadata, softwareApplicationSchema, faqPageSchema } from '@/lib/seo';
import { SITE } from '@/lib/site';
import { faqs as homepageFaqs } from '@/content/homepageFaqs';

export const metadata = buildMetadata({
  title: 'tResolv | AI Support Employee for Shopify Brands',
  description:
    'tResolv reads your inbox, handles live chat on your storefront, and resolves routine customer support tickets automatically. Every refund and cancellation requires your one-tap approval.',
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
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE.legalName,
    url: SITE.url,
  },
];

const relatedLinks = [
  { href: '/ai-customer-support-employee', label: 'AI Customer Support Employee' },
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
        <section className="section" style={{ padding: '56px 0' }}>
          <div className="wrap">
            <h2 className="section-title" style={{ fontSize: 20 }}>Why tResolv connects Gmail</h2>
            <p className="section-sub" style={{ maxWidth: 680 }}>
              tResolv is an AI customer support employee for Shopify brands. It requests access to your Gmail
              inbox to read incoming customer support conversations, keep context across a thread, and generate
              AI-assisted replies on your behalf. Gmail data is used only to provide this support automation
              service, it is never sold, and it is never used to train AI models.
            </p>
          </div>
        </section>
        <HowItWorks />
        <Features />
        <LiveFeed />
        <ChatWidgetSection />
        <Pricing />
        <FAQ />
        <PreCTA />
        <RelatedLinks links={relatedLinks} />
      </main>
      <Footer />
    </>
  );
}
