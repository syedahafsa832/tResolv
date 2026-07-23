import { notFound } from 'next/navigation';
import { buildMetadata, articleSchema, faqPageSchema } from '@/lib/seo';
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
    title: `${post.title} | Resolv Blog`,
    description: post.description,
    path: `/blog/${post.slug}`,
  });
}

export default function Page({ params }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const schema = [
    articleSchema({
      title: post.title,
      description: post.description,
      path: `/blog/${post.slug}`,
      datePublished: post.datePublished,
    }),
    faqPageSchema(post.faqs),
  ];

  return (
    <PageShell schema={schema}>
      <BlogPage post={post} />
    </PageShell>
  );
}
