const productLinks = [
  { href: '/#how-it-works', label: 'How it works' },
  { href: '/#features', label: 'Features' },
  { href: '/#chat-widget', label: 'Chat Widget' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/faq', label: 'FAQ' },
];
const solutionLinks = [
  { href: '/ai-customer-support-employee', label: 'AI Support Employee' },
  { href: '/shopify-ai-customer-support', label: 'Shopify AI Support' },
  { href: '/ai-support-agent-ecommerce', label: 'Ecommerce Support Agent' },
  { href: '/ai-email-customer-support', label: 'AI Email Support' },
  { href: '/ai-order-tracking-automation', label: 'Order Tracking (WISMO)' },
  { href: '/ai-refund-automation', label: 'Refund Automation' },
  { href: '/ai-return-automation', label: 'Return Automation' },
];
const compareLinks = [
  { href: '/tresolv-vs-gorgias', label: 'tResolv vs Gorgias' },
  { href: '/tresolv-vs-zendesk', label: 'tResolv vs Zendesk' },
  { href: '/tresolv-vs-intercom', label: 'tResolv vs Intercom' },
  { href: '/gorgias-alternatives', label: 'Gorgias Alternatives' },
];
const companyLinks = [
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
  { href: '/careers', label: 'Careers' },
  { href: '/blog', label: 'Blog' },
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
              { heading: 'Solutions', links: solutionLinks },
              { heading: 'Compare', links: compareLinks },
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
