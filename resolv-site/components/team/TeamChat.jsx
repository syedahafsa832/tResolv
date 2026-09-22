'use client';

import { useEffect, useState } from 'react';
import { useTeam } from '@/components/team/TeamGate';
import { TEAM_CHAT_SLUG } from '@/lib/careers/teamClient';

// The team chat link lives in the database (team_resources), so it is edited in one place.
export default function TeamChat() {
  const { sb } = useTeam();
  const [res, setRes] = useState(null);
  useEffect(() => {
    sb.from('team_resources').select('title,description,url').eq('slug', TEAM_CHAT_SLUG).maybeSingle()
      .then(({ data }) => setRes(data || null));
  }, [sb]);
  if (!res) return null;
  return (
    <a className="tm-chat" href={res.url} target="_blank" rel="noopener noreferrer">
      <span className="tm-chat-t">{res.title} →</span>
      <span className="tm-chat-d">{res.description}</span>
    </a>
  );
}
