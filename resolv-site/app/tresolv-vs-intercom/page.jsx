import { buildMetadata, softwareApplicationSchema, faqPageSchema } from '@/lib/seo';
import PageShell from '@/components/seo/PageShell';
import ComparisonPage from '@/components/seo/ComparisonPage';
import { page } from '@/content/comparisons/tresolv-vs-intercom';

export const metadata = buildMetadata({ ...page.seo, path: page.path });

export default function Page() {
  const schema = [
    softwareApplicationSchema({ name: 'Resolv', description: page.seo.description, path: page.path }),
    faqPageSchema(page.faqs),
  ];
  return (
    <PageShell schema={schema}>
      <ComparisonPage data={page} />
    </PageShell>
  );
}
