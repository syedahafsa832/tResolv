import { buildMetadata, softwareApplicationSchema, faqPageSchema, breadcrumbListSchema } from '@/lib/seo';
import PageShell from '@/components/seo/PageShell';
import PageHero from '@/components/seo/PageHero';
import TextSection from '@/components/seo/TextSection';
import StepsSection from '@/components/seo/StepsSection';
import FeatureGrid from '@/components/seo/FeatureGrid';
import UseCaseGrid from '@/components/seo/UseCaseGrid';
import FAQSection from '@/components/seo/FAQSection';
import CTABand from '@/components/seo/CTABand';
import RelatedLinks from '@/components/seo/RelatedLinks';
import { page } from '@/content/pages/ai-refund-automation';

export const metadata = buildMetadata({ ...page.seo, path: page.path });

export default function Page() {
  const breadcrumb = [{ label: 'Home', path: '/' }, { label: page.hero.eyebrow }];
  const schema = [
    softwareApplicationSchema({ name: 'tResolv', description: page.seo.description, path: page.path }),
    faqPageSchema(page.faqs),
    breadcrumbListSchema(breadcrumb),
  ];
  return (
    <PageShell schema={schema} breadcrumb={breadcrumb}>
      <PageHero {...page.hero} />
      <TextSection {...page.problem} />
      <TextSection {...page.solution} />
      <StepsSection {...page.steps} />
      <FeatureGrid {...page.features} />
      <UseCaseGrid {...page.useCases} />
      <FAQSection faqs={page.faqs} />
      <CTABand {...page.cta} />
      <RelatedLinks links={page.relatedLinks} />
    </PageShell>
  );
}
