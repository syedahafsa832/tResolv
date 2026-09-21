import { SITE, ORG_ID, absoluteUrl } from './site';
import { tiers } from '@/content/pricing';

/** Reference to the canonical Organization node (defined once by organizationSchema). */
export const orgRef = { '@id': ORG_ID };

/**
 * The one canonical Organization entity. Emit it on the homepage and /about;
 * every other schema node points at it via `orgRef` instead of redefining it.
 */
export function organizationSchema() {
  const org = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': ORG_ID,
    name: SITE.legalName,
    url: SITE.url,
    logo: {
      '@type': 'ImageObject',
      url: absoluteUrl('/favicon.png'),
      width: 512,
      height: 512,
    },
    description:
      'tResolv is an AI customer support employee for Shopify brands. It resolves routine support emails and storefront chat, and requires human approval for every refund, cancellation, and address change.',
    email: SITE.contactEmail,
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      email: SITE.contactEmail,
      url: absoluteUrl('/contact'),
    },
  };
  if (SITE.founder) org.founder = { '@type': 'Person', name: SITE.founder };
  if (SITE.sameAs.length) org.sameAs = SITE.sameAs;
  return org;
}

/**
 * Real paid plans as an AggregateOffer built from content/pricing.js. The
 * free trial is described in text only, never as a $0 Offer, so the markup
 * does not claim the product itself is free.
 */
export function pricingOffers() {
  const amounts = tiers.map((t) => t.amount);
  return {
    '@type': 'AggregateOffer',
    priceCurrency: 'USD',
    lowPrice: String(Math.min(...amounts)),
    highPrice: String(Math.max(...amounts)),
    offerCount: tiers.length,
    url: absoluteUrl('/pricing'),
    description:
      'Monthly plans starting at $49. 14-day free trial, no credit card required.',
    offers: tiers.map((t) => ({
      '@type': 'Offer',
      name: `${t.tier} plan`,
      price: String(t.amount),
      priceCurrency: 'USD',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: String(t.amount),
        priceCurrency: 'USD',
        unitCode: 'MON',
      },
      url: absoluteUrl('/pricing'),
      ...(t.per.includes('+')
        ? { description: 'Starting price. Higher or custom conversation volume is quoted individually.' }
        : {}),
    })),
  };
}

// Default social preview: the site's existing branded image (app/opengraph-image.png).
// Page-level `openGraph`/`twitter` objects replace the root file-based image, so
// it has to be listed explicitly for every page. Dimensions match the file.
const SOCIAL_IMAGE = {
  url: absoluteUrl('/opengraph-image.png'),
  width: 1672,
  height: 941,
  alt: 'tResolv: AI customer support employee for Shopify brands',
};

/**
 * Builds a Next.js `metadata` export object: title, description, canonical,
 * Open Graph, and Twitter card. Every SEO page should build its metadata
 * through this function instead of hand-rolling the object, keeps the
 * canonical/OG shape consistent across all ~20 pages.
 */
export function buildMetadata({ title, description, path, keywords }) {
  const url = absoluteUrl(path);
  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE.name,
      type: 'website',
      locale: 'en_US',
      images: [SOCIAL_IMAGE],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [SOCIAL_IMAGE.url],
    },
  };
}

/** SoftwareApplication JSON-LD for money/comparison pages. */
export function softwareApplicationSchema({ name, description, path }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name,
    description,
    url: absoluteUrl(path),
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    offers: pricingOffers(),
    provider: orgRef,
  };
}

/** FAQPage JSON-LD. `faqs` is an array of { q, a }. */
export function faqPageSchema(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: a,
      },
    })),
  };
}

/** BreadcrumbList JSON-LD. `items` is an array of { label, path }, path is optional on the last (current) item. */
export function breadcrumbListSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      ...(item.path ? { item: absoluteUrl(item.path) } : {}),
    })),
  };
}

/** Article JSON-LD for blog posts. */
export function articleSchema({ title, description, path, datePublished, dateModified }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url: absoluteUrl(path),
    datePublished,
    dateModified: dateModified || datePublished,
    author: orgRef,
    publisher: orgRef,
  };
}
