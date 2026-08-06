import PageShell from '@/components/seo/PageShell';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Security | tResolv',
  description: 'How tResolv protects merchant and customer data — encryption, authentication, tenant isolation, and the third-party services we rely on.',
  path: '/security',
});

export default function SecurityPage() {
  return (
    <PageShell>
      <div className="privacy-hero">
        <h1>Security</h1>
        <p>How we protect your data</p>
      </div>

      <div className="privacy-body">
        <div className="privacy-content">
          <p>tResolv handles sensitive data, your Shopify credentials, your Gmail inbox, your customers&apos; order details, so we&apos;ve built the platform around a few concrete security practices. This page describes what&apos;s actually implemented today, not a compliance checklist. We&apos;re a small team and don&apos;t hold formal certifications like SOC 2 or ISO 27001 yet.</p>

          <hr className="privacy-divider" />

          <h2>Encryption</h2>
          <p>Sensitive credentials, including your Shopify access token, are encrypted at rest using <strong>AES-256-GCM</strong> before they&apos;re stored. All traffic between your browser, our dashboard, and our backend is encrypted in transit over HTTPS.</p>

          <hr className="privacy-divider" />

          <h2>Authentication</h2>
          <p>Dashboard access is protected by <strong>JWT-based authentication</strong>. Account passwords are never stored in plain text, they&apos;re hashed with <strong>bcrypt</strong>, a one-way hashing algorithm designed specifically to resist brute-force attacks.</p>

          <hr className="privacy-divider" />

          <h2>Tenant isolation</h2>
          <p>tResolv is multi-tenant: every merchant&apos;s tickets, orders, and knowledge base are scoped to their own account at the database level. One merchant&apos;s data is never visible to another, and this boundary is enforced on every request, not just in the dashboard UI.</p>

          <hr className="privacy-divider" />

          <h2>Audit logs</h2>
          <p>Financial actions, refunds and order cancellations, are recorded in an append-only audit log: who took the action, when, and the result. These records can&apos;t be edited or deleted after the fact.</p>

          <hr className="privacy-divider" />

          <h2>Rate limiting</h2>
          <p>API endpoints, particularly ones that trigger financial actions or send messages, are rate-limited to prevent abuse and reduce the impact of a compromised account or runaway integration.</p>

          <hr className="privacy-divider" />

          <h2>Data handling</h2>
          <p>We collect only what&apos;s needed to run the service: your account details, the Shopify order data required to answer customer questions, and the support emails in your connected inbox. Email content is automatically deleted after 90 days. We don&apos;t sell data, and we don&apos;t use merchant or customer data to train AI models. See our <a href="/privacy">Privacy Policy</a> for the full detail.</p>

          <hr className="privacy-divider" />

          <h2>Third-party services we use</h2>
          <p>We rely on a small number of established providers to run tResolv, each scoped to only the access it needs:</p>
          <ul className="provider-list">
            <li><strong>Mistral AI</strong> (France, EU), powers our AI replies</li>
            <li><strong>Supabase</strong> (EU region), stores account and ticket data</li>
            <li><strong>Google Gmail API</strong>, reads and sends emails via your connected account</li>
            <li><strong>Render.com</strong>, hosts our backend</li>
            <li><strong>Vercel</strong>, hosts our dashboard and website</li>
          </ul>
          <p>None of these providers are permitted to use your data for their own purposes.</p>

          <hr className="privacy-divider" />

          <h2>Reporting a concern</h2>
          <p>If you believe you&apos;ve found a security issue, please email us, we take these reports seriously and will respond promptly.</p>

          <div className="privacy-contact">
            <strong>Questions?</strong> Email us at <a href="mailto:hello@tresolv.online">hello@tresolv.online</a>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
