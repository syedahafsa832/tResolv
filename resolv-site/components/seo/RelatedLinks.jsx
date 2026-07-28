import Link from 'next/link';

// Internal-linking block, every money/comparison/blog page includes one so
// the site forms the hub-and-spoke structure from the SEO architecture doc.
// `links`: [{ href, label }]
export default function RelatedLinks({ title = 'Related pages', links }) {
  if (!links?.length) return null;
  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="related-links">
          <h3>{title}</h3>
          <div className="related-links-grid">
            {links.map(({ href, label }) => (
              <Link key={href} href={href} className="related-link">{label}</Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
