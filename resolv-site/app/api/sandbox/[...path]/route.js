// Server-side proxy to the real tResolv backend's public Luna Sandbox API
// (backend/src/api/routes/v2_sandbox.py). Those routes are explicitly public
// and unauthenticated by design (static fixtures for a fictional sample
// store, "Northstar Apparel" — see backend/src/services/sandbox_data.py) but
// are behind a strict CORS allowlist that only permits the real dashboard
// origin. Calling them from this server (not the browser) sidesteps CORS
// without needing any change to the backend, and without ever handling or
// forwarding credentials — there are none involved.
//
// The "ask" / "ask/status" routes are deliberately NOT proxied: they require
// a signed-in tenant and spend real AI quota, which this marketing site has
// no safe way to authenticate as.

const BACKEND_BASE = 'https://backend.tresolv.online/api/v2/sandbox';
const BLOCKED_PREFIXES = ['ask'];

function isBlocked(pathParts) {
  return BLOCKED_PREFIXES.includes(pathParts[0]);
}

async function forward(request, pathParts) {
  if (isBlocked(pathParts)) {
    return Response.json(
      { error: 'not_available', message: 'This sandbox route requires a signed-in account and is not available here.' },
      { status: 404 }
    );
  }

  const url = `${BACKEND_BASE}/${pathParts.join('/')}`;
  const init = { method: request.method, headers: { 'content-type': 'application/json' } };
  if (request.method === 'POST') {
    init.body = await request.text();
  }

  try {
    const res = await fetch(url, init);
    const text = await res.text();
    return new Response(text, { status: res.status, headers: { 'content-type': 'application/json' } });
  } catch {
    return Response.json(
      { error: 'upstream_unavailable', message: "Luna's sandbox is waking up (free-tier cold start). Try again in a moment." },
      { status: 503 }
    );
  }
}

export async function GET(request, { params }) {
  const { path } = await params;
  return forward(request, path);
}

export async function POST(request, { params }) {
  const { path } = await params;
  return forward(request, path);
}
