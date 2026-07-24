const productLinks = [
  { href: '/#how-it-works', label: 'How it works' },
  { href: '/#features', label: 'Features' },
  { href: '/#chat-widget', label: 'Chat Widget' },
  { href: '/#pricing', label: 'Pricing' },
  { href: '/#faq', label: 'FAQ' },
];
const companyLinks = [
  { href: '#', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '#', label: 'Changelog' },
  { href: '#', label: 'Contact' },
];
const legalLinks = [
  { href: '/privacy', label: 'Privacy' },
  { href: '#', label: 'Terms' },
  { href: '#', label: 'Security' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-top">
          <div>
            <div className="footer-logo">
              <span className="logo-t">t</span>Resolv
            </div>
            <p className="footer-tagline">
              The AI support employee for Shopify brands. tResolv handles your inbox so you can focus on your business.
            </p>
          </div>
          <div className="footer-cols">
            {[
              { heading: 'Product', links: productLinks },
              { heading: 'Company', links: companyLinks },
              { heading: 'Legal',   links: legalLinks },
            ].map(({ heading, links }) => (
              <div key={heading} className="footer-col">
                <h4>{heading}</h4>
                <div className="footer-col-links">
                  {links.map(({ href, label }) => (
                    <a key={label} href={href}>{label}</a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="footer-bottom">
          <span className="footer-copy">© 2026 tResolv. All rights reserved.</span>
          <div className="footer-socials">
            <a href="#" aria-label="X / Twitter">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a href="#" aria-label="GitHub">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
