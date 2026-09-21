import { createClient } from '@supabase/supabase-js';

// Admin dashboard client. Uses the SAME publishable key as the public form, but
// keeps a signed-in session. All access control is enforced by Postgres RLS
// (see supabase/careers/002_admin_access.sql), never by anything in the browser.
const URL_ = process.env.NEXT_PUBLIC_CAREERS_SUPABASE_URL;
const KEY = process.env.NEXT_PUBLIC_CAREERS_SUPABASE_ANON_KEY;

export const adminConfigured = Boolean(URL_ && KEY);

let client;
export function getAdminClient() {
  if (!client) {
    client = createClient(URL_, KEY, {
      auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: false, storageKey: 'tresolv-careers-admin' },
    });
  }
  return client;
}
