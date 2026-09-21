'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { getAdminClient } from '@/lib/careers/adminClient';
import { STATUSES, StatusSelect, fmtDate } from './adminBits';

const COLS = 'id,full_name,email,location,role,status,created_at,updated_at,linkedin_url';

export default function AdminList() {
  const router = useRouter();
  const [rows, setRows] = useState(null);
  const [error, setError] = useState('');
  const [q, setQ] = useState('');
  const [filter, setFilter] = useState('all');
  const [newestFirst, setNewestFirst] = useState(true);

  const load = async () => {
    setRows(null); setError('');
    const { data, error: e } = await getAdminClient().from('applications').select(COLS).order('created_at', { ascending: false }).limit(2000);
    if (e) setError('couldn’t load applications.'); else setRows(data);
  };
  useEffect(() => { load(); }, []);

  const counts = useMemo(() => {
    const c = Object.fromEntries(STATUSES.map((s) => [s, 0]));
    (rows || []).forEach((r) => { c[r.status] += 1; });
    return c;
  }, [rows]);

  const visible = useMemo(() => {
    const term = q.trim().toLowerCase();
    const out = (rows || []).filter((r) =>
      (filter === 'all' || r.status === filter) &&
      (!term || r.full_name.toLowerCase().includes(term) || r.email.toLowerCase().includes(term)));
    return newestFirst ? out : [...out].reverse();
  }, [rows, q, filter, newestFirst]);

  const saved = (u) => setRows((prev) => prev.map((r) => (r.id === u.id ? { ...r, status: u.status, updated_at: u.updated_at } : r)));

  return (
    <div className="cr-ad-body">
      <h1 className="cr-ad-title">applications</h1>

      <div className="cr-ad-cards">
        <button type="button" className={`cr-ad-card ${filter === 'all' ? 'is-on' : ''}`} onClick={() => setFilter('all')}>
          <b>{rows ? rows.length : '·'}</b><span>total</span>
        </button>
        {STATUSES.map((s) => (
          <button key={s} type="button" className={`cr-ad-card ${filter === s ? 'is-on' : ''}`} onClick={() => setFilter(filter === s ? 'all' : s)}>
            <b>{rows ? counts[s] : '·'}</b><span>{s}</span>
          </button>
        ))}
      </div>

      <div className="cr-ad-tools">
        <input className="cr-input" type="search" placeholder="search name or email" value={q} onChange={(e) => setQ(e.target.value)} aria-label="search applications" />
        <select className="cr-input" value={filter} onChange={(e) => setFilter(e.target.value)} aria-label="filter by status">
          <option value="all">all statuses</option>
          {STATUSES.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
        <button type="button" className="cr-btn cr-btn-ghost cr-btn-sm" onClick={() => setNewestFirst((v) => !v)}>
          {newestFirst ? 'newest first ↓' : 'oldest first ↑'}
        </button>
      </div>

      {error && (
        <div className="cr-banner" role="alert">{error} <button type="button" className="cr-linkbtn" onClick={load}>try again</button></div>
      )}
      {!error && rows === null && <p className="cr-ad-state">loading applications…</p>}
      {!error && rows && rows.length === 0 && <p className="cr-ad-state">no applications yet. they’ll show up here.</p>}
      {!error && rows && rows.length > 0 && visible.length === 0 && <p className="cr-ad-state">nothing matches that search.</p>}

      {visible.length > 0 && (
        <div className="cr-ad-table" role="table">
          <div className="cr-ad-row cr-ad-row-head" role="row">
            <span>name</span><span>email</span><span>location</span><span>role</span><span>status</span><span>submitted</span><span>linkedin</span>
          </div>
          {visible.map((r) => (
            <div key={r.id} className="cr-ad-row" role="row" onClick={() => router.push(`/careers/admin/${r.id}`)}>
              <span className="cr-ad-name"><Link href={`/careers/admin/${r.id}`} onClick={(e) => e.stopPropagation()}>{r.full_name}</Link></span>
              <span className="cr-ad-email">{r.email}</span>
              <span>{r.location}</span>
              <span>{r.role}</span>
              <span><StatusSelect id={r.id} value={r.status} onSaved={saved} /></span>
              <span className="cr-ad-date">{fmtDate(r.created_at)}</span>
              <span>
                <a href={r.linkedin_url} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>linkedin ↗</a>
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
