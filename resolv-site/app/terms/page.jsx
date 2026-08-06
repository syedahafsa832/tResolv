import PageShell from '@/components/seo/PageShell';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Terms of Service | tResolv',
  description: 'The terms that govern your use of tResolv, the AI customer support employee for Shopify brands.',
  path: '/terms',
});

export default function TermsPage() {
  return (
    <PageShell>
      <div className="privacy-hero">
        <h1>Terms of Service</h1>
        <p>Effective date: 6 August 2026</p>
      </div>

      <div className="privacy-body">
        <div className="privacy-content">
          <h2>1. Introduction</h2>
          <p>These terms govern your use of tResolv. By creating an account or using tResolv in any way, you agree to be bound by them. If you don&apos;t agree, please don&apos;t use the service.</p>

          <hr className="privacy-divider" />

          <h2>2. About tResolv</h2>
          <p>tResolv provides AI-powered customer support tools for Shopify businesses. This includes email support assistance through your connected Gmail inbox, a chat widget for your storefront, and workflow automation that helps your team resolve customer conversations faster.</p>

          <hr className="privacy-divider" />

          <h2>3. Account Responsibilities</h2>
          <p>You&apos;re responsible for:</p>
          <ul>
            <li>Keeping your account information accurate and up to date</li>
            <li>Maintaining the security of your login credentials</li>
            <li>Using tResolv in compliance with all applicable laws</li>
          </ul>

          <hr className="privacy-divider" />

          <h2>4. AI Generated Responses</h2>
          <p>tResolv uses AI to draft and send customer support replies on your behalf. While we work to keep these responses accurate and helpful, AI outputs may not always be perfect. You remain responsible for reviewing important actions, refunds, cancellations, and order changes are always staged for your approval rather than executed automatically.</p>

          <hr className="privacy-divider" />

          <h2>5. Shopify and Gmail Integrations</h2>
          <p>When you connect Shopify or Gmail to tResolv, you authorize us to access the data needed to provide the service, order details, and support emails. We only access what&apos;s required to do that, and you can disconnect either integration at any time from your dashboard.</p>

          <hr className="privacy-divider" />

          <h2>6. Payments and Plans</h2>
          <p>tResolv offers both free and paid plans. Pricing may change from time to time, we&apos;ll always give notice before a change affects your current plan. You&apos;re responsible for any payments applicable to the plan you choose.</p>

          <hr className="privacy-divider" />

          <h2>7. Acceptable Use</h2>
          <p>You must not:</p>
          <ul>
            <li>Abuse, overload, or attempt to disrupt the platform</li>
            <li>Attempt to gain unauthorized access to any part of tResolv or another account</li>
            <li>Use the service for any illegal or fraudulent purpose</li>
          </ul>

          <hr className="privacy-divider" />

          <h2>8. Service Availability</h2>
          <p>We aim to keep tResolv reliable and available, but like any online service, occasional interruptions or downtime may occur. We&apos;ll work to resolve issues as quickly as possible when they come up.</p>

          <hr className="privacy-divider" />

          <h2>9. Limitation of Liability</h2>
          <p>tResolv is provided &quot;as is&quot; without warranties of any kind. To the maximum extent permitted by law, tResolv and its team are not liable for any indirect, incidental, or consequential damages arising from your use of the service.</p>

          <hr className="privacy-divider" />

          <h2>10. Changes to Terms</h2>
          <p>We may update these terms from time to time. If we make a significant change, we&apos;ll notify you by email. Continuing to use tResolv after a change means you accept the updated terms.</p>

          <hr className="privacy-divider" />

          <h2>11. Contact</h2>
          <p>Questions about these terms? Reach out anytime.</p>
          <p>Email: <a href="mailto:hello@tresolv.online">hello@tresolv.online</a><br />Website: <a href="https://tresolv.online">https://tresolv.online</a></p>

          <div className="privacy-contact">
            © 2026 tResolv. All rights reserved.
          </div>
        </div>
      </div>
    </PageShell>
  );
}
