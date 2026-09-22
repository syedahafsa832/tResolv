'use client';

import { useEffect, useState } from 'react';
import { useTeam } from '@/components/team/TeamGate';
import RichText from '@/components/team/RichText';

export default function Documents() {
  const { sb } = useTeam();
  const [docs, setDocs] = useState(null);
  const [open, setOpen] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    sb.from('team_documents').select('id,slug,title,kind,summary,content').order('position').then(({ data, error: e }) => {
      if (e) { setError('couldn’t load documents. refresh to try again.'); return; }
      setDocs(data);
      const hash = window.location.hash.replace('#', '');
      if (data.some((d) => d.slug === hash)) {
        setOpen(hash);
        setTimeout(() => document.getElementById(hash)?.scrollIntoView({ block: 'start' }), 60);
      }
    });
  }, [sb]);

  return (
    <>
      <h1 className="tm-h1">documents</h1>
      <p className="tm-sub">private to the team. please don’t share them.</p>
      {error && <div className="cr-banner" role="alert">{error}</div>}
      {!docs && !error && <p className="tm-muted">loading…</p>}
      {docs && docs.length === 0 && <p className="tm-muted">no documents yet.</p>}
      <div className="tm-list">
        {(docs || []).map((d) => {
          const isOpen = open === d.slug;
          return (
            <section key={d.id} id={d.slug} className="tm-item">
              <button type="button" className="tm-acc" aria-expanded={isOpen} onClick={() => setOpen(isOpen ? '' : d.slug)}>
                <span className="tm-item-t"><b>{d.title}</b><small>{d.summary}</small></span>
                {d.kind === 'compensation' && <span className="cr-tag cr-tag-teal">private</span>}
                <span className="tm-chev" aria-hidden="true">{isOpen ? '−' : '+'}</span>
              </button>
              {isOpen && <div className="tm-body-open"><RichText text={d.content} /></div>}
            </section>
          );
        })}
      </div>
    </>
  );
}
