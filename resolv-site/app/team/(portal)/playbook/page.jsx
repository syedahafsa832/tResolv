'use client';

import { useEffect, useMemo, useState } from 'react';
import RichText from '@/components/team/RichText';
import { SECTIONS, QUICK_ANSWERS } from '@/lib/careers/playbookContent';
import { buildIndex, searchPlaybook } from '@/lib/careers/playbookSearch';

const RECENT_KEY = 'tresolv-playbook-recent-searches';
const DONE_KEY = 'tresolv-playbook-done';
const START_FLOW = [
  'Find a Shopify brand', 'Research it', 'Add it to your sheet', 'Contact the decision maker',
  'Track the conversation', 'Follow up', 'Qualify interest', 'Hand off when appropriate',
  'Find more brands', 'Repeat',
];

function Highlighted({ text, term }) {
  if (!term) return text;
  const idx = text.toLowerCase().indexOf(term.toLowerCase());
  if (idx === -1) return text;
  return <>{text.slice(0, idx)}<mark>{text.slice(idx, idx + term.length)}</mark>{text.slice(idx + term.length)}</>;
}

export default function Playbook() {
  const [query, setQuery] = useState('');
  const [tocOpen, setTocOpen] = useState(false);
  const [done, setDone] = useState(false);
  const [recent, setRecent] = useState([]);
  const [active, setActive] = useState(SECTIONS[0].id);
  const index = useMemo(() => buildIndex(SECTIONS), []);
  const results = useMemo(() => searchPlaybook(index, query), [index, query]);

  useEffect(() => {
    try {
      setDone(localStorage.getItem(DONE_KEY) === '1');
      const raw = localStorage.getItem(RECENT_KEY);
      if (raw) setRecent(JSON.parse(raw));
    } catch { /* private browsing or blocked storage, just skip persistence */ }
  }, []);

  // Highlights the section currently in view in the contents sidebar, so scrolling through
  // the playbook (not just clicking a link) keeps the TOC in sync with where you actually are.
  useEffect(() => {
    const els = SECTIONS.map((s) => document.getElementById(s.id)).filter(Boolean);
    if (!els.length) return undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length) setActive(visible[0].target.id);
      },
      { rootMargin: '-15% 0px -70% 0px' },
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const toggleDone = () => {
    const next = !done;
    setDone(next);
    try { localStorage.setItem(DONE_KEY, next ? '1' : '0'); } catch { /* optional */ }
  };

  const rememberSearch = (q) => {
    if (!q.trim()) return;
    setRecent((prev) => {
      const next = [q, ...prev.filter((x) => x !== q)].slice(0, 5);
      try { localStorage.setItem(RECENT_KEY, JSON.stringify(next)); } catch { /* optional */ }
      return next;
    });
  };

  const openResult = () => { rememberSearch(query); setQuery(''); };

  return (
    <>
      <h1 className="tm-h1">Lead Acquisition Playbook</h1>
      <p className="tm-sub">Your practical guide to finding, contacting, qualifying, and converting Shopify brands.</p>

      <div className="tm-pb-search">
        <input
          type="search"
          className="cr-input tm-pb-search-input"
          placeholder="Search the playbook…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search the playbook"
        />
        <p className="tm-pb-search-hint">Try “what if nobody replies?” or “pricing” or “good lead” or “when do I contact Hafsa?”</p>

        {query && (
          <div className="tm-pb-results">
            {results.length === 0 && <p className="tm-muted">no matches, try different words, or browse the contents below.</p>}
            {results.map((r) => (
              <a key={r.id} href={`#${r.id}`} className="tm-pb-result" onClick={openResult}>
                <b>{r.title}</b>
                <span><Highlighted text={r.excerpt} term={r.term} /></span>
              </a>
            ))}
          </div>
        )}

        {!query && recent.length > 0 && (
          <div className="tm-pb-recent">
            <span>recent:</span>
            {recent.map((q) => (
              <button key={q} type="button" className="tm-pb-chip" onClick={() => setQuery(q)}>{q}</button>
            ))}
          </div>
        )}
      </div>

      <section className="tm-pb-start">
        <span className="tm-kicker">start here</span>
        <div className="tm-pb-flow">
          {START_FLOW.map((step, i) => (
            <span key={step} className="tm-pb-flow-step"><em>{i + 1}</em>{step}</span>
          ))}
        </div>
        <a href="#your-first-day" className="cr-btn cr-btn-primary cr-btn-sm">I&rsquo;m ready to start →</a>
      </section>

      <section className="tm-pb-ask">
        <div>
          <b>figure it out yourself</b>
          <p>it&rsquo;s already in the playbook, the next step is obvious, or the decision is low-risk and reversible.</p>
        </div>
        <div>
          <b>ask hafsa</b>
          <p>pricing, discounts, custom deals, feature promises, demos, contracts/pilots, or you&rsquo;re genuinely blocked.</p>
        </div>
      </section>

      <section className="tm-pb-quick">
        <span className="tm-kicker">quick answers</span>
        <div className="tm-pb-quick-grid">
          {QUICK_ANSWERS.map((qa) => (
            <a key={qa.q} href={`#${qa.id}`} className="tm-pb-quick-card">{qa.q}</a>
          ))}
        </div>
      </section>

      <button type="button" className="tm-pb-toc-toggle cr-btn cr-btn-ghost cr-btn-sm" onClick={() => setTocOpen((o) => !o)}>
        {tocOpen ? 'hide contents' : 'contents ☰'}
      </button>

      <div className="tm-pb-layout">
        <nav className={`tm-pb-toc ${tocOpen ? 'is-open' : ''}`} aria-label="playbook contents">
          <span className="tm-pb-toc-label">contents</span>
          {SECTIONS.map((s) => (
            <a key={s.id} href={`#${s.id}`} className={active === s.id ? 'is-active' : ''} onClick={() => setTocOpen(false)}>{s.num}. {s.toc}</a>
          ))}
        </nav>

        <div className="tm-pb-content">
          {SECTIONS.map((s) => (
            <section key={s.id} id={s.id} className="tm-pb-section">
              <h2>{s.num}. {s.title}</h2>
              <RichText text={s.body} />
            </section>
          ))}

          <div className="tm-pb-done">
            <button type="button" className={`cr-btn cr-btn-sm ${done ? 'cr-btn-ghost' : 'cr-btn-primary'}`} onClick={toggleDone}>
              {done ? '✓ marked complete, click to undo' : 'mark playbook complete'}
            </button>
            <p className="tm-muted">you can always come back to this page any time.</p>
          </div>
        </div>
      </div>
    </>
  );
}
