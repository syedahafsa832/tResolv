import { absoluteUrl } from '@/lib/site';
import { page as aiCustomerSupportEmployee } from '@/content/pages/ai-customer-support-employee';
import { page as aiEmailCustomerSupport } from '@/content/pages/ai-email-customer-support';
import { page as aiOrderTrackingAutomation } from '@/content/pages/ai-order-tracking-automation';
import { page as aiRefundAutomation } from '@/content/pages/ai-refund-automation';
import { page as aiReturnAutomation } from '@/content/pages/ai-return-automation';
import { page as aiSupportAgentEcommerce } from '@/content/pages/ai-support-agent-ecommerce';
import { page as shopifyAiCustomerSupport } from '@/content/pages/shopify-ai-customer-support';
import { page as gorgiasAlternatives } from '@/content/comparisons/gorgias-alternatives';
import { page as tresolvVsGorgias } from '@/content/comparisons/tresolv-vs-gorgias';
import { page as tresolvVsIntercom } from '@/content/comparisons/tresolv-vs-intercom';
import { page as tresolvVsZendesk } from '@/content/comparisons/tresolv-vs-zendesk';
import { posts } from '@/content/blog/posts';

const moneyPages = [
  aiCustomerSupportEmployee,
  aiEmailCustomerSupport,
  aiOrderTrackingAutomation,
  aiRefundAutomation,
  aiReturnAutomation,
  aiSupportAgentEcommerce,
  shopifyAiCustomerSupport,
];

const comparisonPages = [
  gorgiasAlternatives,
  tresolvVsGorgias,
  tresolvVsIntercom,
  tresolvVsZendesk,
];

export default function sitemap() {
  const staticEntries = [
    { url: absoluteUrl('/'), changeFrequency: 'weekly', priority: 1 },
    { url: absoluteUrl('/blog'), changeFrequency: 'weekly', priority: 0.8 },
    { url: absoluteUrl('/privacy'), changeFrequency: 'yearly', priority: 0.3 },
  ];

  const contentEntries = [...moneyPages, ...comparisonPages].map((page) => ({
    url: absoluteUrl(page.path),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const blogEntries = posts.map((post) => ({
    url: absoluteUrl(`/blog/${post.slug}`),
    lastModified: post.datePublished,
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [...staticEntries, ...contentEntries, ...blogEntries];
}
