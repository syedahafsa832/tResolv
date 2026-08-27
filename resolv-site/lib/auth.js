// Reads a non-sensitive "logged in" flag cookie set by the app on the shared
// .tresolv.online domain. Never reads or stores actual tokens here — the
// marketing site only needs a yes/no signal to swap the nav CTA.
export function isLoggedIn() {
  if (typeof document === 'undefined') return false;
  return document.cookie.split('; ').some((c) => c.startsWith('tresolv_logged_in=1'));
}
