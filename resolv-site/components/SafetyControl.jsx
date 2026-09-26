'use client';

import { useState } from 'react';

const RUNS_ON_ITS_OWN = [
  'Order tracking',
  'Product questions',
  'Shipping questions',
  'Store policies',
  'Common support replies',
];

const ALWAYS_NEEDS_APPROVAL = [
  'Refunds',
  'Cancellations',
  'Supported order changes',
];

function ApprovalCardDemo() {
  const [status, setStatus] = useState('idle'); // idle | approved | rejecting | rejected
  const [reason, setReason] = useState('');

  return (
    <div className="approval-card">
      <div className="approval-badges">
        <span className="approval-badge address">Address change</span>
      </div>

      <div className="approval-title">Change delivery address for order #2214</div>

      <div className="approval-meta">
        <span><strong>Customer:</strong> j.reyes@outlook.com</span>
        <span><strong>Order:</strong> #2214</span>
      </div>

      <div className="approval-reason">
        &ldquo;I typed the wrong street number, can you fix it before it ships?&rdquo;
      </div>

      {status === 'approved' && (
        <div className="approval-result success">
          <strong>Executed:</strong> address updated in Shopify.
        </div>
      )}

      {status === 'rejected' && (
        <div className="approval-result neutral">
          <strong>Rejected.</strong> Nothing was sent to Shopify.
        </div>
      )}

      {status === 'idle' && (
        <div className="approval-field">
          <label htmlFor="approval-address">Parsed from the customer&apos;s message &mdash; edit if needed</label>
          <input
            id="approval-address"
            type="text"
            defaultValue="412 Birchwood Ave, Austin, TX 78704"
            style={{ width: '100%' }}
          />
        </div>
      )}

      {status === 'idle' && (
        <div className="approval-actions">
          <button type="button" className="approval-btn approve" onClick={() => setStatus('approved')}>
            Approve
          </button>
          <button type="button" className="approval-btn reject" onClick={() => setStatus('rejecting')}>
            Reject
          </button>
        </div>
      )}

      {status === 'rejecting' && (
        <div className="approval-actions" style={{ alignItems: 'center' }}>
          <input
            autoFocus
            placeholder="Reason for rejecting…"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            style={{ flex: 1, padding: '8px 10px', border: '1px solid var(--border)', borderRadius: 6, fontSize: 13 }}
          />
          <button
            type="button"
            className="approval-btn reject"
            disabled={!reason.trim()}
            onClick={() => setStatus('rejected')}
          >
            Confirm
          </button>
        </div>
      )}

      <p className="approval-caption">Try it. Nothing here touches Shopify &mdash; it&apos;s a preview.</p>
    </div>
  );
}

export default function SafetyControl() {
  return (
    <section className="section section-alt" id="safety">
      <div className="wrap">
        <div className="eyebrow"><span className="eyebrow-dot" />Trust</div>
        <h2 className="section-title section-title-serif">Luna knows when to act.<br />And when to ask you.</h2>
        <p className="section-sub">
          Routine support runs on its own. Anything that touches money or an order always comes
          back to you first &mdash; try it below.
        </p>

        <div className="safety-layout">
          <ApprovalCardDemo />

          <div className="safety-side">
            <div className="safety-mini">
              <h3>Runs on its own</h3>
              <ul className="safety-list">
                {RUNS_ON_ITS_OWN.map((item) => (
                  <li key={item}>
                    <span className="safety-check ok">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="safety-mini">
              <h3>Always needs your tap</h3>
              <ul className="safety-list">
                {ALWAYS_NEEDS_APPROVAL.map((item) => (
                  <li key={item}>
                    <span className="safety-check warn">!</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
