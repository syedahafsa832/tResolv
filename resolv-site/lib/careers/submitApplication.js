import { QUESTIONS, FIELD_NAMES } from './config';

// Careers uses its OWN Supabase project. These env vars are deliberately
// separate from anything product-related; only the anon/publishable key belongs here.
// (Referenced statically so Next.js can inline them into the client bundle.)
const SUPABASE_URL = process.env.NEXT_PUBLIC_CAREERS_SUPABASE_URL;
const ANON_KEY = process.env.NEXT_PUBLIC_CAREERS_SUPABASE_ANON_KEY;

export const careersConfigured = Boolean(SUPABASE_URL && ANON_KEY);

// Applicants are anonymous and insert-only, so there is no session to manage:
// plain supabase-js with auth persistence off (no @supabase/ssr / middleware
// needed). Loaded on first submit so it never weighs down the page.
let clientPromise;
function getClient() {
  if (!clientPromise) {
    clientPromise = import('@supabase/supabase-js').then(({ createClient }) =>
      createClient(SUPABASE_URL, ANON_KEY, {
        auth: { persistSession: false, autoRefreshToken: false, detectSessionInUrl: false },
      }),
    ).catch((err) => {
      clientPromise = undefined; // don't cache a failed load: let the next attempt retry
      throw err;
    });
  }
  return clientPromise;
}

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
const LINKEDIN_RE = /^https?:\/\/([a-z0-9-]+\.)*linkedin\.com\/\S+$/i;

export function normalizeLinkedin(value) {
  const v = value.trim();
  return v && !/^https?:\/\//i.test(v) ? `https://${v}` : v;
}

// Returns { errors: {field: message}, values: {field: cleanValue} }.
export function validateApplication(raw) {
  const errors = {};
  const values = {};
  for (const q of QUESTIONS) {
    let v = String(raw[q.name] ?? '').trim();
    if (q.type === 'email') v = v.toLowerCase();
    if (q.type === 'url') v = normalizeLinkedin(v);
    values[q.name] = v;

    if (!v) {
      errors[q.name] = q.type === 'select' ? 'Pick one' : 'This one is required';
    } else if (q.type === 'email' && !EMAIL_RE.test(v)) {
      errors[q.name] = 'That email doesn’t look right';
    } else if (q.type === 'url' && !LINKEDIN_RE.test(v)) {
      errors[q.name] = 'Paste your LinkedIn profile link (linkedin.com/in/...)';
    } else if (q.type === 'select' && !q.options.includes(v)) {
      errors[q.name] = 'Pick one of the options';
    } else if (q.min && v.length < q.min) {
      errors[q.name] = `A little more detail please (at least ${q.min} characters)`;
    } else if (q.max && v.length > q.max) {
      errors[q.name] = `Too long (max ${q.max} characters)`;
    }
  }
  return { errors, values };
}

// Returns { ok: true } or { ok: false, reason: 'unconfigured'|'duplicate'|'error' }.
// Never reports success unless Supabase confirmed the insert.
export async function submitApplication(values) {
  if (!careersConfigured) {
    console.error(
      '[careers] NEXT_PUBLIC_CAREERS_SUPABASE_URL / NEXT_PUBLIC_CAREERS_SUPABASE_ANON_KEY are not set; application not sent.',
    );
    return { ok: false, reason: 'unconfigured' };
  }
  try {
    const supabase = await getClient();
    // Only the known question columns are sent (status/role/timestamps are
    // set by the database). No .select(): applicants have no read access.
    const row = Object.fromEntries(FIELD_NAMES.map((n) => [n, values[n]]));
    const { error } = await supabase.from('applications').insert(row);
    if (!error) return { ok: true };
    if (error.code === '23505') return { ok: false, reason: 'duplicate' };
    console.error('[careers] insert failed', error.code, error.message);
    return { ok: false, reason: 'error' };
  } catch (err) {
    console.error('[careers] submit failed', err);
    return { ok: false, reason: 'error' };
  }
}
