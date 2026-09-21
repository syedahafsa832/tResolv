'use client';

import { useState } from 'react';
import Link from 'next/link';
import { faqs } from '@/content/homepageFaqs';

const ChevronIcon = () => (
  <svg className="faq-chevron" width="18" height="18" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m6 9 6 6 6-6" />
  </svg>
);

// `linkToPage`: the homepage accordion links through to the full /faq page.
export default function FAQ({ linkToPage = false }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="section section-alt" id="faq">
      <div className="wrap">
        <div className="eyebrow"><span className="eyebrow-dot" />FAQ</div>
        <h2 className="section-title">Honest answers.</h2>
        <p className="section-sub">
          tResolv FAQ: what happens after the free trial, how human approval works for refunds and
          cancellations, how Gmail and Shopify setup works, and how customer data is handled.
        </p>
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
        {linkToPage && (
          <p className="section-sub" style={{ marginTop: 28, maxWidth: 'none' }}>
            <Link href="/faq" className="inline-link">Read the full FAQ →</Link>
          </p>
        )}
      </div>
    </section>
  );
}
