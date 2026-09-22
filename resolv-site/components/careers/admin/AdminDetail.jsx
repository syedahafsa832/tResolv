'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getAdminClient } from '@/lib/careers/adminClient';
import { StatusSelect, fmtDate, callSelection, selectionMessage } from './adminBits';
import { validateActivationDate } from '@/lib/careers/teamClient';

const GROUPS = [
  { title: 'basic', fields: [['full_name', 'name'], ['email', 'email'], ['linkedin_url', 'linkedin'], ['location', 'location']] },
  { title: 'experience', fields: [['proud_of', 'what they’ve done that they’re proud of']] },
  {
    title: 'thinking',
    fields: [
      ['why_pick_you', 'why we should pick them without experience'],
      ['shopify_brand_approach', 'how they’d research a shopify brand'],
      ['brand_name', 'brand they found'],
      ['brand_reason', 'why they chose it'],
      ['first_message', 'first outreach message'],
      ['no_reply_plan', 'what they’d do after 30 messages get no replies'],
      ['one_week_plan', 'what they’d work on with no instructions'],
    ],
  },
  {
    title: 'personal',
    fields: [
      ['unusually_good_at', 'what they’re unusually good at'],
      ['improving_at', 'what they’re improving'],
      ['weekly_hours', 'weekly availability'],
      ['start_when', 'start date'],
    ],
  },
];

function Row({ label, value }) {
  return <div className="cr-ad-field"><div className="cr-ad-label">{label}</div><div className="cr-ad-value">{value}</div></div>;
}

// Engagement labels: 'unknown' means no activated_at yet (nothing computable); 'deactivated' mirrors
// team_members.status='inactive' (an admin decision). 'at_risk'/'inactive' are computed live from
// overdue tasks and meaningful activity - see team_member_engagement() in the database.
const ENGAGEMENT_COPY = {
  unknown: ['not activated', 'cr-status-new'],
  active: ['on track', 'cr-status-selected'],
  at_risk: ['at risk', 'cr-status-shortlisted'],
  inactive: ['inactive', 'cr-status-rejected'],
  deactivated: ['deactivated', 'cr-status-rejected'],
  founder: ['founder', 'cr-status-selected'],
};
const todayStr = () => new Date().toISOString().slice(0, 10);

function TeamAccess({ appId, refreshKey, appliedAt }) {
  const [info, setInfo] = useState(undefined);
  const [eng, setEng] = useState(null);
  const [msg, setMsg] = useState('');
  const [busy, setBusy] = useState(false);
  const [reason, setReason] = useState('');
  const [dateInput, setDateInput] = useState(todayStr());
  const [showDateField, setShowDateField] = useState(false);
  const [dateErr, setDateErr] = useState('');

  const load = async () => {
    const sb = getAdminClient();
    const { data: tm } = await sb.from('team_members').select('*').eq('application_id', appId).maybeSingle();
    if (tm && !tm.is_founder) {
      const { data: e } = await sb.rpc('team_member_engagement', { p_member_id: tm.id });
      setEng(e?.[0] || null);
    }
    setInfo({ tm });
  };
  useEffect(() => { load(); }, [appId, refreshKey]); // eslint-disable-line react-hooks/exhaustive-deps

  const resend = async () => {
    setBusy(true); setMsg('');
    const res = await callSelection(appId, true);
    setMsg(selectionMessage(res)); setBusy(false); load();
  };

  // Activation is a deliberate founder action: pick a date (defaults to today), validated both here
  // and by the database itself (team_members_guard), and no email is sent as a result of this.
  const activate = async () => {
    const err = validateActivationDate(dateInput, appliedAt);
    if (err) { setDateErr(err); return; }
    setDateErr(''); setBusy(true); setMsg('');
    const iso = new Date(`${dateInput}T09:00:00`).toISOString();
    const { error } = await getAdminClient().from('team_members').update({ activated_at: iso }).eq('id', tm.id);
    setMsg(error ? (error.message || 'couldn’t set an activation date.') : `activated ${dateInput === todayStr() ? 'today' : `from ${dateInput}`} — starter task deadlines are set.`);
    setBusy(false); setShowDateField(false); load();
  };

  const toggleAccess = async () => {
    const deactivating = tm.status === 'active';
    setBusy(true); setMsg('');
    const patch = deactivating ? { status: 'inactive', deactivation_reason: reason.trim() || null } : { status: 'active', deactivation_reason: null };
    const { error } = await getAdminClient().from('team_members').update(patch).eq('id', tm.id);
    setMsg(error ? 'couldn’t change access.' : deactivating ? 'access revoked. their data is kept.' : 'reactivated.');
    setBusy(false); setReason(''); load();
  };

  const tm = info && info.tm;
  const [label, cls] = ENGAGEMENT_COPY[tm?.is_founder ? 'founder' : eng?.engagement_status] || ENGAGEMENT_COPY.unknown;
  return (
    <section className="cr-ad-group">
      <h2>team access</h2>
      {info === undefined && <p className="cr-ad-sub">loading…</p>}
      {info && !tm && <p className="cr-ad-sub">no team member yet. it’s created when the welcome email is sent.</p>}
      {tm && tm.is_founder && (
        <p className="cr-ad-sub">this is the founder’s own account — excluded from starter tasks, deadlines, engagement tracking, and reminders.</p>
      )}
      {tm && (
        <>
          <Row label="portal access" value={tm.status === 'active' ? 'active' : `deactivated${tm.deactivated_at ? ` (${fmtDate(tm.deactivated_at, true)})` : ''}`} />
          <Row label="engagement" value={<span className={`cr-status ${cls}`} style={{ cursor: 'default' }}>{label}</span>} />
          {tm.deactivation_reason && <Row label="deactivation reason" value={tm.deactivation_reason} />}
          {!tm.is_founder && (
            <Row label="activation date" value={
              tm.activated_at && !showDateField ? (
                <>{fmtDate(tm.activated_at, true)} <button type="button" className="cr-linkbtn" onClick={() => setShowDateField(true)}>change</button></>
              ) : (
                <span style={{ display: 'inline-flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
                  <input type="date" className="cr-input" style={{ margin: 0, width: 160 }} value={dateInput} max={todayStr()} onChange={(e) => { setDateInput(e.target.value); setDateErr(''); }} />
                  <button type="button" className="cr-btn cr-btn-ghost cr-btn-sm" onClick={activate} disabled={busy}>{tm.activated_at ? 'save →' : 'activate →'}</button>
                  {tm.activated_at && <button type="button" className="cr-linkbtn" onClick={() => setShowDateField(false)}>cancel</button>}
                  {dateErr && <span className="cr-err">{dateErr}</span>}
                </span>
              )
            } />
          )}
          <Row label="auth account" value={tm.auth_user_id ? 'created' : 'not yet'} />
          <Row label="welcome email" value={tm.welcome_email_sent_at ? `sent ${fmtDate(tm.welcome_email_sent_at, true)}` : 'not sent'} />
          <Row label="last login" value={tm.last_login_at ? fmtDate(tm.last_login_at, true) : 'never'} />
          {eng && !tm.is_founder && (
            <>
              <Row label="onboarding progress" value={`${eng.onboarding_done} / ${eng.onboarding_total} items`} />
              <Row label="tasks" value={`${eng.completed_tasks} / ${eng.total_tasks} done, ${eng.overdue_tasks} overdue`} />
              <Row label="last meaningful activity" value={eng.last_meaningful_activity_at ? fmtDate(eng.last_meaningful_activity_at, true) : 'none yet'} />
            </>
          )}
        </>
      )}
      {tm && (
        <div style={{ marginTop: 20, display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap' }}>
          <button type="button" className="cr-btn cr-btn-ghost cr-btn-sm" onClick={resend} disabled={busy}>
            {busy ? 'working…' : tm.welcome_email_sent_at ? 'resend welcome email' : 'send welcome email'}
          </button>
          {tm.status === 'active' ? (
            <>
              <input className="cr-input" style={{ margin: 0, width: 220 }} placeholder="reason (optional)" value={reason} onChange={(e) => setReason(e.target.value)} />
              <button type="button" className="cr-btn cr-btn-ghost cr-btn-sm" onClick={toggleAccess} disabled={busy}>deactivate</button>
            </>
          ) : (
            <button type="button" className="cr-btn cr-btn-ghost cr-btn-sm" onClick={toggleAccess} disabled={busy}>reactivate</button>
          )}
          {msg && <span className="cr-ad-sub">{msg}</span>}
        </div>
      )}
    </section>
  );
}

export default function AdminDetail({ id }) {
  const [teamKey, setTeamKey] = useState(0);
  const [app, setApp] = useState(undefined); // undefined = loading, null = not found
  const [error, setError] = useState('');

  const load = async () => {
    setApp(undefined); setError('');
    const { data, error: e } = await getAdminClient().from('applications').select('*').eq('id', id).maybeSingle();
    if (e) setError('couldn’t load this application.'); else setApp(data);
  };
  useEffect(() => { load(); }, [id]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="cr-ad-body">
      <Link href="/careers/admin" className="cr-back">← back to applications</Link>
      {error && <div className="cr-banner" role="alert">{error} <button type="button" className="cr-linkbtn" onClick={load}>try again</button></div>}
      {!error && app === undefined && <p className="cr-ad-state">loading…</p>}
      {!error && app === null && <p className="cr-ad-state">application not found.</p>}
      {app && (
        <>
          <div className="cr-ad-dhead">
            <div>
              <h1 className="cr-ad-title">{app.full_name}</h1>
              <p className="cr-ad-sub">
                {app.role} · submitted {fmtDate(app.created_at, true)}<br />
                updated {fmtDate(app.updated_at, true)}
              </p>
            </div>
            <StatusSelect id={app.id} value={app.status} size="lg" onSelectionDone={() => setTeamKey((k) => k + 1)} onSaved={(u) => setApp((a) => ({ ...a, status: u.status, updated_at: u.updated_at }))} />
          </div>

          {Object.keys(app.pasted_fields || {}).length > 0 && (
            <div className="cr-ad-paste-note">
              <b>copy-pasted answers</b>
              {Object.keys(app.pasted_fields).length} of their long answers were mostly or partly pasted in (tagged below).
              this comes from their browser, so treat it as a hint.
            </div>
          )}

          {app.status === 'selected' && <TeamAccess appId={app.id} refreshKey={teamKey} appliedAt={app.created_at} />}

          {GROUPS.map((g) => (
            <section key={g.title} className="cr-ad-group">
              <h2>{g.title}</h2>
              {g.fields.map(([key, label]) => (
                <div key={key} className="cr-ad-field">
                  <div className="cr-ad-label">{label}{app.pasted_fields?.[key] && <span className="cr-paste-tag">pasted ~{app.pasted_fields[key]}%</span>}</div>
                  <div className="cr-ad-value">
                    {key === 'linkedin_url'
                      ? <a href={app[key]} target="_blank" rel="noopener noreferrer">{app[key]}</a>
                      : key === 'email' ? <a href={`mailto:${app[key]}`}>{app[key]}</a> : app[key]}
                  </div>
                </div>
              ))}
            </section>
          ))}
        </>
      )}
    </div>
  );
}
