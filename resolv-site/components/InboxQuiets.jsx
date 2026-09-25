'use client';

import { useEffect, useRef, useState } from 'react';

// Illustrative sequence, not a claim about real ticket volume or speed.
// Mirrors the real intent categories from content/homepageFaqs.js and
// Features.jsx so the story stays consistent with what the product does.
const TICKETS = [
  { id: 1, from: 'megan.b@icloud.com', subject: 'Where is my order #4821?', tag: 'Order tracking', outcome: 'resolved' },
  { id: 2, from: 'j.reyes@outlook.com', subject: 'Can I cancel order #2214?', tag: 'Cancellation', outcome: 'staged' },
  { id: 3, from: 'hello@shopmail.com', subject: 'Is this in stock in Medium?', tag: 'Product question', outcome: 'resolved' },
  { id: 4, from: 'dana88@yahoo.com', subject: "What's your return policy?", tag: 'Store policy', outcome: 'resolved' },
  { id: 5, from: 'sam.k@proton.me', subject: 'I need a refund for order #3390', tag: 'Refund', outcome: 'staged' },
  { id: 6, from: 'orders@retailhub.io', subject: 'When will my order ship?', tag: 'Shipping', outcome: 'resolved' },
  { id: 7, from: 'k.osei@gmail.com', subject: 'Change my shipping address', tag: 'Address change', outcome: 'staged' },
];

const STEP_MS = 1500;
const PROCESS_MS = 700;
const HOLD_MS = 3200;

export default function InboxQuiets() {
  const wrapRef = useRef(null);
  const [started, setStarted] = useState(false);
  const [resolved, setResolved] = useState([]);
  const [processingId, setProcessingId] = useState(null);
  const timers = useRef([]);
  const mounted = useRef(true);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    mounted.current = true;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      setResolved(TICKETS);
      return;
    }

    const schedule = (fn, delay) => {
      const id = setTimeout(() => {
        if (mounted.current) fn();
      }, delay);
      timers.current.push(id);
    };

    const runCycle = () => {
      setResolved([]);
      setProcessingId(null);

      TICKETS.forEach((ticket, i) => {
        const startAt = i * STEP_MS;
        schedule(() => setProcessingId(ticket.id), startAt);
        schedule(() => {
          setProcessingId(null);
          setResolved((prev) => [...prev, ticket]);
        }, startAt + PROCESS_MS);
      });

      schedule(runCycle, TICKETS.length * STEP_MS + HOLD_MS);
    };

    runCycle();

    return () => {
      mounted.current = false;
      timers.current.forEach(clearTimeout);
      timers.current = [];
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [started]);

  const resolvedIds = new Set(resolved.map((t) => t.id));
  const inboxItems = TICKETS.filter((t) => !resolvedIds.has(t.id));

  return (
    <section className="section" id="inbox-quiets">
      <div className="wrap">
        <div className="eyebrow"><span className="eyebrow-dot" />How it feels</div>
        <h2 className="section-title">Watch the inbox<br />get <em className="serif-accent">quiet.</em></h2>
        <p className="section-sub">
          Tickets come in. Luna checks Shopify, resolves what she can herself, and stages the rest for
          your approval.
        </p>

        <div className="iq-panel" ref={wrapRef}>
          <div className="iq-head">
            <span className="iq-head-title">Support inbox</span>
            <span className="iq-count">{inboxItems.length} unread</span>
          </div>
          <div className="iq-body">
            <div className="iq-col">
              <div className="iq-col-label">Inbox</div>
              {inboxItems.length === 0 && <div className="iq-empty">All caught up.</div>}
              {inboxItems.map((ticket) => (
                <div key={ticket.id} className={`iq-row${processingId === ticket.id ? ' is-processing' : ''}`}>
                  <span className="iq-row-dot" />
                  <div className="iq-row-body">
                    <div className="iq-row-subject">{ticket.subject}</div>
                    <div className="iq-row-from">{ticket.from}</div>
                    {processingId === ticket.id && (
                      <div className="iq-row-status">
                        <span className="hd-status-dot" />
                        Luna is checking Shopify…
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="iq-col">
              <div className="iq-col-label">Handled by Luna</div>
              {resolved.length === 0 && <div className="iq-empty">Nothing resolved yet.</div>}
              {resolved.map((ticket) => (
                <div key={ticket.id} className="iq-resolved-row">
                  <span className={`iq-resolved-badge ${ticket.outcome}`}>
                    {ticket.outcome === 'resolved' ? '✓ Resolved' : 'Staged'}
                  </span>
                  <div className="iq-row-body">
                    <div className="iq-row-subject">{ticket.tag}</div>
                    <div className="iq-row-from">{ticket.subject}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <p className="iq-caption">Illustrative example. See a live resolved-ticket stream in the product.</p>
      </div>
    </section>
  );
}
