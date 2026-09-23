'use client';

import { useEffect, useState } from 'react';
import { useTeam } from '@/components/team/TeamGate';
import RichText from '@/components/team/RichText';

// Shows the most recent published announcement as a sticky banner until this member
// acknowledges it (announcement_acknowledgements, one row per member per announcement,
// same shape/RLS as onboarding_progress). Nothing is stored client-side for this -
// acknowledgement is a real row under the member's own RLS-protected identity, so it
// follows them to any device and survives a cleared browser.
export default function AnnouncementBanner() {
  const { sb, member } = useTeam();
  const [announcement, setAnnouncement] = useState(undefined); // undefined = loading, null = none/acked
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    let alive = true;
    (async () => {
      const { data: latest, error: e1 } = await sb.from('announcements').select('id,title,message,resource_url')
        .eq('published', true).order('created_at', { ascending: false }).limit(1).maybeSingle();
      if (!alive) return;
      if (e1 || !latest) { setAnnouncement(null); return; }
      const { data: ack, error: e2 } = await sb.from('announcement_acknowledgements').select('announcement_id')
        .eq('announcement_id', latest.id).eq('team_member_id', member.id).maybeSingle();
      if (!alive) return;
      setAnnouncement(e2 || ack ? null : latest);
    })();
    return () => { alive = false; };
  }, [sb, member.id]);

  const acknowledge = async () => {
    setSaving(true); setError('');
    const { error: e } = await sb.from('announcement_acknowledgements')
      .insert({ team_member_id: member.id, announcement_id: announcement.id });
    setSaving(false);
    if (e) { setError('couldn’t save that, try again.'); return; }
    setAnnouncement(null);
  };

  if (!announcement) return null;

  return (
    <div className="tm-banner" role="region" aria-label="announcement">
      <b className="tm-banner-title">{announcement.title}</b>
      <div className="tm-banner-body">
        <RichText text={announcement.message} />
      </div>
      {error && <div className="cr-banner" role="alert">{error}</div>}
      <div className="tm-banner-actions">
        {announcement.resource_url && (
          <a href={announcement.resource_url} className="cr-btn cr-btn-primary cr-btn-sm">Open the Playbook →</a>
        )}
        <button type="button" className="cr-btn cr-btn-sm tm-banner-ack" onClick={acknowledge} disabled={saving}>
          {saving ? 'saving…' : 'Got it 👍'}
        </button>
      </div>
    </div>
  );
}
