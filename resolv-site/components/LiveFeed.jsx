'use client';

import { useEffect, useRef, useState } from 'react';

const API_BASE = 'https://hackathonn5.onrender.com';
const MAX_ROWS = 6;
const PUSH_INTERVAL = 3500;

const FALLBACK_TICKETS = [
  { order_ref: '#4821', intent: 'Where is my order?', confidence: 94, resolved_in_seconds: 8 },
  { order_ref: '#4809', intent: 'Cancel my order', confidence: 91, resolved_in_seconds: 5 },
  { order_ref: '#4790', intent: 'Change shipping address', confidence: 88, resolved_in_seconds: 11 },
  { order_ref: '#4772', intent: 'Refund request, wrong size', confidence: 96, resolved_in_seconds: 7 },
  { order_ref: '#4765', intent: 'Track my package', confidence: 99, resolved_in_seconds: 4 },
  { order_ref: '#4751', intent: 'Order never arrived', confidence: 89, resolved_in_seconds: 14 },
  { order_ref: '#4733', intent: 'Exchange for different color', confidence: 85, resolved_in_seconds: 19 },
  { order_ref: '#4720', intent: 'Update delivery address', confidence: 92, resolved_in_seconds: 9 },
  { order_ref: '#4702', intent: 'Where is my refund?', confidence: 93, resolved_in_seconds: 6 },
  { order_ref: '#4688', intent: 'Cancel before it ships', confidence: 90, resolved_in_seconds: 13 },
];

function formatDuration(seconds) {
  if (seconds < 60) return `${seconds}s`;
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return s > 0 ? `${m}m ${s}s` : `${m}m`;
}

export default function LiveFeed() {
  const [rows, setRows] = useState([]);
  const [isLive, setIsLive] = useState(false);
  const poolRef = useRef(FALLBACK_TICKETS);
  const idxRef = useRef(0);

  useEffect(() => {
    let cancelled = false;
    let interval;

    const pushNext = () => {
      const pool = poolRef.current;
      const ticket = pool[idxRef.current % pool.length];
      idxRef.current += 1;
      setRows((prev) => [{ ...ticket, _key: `${Date.now()}-${Math.random()}` }, ...prev].slice(0, MAX_ROWS));
    };

    const start = (live) => {
      if (cancelled) return;
      setIsLive(live);
      pushNext();
      interval = setInterval(pushNext, PUSH_INTERVAL);
    };

    fetch(`${API_BASE}/api/public/live-feed`)
      .then((res) => {
        if (!res.ok) throw new Error('live-feed unavailable');
        return res.json();
      })
      .then((data) => {
        if (cancelled) return;
        const tickets = Array.isArray(data) ? data : data?.tickets;
        if (Array.isArray(tickets) && tickets.length > 0) {
          poolRef.current = tickets;
          start(true);
        } else {
          start(false);
        }
      })
      .catch(() => {
        if (!cancelled) start(false);
      });

    return () => {
      cancelled = true;
      clearInterval(interval);
    };
  }, []);

  return (
    <section className="section section-alt" id="live-feed">
      <div className="wrap">
        <div className="lf-head">
          <div>
            <div className="lf-live">
              {isLive && <span className="lf-live-dot" />}
              {isLive ? 'Live' : 'Example'}
            </div>
            <h2 className="section-title" style={{ marginTop: 10 }}>Watch Luna work.</h2>
            <p className="section-sub">
              {isLive
                ? 'Real resolved tickets, streamed straight from production.'
                : 'Example resolutions showing the kind of tickets Luna handles automatically.'}
            </p>
          </div>
        </div>
        <div className="lf-panel">
          <div className="lf-rows">
            {rows.map((row) => (
              <div key={row._key} className="lf-row">
                <div className="lf-row-info">
                  <span className="lf-row-order">Order {row.order_ref}</span>
                  <span className="lf-row-intent">&quot;{row.intent}&quot;</span>
                </div>
                <span className="lf-row-result">
                  ✓ Resolved · {row.confidence}% confidence · {formatDuration(row.resolved_in_seconds)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
