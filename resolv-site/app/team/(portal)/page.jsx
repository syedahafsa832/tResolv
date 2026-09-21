'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useTeam } from '@/components/team/TeamGate';
import { ROLE_BLURBS, fmt } from '@/lib/careers/teamClient';

export default function TeamHome() {
  const { sb, member } = useTeam();
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      const [mods, prog, tasks, news] = await Promise.all([
        sb.from('onboarding_modules').select('id,title,required,position').order('position'),
        sb.from('onboarding_progress').select('module_id'),
        sb.from('tasks').select('id,title,status,priority,due_date').neq('status', 'done').order('created_at', { ascending: false }).limit(3),
        sb.from('announcements').select('id,title,message,created_at').order('created_at', { ascending: false }).limit(2),
      ]);
      if ([mods, prog, tasks, news].some((r) => r.error)) { setError(true); return; }
      setData({ mods: mods.data, done: new Set(prog.data.map((p) => p.module_id)), tasks: tasks.data, news: news.data });
    })();
  }, [sb]);

  const first = member.name.split(' ')[0];
  const blurb = ROLE_BLURBS[member.role];
  const total = data ? data.mods.length : 0;
  const doneCount = data ? data.mods.filter((m) => data.done.has(m.id)).length : 0;
  const next = data && data.mods.find((m) => !data.done.has(m.id));

  return (
    <>
      <p className="cr-hand tm-hey">hey {first} 👋</p>
      <h1 className="tm-h1">welcome to tResolv, {member.name} 👀</h1>
      <p className="tm-sub">you’re officially on the team.</p>

      <div className="tm-grid">
        <section className="tm-card tm-card-role">
          <span className="tm-kicker">your role</span>
          <h2>{member.role}</h2>
          {blurb && <p>{blurb}</p>}
        </section>

        <section className="tm-card">
          <span className="tm-kicker">onboarding</span>
          {error && <p className="cr-err">couldn’t load this. refresh to try again.</p>}
          {!data && !error && <p className="tm-muted">loading…</p>}
          {data && (
            <>
              <h2>{doneCount} / {total} items done</h2>
              <div className="cr-bar"><div style={{ width: `${total ? (doneCount / total) * 100 : 0}%` }} /></div>
              {next
                ? <Link href="/team/onboarding" className="tm-next">your next move → {next.title}</Link>
                : <p className="tm-muted">you’ve got through everything. nice.</p>}
            </>
          )}
        </section>

        <section className="tm-card">
          <span className="tm-kicker">next tasks</span>
          {data && data.tasks.length === 0 && <p className="tm-muted">nothing assigned yet. your first tasks will show up here.</p>}
          {data && data.tasks.map((t) => (
            <Link key={t.id} href="/team/tasks" className="tm-row"><span>{t.title}</span><em>{t.due_date ? `due ${fmt(t.due_date)}` : t.status.replace('_', ' ')}</em></Link>
          ))}
        </section>

        <section className="tm-card">
          <span className="tm-kicker">latest updates</span>
          {data && data.news.length === 0 && <p className="tm-muted">nothing new yet.</p>}
          {data && data.news.map((n) => (
            <Link key={n.id} href="/team/updates" className="tm-row"><span>{n.title}</span><em>{fmt(n.created_at)}</em></Link>
          ))}
        </section>
      </div>
    </>
  );
}
