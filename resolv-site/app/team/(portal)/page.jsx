'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useTeam } from '@/components/team/TeamGate';
import TeamChat from '@/components/team/TeamChat';
import { ROLE_BLURBS, fmt, dueLabel, taskUrgency, ENGAGEMENT_MESSAGES } from '@/lib/careers/teamClient';

const DAY_LABEL = ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5'];

export default function TeamHome() {
  const { sb, member } = useTeam();
  const [d, setD] = useState(null);
  const [error, setError] = useState(false);
  const [engagement, setEngagement] = useState(null);

  useEffect(() => {
    (async () => {
      const [mods, prog, tasks, news, docs, eng] = await Promise.all([
        sb.from('onboarding_modules').select('id,slug,title').order('position'),
        sb.from('onboarding_progress').select('module_id'),
        sb.from('tasks').select('id,title,status,due_date,position').order('position').order('created_at'),
        sb.from('announcements').select('id,title,created_at').order('created_at', { ascending: false }).limit(2),
        sb.from('team_documents').select('id,slug,title,summary').order('position'),
        member.is_founder ? Promise.resolve({ data: null, error: null }) : sb.rpc('team_member_engagement', { p_member_id: member.id }),
      ]);
      if ([mods, prog, tasks, news, docs].some((r) => r.error)) { setError(true); return; }
      setD({ mods: mods.data, done: new Set(prog.data.map((p) => p.module_id)), allTasks: tasks.data, news: news.data, docs: docs.data });
      if (!eng.error && eng.data?.[0]) setEngagement(eng.data[0]);
    })();
  }, [sb, member.id, member.is_founder]);

  const first = member.name.split(' ')[0];
  const total = d ? d.mods.length : 0;
  const doneCount = d ? d.mods.filter((m) => d.done.has(m.id)).length : 0;
  const nextMod = d && d.mods.find((m) => !d.done.has(m.id));
  const openTasks = d ? d.allTasks.filter((t) => t.status !== 'done') : [];
  const nextTask = openTasks[0];
  const urgency = d ? taskUrgency(openTasks) : null;
  const nextTaskDue = nextTask && dueLabel(nextTask.due_date, nextTask.status);
  const isActivated = !member.is_founder && d && d.allTasks.some((t) => t.due_date);
  const tasksDone = d ? d.allTasks.filter((t) => t.status === 'done').length : 0;

  return (
    <>
      <p className="cr-hand tm-hey">hey {first} 👋</p>
      <h1 className="tm-h1">welcome to the team.</h1>
      <p className="tm-sub">{member.role}. here’s what you need to know.</p>

      {error && <div className="cr-banner" role="alert">couldn’t load everything. refresh to try again.</div>}

      {!member.is_founder && d && !isActivated && (
        <div className="tm-urgency tm-urgency-wait">
          <b>{ENGAGEMENT_MESSAGES.unknown.headline}</b>
          <p>{ENGAGEMENT_MESSAGES.unknown.body}</p>
        </div>
      )}

      {!member.is_founder && isActivated && urgency && (urgency.overdue > 0 ? (
        <div className="tm-urgency tm-urgency-behind">
          <b>{engagement?.engagement_status === 'inactive' ? ENGAGEMENT_MESSAGES.inactive.headline : ENGAGEMENT_MESSAGES.at_risk.headline}</b>
          <p>{engagement?.engagement_status === 'inactive' ? ENGAGEMENT_MESSAGES.inactive.body : ENGAGEMENT_MESSAGES.at_risk.body}</p>
        </div>
      ) : urgency.dueSoon > 0 ? (
        <div className="tm-urgency tm-urgency-soon">
          <b>your next move →</b>
          <p>{urgency.dueSoon} task{urgency.dueSoon === 1 ? '' : 's'} due soon.</p>
        </div>
      ) : (
        <div className="tm-urgency tm-urgency-ok">
          <b>{ENGAGEMENT_MESSAGES.active.headline}</b>
          <p>nothing due right now. keep it up.</p>
        </div>
      ))}

      {!member.is_founder && isActivated && (
        <section className="tm-card" style={{ marginBottom: 18 }}>
          <span className="tm-kicker">your first week</span>
          <div className="tm-timeline">
            {d.allTasks.filter((t) => t.position <= 5).map((t, i) => {
              const lab = dueLabel(t.due_date, t.status);
              return (
                <div key={t.id} className={`tm-tl-row ${t.status === 'done' ? 'is-done' : ''}`}>
                  <span className="tm-tl-day">{DAY_LABEL[i] || `Day ${i + 1}`}</span>
                  <span className="tm-tl-title">{t.title}</span>
                  <span className={`tm-tl-due ${lab ? `tm-due-${lab.tone}` : ''}`}>{lab ? lab.text : ''}</span>
                </div>
              );
            })}
          </div>
          <p className="tm-muted" style={{ marginTop: 12 }}>your progress: {tasksDone} / {d.allTasks.length} tasks complete</p>
        </section>
      )}

      {d && (nextMod || nextTask) && (
        <Link href={nextMod ? `/team/onboarding#${nextMod.slug}` : '/team/tasks'} className="tm-move">
          <span className="tm-kicker">next move →</span>
          <b>{nextMod ? nextMod.title : nextTask.title}</b>
          <small>{nextMod ? 'continue onboarding' : (nextTaskDue ? nextTaskDue.text : 'not scheduled yet')}</small>
        </Link>
      )}
      {!member.is_founder && <p className="tm-fineprint">missed deadlines may put your active team status at risk.</p>}

      <div className="tm-grid">
        <section className="tm-card">
          <span className="tm-kicker">your role</span>
          <h2>{member.is_founder ? 'Founder' : member.role}</h2>
          {!member.is_founder && ROLE_BLURBS[member.role] && <p>{ROLE_BLURBS[member.role]}</p>}
        </section>

        <section className="tm-card">
          <span className="tm-kicker">onboarding</span>
          {!d && !error && <p className="tm-muted">loading…</p>}
          {d && (
            <>
              <h2>{doneCount} / {total} complete</h2>
              <div className="cr-bar"><div style={{ width: `${total ? (doneCount / total) * 100 : 0}%` }} /></div>
              <Link href="/team/onboarding" className="tm-next">things to get through →</Link>
            </>
          )}
        </section>

        {!member.is_founder && (
          <section className="tm-card">
            <span className="tm-kicker">your tasks</span>
            {d && openTasks.length === 0 && <p className="tm-muted">nothing open right now.</p>}
            {d && openTasks.slice(0, 3).map((t) => {
              const lab = dueLabel(t.due_date, t.status);
              return (
                <Link key={t.id} href="/team/tasks" className="tm-row"><span>{t.title}</span><em className={lab ? `tm-due-${lab.tone}` : ''}>{lab ? lab.text : 'not scheduled yet'}</em></Link>
              );
            })}
          </section>
        )}

        <section className="tm-card">
          <span className="tm-kicker">updates</span>
          {d && d.news.length === 0 && <p className="tm-muted">nothing new yet.</p>}
          {d && d.news.map((n) => (
            <Link key={n.id} href="/team/updates" className="tm-row"><span>{n.title}</span><em>{fmt(n.created_at)}</em></Link>
          ))}
        </section>

        <section className="tm-card tm-card-wide">
          <span className="tm-kicker">documents</span>
          {d && d.docs.map((x) => (
            <Link key={x.id} href={`/team/documents#${x.slug}`} className="tm-row"><span>{x.title}</span><em>{x.summary}</em></Link>
          ))}
        </section>
      </div>

      <TeamChat />
    </>
  );
}
