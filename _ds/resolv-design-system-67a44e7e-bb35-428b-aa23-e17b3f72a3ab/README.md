# TResolve — Design System

> **TResolve is an AI support employee for Shopify brands.** It connects to a brand's Gmail and Shopify, auto-resolves ~86.5% of customer support emails, and stages refunds, cancellations, exchanges and address changes as one-tap approvals. The product surface is a **brand-owner dashboard** ("AI Ops Console") for monitoring conversations, reviewing AI-drafted replies, and approving financial actions.

This repository is a **design system**: brand foundations (color, type, iconography), reusable CSS tokens, real product assets, and a high-fidelity **UI kit** that recreates the TResolve console so designers and agents can build on-brand screens, mocks, and prototypes.

---

## Sources

Everything here was reverse-engineered from the product codebase. The reader may not have access — paths are recorded for provenance.

| Source | Path / Location | Notes |
|---|---|---|
| **Product codebase** | `ai-ops-console/` (React + Vite, mounted read-only) | Single-page brand dashboard. Source of truth for all tokens, components, copy. |
| Design tokens | `ai-ops-console/src/index.css` (`:root`) | Colors, layout rails, radii live here. |
| Logomark | **None in source.** `ai-ops-console/public/favicon.svg` was the leftover default **Vite** favicon — *not* a TResolve mark — and has been removed. | An original mark was designed for this system: `assets/resolv-mark.svg` (chat bubble + check). |
| Social icon sprite | `ai-ops-console/public/icons.svg` → `assets/social-icons.svg` | Bluesky / Discord / GitHub / X + two stroke icons. |
| Components | `ai-ops-console/src/components/*` | Sidebar, StatCard, Badge, ActionCard, TicketRow, FilteredEmailsWidget. |
| Pages | `ai-ops-console/src/pages/*` | Login, Signup, Onboarding, Dashboard, Conversations, TicketDetail, Escalations, Quarantine, Settings, Brands. |

**Stack:** React 18 · Vite · React Router · `lucide-react` icons · `axios`. Fonts are **DM Sans** + **DM Mono** loaded from Google Fonts — these are the real product fonts, **no substitution needed**.

---

## What TResolve does (product model)

- **Inputs:** customer support emails (Gmail) for one or more Shopify **brands**.
- **AI pipeline:** filters/quarantines non-support mail, classifies & drafts replies with a **confidence score**, and either auto-sends (Autopilot, above a confidence threshold) or saves a **draft for approval** (Supervised).
- **Financial actions** (refund, cancel, exchange, address change, reship) are **staged** against live Shopify order data and **always require human one-tap approval** — they never auto-execute.
- **Human override:** any conversation can be "taken over" (AI paused) and "released" back to AI.
- **The dashboard** is where brand owners monitor it all: KPI stats, a live conversations table, an escalation/approval queue, a quarantine queue, and connection/AI-mode settings.

---

## CONTENT FUNDAMENTALS

How TResolve writes. The voice is **calm, operational, and reassuring** — it's software that touches a brand's money and customer relationships, so copy emphasizes **control, transparency, and safety** over hype.

- **Voice & tone:** Plain, confident, low-drama. Short declarative sentences. Never breathless or salesy. It explains *what will happen* before it happens ("TResolve only sends automatically when it is this confident the reply is correct.").
- **Person:** Addresses the user as **"you"**; refers to the product by name, **"TResolve"** (third person), not "we/I" — e.g. *"TResolve reads your inbox…"*, *"TResolve is set up."* This keeps the AI framed as an employee/tool, not a chatty assistant.
- **Casing:** **Sentence case** everywhere — headings, buttons, labels. Not Title Case. ("Set up your brand", "Connect Gmail", "Save changes", "Review Escalations".)
- **Buttons:** Verb-first and specific. "Connect Gmail →", "Approve & Send", "Take Over Conversation", "Release to AI", "Save Filter Settings". Forward arrow `→` on progression/connect CTAs.
- **Status language:** Terse, system-style. Badge labels: "Auto-resolved", "Draft ready", "Needs human", "Escalated", "Quarantined". Result toasts are factual: *"Takeover active. AI disabled."*, *"Released to AI. Automations resumed."*
- **Numbers carry weight:** Confidence (`86%`), money (`$48.00 refund`), counts and IDs are first-class — always set in **DM Mono** so they read as data.
- **Reassurance patterns:** Privacy and safety are stated outright — *"Your emails never leave Google."*, *"Refunds and cancellations always require your approval."* Empty states are positive: *"Queue Empty — No conversations require human intervention."*
- **Headline style (onboarding/marketing):** Short and human — "Your AI support employee", "Set up your brand", "You are ready".
- **Emoji:** Used **sparingly and functionally** inside the product as status/affordance glyphs only — ✓ (success/done), ✋ (take over), 🤖 (release to AI), ⚠ (warning), ↻ (refresh), ⟳ (processing). Never decorative, never in marketing headlines. Prefer a Lucide icon over an emoji when one exists.
- **Vibe:** A competent ops co-pilot sitting next to the owner — "here's what I did, here's what needs you." Trust through transparency.

---

## VISUAL FOUNDATIONS

The aesthetic is **clean operational SaaS** — a dense, neutral, light-mode console that gets out of the way of the data. Restrained, hairline-bordered, near-monochrome, with a single indigo accent and a vivid purple brand mark reserved for identity moments.

### Color
- **Near-monochrome canvas.** Three greys do almost all the work: white cards (`#FFFFFF`) on an off-white app canvas (`#F7F7F8`), with `#F0F0F2` for chips/skeletons. Text is a near-black `#0A0A0B` → `#6B6B7B` → `#9898A6` ladder.
- **One interactive accent:** indigo `#5B5BD6` (hover `#4A4AC4`, tint `#EDEDFB`). Used for primary buttons, active nav, links, focus rings, selection highlights — and nothing else.
- **Semantic set** is muted, never neon: success `#18A94B`, warning `#D97706`, danger `#DC2626`, info-blue `#2563EB`, violet `#7C3AED`. Each pairs with a pale tint background for badges/banners.
- **The brand is indigo, full stop.** There is no separate "brand purple" — the earlier purple→cyan gradient came from the Vite template favicon and is not part of TResolve. The identity color is the indigo accent `#5B5BD6`; the logomark is flat indigo, no gradients.

### Type
- **DM Sans** for all UI; **DM Mono** for every numeral that is data (stats, IDs, %, money, timestamps). This mono/sans split is the single most recognizable type signature.
- Small and dense: **14px base**, dropping to 13/12/11px for secondary/meta. Headings are modest — page titles are only 16px/700. Big type (22–28px) is reserved for onboarding headlines and StatCard numerals.
- Weights used: 400 / 500 / 600 / 700. Negative letter-spacing (~-0.3 to -0.5px) on the wordmark and large headings.

### Spacing & layout
- Fixed app shell: **220px sidebar** + **56px topbar**, content area scrolls. Sidebar and topbar are fixed.
- Page padding `24px`; vertical rhythm in `16px`/`24px` gaps; card padding `16–20px`.
- Tables are full-width with **zebra striping** (odd rows `#F7F7F8`), sticky headers, and an `accent-light` row hover. Unread rows tint `accent-light` and go semibold.
- Generous use of **flex/grid with `gap`** for stat rows, button groups, badge clusters.

### Corners, borders, cards
- **Radii:** 4px is the default (buttons, inputs, badges); 6px for cards & table containers & nav items; 8px for modals/login/settings panels; 3px for tiny inline chips; pills (`9999px`) for sentiment tags and quick-reply chips.
- **Borders do the structural work, not shadows.** Almost every container is a `1px solid #E4E4E7` hairline on white. Inputs use the stronger `#D1D1D6`.
- **Cards** = white fill + 1px hairline + 6px radius + no shadow. Flat and quiet.

### Shadows / elevation
- Shadows are **rare** and reserved for lifted/floating surfaces only: login & modal cards (`0 4px 24px rgba(0,0,0,.06)`), toasts/popovers (`0 4px 12px rgba(0,0,0,.15)`). The body UI is shadowless.

### Backgrounds, transparency, blur
- **No imagery, no gradients, no patterns or textures** in the product. The canvas is flat off-white. The system uses zero gradients — even the logomark is a single flat indigo.
- Transparency used lightly: status banners use a semantic color at ~10% opacity (e.g. `rgba(245,158,11,0.1)` quarantine). No backdrop-blur / glassmorphism.

### Motion
- **Minimal and functional.** Fast `0.1–0.2s` ease transitions on hover/nav/border-color. A `shimmer` skeleton loader (1.5s), a `spin` on the refresh glyph, a `pulse` on the "Live" dot, and a `slideIn` for toasts. No bounce, no parallax, no decorative loops. `width` transitions (0.4s) animate the confidence bar fill.
- **Hover states:** nav items & rows shift background to `bg-tertiary` / `accent-light`; primary buttons darken to `accent-hover`; secondary buttons keep a border and tint. Links underline on hover.
- **Press / focus:** inputs swap border to `--accent` on focus (no glow ring). No shrink/scale on press — state is communicated by color, not transform.

### Imagery
- There is essentially **no photography or illustration** in the product — it's a data console. If imagery is ever needed (marketing), keep it cool-toned to match the purple/indigo identity, but the default is *no images*.

---

## ICONOGRAPHY

- **Primary icon system: [Lucide](https://lucide.dev)** (`lucide-react`), used throughout the app UI. Clean **outline icons, ~1.5–2px stroke, rounded joins**, rendered at **14–16px** in nav, buttons, and the topbar. Color follows text (`currentColor`) — secondary grey by default, accent indigo when active.
  - Icons seen in-product: `LayoutDashboard`, `Inbox`, `ShieldAlert`, `ShieldQuestion`, `Settings`, `Store`, `LogOut`, `ChevronDown`. Match this vocabulary when adding screens.
  - **In HTML mocks**, load Lucide from CDN (`https://unpkg.com/lucide@latest`) and call `lucide.createIcons()` — same stroke weight, no substitution needed.
- **Brand logomark:** `assets/resolv-mark.svg` — an **original mark designed for this system**: a chat bubble containing a checkmark ("conversation resolved" — the product's whole job), flat indigo `#5B5BD6` with a white check. The source app shipped no real logo (the old favicon was Vite's default), so this mark is a proposed direction — confirm or replace it. Pair with the **"TResolve"** wordmark (DM Sans 700, indigo `--accent`); on accent/dark use the white-knockout variant. Single color, no gradient.
- **Social sprite:** `assets/social-icons.svg` — symbol sprite with `#bluesky-icon`, `#discord-icon`, `#github-icon`, `#x-icon`, plus two purple-stroke (`#AA3BFF`) icons `#documentation-icon` and `#social-icon`. Reference with `<svg><use href="social-icons.svg#x-icon"/></svg>`.
- **Status glyphs:** a few **Unicode/emoji** characters act as functional micro-icons in copy and buttons — ✓ ✋ 🤖 ⚠ ↻ ⟳ → . These are intentional and on-brand in their operational context; prefer a Lucide icon where one exists, and never use decorative emoji.
- **Rule:** never hand-draw bespoke SVG icons or invent a new icon language — use Lucide for UI, the logomark for identity, the sprite for social.

---

## Index — what's in this folder

| File / folder | Purpose |
|---|---|
| `README.md` | This file — context, content & visual foundations, iconography, manifest. |
| `colors_and_type.css` | CSS custom properties for color + type, plus semantic type classes. Import into any deliverable. |
| `assets/` | `resolv-mark.svg` (original brand mark — chat bubble + check), `social-icons.svg` (social sprite). |
| `preview/` | Small HTML specimen cards that populate the **Design System** tab (colors, type, spacing, components, brand). |
| `ui_kits/console/` | High-fidelity recreation of the TResolve brand dashboard — `index.html` (interactive demo) + JSX components. See its own README. |
| `SKILL.md` | Agent-Skill manifest so this system works inside Claude Code. |

### UI kits
- **`ui_kits/console/`** — the TResolve brand-owner dashboard: sidebar shell, login, dashboard with KPI stats + conversations table, conversation detail with AI draft approval + order panel, and the escalation/approval queue. The single product surface.

---

*Built from `ai-ops-console`. Fonts are the genuine DM Sans / DM Mono (Google Fonts) — no substitution.*
