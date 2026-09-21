'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import Icon from './icons';
import { SECTIONS, QUESTIONS, ROLE, COMMISSION_NOTE } from '@/lib/careers/config';
import { validateApplication, submitApplication } from '@/lib/careers/submitApplication';

const DRAFT_KEY = 'tresolv_careers_draft_v1';
const EMPTY = Object.fromEntries(QUESTIONS.map((q) => [q.name, '']));

// Long answers take a while, so keep a draft in this browser only. Storage can
// be blocked (private mode etc.): every access is wrapped and optional.
function loadDraft() {
  try {
    const d = JSON.parse(localStorage.getItem(DRAFT_KEY) || 'null');
    return d && typeof d === 'object' ? { ...EMPTY, ...d } : EMPTY;
  } catch { return EMPTY; }
}
const saveDraft = (v) => { try { localStorage.setItem(DRAFT_KEY, JSON.stringify(v)); } catch { /* optional */ } };
const clearDraft = () => { try { localStorage.removeItem(DRAFT_KEY); } catch { /* optional */ } };

const SUBMIT_ERRORS = {
  duplicate: 'Looks like there’s already an application with this email. One per person is plenty, and we’ve got it.',
  unconfigured: 'Applications aren’t accepting submissions right now. Please try again a bit later.',
  error: 'Something went wrong sending your application. Nothing was lost: your answers are still here, so try again in a moment.',
};

function Field({ q, index, value, error, onChange, onBlur }) {
  const id = `f-${q.name}`;
  const describedBy = [q.hint && `${id}-hint`, error && `${id}-err`].filter(Boolean).join(' ') || undefined;
  const common = {
    id, name: q.name, value, onBlur,
    onChange: (e) => onChange(q.name, e.target.value),
    className: `cr-input${error ? ' cr-invalid' : ''}`,
    'aria-invalid': error ? true : undefined,
    'aria-describedby': describedBy,
    'aria-required': true,
  };
  return (
    <div className="cr-field">
      <label className="cr-label" htmlFor={id}>{index && <em>{String(index).padStart(2, '0')}</em>}{q.label}</label>
      {q.hint && <span className="cr-hint" id={`${id}-hint`}>{q.hint}</span>}
      {q.type === 'textarea' && <textarea {...common} maxLength={q.max} rows={5} />}
      {q.type === 'select' && (
        <select {...common}>
          <option value="">choose one…</option>
          {q.options.map((o) => <option key={o} value={o}>{o}</option>)}
        </select>
      )}
      {(q.type === 'text' || q.type === 'email' || q.type === 'url') && (
        <input
          {...common}
          type={q.type === 'url' ? 'text' : q.type}
          inputMode={q.type === 'url' ? 'url' : undefined}
          maxLength={q.max}
          placeholder={q.placeholder}
          autoComplete={q.autoComplete}
          autoCapitalize={q.type === 'text' ? undefined : 'none'}
          spellCheck={q.type === 'text' ? undefined : false}
        />
      )}
      <div className="cr-meta">
        {error && <span className="cr-err" id={`${id}-err`} role="alert">{error}</span>}
        {q.type === 'textarea' && <span className="cr-count">{value.length}/{q.max}</span>}
      </div>
    </div>
  );
}

export default function ApplyForm() {
  // Start empty for SSR/hydration, then restore any saved draft on the client.
  const [values, setValues] = useState(EMPTY);
  const [hydrated, setHydrated] = useState(false);
  const [errors, setErrors] = useState({});
  const [state, setState] = useState('idle'); // idle | sending | done
  const [banner, setBanner] = useState('');
  const honeypot = useRef(null);
  const sentEmail = useRef('');

  useEffect(() => { setValues(loadDraft()); setHydrated(true); }, []);
  useEffect(() => { if (hydrated && state !== 'done') saveDraft(values); }, [values, state, hydrated]);
  useEffect(() => { if (state === 'done') window.scrollTo(0, 0); }, [state]);

  const percent = useMemo(
    () => Math.round((QUESTIONS.filter((q) => String(values[q.name]).trim()).length / QUESTIONS.length) * 100),
    [values],
  );

  const change = (name, v) => {
    setValues((prev) => ({ ...prev, [name]: v }));
    if (errors[name]) setErrors((prev) => { const n = { ...prev }; delete n[name]; return n; });
  };
  // Validate a field once the person leaves it (not while they're still typing).
  const blur = (name) => {
    const { errors: e } = validateApplication(values);
    setErrors((prev) => (e[name] && String(values[name]).trim() ? { ...prev, [name]: e[name] } : prev));
  };

  const onSubmit = async (ev) => {
    ev.preventDefault();
    if (state === 'sending') return;
    setBanner('');
    const { errors: e, values: clean } = validateApplication(values);
    setErrors(e);
    const firstBad = QUESTIONS.find((q) => e[q.name]);
    if (firstBad) {
      setBanner(`A few answers need attention (${Object.keys(e).length}). We’ve marked them below.`);
      document.getElementById(`f-${firstBad.name}`)?.focus();
      return;
    }
    // Bots fill hidden fields; people never see this one. Pretend it worked.
    if (honeypot.current?.value) { setState('done'); return; }

    setState('sending');
    const res = await submitApplication(clean);
    if (res.ok) {
      sentEmail.current = clean.email;
      clearDraft();
      setValues(EMPTY);
      setState('done');
    } else {
      setBanner(SUBMIT_ERRORS[res.reason] || SUBMIT_ERRORS.error);
      setState('idle');
    }
  };

  if (state === 'done') {
    return (
      <div className="cr-wrap cr-narrow">
        <section className="cr-success">
          <div className="cr-success-badge"><Icon name="Check" size={38} strokeWidth={3} /></div>
          <h1 className="cr-h1" style={{ fontSize: 'clamp(34px, 6vw, 52px)' }}>
            application <span className="cr-grad">received.</span>
          </h1>
          <p className="cr-lead">
            Thanks for taking the time. A human reads every application. If it looks like
            a fit, we&rsquo;ll email you{sentEmail.current ? <> at <strong>{sentEmail.current}</strong></> : ''}.
          </p>
          <div className="cr-cta-row" style={{ justifyContent: 'center' }}>
            <Link href="/careers" className="cr-btn cr-btn-ghost">back to careers</Link>
          </div>
        </section>
      </div>
    );
  }

  let n = 0;
  return (
    <div className="cr-wrap cr-narrow">
      <Link href="/careers" className="cr-backlink">&larr; back to careers</Link>

      <section className="cr-apply-head" style={{ marginTop: 20 }}>
        <div className="cr-eyebrow">application &middot; {ROLE.title}</div>
        <h1 className="cr-h2" style={{ fontSize: 'clamp(32px, 5.4vw, 52px)' }}>
          tell us how <span className="cr-grad">you think.</span>
        </h1>
        <p className="cr-lead">
          About 8&ndash;12 minutes. No CV needed. We care about your thinking and your
          initiative, not your resume. Your answers save in this browser as you go.
        </p>
        <div className="cr-chips"><span className="cr-chip cr-chip-hot">commission-based</span></div>
      </section>

      <div className="cr-progress" role="status" aria-live="polite">
        <div className="cr-progress-row">
          <span>your progress</span>
          <span>{percent}%</span>
        </div>
        <div className="cr-bar"><div style={{ width: `${percent}%` }} /></div>
      </div>

      <form className="cr-form" onSubmit={onSubmit} noValidate>
        {SECTIONS.map((s) => (
          <fieldset key={s.key} className="cr-fs">
            <legend style={{ display: 'none' }}>{s.title}</legend>
            <h2>{s.title}</h2>
            <p>{s.blurb}</p>
            {s.questions.map((sq) => {
              const q = QUESTIONS.find((x) => x.name === sq.name);
              if (!q.sub) n += 1;
              return (
                <Field
                  key={q.name} q={q} index={q.sub ? null : n}
                  value={values[q.name]}
                  error={errors[q.name]}
                  onChange={change}
                  onBlur={() => blur(q.name)}
                />
              );
            })}
          </fieldset>
        ))}

        {/* honeypot: hidden from people and assistive tech */}
        <div className="cr-hp" aria-hidden="true">
          <label>Company website<input ref={honeypot} type="text" name="company_website" tabIndex={-1} autoComplete="off" /></label>
        </div>

        <div className="cr-notice">
          <b>this is a commission-based role.</b>
          <p>{COMMISSION_NOTE}</p>
        </div>

        {banner && <div className="cr-banner" role="alert">{banner}</div>}

        <div className="cr-submit-row">
          <button type="submit" className="cr-btn cr-btn-primary" disabled={state === 'sending'}>
            {state === 'sending' ? 'sending…' : <>submit application <Icon name="ArrowRight" /></>}
          </button>
        </div>
      </form>
    </div>
  );
}
