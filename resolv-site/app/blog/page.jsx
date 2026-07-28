import Link from 'next/link';
import { buildMetadata } from '@/lib/seo';
import PageShell from '@/components/seo/PageShell';
import PageHero from '@/components/seo/PageHero';
import { posts } from '@/content/blog/posts';

export const metadata = buildMetadata({
  title: 'Blog | tResolv',
  description: 'Guides on AI customer support, Shopify automation, and reducing repetitive support work, from the team building tResolv.',
  path: '/blog',
});

function formatDate(iso) {
  return new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

export default function BlogIndex() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Blog"
        title="Guides on AI"
        titleAccent="customer support."
        sub="Practical writing on AI customer support, Shopify automation, and reducing repetitive support work."
      />
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="feat-grid">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="feat-card" style={{ display: 'block' }}>
                <div className="blog-meta">{formatDate(post.datePublished)}</div>
                <h2 className="feat-title" style={{ marginTop: 6 }}>{post.title}</h2>
                <p className="feat-body">{post.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
