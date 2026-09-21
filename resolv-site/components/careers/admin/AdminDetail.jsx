'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getAdminClient } from '@/lib/careers/adminClient';
import { StatusSelect, fmtDate } from './adminBits';

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

export default function AdminDetail({ id }) {
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
            <StatusSelect id={app.id} value={app.status} size="lg" onSaved={(u) => setApp((a) => ({ ...a, status: u.status, updated_at: u.updated_at }))} />
          </div>

          {GROUPS.map((g) => (
            <section key={g.title} className="cr-ad-group">
              <h2>{g.title}</h2>
              {g.fields.map(([key, label]) => (
                <div key={key} className="cr-ad-field">
                  <div className="cr-ad-label">{label}</div>
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
