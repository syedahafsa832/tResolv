// Renders a flat array of content blocks:
//   { type: 'h2'|'h3', id, text }
//   { type: 'p', text }
//   { type: 'ul', items: [string] }
export default function BlogBody({ blocks }) {
  return (
    <div className="blog-body">
      {blocks.map((block, i) => {
        if (block.type === 'h2') return <h2 key={i} id={block.id}>{block.text}</h2>;
        if (block.type === 'h3') return <h3 key={i} id={block.id}>{block.text}</h3>;
        if (block.type === 'ul') {
          return (
            <ul key={i}>
              {block.items.map((item, j) => <li key={j}>{item}</li>)}
            </ul>
          );
        }
        return <p key={i}>{block.text}</p>;
      })}
    </div>
  );
}
