'use client';

import { useEffect, useState } from 'react';
import { useTeam } from '@/components/team/TeamGate';
import { fmt } from '@/lib/careers/teamClient';
import TeamChat from '@/components/team/TeamChat';

export default function Updates() {
  const { sb } = useTeam();
  const [items, setItems] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    sb.from('announcements').select('*').order('created_at', { ascending: false }).then(({ data, error: e }) => {
      if (e) setError('couldn’t load updates. refresh to try again.'); else setItems(data);
    });
  }, [sb]);

  return (
    <>
      <h1 className="tm-h1">updates</h1>
      <p className="tm-sub">what’s new around here.</p>
      {error && <div className="cr-banner" role="alert">{error}</div>}
      {!items && !error && <p className="tm-muted">loading…</p>}
      {items && items.length === 0 && <p className="tm-muted">nothing new yet. we’ll post here.</p>}
      <div className="tm-list">
        {(items || []).map((n) => (
          <article key={n.id} className="tm-item tm-news">
            <em>{fmt(n.created_at)}</em>
            <b>{n.title}</b>
            {n.message && <p className="tm-content">{n.message}</p>}
            {n.resource_url && <a href={n.resource_url} target="_blank" rel="noopener noreferrer" className="tm-link">open ↗</a>}
          </article>
        ))}
      </div>
      <TeamChat />
    </>
  );
}
