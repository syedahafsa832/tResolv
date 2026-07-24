// Site-wide constants used by every page's metadata and CTAs.
// Keep this the single source of truth — do not hardcode the domain or app
// URL inline in individual pages.
export const SITE = {
  name: 'tResolv',
  legalName: 'tResolv',
  url: 'https://tresolv.online',
  appUrl: 'https://app.tresolv.online',
  defaultTitleSuffix: ' | tResolv',
};

export function absoluteUrl(path = '/') {
  return `${SITE.url}${path.startsWith('/') ? path : `/${path}`}`;
}
