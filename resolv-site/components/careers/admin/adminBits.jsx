'use client';

import { useState } from 'react';
import { getAdminClient } from '@/lib/careers/adminClient';

export const STATUSES = ['new', 'reviewing', 'shortlisted', 'interview', 'selected', 'rejected'];

export const fmtDate = (v, withTime = false) =>
  v ? new Date(v).toLocaleString('en-GB', withTime
    ? { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' }
    : { day: 'numeric', month: 'short', year: 'numeric' }) : '';

const BACKEND = process.env.NEXT_PUBLIC_CAREERS_BACKEND_URL || 'https://backend.tresolv.online';

// Asks the existing tResolv backend to run the (idempotent) selection flow. The backend checks the
// caller's real Supabase admin session itself; nothing here is trusted.
export async function callSelection(id, resend = false) {
  try {
    const { data } = await getAdminClient().auth.getSession();
    const r = await fetch(`${BACKEND}/api/careers/selection`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${data.session?.access_token}` },
      body: JSON.stringify({ application_id: id, resend }),
    });
    const j = await r.json().catch(() => ({}));
    return r.ok ? j : { status: 'error' };
  } catch { return { status: 'error' }; }
}
export const selectionMessage = (r) => ({
  sent: 'welcome email sent ✓', already_sent: 'welcome email already sent', in_progress: 'email is already being sent',
  inactive: 'team access is deactivated',
}[r.status] || 'couldn’t send the welcome email. open the applicant and use resend.');

// Saves the status to Supabase (RLS only lets admins do this) and reports the
// saved row back. Shows the previous value again if the save fails.
export function StatusSelect({ id, value, onSaved, onSelectionDone, size = 'md' }) {
  const [saving, setSaving] = useState(false);
  const [note, setNote] = useState('');
  const [err, setErr] = useState('');

  const change = async (e) => {
    const next = e.target.value;
    setSaving(true); setErr('');
    const { data, error } = await getAdminClient()
      .from('applications').update({ status: next }).eq('id', id).select('id,status,updated_at').maybeSingle();
    setSaving(false);
    if (error || !data) { setErr('couldn’t save'); return; }
    onSaved(data);
    if (next === 'selected') {
      setNote('sending welcome email…');
      const res = await callSelection(id);
      setNote(selectionMessage(res));
      if (onSelectionDone) onSelectionDone();
    }
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
      {note && <span className="cr-status-note">{note}</span>}
    </span>
  );
}
