// Site-wide constants used by every page's metadata and CTAs.
// Keep this the single source of truth, do not hardcode the domain or app
// URL inline in individual pages.
export const SITE = {
  name: 'tResolv',
  legalName: 'tResolv',
  url: 'https://www.tresolv.online',
  appUrl: 'https://app.tresolv.online',
  contactEmail: 'hello@tresolv.online',
  bookingUrl: 'https://calendar.app.google/YkSqLTsYr18bUP2Z6',
  defaultTitleSuffix: ' | tResolv',
  // Organization identity facts. Only add a `sameAs` URL once that official
  // profile really exists, and a `founder` only with a real, publishable name.
  // Both are omitted from the Organization JSON-LD while empty.
  sameAs: [],
  founder: null,
};

export const ORG_ID = `${SITE.url}/#organization`;

export function absoluteUrl(path = '/') {
  return `${SITE.url}${path.startsWith('/') ? path : `/${path}`}`;
}
