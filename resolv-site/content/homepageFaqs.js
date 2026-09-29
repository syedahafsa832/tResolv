// Shared with app/page.jsx (FAQPage schema) and components/FAQ.jsx (rendered accordion):
// keep this the single source so the schema never drifts from what's on the page.
export const faqs = [
  {
    q: 'Does tResolv replace my support team?',
    a: 'No. Luna handles the repetitive requests, tracking, product questions, policy questions, so your team spends less time on those and more time on customers and cases that actually need a person. Refunds, cancellations, and anything sensitive still come back to you.',
  },
  {
    q: "What happens if Luna doesn't know the answer?",
    a: "She doesn't guess. If a request falls outside what she can confidently answer from your Shopify data and store policies, it's queued for you or your team instead of being sent as a low-confidence guess.",
  },
  {
    q: 'What happens after my free trial?',
    a: "You get 14 days of full access, no credit card required. We're a new product proving ourselves against companies with hundreds of millions in funding, so the fastest way to prove tResolv works is to let it work for real brands and let the results speak. When your trial ends, we'll ask you directly if you want to continue on a paid plan, no surprise charges, no auto-billing.",
  },
  {
    q: 'Does the chat widget replace my email support?',
    a: 'No, it complements it. The chat widget handles real-time questions on your storefront. Email support handles asynchronous queries from customers who write in directly. Both are handled by the same AI, with the same guardrails, inside the same dashboard.',
  },
  {
    q: "Can I customize the AI agent's name and appearance?",
    a: 'Yes. You can set your agent\'s name (default is Luna), accent color, and quick-action buttons via a simple config object. Changes apply instantly without redeploying anything. The widget always shows "Powered by tResolv" in the footer on free and Starter plans.',
  },
  {
    q: 'Does tResolv ever send emails without my approval?',
    a: 'Only when you enable Autopilot mode and the AI confidence is above the threshold you set. Financial actions, refunds, cancellations, and address changes, always require your one-tap approval, regardless of confidence level. Exchanges and returns are routed to your support team (full automation coming soon).',
  },
  {
    q: 'What if the AI gets something wrong?',
    a: 'You can take over any conversation at any time. tResolv shows its confidence score and reasoning on every draft so you can review before anything sends. If you take over, AI is paused on that thread until you release it.',
  },
  {
    q: "Are my customer emails stored on tResolv's servers?",
    a: "No. tResolv processes emails inside Google's infrastructure using the Gmail API. Your emails are never copied to or stored on tResolv's servers. Your customers' data stays in Google.",
  },
  {
    q: 'How long does setup take?',
    a: 'Most brands go live in under 10 minutes. Connect Gmail with one Google OAuth click, connect Shopify, and tResolv starts reading your inbox immediately. No technical setup required.',
  },
  {
    q: 'Does tResolv ever execute financial actions automatically?',
    a: 'No. Refunds, cancellations, address changes, and order restores always appear in your approval queue. They never execute without your tap, regardless of confidence level or which mode you are in.',
  },
  {
    q: 'Will it change my Shopify store?',
    a: "Only in the ways you'd expect from support work: it can look up orders and products, and it can update an order's address, issue a refund, or cancel an order, once you approve it. It never touches your theme, your checkout, or your product listings.",
  },
];
