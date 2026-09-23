// Tiny client-side search over the playbook. No external library — the dataset (35 short
// sections) is small enough that scoring every section on each keystroke is effectively
// instant, so there's no need for a real search index or a backend call.

function stripMd(text) {
  return String(text || '')
    .replace(/\|/g, ' ')
    .replace(/[#>*_[\]()]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function excerptAround(plain, term) {
  const idx = term ? plain.toLowerCase().indexOf(term.toLowerCase()) : -1;
  if (idx === -1) return plain.slice(0, 140);
  const start = Math.max(0, idx - 40);
  const end = Math.min(plain.length, idx + term.length + 100);
  return `${start > 0 ? '…' : ''}${plain.slice(start, end)}${end < plain.length ? '…' : ''}`;
}

export function buildIndex(sections) {
  return sections.map((s) => ({
    ...s,
    plain: stripMd(s.body),
    kw: (s.keywords || '').toLowerCase(),
    titleLc: s.title.toLowerCase(),
  }));
}

// Scoring favors the explicit keyword/synonym list (so natural phrasings like "nobody
// replies" or "good lead" surface the right section even when the wording differs from the
// title), then the title, then a fallback scan of the body text.
export function searchPlaybook(index, rawQuery) {
  const q = rawQuery.trim().toLowerCase();
  if (!q) return [];
  const words = q.split(/\s+/).filter(Boolean);

  const scored = index
    .map((s) => {
      let score = 0;
      if (s.kw.includes(q)) score += 12;
      if (s.titleLc.includes(q)) score += 8;
      for (const w of words) {
        if (w.length < 2) continue;
        if (s.kw.includes(w)) score += 4;
        if (s.titleLc.includes(w)) score += 3;
        if (s.plain.toLowerCase().includes(w)) score += 1;
      }
      return { s, score };
    })
    .filter((x) => x.score > 0);

  scored.sort((a, b) => b.score - a.score);

  return scored.slice(0, 8).map(({ s }) => ({
    id: s.id,
    title: s.title,
    excerpt: excerptAround(s.plain, words[0]),
    term: words[0] || '',
  }));
}
