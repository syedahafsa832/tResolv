'use client';

import { useEffect, useState } from 'react';
import { useTeam } from '@/components/team/TeamGate';
import { fmt } from '@/lib/careers/teamClient';

const STATUSES = ['todo', 'in_progress', 'done'];

export default function Tasks() {
  const { sb } = useTeam();
  const [tasks, setTasks] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    sb.from('tasks').select('*').order('created_at', { ascending: false }).then(({ data, error: e }) => {
      if (e) setError('couldn’t load your tasks. refresh to try again.'); else setTasks(data);
    });
  }, [sb]);

  const setStatus = async (id, status) => {
    setError('');
    const { data, error: e } = await sb.from('tasks').update({ status }).eq('id', id).select('id,status,completed_at').maybeSingle();
    if (e || !data) { setError('couldn’t save that. try again.'); return; }
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, ...data } : t)));
  };

  return (
    <>
      <h1 className="tm-h1">your tasks</h1>
      <p className="tm-sub">your next move →</p>
      {error && <div className="cr-banner" role="alert">{error}</div>}
      {!tasks && !error && <p className="tm-muted">loading…</p>}
      {tasks && tasks.length === 0 && <p className="tm-muted">no tasks yet. your first ones will show up here.</p>}
      <div className="tm-list">
        {(tasks || []).map((t) => (
          <div key={t.id} className={`tm-item tm-task ${t.status === 'done' ? 'is-done' : ''}`}>
            <div className="tm-task-main">
              <b>{t.title}</b>
              {t.description && <p className="tm-content">{t.description}</p>}
              <div className="tm-task-meta">
                <span className={`cr-tag ${t.priority === 'high' ? 'tm-tag-hot' : ''}`}>{t.priority}</span>
                {t.due_date && <span className="cr-tag">due {fmt(t.due_date)}</span>}
                {t.resource_url && <a href={t.resource_url} target="_blank" rel="noopener noreferrer" className="tm-link">resource ↗</a>}
              </div>
            </div>
            <select className={`cr-status cr-status-${t.status === 'todo' ? 'new' : t.status === 'in_progress' ? 'reviewing' : 'selected'}`}
              value={t.status} onChange={(e) => setStatus(t.id, e.target.value)} aria-label="task status">
              {STATUSES.map((s) => <option key={s} value={s}>{s.replace('_', ' ')}</option>)}
            </select>
          </div>
        ))}
      </div>
    </>
  );
}
