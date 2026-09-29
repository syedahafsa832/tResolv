import Reveal from '@/components/Reveal';
import UnreadCounter from '@/components/UnreadCounter';

const TICKETS = [
  { id: 1, subject: "Where's my order #4821?", preview: 'Hi, can you tell me where my order is?', time: '2m ago', initials: 'JS', bg: '#FCE4E7', color: '#B23A55' },
  { id: 2, subject: 'Can you cancel order #2214?', preview: 'I need to cancel my order, please.', time: '5m ago', initials: 'MT', bg: '#EDE6FB', color: '#6E4FA3' },
  { id: 3, subject: 'Is this in stock in Medium?', preview: 'Do you have this in stock? I need a Medium.', time: '8m ago', initials: 'AW', bg: '#FBEED2', color: '#93691B' },
  { id: 4, subject: "What's your return policy?", preview: 'Can you share your return policy?', time: '11m ago', initials: 'LR', bg: '#DCEBFB', color: '#2C6CA3' },
  { id: 5, subject: 'I need a refund for order #3390', preview: "I'd like a refund for my last order, please.", time: '13m ago', initials: 'DK', bg: '#FBF3D2', color: '#8A7A1B' },
];

const PEEK_LEFT = [
  { subject: 'Order status?', time: '2m ago' },
  { subject: 'Wrong item received', time: '4m ago' },
  { subject: 'Update my address', time: '7m ago' },
];

const PEEK_RIGHT = [
  { subject: 'Do you ship internationally?', time: '10m ago' },
  { subject: 'When will this be back in stock?', time: '12m ago' },
  { subject: 'Can I exchange this item?', time: '15m ago' },
];

export default function ProblemList() {
  return (
    <section className="section section-problem" id="problem">
      <div className="wrap">
        <div className="problem-layout">
          <div className="problem-copy">
            <Reveal as="div" className="eyebrow">
              <span className="eyebrow-dot" />AI customer support employee for Shopify brands
            </Reveal>
            <Reveal as="h2" className="section-title" delay={80}>
              Sound familiar? Support isn&apos;t hard, it&apos;s just{' '}
              <span className="headline-accent">repetitive.</span>
            </Reveal>
            <Reveal as="p" className="problem-subtext" delay={140}>
              Luna answers live order questions and handles routine tickets automatically so you can focus on growing your brand.
            </Reveal>
          </div>

          <Reveal as="div" className="problem-visual" delay={160}>
            <div className="inbox-stack">
              {PEEK_LEFT.map((t, i) => (
                <div key={t.subject} className={`ticket-peek ticket-peek-left ticket-peek-left-${i + 1}`}>
                  <div className="ticket-peek-subject">{t.subject}</div>
                  <div className="ticket-peek-time">{t.time}</div>
                </div>
              ))}
              {PEEK_RIGHT.map((t, i) => (
                <div key={t.subject} className={`ticket-peek ticket-peek-right ticket-peek-right-${i + 1}`}>
                  <div className="ticket-peek-subject">{t.subject}</div>
                  <div className="ticket-peek-time">{t.time}</div>
                </div>
              ))}

              <div className="hi-panel inbox-main">
                <div className="hi-chrome">
                  <span className="hi-chrome-dot" style={{ background: '#FF5F57' }} />
                  <span className="hi-chrome-dot" style={{ background: '#FEBC2E' }} />
                  <span className="hi-chrome-dot" style={{ background: '#28C840' }} />
                </div>
                <div className="hi-head">
                  <span className="hi-head-title">Support inbox</span>
                  <span className="inbox-unread">
                    <span className="inbox-unread-dot" /><UnreadCounter start={23} end={20} /> unread
                  </span>
                </div>
                <div className="hi-rows">
                  {TICKETS.map((ticket, i) => (
                    <div key={ticket.id} className="hi-row" style={{ '--i': i }}>
                      <span className="ticket-avatar" style={{ background: ticket.bg, color: ticket.color }}>
                        {ticket.initials}
                      </span>
                      <div className="hi-row-body">
                        <div className="hi-row-subject">{ticket.subject}</div>
                        <div className="hi-row-from">{ticket.preview}</div>
                      </div>
                      <div className="hi-row-meta">
                        <span className="hi-row-time">{ticket.time}</span>
                        <span className="hi-badge unresolved">Unresolved</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
