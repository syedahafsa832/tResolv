const ResolvMark = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
    <rect x="2.5" y="4" width="35" height="25" rx="8.5" fill="#5B5BD6" />
    <path d="M12 27 L12 37.5 L22 28.5 Z" fill="#5B5BD6" />
    <path d="M12.4 16.4 l5 5 l10.2 -11.6" stroke="#fff" strokeWidth="3.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

function ConsoleMockup() {
  return (
    <div className="mockup-outer">
      <div className="mockup-card">
        <div className="mockup-shell">
          {/* Chrome bar */}
          <div className="mc-chrome">
            <div className="mc-dots">
              <span className="mc-dot mc-r" />
              <span className="mc-dot mc-y" />
              <span className="mc-dot mc-g" />
            </div>
            <div className="mc-url"><span>app.resolv.ai</span></div>
          </div>

          {/* Console body */}
          <div className="mc-console">
            {/* Sidebar */}
            <div className="mc-sidebar">
              <div className="mc-logo">
                <ResolvMark size={18} />
                <span className="mc-logo-text">Resolv</span>
              </div>
              <div className="mc-brand">Luna Apparel</div>
              <div className="mc-nav">
                <div className="mc-ni on">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/>
                    <rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/>
                  </svg>
                  Dashboard
                </div>
                <div className="mc-ni">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/>
                    <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/>
                  </svg>
                  Inbox <span className="mc-ct">24</span>
                </div>
                <div className="mc-ni">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>
                    <path d="M12 8v4"/><path d="M12 16h.01"/>
                  </svg>
                  Escalations <span className="mc-ct red">3</span>
                </div>
                <div className="mc-ni">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>
                  </svg>
                  Quarantine
                </div>
                <div className="mc-ni">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                  Settings
                </div>
              </div>
            </div>

            {/* Main panel */}
            <div className="mc-main">
              <div className="mc-topbar">
                <span className="mc-topbar-t">Dashboard</span>
                <span className="mc-live"><span className="mc-live-dot" />Live</span>
              </div>
              <div className="mc-body">
                <div className="mc-stats">
                  {[
                    { label: 'AI handled', val: '86%',  sub: 'this week' },
                    { label: 'Active',     val: '24',   sub: 'conversations' },
                    { label: 'Escalated',  val: '3',    sub: 'need review' },
                  ].map(({ label, val, sub }) => (
                    <div key={label} className="mc-stat">
                      <div className="mc-stat-l">{label}</div>
                      <div className="mc-stat-v">{val}</div>
                      <div className="mc-stat-s">{sub}</div>
                    </div>
                  ))}
                </div>
                <div className="mc-rows-head">Recent conversations</div>
                {[
                  { email: 'maria.lopez@gmail.com',  subject: 'Damaged item — refund request',    badge: 'draft', label: 'Draft ready' },
                  { email: 'james.wu@outlook.com',   subject: 'Where is my order?',               badge: 'ok',    label: 'Auto-resolved' },
                  { email: 'sara.kim@icloud.com',    subject: 'Cancel my order immediately',      badge: 'warn',  label: 'Escalated' },
                ].map(({ email, subject, badge, label }) => (
                  <div key={email} className="mc-row">
                    <div className="mc-row-info">
                      <span className="mc-email">{email}</span>
                      <span className="mc-subject">{subject}</span>
                    </div>
                    <span className={`mc-badge ${badge}`}>{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        {/* Left: copy */}
        <div className="hero-text">
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            AI support for Shopify brands
          </div>
          <h1>
            Your AI<br />support<br /><span className="accent">employee</span>
          </h1>
          <p className="hero-sub">
            Resolv reads your inbox, drafts replies, and resolves <strong>86.5%</strong> of customer
            support emails without you lifting a finger. Every refund and cancellation requires your
            one-tap approval.
          </p>
          <div className="hero-actions">
            <a href="#" className="btn btn-primary" style={{ fontSize: 15, padding: '13px 26px' }}>
              Book a demo →
            </a>
            <span className="hero-assurance">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              Your emails never leave Google.
            </span>
          </div>
        </div>

        {/* Right: 3D mockup */}
        <ConsoleMockup />
      </div>

      {/* Stats band */}
      <div className="hero-band">
        <div className="hero-band-inner">
          <div className="hb-item">
            <div className="hb-val"><em>86.5%</em></div>
            <div className="hb-label">of tickets resolved by AI</div>
            <div className="hb-note">live production data, not an estimate</div>
          </div>
          <div className="hb-item">
            <div className="hb-val">2 min</div>
            <div className="hb-label">average response time</div>
          </div>
          <div className="hb-item">
            <div className="hb-val">$0</div>
            <div className="hb-label">unauthorized financial actions</div>
          </div>
          <div className="hb-item">
            <div className="hb-val">10 min</div>
            <div className="hb-label">to go live</div>
          </div>
        </div>
      </div>
    </section>
  );
}
