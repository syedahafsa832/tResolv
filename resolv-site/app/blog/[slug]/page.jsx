import { notFound } from 'next/navigation';
import { buildMetadata, articleSchema, faqPageSchema, breadcrumbListSchema } from '@/lib/seo';
import PageShell from '@/components/seo/PageShell';
import BlogPage from '@/components/seo/BlogPage';
import { posts, getPostBySlug } from '@/content/blog/posts';

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return buildMetadata({
    title: `${post.title} | tResolv Blog`,
    description: post.description,
    path: `/blog/${post.slug}`,
  });
}

export default function Page({ params }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const breadcrumb = [
    { label: 'Home', path: '/' },
    { label: 'Blog', path: '/blog' },
    { label: post.title },
  ];
  const schema = [
    articleSchema({
      title: post.title,
      description: post.description,
      path: `/blog/${post.slug}`,
      datePublished: post.datePublished,
    }),
    faqPageSchema(post.faqs),
    breadcrumbListSchema(breadcrumb),
  ];

  return (
    <PageShell schema={schema} breadcrumb={breadcrumb}>
      <BlogPage post={post} />
    </PageShell>
  );
}
