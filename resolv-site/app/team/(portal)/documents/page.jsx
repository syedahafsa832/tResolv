'use client';

import { useEffect, useState } from 'react';
import { useTeam } from '@/components/team/TeamGate';

export default function Documents() {
  const { sb } = useTeam();
  const [docs, setDocs] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    sb.from('team_documents').select('*').order('position').then(({ data, error: e }) => {
      if (e) setError('couldn’t load documents. refresh to try again.'); else setDocs(data);
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
        {(docs || []).map((d) => (
          <details key={d.id} className="tm-item">
            <summary>
              <span className="tm-item-t"><b>{d.title}</b><small>{d.summary}</small></span>
              {d.kind === 'compensation' && <span className="cr-tag cr-tag-teal">private</span>}
            </summary>
            <div className="tm-content">{d.content}</div>
          </details>
        ))}
      </div>
    </>
  );
}
