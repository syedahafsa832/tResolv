import { SITE, absoluteUrl } from './site';

/**
 * Builds a Next.js `metadata` export object: title, description, canonical,
 * Open Graph, and Twitter card. Every SEO page should build its metadata
 * through this function instead of hand-rolling the object — keeps the
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
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
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
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      description: '14-day free trial, no credit card required',
    },
    provider: {
      '@type': 'Organization',
      name: SITE.legalName,
      url: SITE.url,
    },
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

/** BreadcrumbList JSON-LD. `items` is an array of { label, path } — path is optional on the last (current) item. */
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
    author: {
      '@type': 'Organization',
      name: SITE.legalName,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE.legalName,
    },
  };
}
