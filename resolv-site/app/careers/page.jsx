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

const delay = (ms) => ({ animationDelay: `${ms}ms` });

export default function CareersPage() {
  return (
    <>
      <Nav />
      <main className="cr-root">
        <div className="cr-glow" aria-hidden="true" />
        <div className="cr-wrap">
          <section className="cr-hero">
            <div>
              <div className="cr-pill cr-rise"><span className="cr-dot" /> 1 open role</div>
              <h1 className="cr-h1 cr-rise" style={delay(80)}>
                we&rsquo;re building tResolv.<br />
                <span className="cr-grad">come help us grow it.</span>
              </h1>
              <p className="cr-lead cr-rise" style={delay(160)}>
                <strong>You don&rsquo;t need years of experience.</strong> You need curiosity,
                initiative, and the ability to figure things out.
              </p>
              <div className="cr-cta-row cr-rise" style={delay(240)}>
                <Link href="/careers/apply" className="cr-btn cr-btn-primary">
                  apply now <Icon name="ArrowRight" />
                </Link>
                <a href="#role" className="cr-btn cr-btn-ghost">see the role</a>
              </div>
            </div>

            <div className="cr-chat cr-rise" style={delay(320)} aria-hidden="true">
              <div className="cr-chat-label"><span>a good day, roughly</span><span>example</span></div>
              <div className="cr-bubble cr-bubble-them">hey, who&rsquo;s this?</div>
              <div className="cr-bubble cr-bubble-you">
                hi! noticed your customers keep asking &ldquo;where&rsquo;s my order?&rdquo; &mdash;
                we built something for exactly that.
              </div>
              <div className="cr-bubble cr-bubble-them">wait&hellip; tell me more</div>
              <span className="cr-chat-tag"><Icon name="Check" size={14} /> conversation started</span>
            </div>
          </section>

          <section className="cr-section" id="role">
            <div className="cr-eyebrow">open role</div>
            <h2 className="cr-h2">{ROLE.title}</h2>
            <div className="cr-chips">
              <span className="cr-chip cr-chip-hot">commission-based</span>
              <span className="cr-chip">no experience required</span>
            </div>
            <p className="cr-role-intro">
              Not a traditional corporate sales job. You&rsquo;ll help tResolv grow by finding
              Shopify brands that could use us, starting real conversations, and helping turn
              them into customers.
            </p>

            <div className="cr-grid">
              {ROLE_SECTIONS.map((s) => (
                <article className="cr-card" key={s.key}>
                  <div className="cr-card-head">
                    <span className="cr-card-icon"><Icon name={s.icon} size={19} /></span>
                    <h3>{s.title}</h3>
                  </div>
                  <ul className="cr-list">
                    {s.items.map((it) => <li key={it}>{it}</li>)}
                  </ul>
                  {s.footnote && <p className="cr-foot">{s.footnote}</p>}
                </article>
              ))}
            </div>
          </section>

          <section className="cr-section" id="money">
            <div className="cr-eyebrow">compensation</div>
            <h2 className="cr-h2">let&rsquo;s be upfront about money.</h2>
            <div className="cr-money">
              <h3>This role is commission-based.</h3>
              <p>{COMMISSION_NOTE}</p>
              <div className="cr-money-struct">
                <span>commission structure</span>
                {COMMISSION_STRUCTURE || COMMISSION_STRUCTURE_FALLBACK}
              </div>
            </div>

            <div className="cr-steps">
              {HOW_IT_WORKS.map((s, i) => (
                <div className="cr-step" key={s.title}>
                  <i>0{i + 1}</i>
                  <b>{s.title}</b>
                  <p>{s.body}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="cr-section">
            <div className="cr-final">
              <h2 className="cr-h2" style={{ marginTop: 0 }}>
                sound like <span className="cr-grad">you?</span>
              </h2>
              <p>Takes about 10 minutes. No CV, no cover letter. Just show us how you think.</p>
              <Link href="/careers/apply" className="cr-btn cr-btn-primary">
                apply now <Icon name="ArrowRight" />
              </Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
