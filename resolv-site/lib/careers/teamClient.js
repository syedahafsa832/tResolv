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

export const fmt = (v) => (v ? new Date(v).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }) : '');
