const productLinks = [
  { href: '/#how-it-works', label: 'How it works' },
  { href: '/#features', label: 'Features' },
  { href: '/#chat-widget', label: 'Chat Widget' },
  { href: '/#pricing', label: 'Pricing' },
  { href: '/#faq', label: 'FAQ' },
];
const companyLinks = [
  { href: '/blog', label: 'Blog' },
  { href: 'mailto:hello@tresolv.online', label: 'Contact' },
];
const legalLinks = [
  { href: '/privacy', label: 'Privacy' },
  { href: '/terms', label: 'Terms' },
  { href: '/security', label: 'Security' },
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
        </div>
      </div>
    </footer>
  );
}
