import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Icon from '@/components/careers/icons';
import { buildMetadata } from '@/lib/seo';
import {
  ROLE, ROLE_SECTIONS, HOW_IT_WORKS, COMMISSION_NOTE,
  COMMISSION_STRUCTURE, COMMISSION_STRUCTURE_FALLBACK,
} from '@/lib/careers/config';
import './careers.css';

export const metadata = buildMetadata({
  title: 'Careers | tResolv',
  description:
    "We're building tResolv. One open role: Lead Acquisition (commission-based). No experience required, just curiosity, initiative and follow-through.",
  path: '/careers',
});

export default function CareersPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="hero cr-hero">
          <div className="hero-inner">
            <div className="hero-text">
              <div className="eyebrow">
                <span className="eyebrow-dot" />
                Now hiring · 1 open role
              </div>
              <h1>
                We&apos;re building tResolv.<br />
                <span className="accent">Come help us grow it.</span>
              </h1>
              <p className="hero-sub">
                <strong>You don&apos;t need years of experience.</strong> You need curiosity,
                initiative, and the ability to figure things out.
              </p>
              <div className="hero-actions">
                <Link
                  href="/careers/apply"
                  className="btn btn-primary"
                  style={{ fontSize: 15, padding: '13px 26px' }}
                >
                  Apply now →
                </Link>
                <a href="#role" className="hero-watch-link">
                  See the role
                  <span className="hero-watch-icon"><Icon name="ArrowDown" size={14} /></span>
                </a>
              </div>
              <div className="hero-trust" style={{ display: 'flex', gap: 24, flexWrap: 'wrap', marginTop: 24 }}>
                <span className="hero-assurance">Commission-based · No CV needed · About 10 minutes to apply</span>
              </div>
            </div>

            <div className="hd-outer" aria-hidden="true">
              <div className="hd-card">
                <div className="hd-chrome">
                  <div className="hd-dots">
                    <span className="hd-dot hd-dot-r" />
                    <span className="hd-dot hd-dot-y" />
                    <span className="hd-dot hd-dot-g" />
                  </div>
                  <div className="hd-title">Outreach · example</div>
                </div>
                <div className="hd-body">
                  <div className="hd-msg hd-msg-customer">
                    Hi! Noticed your customers keep asking &ldquo;where&apos;s my order?&rdquo; We built something for exactly that.
                  </div>
                  <div className="hd-msg hd-msg-luna">Wait, tell me more.</div>
                  <div className="hd-msg hd-msg-customer">Happy to show you. Free for a quick chat this week?</div>
                  <div className="hd-msg hd-msg-luna">Yes, send over a time.</div>
                  <div className="hd-stamp">Conversation started</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="role">
          <div className="wrap">
            <div className="eyebrow"><span className="eyebrow-dot" />Open role</div>
            <h2 className="section-title">{ROLE.title}</h2>
            <div className="cr-tags">
              <span className="cr-tag cr-tag-hot">Commission-based</span>
              <span className="cr-tag">No experience required</span>
            </div>
            <p className="section-sub cr-section-sub">
              This is not a traditional corporate sales job. You&apos;ll help tResolv grow by finding
              Shopify brands that could use us, starting real conversations, and helping turn them into customers.
            </p>

            <div className="feat-grid cr-grid">
              {ROLE_SECTIONS.map((s) => (
                <div className="feat-card" key={s.key}>
                  <div className="feat-icon"><Icon name={s.icon} size={18} /></div>
                  <h3 className="feat-title">{s.title}</h3>
                  <ul className="cr-list">
                    {s.items.map((it) => <li key={it}>{it}</li>)}
                  </ul>
                  {s.footnote && <p className="cr-foot">{s.footnote}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-alt" id="money">
          <div className="wrap">
            <div className="eyebrow"><span className="eyebrow-dot" />Compensation</div>
            <h2 className="section-title">Let&apos;s be upfront about money.</h2>
            <div className="cr-money">
              <h3>This role is commission-based.</h3>
              <p>{COMMISSION_NOTE}</p>
              <div className="cr-money-struct">
                <span>Commission structure</span>
                {COMMISSION_STRUCTURE || COMMISSION_STRUCTURE_FALLBACK}
              </div>
            </div>

            <h3 className="section-title" style={{ fontSize: 26, marginTop: 72, marginBottom: 0 }}>How applying works</h3>
            <div className="steps" style={{ marginTop: 40 }}>
              {HOW_IT_WORKS.map((s, i) => (
                <div key={s.title} className="step">
                  <div className="step-num">0{i + 1}</div>
                  <h3 className="step-title">{s.title}</h3>
                  <p className="step-body">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section pre-cta">
          <div className="wrap">
            <h2>Sound like you?</h2>
            <p>Takes about 10 minutes. No CV, no cover letter. Just show us how you think.</p>
            <Link
              href="/careers/apply"
              className="btn btn-primary"
              style={{ fontSize: 16, padding: '14px 32px' }}
            >
              Apply now →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
