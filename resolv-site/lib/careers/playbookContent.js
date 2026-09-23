// The tResolv Lead Acquisition Playbook — static structured content for /team/playbook.
// Plain data on purpose: it's rendered through the same RichText/markdown-subset renderer
// used for onboarding modules and documents, and searched client-side (see playbookSearch.js).
// `keywords` are explicit synonyms/phrasings so search finds a section by how someone would
// actually ask the question, not just its exact title.

export const SECTIONS = [
  {
    id: 'read-this-first',
    num: 1,
    title: 'Read This First',
    toc: 'Read This First',
    keywords: 'how to use this playbook, getting started, rules, what is tresolv, positioning, what does tresolv do',
    body: `This is your working manual for finding, contacting, qualifying, and converting Shopify brands into tResolv customers. You already went through onboarding — this is what you come back to mid-conversation with a prospect, when you need a real answer fast.

**How to use it:** don't read it top to bottom. Search for what you need (try "pricing" or "nobody replies"), or use the Quick Answers and Contents above.

**What tResolv actually is:** your Shopify store's AI support employee. It is **not** a generic chatbot, an FAQ bot, a generic AI assistant, a replacement for an entire support team, or a generic helpdesk replacement.

**What it handles:** WISMO/tracking, delivery questions, delivered-not-received, refunds, cancellations, returns/exchanges, address changes, order questions, product questions, and policy questions.

Three rules before anything else:
- Never fabricate customers, revenue, testimonials, case studies, ROI numbers, guarantees, partnerships, discounts, pricing, or features. If you don't know, say so and [ask Hafsa](#when-to-ask-hafsa).
- You do not need permission for every action. Use judgment on low-risk, reversible decisions and keep moving.
- Anything involving money, a promise, or a commitment goes through Hafsa first.

> Sections that reference Alex Hormozi, $100M Leads, $100M Offers, the Mom Test, or YC-style founder-led sales are **external research we're borrowing ideas from** — not official tResolv policy. Where the two disagree, tResolv's own rules (commission, pricing, truthfulness) always win.`,
  },
  {
    id: 'your-first-day',
    num: 2,
    title: 'Your First Day',
    toc: 'Your First Day',
    keywords: 'first day, where do i start, day one, what do i do today',
    body: `Your job, from day one, is to move real conversations toward paying customers:

**Real conversations → Qualified opportunities → Paying tResolv customers**

Everything you do in a day should serve that chain. Here's the loop:

1. Find a Shopify brand
2. Research it (5 minutes — see [5-Minute Research](#five-minute-research))
3. Add it to your [contact sheet](#contact-sheet)
4. Contact the decision maker
5. Track the conversation
6. Follow up
7. Qualify interest
8. Hand off when appropriate
9. Find more brands
10. Repeat

You don't need approval to start. Pick a niche you understand, find 5 Shopify brands, and go through the loop for each one today.`,
  },
  {
    id: 'first-5-brands',
    num: 3,
    title: 'First 5 Brands',
    toc: 'First 5 Brands',
    keywords: 'first 5, first five, starting five, before finding all 5, can i contact before finding all 5, first five brands, do i need approval',
    body: `Your first 5 brands are a **calibration exercise**, not a quota. They exist to get you through the full loop once — research, contact, track, follow up — so you know what the job actually feels like.

- You do not need to wait for approval before contacting brand #1, #2, or #5. Use judgment.
- You do not need to finish all 5 before starting outreach on the next one.
- Once you've done 5, keep going. There's no ceiling on this job.

If something about a prospect feels genuinely uncertain — a big brand, an unusual deal request, a technical question you can't answer — that's a reason to [ask Hafsa](#when-to-ask-hafsa), not a reason to wait on the rest.`,
  },
  {
    id: 'what-makes-a-good-lead',
    num: 4,
    title: 'What Makes a Good Lead?',
    toc: 'What Makes a Good Lead?',
    keywords: 'good lead, good prospect, qualified lead, potential customer, ideal customer, icp, qualify a lead, is this a good lead, how do i know if a lead is good',
    body: `A good lead is a Shopify (or Shopify Plus) brand with real, repetitive customer-support pain — not just any store you find.

| Signal | Good fit | Not a fit |
| Platform | Shopify / Shopify Plus | WooCommerce, Magento, custom-built (unless migrating) |
| Order volume | Roughly 10–50+ orders/day | Under 2 orders/day, or 1,000+/day enterprise |
| Support pain | Lots of "where's my order," returns, exchanges, address changes | Mostly pre-sale or bespoke technical questions |
| Support setup | 1–3 reps or the founder handling tickets by hand, usually in Gorgias, Zendesk, or plain email | No real support channel, or a large outsourced agency already running things |
| Niche | Apparel, cosmetics, supplements, electronics, home goods | Pure digital downloads, B2B wholesale only |

**Quick check** — ask yourself:
- Can they afford a monthly subscription? (active sales, running ads, predictable revenue)
- Do they have a real, visible pain? (slow replies, complaints about tracking, founder burnout)
- Is their order volume growing? (more orders = more tickets = more pain)
- Can you actually reach the decision maker?
- Do they have a clear product niche with lots of post-purchase contact?

If most of these are true, it's worth your time.`,
  },
  {
    id: 'who-not-to-contact',
    num: 5,
    title: 'Who Not to Contact',
    toc: 'Who Not to Contact',
    keywords: 'who to skip, disqualified, bad lead, dont contact, opt out',
    body: `Skip these — they waste your time and tResolv's reputation:

- Not on Shopify (WooCommerce, Magento, fully custom builds) unless they've said they're migrating
- Under ~2 orders/day — too small to have a real support problem yet
- Enterprise-scale (1,000+ orders/day) — long, multi-stakeholder sales cycles that don't fit this motion
- Already running a large outsourced support agency with no visible pain
- Pure digital-download or B2B-wholesale-only stores — low post-purchase contact volume
- Anyone who has asked not to be contacted again — always honor that, no exceptions
- Direct competitors of tResolv`,
  },
  {
    id: 'five-minute-research',
    num: 6,
    title: '5-Minute Research',
    toc: '5-Minute Research',
    keywords: 'research, how to research a brand, before contacting, store audit, 5 minute research',
    body: `Never send a generic message. Before contacting anyone, spend 5 minutes finding one specific, real thing about their store.

1. **Confirm the stack.** Check the page footer, view source, or a tool like BuiltWith/Wappalyzer. Confirm Shopify, and note if they're already using Gorgias, Zendesk, or similar.
2. **Read their policies.** Shipping, returns, exchanges, refunds. Look for manual processes — a Google Form for returns, a confusing return window, no self-serve tracking.
3. **Scan reviews and social.** Instagram/Facebook comments, Trustpilot. Look for "where's my order," complaints about slow replies, or tracking confusion.
4. **Find the decision maker.** LinkedIn or the site's About/Team page — founder, co-founder, Head of E-commerce, or Head of CX.
5. **Write down one specific observation.** "Manual Google Form for returns on their new drop" is gold. Put it in your [contact sheet](#contact-sheet) — you'll use it in your first message.`,
  },
  {
    id: 'finding-prospects',
    num: 7,
    title: 'Finding Prospects',
    toc: 'Finding Prospects',
    keywords: 'finding brands, where to find shopify brands, sourcing leads, prospecting',
    body: `Ways to find Shopify stores worth researching:

- Shopify app-store review pages — brands leaving reviews for apps like Gorgias/Zendesk are self-identifying their pain
- Instagram/TikTok ad libraries — brands running paid ads have real order volume
- Shopify-focused directories, "best Shopify stores" roundups, niche subreddits and newsletters
- Competitor customers — if a similar brand became a tResolv customer, brands like it are worth checking
- Your own everyday shopping — any DTC brand you personally interact with is a potential lead

Aim for a steady daily habit here, not a one-time list. Running out of prospects is a research problem, not a sign to stop.`,
  },
  {
    id: 'finding-decision-makers',
    num: 8,
    title: 'Finding Decision Makers',
    toc: 'Finding Decision Makers',
    keywords: 'decision maker, who to contact, founder, head of ecommerce, cx manager',
    body: `You want the person who feels support pain directly, or who owns the budget:

- Founder / Co-Founder — small brands, usually the person actually answering tickets
- Head of E-commerce / Head of Customer Experience / CX Manager — larger brands
- Avoid generic "info@" inboxes when you can find a named person — replies are far more likely

Where to find them:
- LinkedIn (search the brand name, filter by title)
- The site's About/Team page
- Instagram bio or "link in bio" page
- Email pattern guessing (first@brand.com) only as a last resort, and only if you're confident in the name`,
  },
  {
    id: 'where-to-contact',
    num: 9,
    title: 'Where to Contact',
    toc: 'Where to Contact',
    keywords: 'which channel, email or dm, best way to contact, outreach channel',
    body: `Match the channel to the brand's size and where they're active:

- **Email** — best for anything you want on record, and for founders/CX leads who list a work email
- **LinkedIn DM** — good for founders and e-commerce leads who are active there
- **Instagram DM** — works well for smaller, founder-led brands personally running their account

Pick one channel and send a real, personalized message. Don't blast the same brand across three channels at once — it reads as spam, not interest.`,
  },
  {
    id: 'first-message',
    num: 10,
    title: 'First Message',
    toc: 'First Message',
    keywords: 'cold email, first outreach, what to say, dm template, cold message, outreach script',
    body: `Keep it short — under 80 words, plain text, no images or attachments, one simple question as the call to action.

**Structure:**
1. One specific, genuine observation about their store (from your 5-minute research)
2. A short line connecting that to what tResolv does
3. One low-friction question — not a meeting request

**Example (adapt it, don't copy-paste it word for word):**

> Hi [name] — noticed you're handling returns through a manual form right now. We built tResolv to handle repetitive order-tracking and return questions automatically inside [their helpdesk] so your team isn't doing it by hand. Worth a quick look at how much of that volume it could take off your plate?

Never attach fake stats, client counts, or guarantees to this message. It should read like a real person who did their homework — because you did.`,
  },
  {
    id: 'aca-framework',
    num: 11,
    title: 'ACA Framework',
    toc: 'ACA Framework',
    keywords: 'aca, acknowledge compliment ask, dm framework',
    body: `A simple structure for a first DM (especially Instagram/LinkedIn):

- **Acknowledge** — mention something specific and real about their store, a recent drop, or a post
- **Compliment** — genuinely recognize something about their brand or growth
- **Ask** — a low-pressure question about how they currently handle support volume

This is a lightweight structuring tool, not a script — say it in your own words.`,
  },
  {
    id: 'if-they-reply',
    num: 12,
    title: 'If They Reply',
    toc: 'If They Reply',
    keywords: 'they replied, got a reply, how to respond, first reply',
    body: `Any reply is a good sign, even a skeptical one. Read the tone and respond like a person, not a script:

- Thank them for replying, keep it short
- Answer their actual question before pivoting to anything else
- If they're neutral or curious, ask one [discovery question](#discovery-questions) to understand their support pain
- If they're clearly not interested, thank them and log it — don't push
- Update their status on your [contact sheet](#contact-sheet) immediately`,
  },
  {
    id: 'if-theyre-interested',
    num: 13,
    title: "If They're Interested",
    toc: "If They're Interested",
    keywords: "interested, they're interested, prospect is interested, they said they're interested, what do i do if someone is interested",
    body: `When a prospect says they're interested:

1. Don't oversell — ask 1–2 [discovery questions](#discovery-questions) to understand their actual ticket volume and pain first
2. If they ask for pricing, follow [Pricing](#pricing) — don't quote a number yourself
3. If they ask for a demo, follow [Demo Requests](#demo-requests)
4. Once they've confirmed Shopify/Shopify Plus and real repetitive ticket volume, this is [handoff-ready](#handoff-to-hafsa) — loop in Hafsa
5. Keep the conversation warm while you wait — don't let it go quiet`,
  },
  {
    id: 'discovery-questions',
    num: 14,
    title: 'Discovery Questions',
    toc: 'Discovery Questions',
    keywords: 'discovery call, qualifying questions, mom test, what to ask a prospect',
    body: `Ask about what they actually do today, not hypotheticals — this borrows from an external interviewing method called the Mom Test (ask about real behavior, not opinions):

- "How are you currently handling order-tracking and return questions, especially during busy periods?"
- "Roughly what share of your daily support tickets are repetitive — order status, tracking, simple returns?"
- "About how many hours a week does your team spend on that kind of manual lookup?"
- "What happens to your ticket queue when order volume spikes?"

Their answers tell you whether this is a real, painful problem — and give you honest detail to bring back to Hafsa. Never put words in their mouth or lead them toward an answer.`,
  },
  {
    id: 'gorgias-zendesk',
    num: 15,
    title: 'Gorgias/Zendesk',
    toc: 'Gorgias/Zendesk',
    keywords: 'gorgias, zendesk, already use gorgias, already use zendesk, we use gorgias, existing helpdesk, what if they already use gorgias',
    body: `**Objection:** "We already use Gorgias / Zendesk."

**Reality:** tResolv works inside their existing helpdesk — it isn't a replacement for Gorgias or Zendesk, it automates the repetitive tickets flowing through it.

**How to respond (in your own words):** "That's great — Gorgias/Zendesk is a solid ticketing tool. tResolv sits inside it and handles the repetitive WISMO and return questions automatically, so your team spends less time on tickets that don't need a human."

Never say tResolv replaces their helpdesk entirely — that's not accurate and will get flagged as overpromising.`,
  },
  {
    id: 'ai-trust-objections',
    num: 16,
    title: 'AI Trust Objections',
    toc: 'AI Trust Objections',
    keywords: "don't trust ai, ai objection, existing support team objection",
    body: `**Objection:** "I don't trust AI talking to my customers."

**Reality:** tResolv supports human-approval workflows for sensitive actions (refunds, address changes) — the brand can require a human sign-off until they're comfortable.

**How to respond:** "Totally fair. That's exactly why tResolv lets you require human approval on anything sensitive, like refunds or address edits, until you trust it fully."

**Objection:** "We already have a support team."

**How to respond:** "tResolv isn't there to replace your team — it takes the repetitive tracking and return volume off their plate so they can focus on higher-value or trickier questions."`,
  },
  {
    id: 'pricing',
    num: 17,
    title: 'Pricing',
    toc: 'Pricing',
    keywords: 'pricing, price, cost, how much does it cost, discount, custom pricing, what if they ask for a discount, can i give a discount, what if they ask about pricing',
    body: `You do not set or quote pricing. If a prospect asks "how much does this cost," do not give a number, a range, or a discount — even a rough one.

**What to say:** "Pricing is based on your ticket volume, so you only pay for what you actually use. Let's get you on a quick call with Hafsa to look at your volume and figure out what makes sense."

Then [hand off to Hafsa](#handoff-to-hafsa).

> **NEVER INVENT PRICING.**
> **NEVER OFFER A DISCOUNT ON YOUR OWN.**
> **NEVER PROMISE CUSTOM ENTERPRISE TERMS.**

If they push for a number, stay warm but firm: pricing conversations happen with Hafsa, not before.`,
  },
  {
    id: 'demo-requests',
    num: 18,
    title: 'Demo Requests',
    toc: 'Demo Requests',
    keywords: 'demo, they want a demo, can i give a demo, product demo',
    body: `A demo request is a strong buying signal — treat it as handoff-ready.

1. Don't try to run the demo yourself
2. Say: "Happy to set that up — let me get you on Hafsa's calendar, she runs the walkthroughs."
3. Hand off to Hafsa immediately with everything you've learned so far (see [Handoff to Hafsa](#handoff-to-hafsa))
4. Stay in the loop, but let Hafsa own the demo itself`,
  },
  {
    id: 'handoff-to-hafsa',
    num: 19,
    title: 'Handoff to Hafsa',
    toc: 'Handoff to Hafsa',
    keywords: 'handoff, hand off, when do i loop in hafsa, pass to hafsa, when to hand off',
    body: `A prospect is **handoff-ready** when:

- They've confirmed they're on Shopify or Shopify Plus
- They've acknowledged real, repetitive ticket volume (WISMO, returns, exchanges, etc.), **or**
- They've asked for a demo, pricing, or a pilot/contract, **or**
- They've made a custom-deal request, or asked you to promise a feature/commitment you can't confirm

**When you hand off, give Hafsa:**
- Brand name, website, decision maker's name/title
- Your research notes (the specific pain point you found)
- What they've said so far (paste or summarize the thread)
- What they're asking for (pricing, demo, pilot, discount, etc.)

Don't disappear once you've handed off — you're still the day-to-day relationship owner; Hafsa is stepping in for the parts that need her.`,
  },
  {
    id: 'follow-ups',
    num: 20,
    title: 'Follow-Ups',
    toc: 'Follow-Ups',
    keywords: 'follow up, when to follow up, how often to follow up',
    body: `Most replies don't come from the first message. Follow up — persistently, but not annoyingly.

- Follow up if there's no response after ~3–4 business days
- Keep follow-ups even shorter than your first message — one or two sentences
- Add new information or a different angle each time, don't just repeat "just following up"
- Space follow-ups out: a few days, then a week, then roughly every couple of weeks
- Stop if they explicitly say not interested or ask you to stop — always respect that

**Example:** "Circling back in case this got buried — still happy to show you how tResolv could take WISMO/returns off your team's plate. Worth a quick look?"`,
  },
  {
    id: 'what-if-nobody-replies',
    num: 21,
    title: 'No Response (What If Nobody Replies?)',
    toc: 'No Response',
    keywords: "no reply, no response, no one responds, nobody responds, nobody replies, no one replies, not replying, aren't replying, prospects aren't replying, brands ignoring me, they don't answer, what do i do if they don't answer, ghosted, ghosting, silence, radio silence, cold",
    body: `No reply does not automatically mean tResolv doesn't work — most B2B outreach takes multiple touches, and a quiet inbox is normal, not a red flag on you or the product.

What to actually do:
1. Confirm you followed the [5-Minute Research](#five-minute-research) and [First Message](#first-message) process — was the message genuinely personalized?
2. Try a different decision maker at the same brand, or a different channel (email vs. LinkedIn vs. Instagram)
3. Follow up (see [Follow-Ups](#follow-ups)) before giving up on a prospect
4. If a brand goes fully cold after several attempts, move on and add more brands — don't get stuck on one lead
5. Look at your numbers over days/weeks, not single messages — this is a volume game (see [Daily Workflow](#daily-workflow))

If you're consistently getting zero replies across many brands over several days, that's worth flagging to Hafsa — not as a failure, but as a signal worth troubleshooting together.`,
  },
  {
    id: 'hormozi-sales-principles',
    num: 22,
    title: 'Hormozi Sales Principles',
    toc: 'Hormozi Sales Principles',
    keywords: 'hormozi, 100m leads, 100m offers, value equation, external framework',
    body: `Some ideas below are drawn from external sales and growth research — most notably Alex Hormozi's writing on lead generation and offers. These are **frameworks we're borrowing from, not tResolv policy** — summarized here in our own words, not quoted:

- **Value equation (paraphrased):** a prospect's perceived value goes up when the outcome feels big and likely, and down when it feels slow or effortful. In practice: talk about a fast, believable result (tResolv live quickly, human-approval guardrails) rather than vague promises.
- **Volume and consistency:** a channel needs a real, sustained sample size before you judge whether it works — a handful of messages isn't enough data.
- **Specificity beats cleverness:** a message referencing one real, specific detail about a brand consistently outperforms a generic pitch.`,
  },
  {
    id: 'core-four',
    num: 23,
    title: 'Core Four',
    toc: 'Core Four',
    keywords: 'core four, warm cold outreach, channel taxonomy',
    body: `An external framework (also from Hormozi's writing) for categorizing outreach channels along two axes: who you're reaching (warm vs. cold) and how (one-to-one vs. one-to-many).

| | One-to-one | One-to-many |
| Warm | People/brands who already know tResolv | Posting content or case studies for your existing network |
| Cold | Cold email/DM to a stranger's brand | Paid ads — not something this team runs day-to-day |

For this role, your main channel is **cold, one-to-one outreach** — personalized email and DMs. That's where most of your time should go.`,
  },
  {
    id: 'daily-workflow',
    num: 24,
    title: 'Daily Workflow',
    toc: 'Daily Workflow',
    keywords: 'daily routine, what should i do every day, daily habit',
    body: `A simple daily rhythm:

1. Research and shortlist new brands — a steady number each day, not a burst then a stop
2. Send new, personalized first messages
3. Send scheduled follow-ups from your contact sheet
4. Check for replies and respond same-day where possible
5. Update every prospect's status on your [contact sheet](#contact-sheet)
6. Hand off anything that's ready

Consistency beats intensity — a steady daily habit across weeks outperforms one huge push followed by silence. If a channel or message style genuinely isn't working after real volume, refine it (a different hook, a different channel) rather than abandoning outreach altogether.`,
  },
  {
    id: 'contact-sheet',
    num: 25,
    title: 'Contact Sheet',
    toc: 'Contact Sheet',
    keywords: 'tracking sheet, where do i put my leads, contact sheet, pipeline stages, status pipeline',
    body: `Track every prospect in your personal sheet with these fields:

| Field | What goes here |
| Brand name | The store's name |
| Website | Their Shopify URL |
| Niche | Apparel, cosmetics, electronics, etc. |
| Support observation | The specific thing you found in research |
| Decision maker | Name and title |
| Contact method | Email / LinkedIn / Instagram |
| Outreach date | When you first contacted them |
| Status | See the pipeline below |
| Notes | Anything relevant to the next step |

**Status pipeline:** Researching → Ready to Contact → Contacted → Follow-Up → Replied → Interested → Qualified → Handed Off

Keep this updated in real time — it's how Hafsa knows what's happening without you having to report it manually.`,
  },
  {
    id: 'commission',
    num: 26,
    title: 'Commission',
    toc: 'Commission',
    keywords: 'commission, how much do i get paid, payout, commission percentage, commission rate, how does commission work',
    body: `Commission is paid on **actual customer payment** received by tResolv — not on signups, verbal interest, or a lead simply being marked "qualified."

| Month | Commission |
| Month 1 | 15% |
| Month 2 | 10% |
| Month 3 | 5% |
| After Month 3 | 0% |

These terms are fixed — don't quote different numbers to teammates or prospects, and don't discuss commission with a brand at all. It's an internal team term, not something a prospect should hear about.`,
  },
  {
    id: 'never-say',
    num: 27,
    title: 'Things You Must Never Say',
    toc: 'Things You Must Never Say',
    keywords: 'never say, what not to say, forbidden claims, dont promise',
    body: `> **NEVER INVENT PRICING OR DISCOUNTS.**
> **NEVER FABRICATE CUSTOMER NUMBERS, REVENUE, OR TESTIMONIALS.**
> **NEVER GUARANTEE A SPECIFIC ROI OR RESULT.**
> **NEVER PROMISE A FEATURE YOU HAVEN'T CONFIRMED EXISTS.**
> **NEVER CLAIM A PARTNERSHIP THAT DOESN'T EXIST.**
> **NEVER COMMIT TRESOLV TO A CONTRACT, PILOT, OR PAYMENT TERM YOURSELF.**

If you're not 100% sure something is true, don't say it — ask Hafsa instead. A prospect who waits a day for an honest answer is a much better outcome than one who gets a confident wrong one.`,
  },
  {
    id: 'questions-from-yesterday',
    num: 28,
    title: 'Questions From Yesterday',
    toc: 'Questions From Yesterday',
    keywords: 'recent questions, faq, whatsapp questions',
    body: `This section holds real questions the team has asked recently, answered once so nobody has to ask twice. It grows over time — when a question comes up in the team chat that isn't covered here, ask Hafsa to add it.

**"Can I message a brand on both email and LinkedIn at the same time?"**
No — pick one channel per attempt. Multi-channel blasting to the same person reads as spam.

**"What if I already contacted a brand and then realize they don't fit the ICP?"**
Log it as not-a-fit on your contact sheet and move on — no need to explain to the prospect.`,
  },
  {
    id: 'questions-you-might-have-next',
    num: 29,
    title: 'Questions You Might Have Next',
    toc: 'Questions You Might Have Next',
    keywords: 'future questions, other questions, what if',
    body: `**"What if a prospect wants to negotiate the commission terms with me?"**
That's not something you're authorized to discuss with a prospect at all — [ask Hafsa](#when-to-ask-hafsa).

**"Can I use a tResolv customer's name as a reference to a new prospect?"**
Only with Hafsa's explicit go-ahead — check first, always.

**"What if I find a lead outside e-commerce/Shopify that seems like a great fit anyway?"**
Flag it to Hafsa rather than pursuing it solo — the ICP exists for a reason, but exceptions do get made.`,
  },
  {
    id: 'when-to-ask-hafsa',
    num: 30,
    title: 'When to Ask Hafsa',
    toc: 'When to Ask Hafsa',
    keywords: 'when do i contact hafsa, when should i loop in hafsa, when to loop in hafsa, ask hafsa, when to ask hafsa',
    body: `Ask Hafsa when:

- Pricing or discounts come up
- A prospect requests a custom deal
- You'd need to promise a feature or technical commitment
- A prospect requests a demo
- A contract, pilot, or payment decision is on the table
- You're genuinely blocked and can't move the conversation forward`,
  },
  {
    id: 'when-not-to-ask-hafsa',
    num: 31,
    title: 'When Not to Ask Hafsa',
    toc: 'When Not to Ask Hafsa',
    keywords: 'figure it out yourself, dont need to ask hafsa, when not to ask',
    body: `Figure it out yourself when:

- The answer is already in this playbook or your onboarding materials — search first
- The next action is obvious and doesn't involve money or a promise
- The decision is low-risk and easy to reverse
- You can reasonably research the answer yourself

Defaulting to "just ask Hafsa" for everything slows the whole team down — use this playbook's search first.`,
  },
  {
    id: 'failure-learning',
    num: 32,
    title: 'Failure/Learning',
    toc: 'Failure/Learning',
    keywords: "it's not working, no one is converting, what am i doing wrong",
    body: `Most outreach won't convert — that's normal, not a sign you're doing it wrong. What matters is what you do with a dead end:

- If a message style gets no replies across real volume, change the hook or the specific detail you're referencing — not the whole approach
- If a channel underperforms after a real sample size, try a different one for that segment
- Log what you tried and what happened, even informally — patterns matter more than any single result
- A "no" or silence from one brand tells you nothing about the next one — treat each prospect independently`,
  },
  {
    id: 'qualification-checklist',
    num: 33,
    title: 'Qualification Checklist',
    toc: 'Qualification Checklist',
    keywords: 'qualification checklist, is this lead ready, ready to hand off',
    body: `Before you consider a lead qualified, confirm:

- [ ] Confirmed on Shopify or Shopify Plus
- [ ] Real, repetitive support ticket volume (WISMO, returns, exchanges, etc.)
- [ ] A findable, reachable decision maker
- [ ] They've responded and shown genuine interest, not just politeness
- [ ] Nothing you've said involves invented pricing, numbers, or promises

If all of these are true, it's ready to [hand off](#handoff-to-hafsa).`,
  },
  {
    id: 'final-checklist',
    num: 34,
    title: 'Final Checklist',
    toc: 'Final Checklist',
    keywords: 'end of day checklist, daily checklist, before i log off',
    body: `Before you close out for the day:

- [ ] Contact sheet updated for every prospect you touched today
- [ ] All replies from today answered or scheduled
- [ ] Follow-ups due today sent
- [ ] Anything handoff-ready actually handed off to Hafsa
- [ ] A few new brands researched for tomorrow`,
  },
  {
    id: 'entire-system-one-page',
    num: 35,
    title: 'Entire System in One Page',
    toc: 'Entire System in One Page',
    keywords: 'summary, tldr, whole system, one page, cheat sheet',
    body: `**The whole job, in one page:**

1. Find a Shopify brand that fits the [ICP](#what-makes-a-good-lead)
2. Spend 5 minutes on [research](#five-minute-research) — find one real, specific detail
3. Add it to your [contact sheet](#contact-sheet)
4. Send a short, personalized [first message](#first-message)
5. Track every reply and [follow up](#follow-ups) if you don't hear back
6. Ask [discovery questions](#discovery-questions) to understand real pain
7. Never invent [pricing](#pricing), stats, or promises — ever
8. [Hand off to Hafsa](#handoff-to-hafsa) once a lead is qualified
9. Keep finding more brands — there's no ceiling
10. When in doubt: [figure it out](#when-not-to-ask-hafsa) if it's low-risk, [ask Hafsa](#when-to-ask-hafsa) if it involves money or a promise`,
  },
];

export const QUICK_ANSWERS = [
  { q: 'Can I contact a brand before finding all 5?', id: 'first-5-brands' },
  { q: 'What if nobody replies?', id: 'what-if-nobody-replies' },
  { q: 'How do I know if a lead is good?', id: 'what-makes-a-good-lead' },
  { q: 'Where do I put my leads?', id: 'contact-sheet' },
  { q: 'What do I do if someone is interested?', id: 'if-theyre-interested' },
  { q: 'When do I contact Hafsa?', id: 'when-to-ask-hafsa' },
  { q: 'Can I give them a discount?', id: 'pricing' },
  { q: 'What if they ask about pricing?', id: 'pricing' },
  { q: 'What if they already use Gorgias?', id: 'gorgias-zendesk' },
  { q: "What if I don't know the answer?", id: 'when-to-ask-hafsa' },
];
