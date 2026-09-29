// Luna Sandbox demo: self-contained port of the real tResolv sandbox engine
// (backend/src/services/sandbox_data.py + sandbox_service.py, "instant demos"
// only: build_scenario / resolve_scenario). Everything here is a pure,
// synchronous function over static fixtures for a fictional sample store
// ("Northstar Apparel"). There is no network call, no backend, and nothing
// that can fail at runtime in a way a visitor would ever see, the whole
// point is that this demo can never show a loading/error state for an
// external dependency, because it doesn't have one.
//
// Kept deliberately in lockstep with the backend's wording and logic so the
// site's marketing demo reflects the same product behavior as the real
// sandbox in the app. The "Ask Luna" free-text AI mode is intentionally not
// ported here: it requires a signed-in tenant and spends real AI quota,
// neither of which belongs on a public marketing page.

export const STORE = {
  name: 'Northstar Apparel',
  domain: 'northstar-apparel.sample',
  currency: 'USD',
  label: 'Sample store',
};

export const SANDBOX_NOTICE =
  'Sandbox mode: Northstar Apparel is a sample store with sample customers and orders. ' +
  'No real Shopify store, inbox, or customer is connected, and nothing here can change or email anyone real.';

const SANDBOX_NOW = new Date('2026-09-18T15:00:00Z');

const POLICIES = {
  cancellation: {
    id: 'kb_cancellation',
    title: 'Order Cancellation Policy',
    text:
      'Orders can be cancelled any time before they are fulfilled (packed and handed to the carrier). ' +
      'Once an order has shipped it can no longer be cancelled; the customer can return it for a refund instead. ' +
      'Cancelled orders are refunded to the original payment method within 5 to 7 business days.',
    cancellableFulfillmentStatuses: ['unfulfilled'],
  },
  returns: {
    id: 'kb_returns',
    title: 'Returns & Refunds Policy',
    text:
      'Items can be returned within 30 days of delivery if they are unworn, unwashed, and have the original tags attached. ' +
      "Final sale items cannot be returned. Approved refunds go back to the original payment method within 5 to 7 business days " +
      'after we receive the item.',
    returnWindowDays: 30,
  },
  shipping: {
    id: 'kb_shipping',
    title: 'Shipping Policy',
    text: 'Orders are packed within 1 business day. Standard shipping takes 3 to 6 business days and is free on orders over $75.',
  },
};

const CUSTOMERS = {
  'maya.chen@example.com': { name: 'Maya Chen', email: 'maya.chen@example.com' },
  'jordan.ellis@example.com': { name: 'Jordan Ellis', email: 'jordan.ellis@example.com' },
};

const ORDERS = {
  1048: {
    order_number: '1048',
    customer_email: 'maya.chen@example.com',
    created_at: '2026-09-18T09:12:00+00:00',
    financial_status: 'paid',
    fulfillment_status: 'unfulfilled',
    delivered_at: null,
    cancelled_at: null,
    currency: 'USD',
    total: 84.0,
    line_items: [{ title: 'Relaxed Linen Shirt', variant: 'L', quantity: 1, price: 84.0, final_sale: false }],
  },
  1051: {
    order_number: '1051',
    customer_email: 'jordan.ellis@example.com',
    created_at: '2026-09-02T13:40:00+00:00',
    financial_status: 'paid',
    fulfillment_status: 'fulfilled',
    delivered_at: '2026-09-08T16:20:00+00:00',
    cancelled_at: null,
    currency: 'USD',
    total: 62.0,
    line_items: [{ title: 'Cotton Crew Sweatshirt', variant: 'M', quantity: 1, price: 62.0, final_sale: false }],
  },
};

const PRODUCTS = {
  'black maxi dress': {
    title: 'Black Maxi Dress',
    price: 96.0,
    currency: 'USD',
    variants: [
      { size: 'XS', inventory: 0 },
      { size: 'S', inventory: 0 },
      { size: 'M', inventory: 6 },
      { size: 'L', inventory: 3 },
      { size: 'XL', inventory: 2 },
    ],
  },
  'relaxed linen shirt': {
    title: 'Relaxed Linen Shirt',
    price: 84.0,
    currency: 'USD',
    variants: [
      { size: 'S', inventory: 4 },
      { size: 'M', inventory: 7 },
      { size: 'L', inventory: 0 },
    ],
  },
  'cotton crew sweatshirt': {
    title: 'Cotton Crew Sweatshirt',
    price: 62.0,
    currency: 'USD',
    variants: [
      { size: 'S', inventory: 9 },
      { size: 'M', inventory: 12 },
      { size: 'L', inventory: 5 },
    ],
  },
};

const SIZE_WORDS = {
  xs: 'XS', 'extra small': 'XS',
  s: 'S', small: 'S',
  m: 'M', medium: 'M',
  l: 'L', large: 'L',
  xl: 'XL', 'extra large': 'XL',
};

const KB_SOURCES = [
  { source_id: POLICIES.returns.id, title: POLICIES.returns.title, text: POLICIES.returns.text },
  { source_id: POLICIES.cancellation.id, title: POLICIES.cancellation.title, text: POLICIES.cancellation.text },
  { source_id: POLICIES.shipping.id, title: POLICIES.shipping.title, text: POLICIES.shipping.text },
];

const SCENARIOS = [
  {
    id: 'cancel',
    title: 'Cancel an order',
    cta: 'Cancel an order',
    summary: 'Read the order, check policy, stage a cancellation for your approval.',
    default: true,
    subject: 'Cancel order #1048',
    customer_email: 'maya.chen@example.com',
    message: 'hey, can you cancel order #1048? i ordered the wrong size',
  },
  {
    id: 'refund',
    title: 'Request a refund',
    cta: 'Request a refund',
    summary: 'Check the order and refund policy, stage a refund for your approval.',
    default: false,
    subject: 'Refund for order #1051',
    customer_email: 'jordan.ellis@example.com',
    message: "Hi, I'd like a refund for order #1051. The sweatshirt doesn't fit the way I hoped.",
  },
  {
    id: 'returns',
    title: 'Ask about returns',
    cta: 'Ask about returns',
    summary: 'Find the right policy in the knowledge base and answer from it.',
    default: false,
    subject: 'Return window question',
    customer_email: 'maya.chen@example.com',
    message: 'How long do I have to return an item?',
  },
  {
    id: 'product',
    title: 'Ask about a product',
    cta: 'Ask about a product',
    summary: 'Check the sample catalog and inventory for size availability.',
    default: false,
    subject: 'Black Maxi Dress in Medium?',
    customer_email: 'maya.chen@example.com',
    message: 'Is the Black Maxi Dress available in Medium?',
  },
];

class SandboxError extends Error {
  constructor(code, message) {
    super(message);
    this.code = code;
  }
}

// ─────────────────────────────── helpers ───────────────────────────────

function money(amount, currency = 'USD') {
  const formatted = amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  return currency === 'USD' ? `$${formatted}` : `${formatted} ${currency}`;
}

function firstName(fullName) {
  return (fullName || 'there').split(' ')[0];
}

function signature() {
  return `- Luna\n${STORE.name} (sample store)`;
}

function detectIntent(message) {
  const text = (message || '').toLowerCase();
  if (/\bcancel/.test(text)) return 'cancel_order';
  if (/\brefund|money back/.test(text)) return 'refund';
  if (findProduct(text)) return 'product_question';
  if (/\breturn|exchange/.test(text)) return 'return_policy';
  return 'other';
}

function extractOrderNumber(message) {
  const text = message || '';
  const m = text.match(/#\s?(\d{3,6})/) || text.toLowerCase().match(/\border\s*(?:number|no\.?)?\s*(\d{3,6})/);
  return m ? m[1] : null;
}

function findProduct(text) {
  const lowered = (text || '').toLowerCase();
  for (const [key, product] of Object.entries(PRODUCTS)) {
    if (lowered.includes(key)) return product;
  }
  return null;
}

function detectSize(text) {
  const lowered = (text || '').toLowerCase();
  const m =
    lowered.match(/\b(extra small|extra large|xs|xl|small|medium|large)\b/) ||
    lowered.match(/\bsize\s+(xs|s|m|l|xl)\b/);
  return m ? SIZE_WORDS[m[1]] : null;
}

const STOPWORDS = new Set(['a', 'an', 'the', 'do', 'i', 'to', 'how', 'long', 'have', 'is', 'are', 'my', 'me', 'can', 'of', 'in', 'it', 'for', 'what', 'you', 'your']);

function tokenize(text) {
  return (text.toLowerCase().match(/[a-z]+/g) || []);
}

function searchKb(query) {
  const tokens = new Set(tokenize(query || '').filter((t) => !STOPWORDS.has(t)));
  let best = null;
  let bestScore = 0;
  for (const source of KB_SOURCES) {
    const haystack = new Set(tokenize(`${source.title} ${source.text}`));
    let score = 0;
    for (const t of tokens) if (haystack.has(t)) score += 1;
    if (score > bestScore) {
      best = source;
      bestScore = score;
    }
  }
  return bestScore > 0 ? best : null;
}

function evaluateCancellation(order) {
  const policy = POLICIES.cancellation;
  if (order.cancelled_at) return { eligible: false, reason: 'This order is already cancelled.' };
  const status = order.fulfillment_status;
  if (policy.cancellableFulfillmentStatuses.includes(status)) {
    return { eligible: true, reason: 'The order has not shipped yet (unfulfilled), so it can still be cancelled.' };
  }
  return { eligible: false, reason: `The order is already ${status}, so it can no longer be cancelled.` };
}

function evaluateRefund(order) {
  const policy = POLICIES.returns;
  if (!order.delivered_at) {
    return { eligible: false, reason: 'The order has not been delivered yet, so a cancellation is the right path, not a refund.' };
  }
  if (order.line_items.some((item) => item.final_sale)) {
    return { eligible: false, reason: 'The order contains a final sale item, which cannot be returned.' };
  }
  const delivered = new Date(order.delivered_at);
  const days = Math.floor((SANDBOX_NOW.getTime() - delivered.getTime()) / (1000 * 60 * 60 * 24));
  const window = policy.returnWindowDays;
  if (days > window) {
    return { eligible: false, reason: `Delivered ${days} days ago, outside the ${window}-day return window.`, days_since_delivery: days };
  }
  return {
    eligible: true,
    reason: `Delivered ${days} days ago, inside the ${window}-day return window, and no final sale items.`,
    days_since_delivery: days,
  };
}

function orderView(order) {
  const customer = CUSTOMERS[order.customer_email] || {};
  return {
    order_number: order.order_number,
    customer_name: customer.name,
    customer_email: order.customer_email,
    created_at: order.created_at,
    financial_status: order.financial_status,
    fulfillment_status: order.fulfillment_status,
    delivered_at: order.delivered_at,
    cancelled_at: order.cancelled_at,
    currency: order.currency,
    total: order.total,
    line_items: order.line_items.map((i) => ({ ...i })),
  };
}

function step(key, label, detail, status = 'done') {
  return { key, label, detail, status };
}

function basePayload(scenario) {
  const customer = CUSTOMERS[scenario.customer_email];
  return {
    sandbox: true,
    store: { ...STORE },
    notice: SANDBOX_NOTICE,
    scenario: { id: scenario.id, title: scenario.title },
    ticket: {
      id: `SBX-${scenario.id}`,
      subject: scenario.subject,
      channel: 'email',
      customer: { ...customer },
      messages: [{ role: 'customer', body: scenario.message }],
    },
    steps: [],
    evidence: {},
    draft_reply: '',
    pending_action: null,
    requires_approval: false,
  };
}

function getScenarioDef(scenarioId) {
  const s = SCENARIOS.find((s) => s.id === scenarioId);
  if (!s) throw new SandboxError('unknown_scenario', "That sandbox scenario doesn't exist.");
  return s;
}

export function listScenarios() {
  return {
    scenarios: SCENARIOS.map((s) => ({ id: s.id, title: s.title, cta: s.cta, summary: s.summary, default: s.default })),
    notice: SANDBOX_NOTICE,
  };
}

// ─────────────────────────── instant demos ────────────────────────────

export function buildScenario(scenarioId) {
  const scenario = getScenarioDef(scenarioId);
  const payload = basePayload(scenario);
  const message = scenario.message;
  const intent = detectIntent(message);
  const name = firstName(payload.ticket.customer.name);
  const steps = [];

  if (intent === 'cancel_order' || intent === 'refund') {
    const isCancel = intent === 'cancel_order';
    const number = extractOrderNumber(message);
    const order = number ? ORDERS[number] : null;
    const verb = isCancel ? 'cancel an order' : 'get a refund';
    steps.push(step('understood', 'Understood request', `Customer wants to ${verb}` + (number ? ` (order #${number}).` : '.')));

    if (!order) {
      steps.push(step('order', 'Looked for the order', 'No matching order in the sample store; Luna would ask the customer for their order number.'));
      payload.draft_reply = `Hi ${name},\n\nThanks for reaching out. I couldn't find that order. Could you double-check your order number?\n\n${signature()}`;
      payload.steps = [...steps, step('draft', 'Drafted response', 'Asked the customer to confirm the order number.')];
      return payload;
    }

    const view = orderView(order);
    payload.evidence.order = view;
    const matchesSender = order.customer_email === scenario.customer_email;
    steps.push(
      step(
        'order',
        'Found order & customer',
        `Order #${view.order_number} · ${CUSTOMERS[order.customer_email].name} · ${money(view.total)} · ${view.financial_status}, ${view.fulfillment_status}` +
          (matchesSender ? '' : " · sender does NOT match the order's customer")
      )
    );
    const policy = isCancel ? POLICIES.cancellation : POLICIES.returns;
    payload.evidence.policy = { source_id: policy.id, title: policy.title, excerpt: policy.text };
    steps.push(step('policy', 'Checked policy', `${policy.title}: ${policy.text.split('. ')[0].replace(/\.$/, '')}.`));
    const verdict = isCancel ? evaluateCancellation(view) : evaluateRefund(view);
    steps.push(step('eligibility', 'Determined eligibility', (verdict.eligible ? 'Eligible. ' : 'Not eligible. ') + verdict.reason));

    const item = view.line_items[0];
    const itemDesc = `${item.title}, size ${item.variant}`;
    if (verdict.eligible && matchesSender) {
      const actionType = isCancel ? 'cancel_order' : 'refund';
      payload.pending_action = {
        action_id: `sbx-${scenarioId}-1`,
        type: actionType,
        title: isCancel ? `Cancel order #${view.order_number}` : `Refund order #${view.order_number}`,
        order_number: view.order_number,
        amount: view.total,
        currency: view.currency,
        summary: isCancel
          ? `Cancel order #${view.order_number} and refund ${money(view.total)} to the original payment method.`
          : `Refund ${money(view.total)} for order #${view.order_number} to the original payment method.`,
        risk: 'medium',
        sandbox: true,
      };
      payload.requires_approval = true;
      steps.push(step('approval', 'Action requires approval', payload.pending_action.summary, 'needs_approval'));
      if (isCancel) {
        payload.draft_reply =
          `Hi ${name},\n\nThanks for reaching out. I found order #${view.order_number} (${itemDesc}, ${money(view.total)}). ` +
          `It hasn't shipped yet, so it's eligible for cancellation. Once the store team confirms, I'll cancel it and refund ` +
          `${money(view.total)} to your original payment method within 5 to 7 business days.\n\n${signature()}`;
      } else {
        payload.draft_reply =
          `Hi ${name},\n\nThanks for reaching out. I found order #${view.order_number} (${itemDesc}, ${money(view.total)}), ` +
          `delivered ${verdict.days_since_delivery} days ago, which is inside our 30-day return window. Once the store team confirms, ` +
          `I'll refund ${money(view.total)} to your original payment method within 5 to 7 business days.\n\n${signature()}`;
      }
    } else {
      const reason = verdict.eligible ? "The sender's email doesn't match the order's customer, so Luna won't act on it." : verdict.reason;
      const lowerFirst = reason.charAt(0).toLowerCase() + reason.slice(1);
      payload.draft_reply =
        `Hi ${name},\n\nThanks for reaching out. I looked into order #${view.order_number}, but ${lowerFirst} ` +
        `I've flagged this for the team to follow up.\n\n${signature()}`;
    }
    steps.push(step('draft', 'Drafted response', 'Reply written from the order and policy above.'));
  } else if (intent === 'return_policy') {
    steps.push(step('understood', 'Understood request', 'Customer is asking about the return policy.'));
    const source = searchKb(message);
    steps.push(step('search', 'Searched knowledge base', `Searched ${KB_SOURCES.length} sample sources.`));
    if (source) {
      payload.evidence.source = { source_id: source.source_id, title: source.title, excerpt: source.text };
      steps.push(step('source', 'Found the relevant source', source.title));
      const window = POLICIES.returns.returnWindowDays;
      payload.draft_reply =
        `Hi ${name},\n\nYou have ${window} days from delivery to return an item. It needs to be unworn and unwashed with the original ` +
        `tags attached, and final sale items can't be returned. Once we receive it, your refund goes back to your original payment ` +
        `method within 5 to 7 business days.\n\n${signature()}`;
    } else {
      payload.draft_reply = `Hi ${name},\n\nThanks for asking. I'm not sure about that one, so I've passed it to the team.\n\n${signature()}`;
    }
    steps.push(step('draft', 'Drafted response', 'Answer written from the source above.'));
  } else if (intent === 'product_question') {
    const product = findProduct(message);
    const size = detectSize(message);
    steps.push(step('understood', 'Understood request', `Customer is asking about ${product.title}` + (size ? ` in size ${size}.` : '.')));
    payload.evidence.product = { title: product.title, price: product.price, currency: product.currency, variants: product.variants.map((v) => ({ ...v })) };
    steps.push(step('catalog', 'Checked catalog', `${product.title} · ${money(product.price, product.currency)} · ${product.variants.length} sizes`));
    const variant = size ? product.variants.find((v) => v.size === size) : null;
    const inStock = product.variants.filter((v) => v.inventory > 0);
    if (variant) {
      steps.push(step('inventory', 'Checked inventory', `Size ${size}: ` + (variant.inventory ? `${variant.inventory} in stock` : 'sold out')));
    }
    const available = inStock.map((v) => v.size).join(', ');
    if (variant && variant.inventory > 0) {
      payload.draft_reply =
        `Hi ${name},\n\nYes, the ${product.title} is available in ${size} (${money(product.price, product.currency)}). ` +
        `Sizes in stock right now: ${available}.\n\n${signature()}`;
    } else if (variant) {
      payload.draft_reply = `Hi ${name},\n\nUnfortunately the ${product.title} is sold out in ${size} right now. It's currently available in: ${available}.\n\n${signature()}`;
    } else {
      payload.draft_reply = `Hi ${name},\n\nThe ${product.title} is ${money(product.price, product.currency)}. Sizes in stock right now: ${available}.\n\n${signature()}`;
    }
    steps.push(step('draft', 'Drafted response', 'Reply written from live sample inventory.'));
  } else {
    steps.push(step('understood', 'Understood request', "Luna isn't sure what this customer needs."));
    payload.draft_reply = `Hi ${name},\n\nThanks for reaching out. I've passed this to the team.\n\n${signature()}`;
    steps.push(step('draft', 'Drafted response', 'Escalated to the team.'));
  }

  payload.steps = steps;
  return payload;
}

export function resolveScenario(scenarioId, decision) {
  if (decision !== 'approve' && decision !== 'reject') {
    throw new SandboxError('bad_decision', "Decision must be 'approve' or 'reject'.");
  }
  const payload = buildScenario(scenarioId);
  const action = payload.pending_action;
  if (!action) throw new SandboxError('no_action', 'This sandbox scenario has no action to approve.');

  const order = orderView(ORDERS[action.order_number]);
  const name = firstName(payload.ticket.customer.name);
  const isCancel = action.type === 'cancel_order';

  if (decision === 'approve') {
    const orderAfter = { ...order, financial_status: 'refunded' };
    if (isCancel) orderAfter.cancelled_at = SANDBOX_NOW.toISOString();
    const finalReply = isCancel
      ? `Hi ${name},\n\nYour order #${order.order_number} has been cancelled and ${money(action.amount, action.currency)} ` +
        `is on its way back to your original payment method (5 to 7 business days). If you'd like the shirt in a different size, ` +
        `just reply here and I'll help you place a new order.\n\n${signature()}`
      : `Hi ${name},\n\nYour refund of ${money(action.amount, action.currency)} for order #${order.order_number} has been issued ` +
        `to your original payment method and should appear within 5 to 7 business days. Thanks for your patience!\n\n${signature()}`;
    return {
      sandbox: true,
      decision: 'approve',
      ticket_status: 'resolved',
      action_label: 'Sandbox action: simulated ' + (isCancel ? 'cancellation' : 'refund') + '. No real store was changed.',
      order_after: orderAfter,
      final_reply: finalReply,
      steps: [
        step('approved', 'Approved by you', 'Human approval recorded (sample store).'),
        step('executed', 'Simulated ' + (isCancel ? 'cancellation' : 'refund'), `Order #${order.order_number} updated in the sample store only.`),
        step('sent', 'Reply sent (simulated)', 'Nothing was emailed to anyone.'),
        step('resolved', 'Resolved', 'Ticket resolved in the sandbox.'),
      ],
    };
  }

  return {
    sandbox: true,
    decision: 'reject',
    ticket_status: 'needs_human',
    action_label: 'Sandbox action rejected. Nothing changed in the sample store.',
    order_after: order,
    final_reply: null,
    steps: [
      step('rejected', 'Rejected by you', 'No change was made to the order.'),
      step('handoff', 'Left for a human', "Luna won't send the drafted reply; the ticket stays open for your team."),
    ],
  };
}
