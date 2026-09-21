// Everything editable about the careers pages lives here: role copy, the
// commission placeholder and the application questions. Each question's `name`
// is the column it is stored in (see supabase/careers/001_applications.sql).

export const ROLE = {
  slug: 'lead-acquisition',
  title: 'Lead Acquisition',
};

// Compensation copy lives here so it is easy to change later.
// TODO(commission): when the exact structure is decided, put it in `structure`
// (shown as its own block on /careers). Do not invent numbers.
export const COMPENSATION = {
  headline: 'this role is currently commission-based.',
  body: 'the exact commission structure will be shared clearly before you start.',
  structure: '',
};
export const COMMISSION_NOTE = COMPENSATION.body;

export const DO_ITEMS = [
  { word: 'find', body: 'potential shopify brands that could actually use tResolv.' },
  { word: 'research', body: 'figure out whether a company is worth reaching out to.' },
  { word: 'reach out', body: 'start real conversations instead of sending spam.' },
  { word: 'experiment', body: 'try different ways to find customers.' },
  { word: 'learn', body: 'look at what worked and make the next attempt better.' },
];

export const NOT_NEEDED = ['years of experience', 'a sales background', 'a fancy cv', 'a huge network'];

export const LOOK_FOR = [
  { word: 'initiative', body: 'you start things without waiting to be asked.' },
  { word: 'curiosity', body: 'you ask why, then go find out.' },
  { word: 'learning fast', body: 'you try it, see what happened, do it better.' },
  { word: 'communication', body: 'you can say (and write) things clearly.' },
  { word: 'problem solving', body: 'there is no playbook. you figure one out.' },
  { word: 'follow-through', body: 'you finish what you start.' },
];

export const LEARN = [
  'finding your first customers',
  'researching markets',
  'writing outreach',
  'starting conversations',
  'testing growth ideas',
  'learning what makes people respond',
  'seeing how an early startup actually grows',
];

export const STEPS = [
  { title: 'apply', body: 'about 10 minutes. no cv.' },
  { title: 'we read', body: 'a human reads every application.' },
  { title: 'we reach out', body: 'if it looks like a fit, we will contact you.' },
];

const HOURS = ['Under 5 hours', '5 to 10 hours', '10 to 20 hours', '20+ hours'];
const START = ['Right away', 'Within 2 weeks', 'Within a month', 'More than a month from now'];

// type: text | email | url | textarea | select
// sub: true = second input of the previous question (shares its number).
// min applies to trimmed text length; max is enforced in the UI and the DB.
export const SECTIONS = [
  {
    key: 'you',
    title: 'About you',
    blurb: 'The basics, quick.',
    questions: [
      { name: 'full_name', type: 'text', label: 'Full name', min: 2, max: 200, autoComplete: 'name' },
      { name: 'email', type: 'email', label: 'Email', max: 320, autoComplete: 'email', hint: "We'll only use this to contact you about this role." },
      { name: 'linkedin_url', type: 'url', label: 'LinkedIn profile', max: 500, placeholder: 'linkedin.com/in/yourname', autoComplete: 'url' },
      { name: 'location', type: 'text', label: 'Location', min: 2, max: 200, placeholder: 'City, Country', autoComplete: 'address-level2' },
    ],
  },
  {
    key: 'think',
    title: 'Show us how you think',
    blurb: 'No trick questions. Write like a real person, not a cover letter.',
    questions: [
      { name: 'proud_of', type: 'textarea', label: "What have you done before that you're genuinely proud of?", hint: 'Anything counts: a project, a side hustle, a community, a weird experiment.' },
      { name: 'why_pick_you', type: 'textarea', label: "If you've never done lead acquisition or sales before, why should we still pick you?", hint: 'If you have, tell us what you learned instead.' },
      { name: 'shopify_brand_approach', type: 'textarea', label: 'You find a Shopify clothing brand with 20k Instagram followers. What would you do to figure out if they could be a tResolv customer?', hint: 'Walk us through your steps.' },
      { name: 'brand_name', type: 'text', label: 'Find one Shopify brand tResolv should talk to. Which brand is it?', min: 2, max: 300, placeholder: 'brand name or website' },
      { name: 'brand_reason', type: 'textarea', label: 'And why did you choose it?', sub: true },
      { name: 'first_message', type: 'textarea', label: "Write the first message you'd send to that brand.", hint: 'The actual message, as you would send it.' },
      { name: 'no_reply_plan', type: 'textarea', label: 'You send 30 messages and nobody replies. What do you do next?' },
      { name: 'one_week_plan', type: 'textarea', label: 'You have one week and nobody tells you exactly what to do. What would you work on?' },
      { name: 'unusually_good_at', type: 'textarea', label: 'What are you unusually good at?' },
      { name: 'improving_at', type: 'textarea', label: 'What are you currently bad at but trying to improve?' },
    ],
  },
  {
    key: 'logistics',
    title: 'The practical bit',
    blurb: 'Be realistic, it helps us both.',
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
