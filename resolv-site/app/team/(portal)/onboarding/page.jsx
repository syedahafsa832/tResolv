'use client';

import { useEffect, useState } from 'react';
import { useTeam } from '@/components/team/TeamGate';

export default function Onboarding() {
  const { sb, member } = useTeam();
  const [mods, setMods] = useState(null);
  const [done, setDone] = useState(new Set());
  const [error, setError] = useState('');

  useEffect(() => {
    (async () => {
      const [m, p] = await Promise.all([
        sb.from('onboarding_modules').select('*').order('position'),
        sb.from('onboarding_progress').select('module_id'),
      ]);
      if (m.error || p.error) { setError('couldn’t load onboarding. refresh to try again.'); return; }
      setMods(m.data); setDone(new Set(p.data.map((x) => x.module_id)));
    })();
  }, [sb]);

  const toggle = async (id) => {
    setError('');
    const on = done.has(id);
    const q = on
      ? sb.from('onboarding_progress').delete().eq('team_member_id', member.id).eq('module_id', id)
      : sb.from('onboarding_progress').insert({ team_member_id: member.id, module_id: id });
    const { error: e } = await q;
    if (e) { setError('couldn’t save that. try again.'); return; }
    setDone((prev) => { const n = new Set(prev); if (on) n.delete(id); else n.add(id); return n; });
  };

  const total = mods ? mods.length : 0;
  const count = mods ? mods.filter((m) => done.has(m.id)).length : 0;

  return (
    <>
      <h1 className="tm-h1">things to get through</h1>
      <p className="tm-sub">you’ve got this. tick each one off as you go.</p>
      {mods && (
        <div className="tm-progress">
          <span>{count} / {total} done</span>
          <div className="cr-bar"><div style={{ width: `${total ? (count / total) * 100 : 0}%` }} /></div>
        </div>
      )}
      {error && <div className="cr-banner" role="alert">{error}</div>}
      {!mods && !error && <p className="tm-muted">loading…</p>}
      {mods && mods.length === 0 && <p className="tm-muted">nothing here yet. check back soon.</p>}
      <div className="tm-list">
        {(mods || []).map((m, i) => (
          <details key={m.id} className={`tm-item ${done.has(m.id) ? 'is-done' : ''}`}>
            <summary>
              <span className="tm-num">{String(i + 1).padStart(2, '0')}</span>
              <span className="tm-item-t"><b>{m.title}</b><small>{m.description}</small></span>
              {done.has(m.id) && <span className="cr-tag cr-tag-teal">done</span>}
            </summary>
            <div className="tm-content">{m.content}</div>
            <button type="button" className={`cr-btn cr-btn-sm ${done.has(m.id) ? 'cr-btn-ghost' : 'cr-btn-primary'}`} onClick={() => toggle(m.id)}>
              {done.has(m.id) ? 'mark as not done' : 'mark complete ✓'}
            </button>
          </details>
        ))}
      </div>
    </>
  );
}
