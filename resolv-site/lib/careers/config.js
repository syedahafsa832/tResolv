// Everything editable about the careers pages lives here: role copy, the
// commission placeholder and the application questions. Each question's `name`
// is the column it is stored in (see supabase/careers/001_applications.sql).

export const ROLE = {
  slug: 'lead-acquisition',
  title: 'Lead Acquisition',
};

// TODO(commission): add the real commission structure here when it's decided.
// Leave it as '' to show the "being finalised" fallback below. Do not invent
// numbers: this string is shown publicly on /careers.
export const COMMISSION_STRUCTURE = '';
export const COMMISSION_STRUCTURE_FALLBACK =
  "The exact commission structure is being finalised. We'll be upfront about it before anyone gets started.";

export const COMMISSION_NOTE =
  'This is a commission-based role. There is no fixed salary, no guaranteed pay, no employment benefits, and it is not a paid internship. You earn commission only.';

export const ROLE_SECTIONS = [
  {
    key: 'do',
    icon: 'Search',
    title: "what you'll do",
    items: [
      'find potential customers and research Shopify brands',
      'spot qualified leads (who fits, who really doesn’t)',
      'start conversations and run outreach',
      'notice opportunities other people scroll past',
      'help turn conversations into customers',
      'test new acquisition ideas and tell us what worked',
    ],
  },
  {
    key: 'want',
    icon: 'Sparkles',
    title: "what we're looking for",
    items: [
      'initiative: you start things without being told to',
      'you learn fast (and enjoy it)',
      'clear communication, especially in writing',
      'curiosity and good research instincts',
      'problem solving when there’s no playbook',
      'follow-through. actually doing the thing.',
    ],
  },
  {
    key: 'dont',
    icon: 'BadgeCheck',
    title: "what you don't need",
    items: [
      'years of experience',
      'a sales background',
      'a CV (we don’t ask for one)',
      'a fancy title or a big network',
    ],
    footnote: 'we care about how you think and what you actually do, not how polished your resume is.',
  },
  {
    key: 'learn',
    icon: 'Rocket',
    title: "what you'll learn / work on",
    items: [
      'how a startup really finds its first customers',
      'how Shopify brands and customer support work',
      'writing outreach people actually reply to',
      'turning a brand’s public footprint into a smart angle',
      'running small experiments and reading the results',
    ],
  },
];

export const HOW_IT_WORKS = [
  { title: 'apply', body: 'about 10 minutes. no CV. just your thinking.' },
  { title: 'we read it', body: 'every application gets read by a human.' },
  { title: 'we email you', body: 'if it looks like a fit, we’ll reach out.' },
];

const HOURS = ['Under 5 hours', '5–10 hours', '10–20 hours', '20+ hours'];
const START = ['Right away', 'Within 2 weeks', 'Within a month', 'More than a month from now'];

// type: text | email | url | textarea | select
// sub: true = second input of the previous question (shares its number).
// min applies to trimmed text length; max is enforced in the UI and the DB.
export const SECTIONS = [
  {
    key: 'you',
    title: 'about you',
    blurb: 'the basics. quick.',
    questions: [
      { name: 'full_name', type: 'text', label: 'Full name', min: 2, max: 200, autoComplete: 'name' },
      { name: 'email', type: 'email', label: 'Email', max: 320, autoComplete: 'email', hint: "we'll only use this to contact you about this role." },
      { name: 'linkedin_url', type: 'url', label: 'LinkedIn profile', max: 500, placeholder: 'linkedin.com/in/yourname', autoComplete: 'url' },
      { name: 'location', type: 'text', label: 'Location', min: 2, max: 200, placeholder: 'City, Country', autoComplete: 'address-level2' },
    ],
  },
  {
    key: 'think',
    title: 'show us how you think',
    blurb: 'no trick questions. write like a real person, not a cover letter.',
    questions: [
      { name: 'proud_of', type: 'textarea', label: "What have you done before that you're genuinely proud of?", hint: 'anything counts: a project, a side hustle, a community, a weird experiment.' },
      { name: 'why_pick_you', type: 'textarea', label: "If you've never done lead acquisition or sales before, why should we still pick you?", hint: 'if you have, tell us what you learned instead.' },
      { name: 'shopify_brand_approach', type: 'textarea', label: 'You find a Shopify clothing brand with 20k Instagram followers. What would you do to figure out if they could be a tResolv customer?', hint: 'walk us through your steps.' },
      { name: 'brand_name', type: 'text', label: 'Find one Shopify brand tResolv should talk to. Which brand is it?', min: 2, max: 300, placeholder: 'brand name or website' },
      { name: 'brand_reason', type: 'textarea', label: 'And why did you choose it?', sub: true },
      { name: 'first_message', type: 'textarea', label: "Write the first message you'd send to that brand.", hint: 'the actual message, as you would send it.' },
      { name: 'no_reply_plan', type: 'textarea', label: 'You send 30 messages and nobody replies. What do you do next?' },
      { name: 'one_week_plan', type: 'textarea', label: 'You have one week and nobody tells you exactly what to do. What would you work on?' },
      { name: 'unusually_good_at', type: 'textarea', label: 'What are you unusually good at?' },
      { name: 'improving_at', type: 'textarea', label: 'What are you currently bad at but trying to improve?' },
    ],
  },
  {
    key: 'logistics',
    title: 'the practical bit',
    blurb: 'be realistic, it helps us both.',
    questions: [
      { name: 'weekly_hours', type: 'select', label: 'How much time can you realistically give tResolv each week?', options: HOURS },
      { name: 'start_when', type: 'select', label: 'When could you start?', options: START },
    ],
  },
];

// Every question is required. Long answers get a 30-char minimum and a 3000 cap.
export const QUESTIONS = SECTIONS.flatMap((s) => s.questions).map((q) => ({
  ...(q.type === 'textarea' ? { min: 30, max: 3000 } : {}),
  ...q,
}));

export const FIELD_NAMES = QUESTIONS.map((q) => q.name);
