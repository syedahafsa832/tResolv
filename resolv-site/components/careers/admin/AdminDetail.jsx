'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getAdminClient } from '@/lib/careers/adminClient';
import { StatusSelect, fmtDate, callSelection, selectionMessage } from './adminBits';

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

function TeamAccess({ appId, refreshKey }) {
  const [info, setInfo] = useState(undefined);
  const [msg, setMsg] = useState('');
  const [busy, setBusy] = useState(false);

  const load = async () => {
    const sb = getAdminClient();
    const { data: tm } = await sb.from('team_members').select('*').eq('application_id', appId).maybeSingle();
    let done = 0; let req = 0;
    if (tm) {
      const [p, m] = await Promise.all([
        sb.from('onboarding_progress').select('module_id', { count: 'exact', head: true }).eq('team_member_id', tm.id),
        sb.from('onboarding_modules').select('id', { count: 'exact', head: true }).eq('published', true),
      ]);
      done = p.count || 0; req = m.count || 0;
    }
    setInfo({ tm, done, req });
  };
  useEffect(() => { load(); }, [appId, refreshKey]); // eslint-disable-line react-hooks/exhaustive-deps

  const resend = async () => {
    setBusy(true); setMsg('');
    const res = await callSelection(appId, true);
    setMsg(selectionMessage(res)); setBusy(false); load();
  };

  const tm = info && info.tm;
  return (
    <section className="cr-ad-group">
      <h2>team access</h2>
      {info === undefined && <p className="cr-ad-sub">loading…</p>}
      {info && !tm && <p className="cr-ad-sub">no team member yet. it’s created when the welcome email is sent.</p>}
      {tm && (
        <>
          <Row label="team member" value={tm.status} />
          <Row label="auth account" value={tm.auth_user_id ? 'created' : 'not yet'} />
          <Row label="welcome email" value={tm.welcome_email_sent_at ? `sent ${fmtDate(tm.welcome_email_sent_at, true)}` : 'not sent'} />
          <Row label="last login" value={tm.last_login_at ? fmtDate(tm.last_login_at, true) : 'never'} />
          <Row label="onboarding progress" value={`${info.done} / ${info.req} items`} />
        </>
      )}
      <div style={{ marginTop: 20, display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap' }}>
        <button type="button" className="cr-btn cr-btn-ghost cr-btn-sm" onClick={resend} disabled={busy}>
          {busy ? 'sending…' : tm && tm.welcome_email_sent_at ? 'resend welcome email' : 'send welcome email'}
        </button>
        {msg && <span className="cr-ad-sub">{msg}</span>}
      </div>
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

          {app.status === 'selected' && <TeamAccess appId={app.id} refreshKey={teamKey} />}

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
