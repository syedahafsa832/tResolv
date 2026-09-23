import Link from 'next/link';
import { parseBlocks, parseInline } from '@/lib/careers/richText';

function Inline({ text }) {
  return parseInline(text).map((n, i) => {
    if (n.t === 'bold') return <strong key={i}>{n.v}</strong>;
    if (n.t === 'link') {
      if (n.href.startsWith('#')) return <a key={i} href={n.href}>{n.v}</a>;
      return n.href.startsWith('/')
        ? <Link key={i} href={n.href}>{n.v}</Link>
        : <a key={i} href={n.href} target="_blank" rel="noopener noreferrer">{n.v}</a>;
    }
    return <span key={i}>{n.v}</span>;
  });
}

export default function RichText({ text }) {
  return (
    <div className="tm-rt">
      {parseBlocks(text).map((b, i) => {
        if (b.type === 'h2') return <h2 key={i}><Inline text={b.text} /></h2>;
        if (b.type === 'h3') return <h3 key={i}><Inline text={b.text} /></h3>;
        if (b.type === 'quote') return <blockquote key={i}><Inline text={b.text} /></blockquote>;
        if (b.type === 'ul') return <ul key={i}>{b.items.map((t, j) => <li key={j}><Inline text={t} /></li>)}</ul>;
        if (b.type === 'ol') return <ol key={i}>{b.items.map((t, j) => <li key={j}><Inline text={t} /></li>)}</ol>;
        if (b.type === 'table') {
          const [head, ...rows] = b.rows;
          return (
            <div key={i} className="tm-table"><table>
              <thead><tr>{head.map((c, j) => <th key={j}>{c}</th>)}</tr></thead>
              <tbody>{rows.map((r, j) => <tr key={j}>{r.map((c, k) => <td key={k}>{c}</td>)}</tr>)}</tbody>
            </table></div>
          );
        }
        return <p key={i}>{b.lines.map((l, j) => <span key={j}>{j > 0 && <br />}<Inline text={l} /></span>)}</p>;
      })}
    </div>
  );
}
