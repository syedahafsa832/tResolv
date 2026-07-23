import TableOfContents from './TableOfContents';
import BlogBody from './BlogBody';
import FAQSection from './FAQSection';
import CTABand from './CTABand';
import RelatedLinks from './RelatedLinks';

function formatDate(iso) {
  return new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

export default function BlogPage({ post }) {
  return (
    <>
      <section className="section" style={{ paddingBottom: 40 }}>
        <div className="wrap blog-header">
          <div className="eyebrow"><span className="eyebrow-dot" />Blog</div>
          <h1 className="section-title" style={{ fontSize: 'clamp(28px, 3.6vw, 42px)' }}>{post.title}</h1>
          <div className="blog-meta">Published {formatDate(post.datePublished)}</div>
          <p className="section-sub" style={{ maxWidth: 680 }}>{post.intro}</p>
        </div>
      </section>

      <section className="section section-alt" style={{ paddingTop: 40 }}>
        <div className="wrap">
          <div className="blog-layout">
            <TableOfContents blocks={post.blocks} />
            <BlogBody blocks={post.blocks} />
          </div>
        </div>
      </section>

      <FAQSection faqs={post.faqs} />
      <CTABand {...post.cta} />
      <RelatedLinks links={post.relatedLinks} />
    </>
  );
}
