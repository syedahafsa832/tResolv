'use client';

import { useState } from 'react';
import { getAdminClient } from '@/lib/careers/adminClient';

export const STATUSES = ['new', 'reviewing', 'shortlisted', 'interview', 'selected', 'rejected'];

export const fmtDate = (v, withTime = false) =>
  v ? new Date(v).toLocaleString('en-GB', withTime
    ? { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' }
    : { day: 'numeric', month: 'short', year: 'numeric' }) : '';

// Saves the status to Supabase (RLS only lets admins do this) and reports the
// saved row back. Shows the previous value again if the save fails.
export function StatusSelect({ id, value, onSaved, size = 'md' }) {
  const [saving, setSaving] = useState(false);
  const [err, setErr] = useState('');

  const change = async (e) => {
    const next = e.target.value;
    setSaving(true); setErr('');
    const { data, error } = await getAdminClient()
      .from('applications').update({ status: next }).eq('id', id).select('id,status,updated_at').maybeSingle();
    setSaving(false);
    if (error || !data) { setErr('couldn’t save'); return; }
    onSaved(data);
  };

  return (
    <span className="cr-status-wrap" onClick={(e) => e.stopPropagation()}>
      <select
        className={`cr-status cr-status-${value} ${size === 'lg' ? 'cr-status-lg' : ''}`}
        value={value} onChange={change} disabled={saving} aria-label="application status"
      >
        {STATUSES.map((s) => <option key={s} value={s}>{s}</option>)}
      </select>
      {err && <span className="cr-err cr-status-err">{err}</span>}
    </span>
  );
}
