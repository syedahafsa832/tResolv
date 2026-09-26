'use client';

import { useEffect, useState } from 'react';

const STEP_ICON = { needs_approval: '!', rejected: '✕', done: '✓' };
const CHECK_LABELS = {
  order: 'Order status',
  policy: 'Store policy',
  search: 'Store policy',
  source: 'Store policy',
  catalog: 'Product catalog',
  inventory: 'Inventory',
};

function StepRow({ step }) {
  const kind = step.status === 'needs_approval' ? 'warn' : step.status === 'rejected' ? 'danger' : 'ok';
  return (
    <div className={`se-step se-step-${kind}`}>
      <span className="se-step-icon">{STEP_ICON[step.status] || '✓'}</span>
      <div>
        <div className="se-step-label">{step.label}</div>
        <div className="se-step-detail">{step.detail}</div>
      </div>
    </div>
  );
}

export default function ScenarioExplorer() {
  const [scenarios, setScenarios] = useState(null);
  const [notice, setNotice] = useState('');
  const [listError, setListError] = useState(false);
  const [activeId, setActiveId] = useState(null);
  const [detail, setDetail] = useState(null);
  const [detailError, setDetailError] = useState(false);
  const [loadingDetail, setLoadingDetail] = useState(false);
  const [resolution, setResolution] = useState(null);
  const [resolving, setResolving] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetch('/api/sandbox/scenarios')
      .then((r) => r.json())
      .then((data) => {
        if (cancelled || !data?.scenarios) throw new Error('bad payload');
        setScenarios(data.scenarios);
        setNotice(data.notice || '');
        const def = data.scenarios.find((s) => s.default) || data.scenarios[0];
        if (def) setActiveId(def.id);
      })
      .catch(() => !cancelled && setListError(true));
    return () => { cancelled = true; };
  }, []);

  useEffect(() => {
    if (!activeId) return;
    let cancelled = false;
    setLoadingDetail(true);
    setDetailError(false);
    setDetail(null);
    setResolution(null);
    fetch(`/api/sandbox/scenarios/${activeId}`)
      .then((r) => r.json())
      .then((data) => {
        if (cancelled) return;
        if (!data?.ticket) throw new Error('bad payload');
        setDetail(data);
      })
      .catch(() => !cancelled && setDetailError(true))
      .finally(() => !cancelled && setLoadingDetail(false));
    return () => { cancelled = true; };
  }, [activeId]);

  const resolve = async (decision) => {
    setResolving(true);
    try {
      const res = await fetch(`/api/sandbox/scenarios/${activeId}/resolve`, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ decision }),
      });
      const data = await res.json();
      if (!data?.decision) throw new Error('bad payload');
      setResolution(data);
    } catch {
      setDetailError(true);
    } finally {
      setResolving(false);
    }
  };

  const checkItems = detail ? [...new Set(detail.steps.map((s) => CHECK_LABELS[s.key]).filter(Boolean))] : [];

  return (
    <section className="section" id="scenario-explorer">
      <div className="wrap">
        <div className="eyebrow"><span className="eyebrow-dot" />Try it yourself</div>
        <h2 className="section-title">What else can it handle?</h2>
        <p className="section-sub">Luna&apos;s real sandbox. Pick a question and watch her work through it.</p>

        {listError && (
          <p className="se-error">Luna&apos;s sandbox couldn&apos;t load right now. Refresh to try again.</p>
        )}

        {scenarios && (
          <div className="se-tabs" role="tablist" aria-label="Sandbox scenarios">
            {scenarios.map((s) => (
              <button
                key={s.id}
                type="button"
                role="tab"
                aria-selected={s.id === activeId}
                className={`se-tab${s.id === activeId ? ' is-active' : ''}`}
                onClick={() => setActiveId(s.id)}
              >
                {s.cta}
              </button>
            ))}
          </div>
        )}

        {!scenarios && !listError && <p className="se-loading">Waking up Luna&apos;s sandbox&hellip;</p>}

        {activeId && (
          <div className="se-panel">
            {loadingDetail && <p className="se-loading">Luna is checking the sample store&hellip;</p>}
            {detailError && <p className="se-error">Couldn&apos;t reach the sandbox right now. Pick another question, or try again.</p>}

            {detail && !loadingDetail && (
              <>
                <div className="se-customer">&ldquo;{detail.ticket.messages[0].body}&rdquo;</div>

                {checkItems.length > 0 && (
                  <div className="se-checks">
                    <span className="se-checks-label">Luna checks</span>
                    <span className="se-checks-items">{checkItems.join(' · ')}</span>
                  </div>
                )}

                {!resolution && (
                  <div className={`se-result ${detail.requires_approval ? 'warn' : 'ok'}`}>
                    {detail.requires_approval ? 'Needs your approval' : 'Resolved automatically'}
                  </div>
                )}

                {!resolution && (
                  <div className="se-reply">
                    <div className="se-reply-label">Luna&apos;s reply</div>
                    <div className="se-reply-body">{detail.draft_reply}</div>
                  </div>
                )}

                {!resolution && detail.pending_action && (
                  <div className="approval-card se-approval">
                    <div className="approval-badges">
                      <span className="approval-badge refund">
                        {detail.pending_action.type === 'cancel_order' ? 'Cancel' : 'Refund'}
                      </span>
                    </div>
                    <div className="approval-title">{detail.pending_action.summary}</div>
                    <div className="approval-actions">
                      <button type="button" className="approval-btn approve" disabled={resolving} onClick={() => resolve('approve')}>
                        {resolving ? 'Working…' : 'Approve'}
                      </button>
                      <button type="button" className="approval-btn reject" disabled={resolving} onClick={() => resolve('reject')}>
                        Reject
                      </button>
                    </div>
                  </div>
                )}

                {resolution && (
                  <div className={`approval-result ${resolution.decision === 'approve' ? 'success' : 'neutral'} se-resolution`}>
                    <strong>{resolution.action_label}</strong>
                    {resolution.final_reply && <p className="se-final-reply">{resolution.final_reply}</p>}
                  </div>
                )}

                <details className="se-details">
                  <summary>See how Luna checked</summary>
                  <div className="se-steps">
                    {detail.steps.map((step) => <StepRow key={step.key} step={step} />)}
                  </div>
                </details>
              </>
            )}
          </div>
        )}

        {notice && <p className="se-note">{notice}</p>}
      </div>
    </section>
  );
}
