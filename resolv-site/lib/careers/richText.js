// Tiny markdown subset used by the team portal content (headings, quotes, lists, tables, bold, links).
// Content is rendered as React elements only, never as raw HTML.
export function parseBlocks(text) {
  const blocks = [];
  let para = [];
  let list = null;
  let table = null;
  const flush = () => { if (para.length) { blocks.push({ type: 'p', lines: para }); para = []; } };
  const endList = () => { if (list) { blocks.push(list); list = null; } };
  const endTable = () => { if (table) { blocks.push(table); table = null; } };
  for (const raw of String(text || '').replace(/\r/g, '').split('\n')) {
    const line = raw.trimEnd();
    let m;
    if (!line.trim()) { flush(); endList(); endTable(); continue; }
    if ((m = line.match(/^(#{2,3}) (.+)$/))) { flush(); endList(); endTable(); blocks.push({ type: m[1].length === 2 ? 'h2' : 'h3', text: m[2] }); }
    else if ((m = line.match(/^> (.+)$/))) { flush(); endList(); endTable(); blocks.push({ type: 'quote', text: m[1] }); }
    else if ((m = line.match(/^- (.+)$/))) { flush(); endTable(); if (!list || list.type !== 'ul') { endList(); list = { type: 'ul', items: [] }; } list.items.push(m[1]); }
    else if ((m = line.match(/^\d+\. (.+)$/))) { flush(); endTable(); if (!list || list.type !== 'ol') { endList(); list = { type: 'ol', items: [] }; } list.items.push(m[1]); }
    else if (line.startsWith('| ')) { flush(); endList(); if (!table) table = { type: 'table', rows: [] }; table.rows.push(line.replace(/^\|\s*/, '').replace(/\s*\|?$/, '').split(/\s*\|\s*/)); }
    else { endList(); endTable(); para.push(line); }
  }
  flush(); endList(); endTable();
  return blocks;
}

// Inline: **bold** and [text](url). Only https links or internal /team/ links are allowed.
export function parseInline(text) {
  const out = [];
  const re = /\*\*([^*]+)\*\*|\[([^\]]+)\]\(([^)\s]+)\)/g;
  let last = 0; let m;
  while ((m = re.exec(text))) {
    if (m.index > last) out.push({ t: 'text', v: text.slice(last, m.index) });
    if (m[1] !== undefined) out.push({ t: 'bold', v: m[1] });
    else if (/^(https:\/\/|\/team\/)/.test(m[3])) out.push({ t: 'link', v: m[2], href: m[3] });
    else out.push({ t: 'text', v: m[2] });
    last = re.lastIndex;
  }
  if (last < text.length) out.push({ t: 'text', v: text.slice(last) });
  return out;
}
