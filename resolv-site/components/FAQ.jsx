'use client';

import { useState } from 'react';

const ChevronIcon = () => (
  <svg className="faq-chevron" width="18" height="18" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m6 9 6 6 6-6" />
  </svg>
);

const faqs = [
  {
    q: 'Does Resolv ever execute financial actions automatically?',
    a: 'No. Refunds, cancellations, address changes, and order restores always appear in your approval queue. They never execute without your tap, regardless of confidence level or which mode you are in.',
  },
  {
    q: 'Does Resolv ever send emails without my approval?',
    a: 'Only when you enable Autopilot mode and the AI confidence is above the threshold you set. Financial actions — refunds, cancellations, exchanges, address changes — always require your one-tap approval, regardless of confidence level.',
  },
  {
    q: 'What if the AI gets something wrong?',
    a: 'You can take over any conversation at any time. Resolv shows its confidence score and reasoning on every draft so you can review before anything sends. If you take over, AI is paused on that thread until you release it.',
  },
  {
    q: 'Are my customer emails stored on Resolv\'s servers?',
    a: "No. Resolv processes emails inside Google's infrastructure using the Gmail API. Your emails are never copied to or stored on Resolv's servers. Your customers' data stays in Google.",
  },
  {
    q: 'How long does setup take?',
    a: 'Most brands go live in under 10 minutes. Connect Gmail with one Google OAuth click, connect Shopify, and Resolv starts reading your inbox immediately. No technical setup required.',
  },
  {
    q: 'Can I use Resolv across multiple Shopify stores?',
    a: 'Yes. The Growth and Scale plans support multiple brands from a single Resolv console. Each store\'s conversations, approvals, and settings are fully separate and independently configurable.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="section section-alt" id="faq">
      <div className="wrap">
        <div className="eyebrow"><span className="eyebrow-dot" />FAQ</div>
        <h2 className="section-title">Honest answers.</h2>
        <div className="faq-wrap">
          {faqs.map(({ q, a }, i) => (
            <div key={i} className={`faq-item${openIndex === i ? ' open' : ''}`}>
              <button className="faq-q" onClick={() => toggle(i)}>
                {q}
                <ChevronIcon />
              </button>
              <div className="faq-a">
                <div className="faq-a-inner">{a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
