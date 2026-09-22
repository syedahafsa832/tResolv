'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getAdminClient } from '@/lib/careers/adminClient';
import { fmtDate } from './adminBits';
import { daysAgo } from '@/lib/careers/teamClient';

const ENGAGEMENT_COPY = {
  unknown: ['not activated', 'cr-status-new'],
  active: ['on track', 'cr-status-selected'],
  at_risk: ['at risk', 'cr-status-shortlisted'],
  inactive: ['inactive', 'cr-status-rejected'],
  deactivated: ['deactivated', 'cr-status-rejected'],
};
// Who to look at first: real risk before everyone else, on-track/unknown last.
const RANK = { inactive: 0, at_risk: 1, unknown: 2, active: 3, deactivated: 4 };

// A short, honest reason - built only from real signals already on the row, never invented.
function reasonFor(r) {
  if (r.engagement_status === 'unknown') return 'no activation date set yet';
  if (r.engagement_status === 'deactivated') return r.deactivation_reason || 'deactivated by founder';
  if (r.tasks_overdue > 0) return `${r.tasks_overdue} task${r.tasks_overdue === 1 ? '' : 's'} overdue`;
  if (r.engagement_status === 'inactive' || r.engagement_status === 'at_risk') {
    return r.last_meaningful_activity_at
      ? `last meaningful activity: ${daysAgo(r.last_meaningful_activity_at)}`
      : `no completed work since activation (${daysAgo(r.activated_at)})`;
  }
  return 'on track';
}

// "Who is actually working vs who is just sitting in the team" - one glance, no HR dashboard.
export default function AdminTeam() {
  const [rows, setRows] = useState(null);
  const [error, setError] = useState('');

  const load = async () => {
    setRows(null); setError('');
    const { data, error: e } = await getAdminClient().from('team_ops_overview').select('*');
    if (e) { setError('couldn’t load the team overview.'); return; }
    setRows([...data].sort((a, b) => (RANK[a.engagement_status] ?? 9) - (RANK[b.engagement_status] ?? 9)));
  };
  useEffect(() => { load(); }, []);

  const founders = rows ? rows.filter((r) => r.is_founder) : [];
  const tracked = rows ? rows.filter((r) => !r.is_founder) : [];
  const summary = ['active', 'at_risk', 'inactive', 'unknown'].map((k) => ({
    key: k, label: k === 'unknown' ? 'not activated' : k.replace('_', ' '),
    count: tracked.filter((r) => r.engagement_status === k).length,
  }));
  const deactivatedCount = tracked.filter((r) => r.engagement_status === 'deactivated').length;

  return (
    <div className="cr-ad-body">
      <Link href="/careers/admin" className="cr-back">← back to applications</Link>
      <h1 className="cr-ad-title">team</h1>

      {error && <div className="cr-banner" role="alert">{error} <button type="button" className="cr-linkbtn" onClick={load}>try again</button></div>}
      {!error && rows === null && <p className="cr-ad-state">loading…</p>}
      {rows && tracked.length === 0 && <p className="cr-ad-state">no team members yet.</p>}

      {rows && tracked.length > 0 && (
        <>
          <div className="cr-ad-cards" style={{ gridTemplateColumns: 'repeat(4, 1fr)', marginBottom: 8 }}>
            {summary.map((s) => (
              <div key={s.key} className="cr-ad-card" style={{ cursor: 'default' }}>
                <b>{s.count}</b><span>{s.label}</span>
              </div>
            ))}
          </div>
          {deactivatedCount > 0 && <p className="cr-ad-sub" style={{ marginBottom: 20 }}>+ {deactivatedCount} deactivated (not counted above)</p>}

          <div className="cr-ad-table">
            <div className="cr-ad-row cr-ad-row-head" style={{ gridTemplateColumns: '1.1fr 0.9fr 1fr 1fr 1.6fr 0.7fr' }}>
              <span>name</span><span>engagement</span><span>tasks</span><span>onboarding</span><span>why</span><span></span>
            </div>
            {tracked.map((r) => {
              const [label, cls] = ENGAGEMENT_COPY[r.engagement_status] || ENGAGEMENT_COPY.unknown;
              return (
                <div key={r.team_member_id} className="cr-ad-row" style={{ gridTemplateColumns: '1.1fr 0.9fr 1fr 1fr 1.6fr 0.7fr', cursor: 'default' }}>
                  <span className="cr-ad-name">{r.name}<br /><small style={{ color: 'var(--ink-3)', fontWeight: 400 }}>{r.role}</small></span>
                  <span><span className={`cr-status ${cls}`} style={{ cursor: 'default' }}>{label}</span></span>
                  <span>{r.tasks_done}/{r.tasks_total}{r.tasks_overdue > 0 ? ` (${r.tasks_overdue} overdue)` : ''}</span>
                  <span>{r.onboarding_done}/{r.onboarding_total}</span>
                  <span style={{ color: 'var(--ink-2)' }}>{reasonFor(r)}</span>
                  <span><Link href={`/careers/admin/${r.application_id}`} className="cr-linkbtn">manage →</Link></span>
                </div>
              );
            })}
          </div>
        </>
      )}

      {founders.length > 0 && (
        <p className="cr-ad-sub" style={{ marginTop: 20 }}>
          {founders.map((f) => f.name).join(', ')} — founder account{founders.length > 1 ? 's' : ''}, excluded from team tracking.
        </p>
      )}
    </div>
  );
}
