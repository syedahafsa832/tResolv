'use client';

import { useEffect, useRef, useState } from 'react';

const TICKETS = [
  { id: 1, subject: 'Where is my order?', from: 'megan.b@icloud.com' },
  { id: 2, subject: 'Can you change my address?', from: 'k.osei@gmail.com' },
  { id: 3, subject: 'I want a refund.', from: 'sam.k@proton.me' },
  { id: 4, subject: 'Can I exchange this for a different size?', from: 'j.reyes@outlook.com' },
  { id: 5, subject: 'Has my order shipped yet?', from: 'dana88@yahoo.com' },
  { id: 6, subject: 'What is your return policy?', from: 'hello@shopmail.com' },
];

const START_DELAY = 300;
const STAGGER = 420;
const HOLD_MS = 3200;

export default function ProblemList() {
  const wrapRef = useRef(null);
  const [started, setStarted] = useState(false);
  const [arrivedIds, setArrivedIds] = useState([]);
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
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    mounted.current = true;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      setArrivedIds(TICKETS.map((t) => t.id));
      return () => {};
    }

    const schedule = (fn, delay) => {
      const id = setTimeout(() => {
        if (mounted.current) fn();
      }, delay);
      timers.current.push(id);
    };

    const runCycle = () => {
      setArrivedIds([]);
      TICKETS.forEach((ticket, i) => {
        schedule(() => setArrivedIds((prev) => [...prev, ticket.id]), START_DELAY + i * STAGGER);
      });
      const totalMs = START_DELAY + TICKETS.length * STAGGER + HOLD_MS;
      schedule(runCycle, totalMs);
    };

    runCycle();
    return () => {
      mounted.current = false;
      timers.current.forEach(clearTimeout);
      timers.current = [];
    };
  }, [started]);

  return (
    <section className="section section-problem" id="problem">
      <div className="wrap">
        <div className="problem-layout">
          <div className="problem-copy">
            <div className="eyebrow"><span className="eyebrow-dot" />Every day</div>
            <h2 className="section-title">Sound familiar?</h2>
            <ul className="problem-questions">
              {TICKETS.map((t) => <li key={t.id}>{t.subject}</li>)}
            </ul>
            <p className={`problem-punch${arrivedIds.length === TICKETS.length ? ' is-in' : ''}`}>
              None of these are hard.<br />
              They&apos;re just <em className="serif-accent">repetitive.</em>
            </p>
          </div>

          <div className="problem-visual" ref={wrapRef}>
            <div className="hi-panel pi-panel">
              <div className="hi-chrome">
                <span className="hi-chrome-dot" style={{ background: '#FF5F57' }} />
                <span className="hi-chrome-dot" style={{ background: '#FEBC2E' }} />
                <span className="hi-chrome-dot" style={{ background: '#28C840' }} />
              </div>
              <div className="hi-head">
                <span className="hi-head-title">Support inbox</span>
                <span className="hi-count">{arrivedIds.length} unread</span>
              </div>
              <div className="hi-rows">
                {TICKETS.map((ticket) => (
                  <div key={ticket.id} className={`pi-row${arrivedIds.includes(ticket.id) ? ' is-in' : ''}`}>
                    <span className="hi-dot" style={{ opacity: 1 }} />
                    <div className="hi-row-body">
                      <div className="hi-row-subject">{ticket.subject}</div>
                      <div className="hi-row-from">{ticket.from}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
