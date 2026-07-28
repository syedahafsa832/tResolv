import { buildMetadata, softwareApplicationSchema, faqPageSchema, breadcrumbListSchema } from '@/lib/seo';
import PageShell from '@/components/seo/PageShell';
import ComparisonPage from '@/components/seo/ComparisonPage';
import { page } from '@/content/comparisons/tresolv-vs-zendesk';

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
      <ComparisonPage data={page} />
    </PageShell>
  );
}
