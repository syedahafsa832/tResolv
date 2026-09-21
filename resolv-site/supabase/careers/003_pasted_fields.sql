-- Hint for the founder: which long answers were mostly pasted, as {"field": percent}.
-- Set by the browser, so treat it as a signal, not proof. (Already applied.)
alter table public.applications
  add column pasted_fields jsonb not null default '{}'::jsonb
  check (jsonb_typeof(pasted_fields) = 'object' and pg_column_size(pasted_fields) <= 2000);

grant insert (pasted_fields) on public.applications to anon;
