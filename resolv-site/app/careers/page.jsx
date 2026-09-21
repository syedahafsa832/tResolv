import Image from 'next/image';
import Link from 'next/link';
import { CareersHeader, CareersFooter } from '@/components/careers/CareersChrome';
import { buildMetadata } from '@/lib/seo';
import {
  ROLE, DO_ITEMS, NOT_NEEDED, LOOK_FOR, LEARN, STEPS, COMPENSATION,
} from '@/lib/careers/config';

export const metadata = buildMetadata({
  title: 'Careers | tResolv',
  description:
    "We're building tResolv. One open role: Lead Acquisition (commission-based). No experience required, just curiosity, initiative and follow-through.",
  path: '/careers',
});

const MARQUEE = ['finding customers', 'researching markets', 'writing outreach', 'testing ideas', 'seeing what works'];

export default function CareersPage() {
  return (
    <>
      <CareersHeader />
      <main>
        {/* hero */}
        <section className="cr-hero">
          <div className="cr-hero-text">
            <div className="cr-eyebrow"><span className="cr-dot" />NOW HIRING · 1 OPEN ROLE</div>
            <h1 className="cr-h1">
              we’re building <span className="cr-teal">tResolv.</span><br />
              come help us grow it.
            </h1>
            <p className="cr-hero-sub">
              you don’t need years of experience. you need curiosity, initiative, and the ability to figure things out.
            </p>
            <div className="cr-cta-row">
              <Link href="/careers/apply" className="cr-btn cr-btn-primary">apply now →</Link>
              <a href="#role" className="cr-link">see the role ↓</a>
            </div>
          </div>
          <div className="cr-hero-img">
            <Image
              src="/careers/hero.webp"
              alt="A desk collage: a student working on a laptop, handwritten notes, a notebook, coffee and headphones."
              width={1182}
              height={849}
              priority
              sizes="(max-width: 900px) 100vw, 58vw"
            />
          </div>
        </section>

        {/* the opportunity */}
        <section className="cr-sec cr-role" id="role">
          <div className="cr-label"><span className="cr-dot" />currently open</div>
          <h2 className="cr-h2">{ROLE.title}</h2>
          <div className="cr-role-grid">
            <p className="cr-lede">
              this role helps tResolv find the right customers, start conversations, research shopify brands,
              test acquisition ideas, and figure out what actually works.
            </p>
            <div>
              <p className="cr-body">
                it’s a chance to learn how a young startup really grows, by doing the work yourself.
              </p>
              <div className="cr-tags">
                <span className="cr-tag cr-tag-teal">commission-based</span>
                <span className="cr-tag">no experience required</span>
              </div>
            </div>
          </div>
        </section>

        {/* what you'll do */}
        <section className="cr-sec">
          <h2 className="cr-h2">what you’ll actually do.</h2>
          <div className="cr-notes">
            {DO_ITEMS.map((d, i) => (
              <div className={`cr-note cr-note-${i + 1}`} key={d.word}>
                <span className="cr-hand">{d.word}</span>
                <p>{d.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* no experience */}
        <section className="cr-sec">
          <div className="cr-dark">
            <span className="cr-hand cr-orange cr-dark-aside">(yes, really)</span>
            <h2 className="cr-h2 cr-dark-h">no experience<br /><span className="cr-teal-bright">required.</span></h2>
            <p className="cr-dark-p">
              you don’t need years of experience, a sales background, a fancy cv, or a huge network.
            </p>
            <div className="cr-struck">
              {NOT_NEEDED.map((n) => <span key={n}>{n}</span>)}
            </div>
            <p className="cr-dark-p cr-dark-p2">
              we care more about initiative, curiosity, communication, problem-solving, learning speed,
              and actually following through. if you’re curious and you finish what you start, you’re most of the way there.
            </p>
          </div>
        </section>

        {/* what we look for */}
        <section className="cr-sec">
          <h2 className="cr-h2">what we look for.</h2>
          <div className="cr-bento">
            {LOOK_FOR.map((l, i) => (
              <div className={`cr-bit cr-bit-${i + 1}`} key={l.word}>
                <span className="cr-bit-n">0{i + 1}</span>
                <h3>{l.word}</h3>
                <p>{l.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* marquee */}
        <div className="cr-marquee" aria-hidden="true">
          <div className="cr-marquee-track">
            {[0, 1].map((k) => (
              <span key={k}>
                {MARQUEE.map((m) => <em key={m + k}>{m}<i>✦</i></em>)}
              </span>
            ))}
          </div>
        </div>

        {/* what you'll learn */}
        <section className="cr-sec cr-learn">
          <div>
            <h2 className="cr-h2">you’re not here for busywork.</h2>
            <p className="cr-lede cr-learn-p">you’re here to learn how an early startup actually finds its people.</p>
          </div>
          <ol className="cr-learn-list">
            {LEARN.map((l, i) => (
              <li key={l}><span>0{i + 1}</span>{l}</li>
            ))}
          </ol>
        </section>

        {/* money */}
        <section className="cr-sec cr-money-sec">
          <h2 className="cr-h2">how the money works.</h2>
          <div className="cr-money">
            <h3>{COMPENSATION.headline}</h3>
            <p>{COMPENSATION.body}</p>
            {COMPENSATION.structure && (
              <div className="cr-structure"><span>the structure</span>{COMPENSATION.structure}</div>
            )}
          </div>
        </section>

        {/* process */}
        <section className="cr-sec">
          <h2 className="cr-h2">how applying works.</h2>
          <ol className="cr-steps">
            {STEPS.map((s, i) => (
              <li key={s.title}>
                <span className="cr-step-n">0{i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* final cta */}
        <section className="cr-sec">
          <div className="cr-final">
            <span className="cr-sticky" aria-hidden="true">no cv needed</span>
            <h2 className="cr-h2">think you’d fit in?</h2>
            <p>maybe you don’t have the experience yet. that’s okay.<br />show us what you can do.</p>
            <Link href="/careers/apply" className="cr-btn cr-btn-primary">apply now →</Link>
          </div>
        </section>
      </main>
      <CareersFooter />
    </>
  );
}
