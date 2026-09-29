'use client';

import { useEffect, useRef, useState } from 'react';
import { listScenarios, buildScenario, resolveScenario } from '@/lib/sandboxDemo';
import Reveal from '@/components/Reveal';

// One reusable "Luna is working" indicator (see .luna-processing in
// globals.css) instead of a generic spinner, reused for both the initial
// scenario load and the approve/reject "Working…" state.
function LunaProcessing({ children }) {
  return (
    <span className="luna-processing">
      <span className="luna-processing-dot" />
      {children}
    </span>
  );
}

// This demo is fully self-contained: listScenarios/buildScenario/resolveScenario
// are pure, synchronous, local functions (lib/sandboxDemo.js) over static sample
// data. There's no backend call and nothing here can fail from the network being
// slow, down, or cold-starting. The short delays below are simulated (setTimeout)
// purely so the "Luna is checking the sample store..." step reads as Luna doing
// work, not as a loading spinner for a real request.

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
  const [activeId, setActiveId] = useState(null);
  const [detail, setDetail] = useState(null);
  const [loadingDetail, setLoadingDetail] = useState(false);
  const [resolution, setResolution] = useState(null);
  const [resolving, setResolving] = useState(false);
  const [fatalError, setFatalError] = useState(false);
  const timers = useRef([]);

  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  useEffect(() => {
    try {
      const { scenarios: list, notice: n } = listScenarios();
      setScenarios(list);
      setNotice(n || '');
      const def = list.find((s) => s.default) || list[0];
      if (def) setActiveId(def.id);
    } catch {
      setFatalError(true);
    }
  }, []);

  useEffect(() => {
    if (!activeId) return;
    setLoadingDetail(true);
    setDetail(null);
    setResolution(null);
    const t = setTimeout(() => {
      try {
        setDetail(buildScenario(activeId));
      } catch {
        setFatalError(true);
      } finally {
        setLoadingDetail(false);
      }
    }, 380);
    timers.current.push(t);
    return () => clearTimeout(t);
  }, [activeId]);

  const resolve = (decision) => {
    setResolving(true);
    const t = setTimeout(() => {
      try {
        setResolution(resolveScenario(activeId, decision));
      } catch {
        setFatalError(true);
      } finally {
        setResolving(false);
      }
    }, 320);
    timers.current.push(t);
  };

  if (fatalError) return null;

  const checkItems = detail ? [...new Set(detail.steps.map((s) => CHECK_LABELS[s.key]).filter(Boolean))] : [];

  return (
    <section className="section" id="scenario-explorer">
      <div className="wrap">
        <Reveal as="div" className="eyebrow"><span className="eyebrow-dot" />Try it yourself</Reveal>
        <Reveal as="h2" className="section-title" delay={80}>What else can it handle?</Reveal>
        <Reveal as="p" className="section-sub" delay={140}>Luna&apos;s real sandbox. Pick a question and watch her work through it.</Reveal>

        <div className="se-layout">
        <div className="se-side">
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
                <span className="se-tab-title">{s.cta}</span>
                <span className="se-tab-sub">{s.summary}</span>
              </button>
            ))}
          </div>
        )}
        </div>

        <div className="se-main">
        {activeId && (
          <div className="se-panel">
            {loadingDetail && <p className="se-loading"><LunaProcessing>Luna is checking the sample store&hellip;</LunaProcessing></p>}

            {detail && !loadingDetail && (
              <div key={activeId} className="se-panel-content">
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
              </div>
            )}
          </div>
        )}
        </div>
        </div>

        {notice && <p className="se-note">{notice}</p>}
      </div>
    </section>
  );
}
