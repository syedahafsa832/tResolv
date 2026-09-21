import Link from 'next/link';
import { buildMetadata, breadcrumbListSchema, orgRef } from '@/lib/seo';
import { SITE, absoluteUrl } from '@/lib/site';
import PageShell from '@/components/seo/PageShell';
import PageHero from '@/components/seo/PageHero';
import RelatedLinks from '@/components/seo/RelatedLinks';

const path = '/contact';
const seo = {
  title: 'Contact tResolv | Support, Demos and Questions',
  description:
    'Contact tResolv by email at hello@tresolv.online, book a demo call, or start a free trial. Ask about pricing, setup, or your Shopify support workflow.',
};

export const metadata = buildMetadata({ ...seo, path });

const relatedLinks = [
  { href: '/pricing', label: 'Pricing' },
  { href: '/faq', label: 'Frequently Asked Questions' },
  { href: '/about', label: 'About tResolv' },
  { href: '/security', label: 'Security' },
  { href: '/privacy', label: 'Privacy Policy' },
];

export default function Page() {
  const breadcrumb = [{ label: 'Home', path: '/' }, { label: 'Contact' }];
  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      name: seo.title,
      description: seo.description,
      url: absoluteUrl(path),
      about: orgRef,
    },
    breadcrumbListSchema(breadcrumb),
  ];
  return (
    <PageShell schema={schema} breadcrumb={breadcrumb}>
      <PageHero
        eyebrow="Contact"
        title="Contact tResolv:"
        titleAccent="questions, demos, and support."
        descriptor="How to reach tResolv about pricing, setup, or using AI customer support with your Shopify store."
        sub="Email us, book a demo call, or start a free trial and see tResolv on your own inbox."
      />
      <section className="section" id="contact-methods">
        <div className="wrap" style={{ maxWidth: 980 }}>
          <div className="contact-grid">
            <div className="contact-card">
              <div className="use-case-title">Email us</div>
              <div className="use-case-body">
                Questions about pricing, setup, security, or your data. Data access, correction, and deletion requests
                are answered within 7 days (see our <Link href="/privacy" className="inline-link">Privacy Policy</Link>).
              </div>
              <a href={`mailto:${SITE.contactEmail}`} className="inline-link">{SITE.contactEmail}</a>
            </div>
            <div className="contact-card">
              <div className="use-case-title">Book a demo</div>
              <div className="use-case-body">Pick a time to see tResolv working on real Shopify support requests.</div>
              <a href={SITE.bookingUrl} target="_blank" rel="noopener" className="inline-link">Book a demo call →</a>
            </div>
            <div className="contact-card">
              <div className="use-case-title">Start a free trial</div>
              <div className="use-case-body">14 days of full access on your own inbox. No credit card required.</div>
              <a href={SITE.appUrl} target="_blank" rel="noopener" className="inline-link">Start free trial →</a>
            </div>
          </div>
        </div>
      </section>
      <RelatedLinks links={relatedLinks} />
    </PageShell>
  );
}
