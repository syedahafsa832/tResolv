'use client';

import { useEffect, useState } from 'react';
import { useTeam } from '@/components/team/TeamGate';
import RichText from '@/components/team/RichText';

export default function Onboarding() {
  const { sb, member } = useTeam();
  const [mods, setMods] = useState(null);
  const [done, setDone] = useState(new Set());
  const [open, setOpen] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    (async () => {
      const [m, p] = await Promise.all([
        sb.from('onboarding_modules').select('id,slug,title,description,content,position').order('position'),
        sb.from('onboarding_progress').select('module_id'),
      ]);
      if (m.error || p.error) { setError('couldn’t load onboarding. refresh to try again.'); return; }
      const d = new Set(p.data.map((x) => x.module_id));
      setMods(m.data); setDone(d);
      const hash = window.location.hash.replace('#', '');
      const target = m.data.find((x) => x.slug === hash) || m.data.find((x) => !d.has(x.id));
      if (target) {
        setOpen(target.slug);
        if (hash) setTimeout(() => document.getElementById(target.slug)?.scrollIntoView({ block: 'start' }), 60);
      }
    })();
  }, [sb]);

  const complete = async (m, i) => {
    setError('');
    const on = done.has(m.id);
    const { error: e } = on
      ? await sb.from('onboarding_progress').delete().eq('team_member_id', member.id).eq('module_id', m.id)
      : await sb.from('onboarding_progress').insert({ team_member_id: member.id, module_id: m.id });
    if (e) { setError('couldn’t save that. try again.'); return; }
    setDone((prev) => { const n = new Set(prev); if (on) n.delete(m.id); else n.add(m.id); return n; });
    const next = mods[i + 1];
    if (!on && next) {
      setOpen(next.slug);
      setTimeout(() => document.getElementById(next.slug)?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80);
    }
  };

  const total = mods ? mods.length : 0;
  const count = mods ? mods.filter((m) => done.has(m.id)).length : 0;

  return (
    <>
      <h1 className="tm-h1">things to get through</h1>
      <p className="tm-sub">read one, tick it off, move to the next. you’ve got this.</p>
      {mods && (
        <div className="tm-progress">
          <span>{count} / {total} complete</span>
          <div className="cr-bar"><div style={{ width: `${total ? (count / total) * 100 : 0}%` }} /></div>
        </div>
      )}
      {error && <div className="cr-banner" role="alert">{error}</div>}
      {!mods && !error && <p className="tm-muted">loading…</p>}
      {mods && mods.length === 0 && <p className="tm-muted">nothing here yet. check back soon.</p>}
      <div className="tm-list">
        {(mods || []).map((m, i) => {
          const isOpen = open === m.slug;
          return (
            <section key={m.id} id={m.slug} className={`tm-item ${done.has(m.id) ? 'is-done' : ''}`}>
              <button type="button" className="tm-acc" aria-expanded={isOpen} onClick={() => setOpen(isOpen ? '' : m.slug)}>
                <span className="tm-num">{String(i + 1).padStart(2, '0')}</span>
                <span className="tm-item-t"><b>{m.title}</b><small>{m.description}</small></span>
                {done.has(m.id) && <span className="cr-tag cr-tag-teal">done</span>}
                <span className="tm-chev" aria-hidden="true">{isOpen ? '−' : '+'}</span>
              </button>
              {isOpen && (
                <div className="tm-body-open">
                  <RichText text={m.content} />
                  <button type="button" className={`cr-btn cr-btn-sm ${done.has(m.id) ? 'cr-btn-ghost' : 'cr-btn-primary'}`} onClick={() => complete(m, i)}>
                    {done.has(m.id) ? 'mark as not done' : mods[i + 1] ? 'mark complete, next section →' : 'mark complete ✓'}
                  </button>
                </div>
              )}
            </section>
          );
        })}
      </div>
    </>
  );
}
