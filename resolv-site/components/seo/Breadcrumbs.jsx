// Visual breadcrumb trail, rendered as its own dark bar directly under the
// fixed nav. `items` is [{ label, path? }], the last item (current page)
// should omit `path` since it isn't a link. Deliberately dark/full-bleed
// rather than blending into whatever section follows: some pages start
// with a dark hero, others (blog) start light, and a fixed-position nav
// sits on top of either — a dedicated bar is the only styling that clears
// the nav correctly and reads consistently on every page.
export default function Breadcrumbs({ items }) {
  if (!items || items.length === 0) return null;
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <div className="wrap">
        <ol className="breadcrumbs-list">
          {items.map((item, i) => {
            const isLast = i === items.length - 1;
            return (
              <li key={item.label} className="breadcrumbs-item">
                {item.path && !isLast ? (
                  <a href={item.path}>{item.label}</a>
                ) : (
                  <span aria-current={isLast ? 'page' : undefined}>{item.label}</span>
                )}
                {!isLast && <span className="breadcrumbs-sep" aria-hidden="true">/</span>}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
