import Nav              from '@/components/Nav';
import Hero             from '@/components/Hero';
import ProblemList      from '@/components/ProblemList';
import ProductVideo     from '@/components/ProductVideo';
import ScenarioExplorer from '@/components/ScenarioExplorer';
import SafetyControl    from '@/components/SafetyControl';
import Pricing          from '@/components/Pricing';
import FAQ              from '@/components/FAQ';
import PreCTA           from '@/components/PreCTA';
import Footer           from '@/components/Footer';
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

export default function Home() {
  return (
    <>
      <JsonLd data={schema} />
      <Nav />
      <main>
        <Hero />
        <ProblemList />
        <ProductVideo />
        <ScenarioExplorer />
        <SafetyControl />
        <Pricing linkToPage />
        <FAQ linkToPage />
        <PreCTA />
      </main>
      <Footer />
    </>
  );
}
