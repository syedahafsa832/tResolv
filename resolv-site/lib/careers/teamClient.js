import { createClient } from '@supabase/supabase-js';

// Team portal client: same publishable key as the rest of careers, but with its own persisted
// session. Access is decided by Postgres RLS on the signed-in user's id, never by the browser.
const URL_ = process.env.NEXT_PUBLIC_CAREERS_SUPABASE_URL;
const KEY = process.env.NEXT_PUBLIC_CAREERS_SUPABASE_ANON_KEY;

export const teamConfigured = Boolean(URL_ && KEY);

let client;
export function getTeamClient() {
  if (!client) {
    client = createClient(URL_, KEY, {
      auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true, storageKey: 'tresolv-team' },
    });
  }
  return client;
}

export const ROLE_BLURBS = {
  'Lead Acquisition':
    'you’ll help tResolv find the right customers: research shopify brands, start real conversations, try different ways to find customers, and learn from what works.',
};

export const TEAM_CHAT_SLUG = 'team-whatsapp';

// due_date is a plain date (no time). Compare by calendar day, not by 24h windows, so "due today"
// is accurate regardless of what time of day someone opens the portal.
export function dueLabel(dueDate, status) {
  if (status === 'done') return { text: 'completed', tone: 'done' };
  if (!dueDate) return null;
  const today = new Date(); today.setHours(0, 0, 0, 0);
  const due = new Date(`${dueDate}T00:00:00`);
  const diff = Math.round((due - today) / 86400000);
  if (diff < 0) return { text: `${-diff} day${-diff === 1 ? '' : 's'} overdue`, tone: 'overdue' };
  if (diff === 0) return { text: 'due today', tone: 'today' };
  if (diff === 1) return { text: 'due tomorrow', tone: 'soon' };
  return { text: `due in ${diff} days`, tone: 'later' };
}

// Summarizes a list of {status, due_date} tasks into the home-page urgency banner.
export function taskUrgency(tasks) {
  const open = tasks.filter((t) => t.status !== 'done' && t.due_date);
  const overdue = open.filter((t) => dueLabel(t.due_date, t.status).tone === 'overdue').length;
  const dueSoon = open.filter((t) => ['today', 'soon'].includes(dueLabel(t.due_date, t.status).tone)).length;
  return { overdue, dueSoon };
}

export const fmt = (v) => (v ? new Date(v).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }) : '');

// Relative day count for the admin "last meaningful activity" / "activated" columns.
export function daysAgo(v) {
  if (!v) return null;
  const d = Math.round((Date.now() - new Date(v)) / 86400000);
  if (d <= 0) return 'today';
  if (d === 1) return 'yesterday';
  return `${d} days ago`;
}

// Exact copy for each engagement_status, used identically by the member's own home page and by
// the admin's team overview so the two views never disagree about what a state means.
export const ENGAGEMENT_MESSAGES = {
  active: { headline: 'you’re on track ✓', body: '' },
  at_risk: { headline: 'you’re falling behind', body: 'you have overdue work. get back on track.' },
  inactive: { headline: 'your activity has dropped off', body: 'complete your outstanding work to get back on track.' },
  deactivated: { headline: 'your team access is currently inactive', body: 'contact the founder if you believe this is incorrect.' },
  unknown: { headline: 'you’re not activated yet', body: 'your team access is ready, but your first-week schedule hasn’t started.' },
};

// Client-side mirror of the database's own check (team_members_guard): activation can't be set in
// the future, and can't predate the application it belongs to. The database enforces this for real;
// this just gives an immediate, specific error instead of a round trip.
export function validateActivationDate(dateStr, appliedAtISO) {
  if (!dateStr) return 'pick a date';
  const d = new Date(`${dateStr}T00:00:00`);
  if (Number.isNaN(d.getTime())) return 'that date doesn’t look right';
  const tomorrow = new Date(); tomorrow.setHours(0, 0, 0, 0); tomorrow.setDate(tomorrow.getDate() + 1);
  if (d > tomorrow) return 'activation can’t be in the future';
  if (appliedAtISO && d < new Date(new Date(appliedAtISO).toDateString())) return 'activation can’t be before they applied';
  return '';
}
