// Lists only h2-level blocks, the blog's top-level structure.
export default function TableOfContents({ blocks }) {
  const headings = blocks.filter((b) => b.type === 'h2');
  if (!headings.length) return null;
  return (
    <aside className="toc">
      <h4>On this page</h4>
      <ul>
        {headings.map((h) => (
          <li key={h.id}><a href={`#${h.id}`}>{h.text}</a></li>
        ))}
      </ul>
    </aside>
  );
}
