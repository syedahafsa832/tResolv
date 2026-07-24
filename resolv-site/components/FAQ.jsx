'use client';

import { useState } from 'react';
import { faqs } from '@/content/homepageFaqs';

const ChevronIcon = () => (
  <svg className="faq-chevron" width="18" height="18" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m6 9 6 6 6-6" />
  </svg>
);

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
