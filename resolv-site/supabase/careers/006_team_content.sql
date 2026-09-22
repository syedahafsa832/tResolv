-- Real onboarding content for the team portal (Careers project ONLY). Idempotent: safe to re-run.
-- Source: the tResolv Team Onboarding document. Touches no applications, statuses, auth users or emails.

delete from public.onboarding_modules where slug in ('about-tresolv','how-it-works','what-the-team-does','role-expectations','communication','outreach','lead-qualification','first-week');
insert into public.onboarding_modules (slug, title, description, content, position, required, published) values
($s$welcome$s$,$t$Welcome to tResolv$t$,$d$where we are and what you are here to do$d$,$c$## Welcome to tResolv

Welcome to the tResolv team.

tResolv is an AI support employee for Shopify brands. It helps online stores deal with common customer questions and support work.

**Examples**

- Where is my order
- Can I cancel my order
- I want a refund
- Can I change my address
- Do you ship to my country
- What is your return policy

The product is already built. Now our main job is simple:

Get real Shopify brands interested in tResolv and get our first paying customers.

That is what we are working towards.

## Where we are right now

tResolv is an early stage startup.

We have spent a lot of time building and testing the product. Now we need to spend more time learning from real businesses.

We need to learn:

- What problems Shopify brands actually have
- What they care about
- What they would pay for
- What makes them interested in tResolv
- What makes them say no
- Which ways of reaching them actually work

Customer acquisition is a major focus right now.

> We do not need everything to be perfect. We need real information from real businesses.

## What you are joining to do

Your job is not simply to fill spreadsheets or send messages. Your job is to help tResolv get closer to real customers.

That can mean:

- Finding good Shopify brands
- Researching businesses
- Finding the right people
- Understanding customer support problems
- Finding ways to reach businesses
- Creating conversations
- Testing new outreach ideas
- Sending personalized demos
- Helping with demo calls
- Following up with interested prospects
- Sharing useful ideas and information
- Learning from what works and what does not

You are encouraged to think for yourself. Do not wait for someone to tell you every small thing to do.

If you see an opportunity that could help tResolv, bring it up and test it.
$c$,1,true,true),
($s$customers-and-leads$s$,$t$Who we want as customers$t$,$d$good leads and bad leads$d$,$c$## Who we want as customers

We are mainly looking for Shopify brands in:
- United States
- Canada
- United Kingdom
- Australia
- New Zealand

We mainly want brands that sell physical products online. Good examples include:
- Clothing
- Fashion
- Beauty
- Jewelry
- Home
- Lifestyle
- Other ecommerce brands

The business should have real customers and real customer support work.

## What makes a good lead

A good lead is a business that could realistically need tResolv. Look for signs such as:
- They use Shopify
- They sell physical products
- They have an active store
- They have many products
- They ship orders
- They have returns or refunds
- They have an active customer base
- They have customer support information
- They sell in more than one country
- Their products could create many customer questions

The more useful signals you find, the more interesting the business becomes.

Do not focus only on how big the brand looks.

> A smaller brand with complicated shipping, returns, and customer questions may be a better lead than a large brand with very little support complexity.

## What is a bad lead

Do not add businesses just to make the lead count bigger.

A lead is only useful if there is a reasonable chance they could become a tResolv customer.

Usually skip:

- Businesses that do not use Shopify
- Businesses outside our target countries
- Businesses with very little activity
- Service based businesses
- Agencies
- Businesses that do not sell physical products
- Businesses that clearly have little or no need for customer support help
- Companies that are direct competitors

### Use your own judgment first

Before asking someone else, research the business yourself. Check things such as:

- Website
- Shopify signals
- Product catalog
- Social media
- Customer support information
- Public business information

You do not need to ask about every small detail. Bring something to the team when:

- You have already researched it
- The information is still unclear
- The decision could materially affect whether we should pursue the lead

The goal is to work independently, use good judgment, and keep moving.
$c$,2,true,true),
($s$finding-leads$s$,$t$Finding and researching leads$t$,$d$where to look and what to record$d$,$c$## How to find a lead

You can find businesses through:
- Google
- Google Maps
- Company websites
- Instagram
- LinkedIn
- Online communities
- Business directories
- Other useful platforms you discover

You do not need to use every source for every lead. Use whichever source helps you find relevant businesses and useful information.

### Start with the business

First find a potentially relevant business. Then check whether it:

- Uses Shopify
- Sells physical products
- Fits our target market
- Is active
- Has a potential customer support need
- Is not a competitor

Do not immediately try to sell. First determine whether the business is actually worth contacting.

> The goal is not to find as many businesses as possible.

> The goal is to find businesses that could realistically need tResolv.

## What you need to research

For every good lead, collect as much useful information as you reasonably can. Record:

- Brand name
- Website
- Country
- What they sell
- Shopify confirmation
- Founder or decision maker, if easy to find
- Business email, if publicly available
- Customer support email, if available
- Important customer support information
- Why tResolv could help them

You do not need to find every piece of information for every prospect.

LinkedIn can be useful for finding people or understanding a business, but it is not required for every lead.

Do not spend a long time looking for information that is not publicly available. Do not guess just to complete a field.

> Good research is useful research, not research for the sake of filling every box.

The information should help us answer:

- Is this a good lead?
- Who could we contact?
- Why could tResolv be relevant to them?
$c$,3,true,true),
($s$contact-tracking$s$,$t$Contact tracking$t$,$d$your personal sheet$d$,$c$Each team member will have their own personal tResolv contact tracking sheet.

Everyone should use the same sheet structure and columns, then share their sheet with the founder.

The purpose is to clearly track individual work and progress.

The founder should be able to look at each persons sheet and understand:

- How many good leads they found
- How many prospects they contacted
- What outreach methods they used
- How many replied
- How many showed interest
- How many received personalized demos
- How many demo calls happened
- How many trials started
- How many became paying customers
- What is working and what is not

### What your sheet should include

For every prospect, record:

- Brand name
- Website
- Country
- Contact person
- Contact person role
- Contact details if available
- Date contacted
- Contact method
- What was sent
- Reply received
- Current status
- Next follow up date
- Personalized demo sent
- Demo call
- Trial started
- Paid customer
- Notes

You do not need to find every piece of information for every prospect. Do not spend a long time searching for information that is not publicly available.

### Use simple statuses
- Not contacted
- Contacted
- Replied
- Interested
- Demo sent
- Demo call
- Trial started
- Paid
- Not interested
- No response
- Do not contact
$c$,4,true,true),
($s$outreach-methods$s$,$t$How outreach can work$t$,$d$no single required way$d$,$c$## How outreach can work

There is no single required way to get a customer. You are not limited to email, LinkedIn, Instagram, Facebook, or any one platform.

Think outside the box.

Depending on the business and the situation, you could:

- Send a personalized email
- Send a personalized message
- Send a personalized demo video
- Start a conversation through social media
- Post useful content from your own profile
- Build an audience around ecommerce or AI
- Join relevant online communities
- Find Shopify founders through new platforms
- Offer a demo call
- Run a demo call yourself if you understand tResolv well enough
- Follow up with an interested prospect
- Try a new outreach method you believe could work

If you have an idea that could help us get customers, bring it to the team and test it.

Your job is not to follow one fixed script forever. Your job is to help us figure out:

- What gets the attention of the right Shopify brands
- What starts conversations
- What gets people interested
- What gets people to try tResolv
- What turns interest into customers

## Think outside the box

Do not think: What task was I given?

Think:

What can I do today that could get tResolv closer to a customer?

- Maybe you find a great Shopify brand
- Maybe you notice a support problem on their website
- Maybe you create a personalized demo for them
- Maybe you discover a new community where Shopify founders are active
- Maybe you make a useful post that gets a founder interested
- Maybe you find a completely different way to reach the right person

Try things. Track what happens. Learn from the result.

> We want better outreach, not more spam. Do not send hundreds of random messages just to make the numbers look good. A small number of relevant conversations can be more valuable than hundreds of generic messages.
$c$,5,true,true),
($s$sheet-rules$s$,$t$Duplicates, manual first, and what we learn$t$,$d$keeping the sheet honest$d$,$c$## Avoid duplicate outreach

Before contacting a business, check your own sheet first. If you know or suspect that another team member may have already contacted the business, check with the team before contacting them again.

Do not have multiple people contacting the same business without knowing what has already happened.

If someone replies, update your sheet. If someone receives a personalized demo, update your sheet. If someone starts a trial, update your sheet. If someone becomes a paying customer, update your sheet immediately.

> The sheet should always show what is actually happening.

## Manual first

At the beginning, everyone should update their sheet manually. Do not automate this yet.

First, we need to understand what actually works. We need to learn:

- Which types of leads are worth contacting
- Which outreach methods get replies
- Which messages work
- Whether personalized demos work
- Whether demo calls work
- Which leads become interested
- Which leads start trials
- Which trials become paying customers

Once we understand the process and know what is working, we can automate parts of it.

> First understand the system. Then automate it.

## What we want to learn

The contact sheet is not just for storing contacts. It helps us understand the market and measure individual progress.

We should be able to see:

- Who is finding good leads
- Who is starting conversations
- Which outreach methods get replies
- Which ideas create interest
- Which prospects watch demos
- Which prospects start trials
- Which prospects become paying customers

The goal is not to contact the most people. The goal is not to book the most calls.

The goal is to create real customer conversations and paying customers.
$c$,6,true,true),
($s$talking-to-businesses$s$,$t$The most important part$t$,$d$why this lead, and how we talk about tResolv$d$,$c$## The most important part

For every good lead, answer this question:

### Why could this business need tResolv?

Do not write: They are a Shopify brand.

That tells us almost nothing. Instead, look at the business and find a reason.

Example:

They sell many products and ship internationally. They also have returns and exchanges, so they may receive many repeated customer questions.

That is useful. You are not just finding businesses. You are finding businesses that have a reason to care.

## How we talk about tResolv

The simple explanation is:

tResolv is an AI support employee for Shopify brands. It helps stores handle repetitive customer support.

It can work with store information and real order information. It can help with things like:
- Order tracking
- Refunds
- Cancellations
- Returns
- Address changes
- Product questions
- Store policies

For some actions, a human can review and approve the action before it happens.

> Keep the explanation simple. You do not need to explain every technical detail unless someone asks.

## Do not make promises

Do not promise something just to get someone interested. Do not promise:

- Features that do not exist
- Custom work
- Special pricing
- Guaranteed results
- Specific savings
- A specific delivery date

If you do not know the answer, say:

I will check with the team and get back to you.

That is completely fine. Trust is more important than getting one extra reply.

## If someone replies

If someone replies, do not panic. Do not make up an answer. Do not promise something without checking.

First understand what they are asking. Then reply clearly.

If you understand tResolv well enough, you can continue the conversation yourself. If the conversation becomes serious and you need help, bring in the appropriate person on the team.

If you are confident and properly prepared, you can also run a demo call yourself. You do not need to wait for the founder for every conversation.

The goal is to help the team move good opportunities forward.
$c$,7,true,true),
($s$customers-first$s$,$t$Customer acquisition comes first$t$,$d$and learning while you work$d$,$c$## Customer acquisition comes first

Right now, our biggest priority is getting customers.

Some people on the team may already have technical skills. Some may be interested in development. Some may be better at business, content, research, sales, or other areas. All of those skills are valuable.

But right now, we need to prove that real businesses want tResolv.

Customer first.

Once we have customers, the workload will naturally grow. More customers can mean:

- More product work
- More technical work
- More support work
- More improvements
- More integrations
- More research
- More opportunities for the team

So if you are technical, do not think your technical skills are being ignored. We are simply focusing on the problem that matters most right now.

> Get real demand first. Then build around it.

## Learn while you work

This is not only about completing tasks. You should also be learning.

You will learn about:
- Sales
- Customer acquisition
- Outreach
- Shopify businesses
- Customer support problems
- SaaS
- Product positioning
- Offers
- What makes people buy
- What makes people ignore an offer
- How real businesses make decisions

Study people who are good at these areas. Alex Hormozi is one useful person to learn from, especially his content around offers, sales, value, and customer acquisition.

Do not just watch videos. Learn something. Test it. See what happens.

The goal is to turn what you learn into actual results.
$c$,8,true,true),
($s$do-and-dont$s$,$t$What you can do and what you should not do$t$,$d$the guardrails$d$,$c$## What you can do

- Find leads
- Research businesses
- Find decision makers
- Find customer support problems
- Find useful information
- Suggest ideas
- Test outreach methods
- Create useful content
- Send personalized demos
- Help with demo calls
- Help with follow ups
- Learn from conversations
- Share interesting opportunities
- Suggest better ways to get customers

You are encouraged to think. If you find something that could help tResolv, share it.

## What you should not do

Do not:

- Make up information
- Spam businesses
- Send misleading messages
- Promise features that do not exist
- Promise results
- Make up pricing
- Change important company information without asking
- Mark a lead as contacted when nobody contacted them
- Add random businesses just to increase the lead count
- Hide mistakes
- Pretend something worked when it did not
- Keep doing something that clearly is not working without testing a better approach

> If something goes wrong, just say what happened. That is much better than hiding it.
$c$,9,true,true),
($s$how-we-work$s$,$t$How we work$t$,$d$useful work, not activity$d$,$c$We are a small team. Everyone may have different responsibilities, but we all have the same main goal:

**Get tResolv customers.**

We care about useful work, not activity for the sake of activity. For example:

- Finding 10 good leads is useful.
- Finding 100 random leads is not.
- Starting one real conversation is useful.
- Sending 500 random messages is not.
- Finding a new outreach method that works is valuable.
- Repeating something that clearly does not work is not.

Good work is work that helps the business move forward.
$c$,10,true,true),
($s$first-task-and-week$s$,$t$Your first task and first week$t$,$d$start with five good brands$d$,$c$## Your first task

Do not try to find hundreds of leads on your first day. Start with:

5 good Shopify brands.

For each one, find:

- Brand name
- Website
- Country
- What they sell
- Shopify confirmation
- Founder or decision maker if easy to find
- Contact information if publicly available
- Customer support information if available
- Why tResolv could help them

Add them to your contact sheet.

The purpose of the first task is not to see how fast you can fill a spreadsheet. It is to see whether you can identify businesses that could genuinely need tResolv.

Once you understand the process, increase the number.

## Your first week

**DAY 1**
Understand tResolv. Go through this document. Look at the product. Understand who we want to sell to.

**DAY 2**
Find your first Shopify brands. Focus on quality.

**DAY 3**
Research the businesses properly. Understand why they could need tResolv.

**DAY 4**
Start thinking about how you would reach them. Look for personalized and creative ways to start conversations.

**DAY 5**
Start working with your selected prospects. Track everything in your sheet.

**After that**
Keep researching. Keep testing. Keep learning. Keep improving. Most importantly, keep trying to create real customer conversations.
$c$,11,true,true),
($s$communication-and-measures$s$,$t$Communication, questions, and how we measure your work$t$,$d$how we keep moving$d$,$c$## Communication

We will mainly use the team group for communication.

You do not need to wait for someone to give you a new task every few hours. If your current task is clear, keep working on it.

- If you are stuck, ask
- If you find something useful, share it
- If you find a new opportunity, share it
- If you make a mistake, tell us
- If you have a better idea, suggest it

Everyone on the team has other work and responsibilities, so replies may not always be immediate.

Learn to keep moving without waiting for constant instructions.

## Questions

You do not need to know everything before starting. If you have a question, ask.

But first check this document and the information already shared with the team.

Try to solve simple problems yourself before waiting for someone else. That will help you learn much faster.

> Research first. Think first. Then ask when you genuinely need help.

## How we measure your work

We are not only looking at how many hours you spend. We care about:
- Good leads
- Accurate research
- Good understanding of businesses
- Useful ideas
- Creative outreach
- Real conversations
- Trials
- Customers
- Consistency
- Initiative
- Communication

The goal is not to look busy.

The goal is progress.
$c$,12,true,true),
($s$main-rule-and-goal$s$,$t$The main rule and the goal$t$,$d$early stage, and where we are heading$d$,$c$## Working at an early stage startup

tResolv is still small. Things will change. A task that matters today may not matter next month. New opportunities may come up.

Some ideas will work. Some will not. That is normal.

You are joining at a stage where we are still learning what works best. So do not be afraid to suggest something new.

At the same time, do not spend weeks building or doing something nobody needs.

We learn from real customers first. That is how we decide what deserves more time.

## The main rule

There is one thing I want everyone on the team to remember:

**Do not just stay busy.**

A full spreadsheet does not automatically mean progress. A long work session does not automatically mean progress. Sending a large number of messages does not automatically mean progress.

The question is:

Did this help tResolv get closer to a real customer?

If yes, keep going. If not, think about what you should change.

## The goal

Right now, the goal is simple.

1. Find the right Shopify brands
2. Understand their problems
3. Get their attention
4. Start real conversations
5. Show them tResolv
6. Learn what they think
7. Turn the right conversations into trials
8. Turn the right trials into paying customers

There is no single path to get there. You can use research, outreach, content, social media, personalized demos, calls, communities, new platforms, or an idea nobody has tried yet.

Think. Test. Learn. Improve.

That is how we take tResolv from a built product to a real business.

**Welcome to the team.**

**Let us get started.**
$c$,13,true,true)
on conflict (slug) do update set title = excluded.title, description = excluded.description, content = excluded.content, position = excluded.position, published = true;

insert into public.team_documents (slug, title, kind, summary, content, position, published) values
($s$onboarding-guide$s$,$t$onboarding guide$t$,$k$onboarding_guide$k$,$m$start here$m$,$c$the full tResolv team onboarding lives in the **onboarding** tab, in short sections. read one, tick it off, then move to the next.

[open onboarding](/team/onboarding)
$c$,1,true),
($s$commission$s$,$t$commission and compensation$t$,$k$compensation$k$,$m$how the money works$m$,$c$## How it works

tResolv is currently an early stage startup. The team is being given freedom to find customers in their own way.

There is no fixed payment for hours, messages, leads, calls, trials, or other activity.

You earn commission when you bring a real customer who pays tResolv.

You are free to use any reasonable customer acquisition method that works for you. Cold email, LinkedIn, referrals, communities, content, personal networks, creative outreach, or your own ideas.

The goal is not to stay busy.

The goal is to get real paying customers.

## Commission

Commission is based on the amount the customer actually pays tResolv.

| Customer payment | Month 1 | Month 2 | Month 3 |
| $49 | $7.35 | $4.90 | $2.45 |
| $99 | $14.85 | $9.90 | $4.95 |
| $249 | $37.35 | $24.90 | $12.45 |

### Commission rates

- Month 1: 15%
- Month 2: 10%
- Month 3: 5%

After month 3, there is no further commission.

## When do you get paid?

Commission is paid only after the customer has actually paid tResolv.

Signing up does not count.

Starting a trial does not count.

Saying they will pay does not count.

Payment received = commission earned.

If the customer does not pay, there is no commission.

## Who gets credit for a customer?

Everyone works independently.

Your individual sheet is the main record of the prospects you are working on.

When you find a serious prospect, add them to your sheet with the relevant details and start your outreach.

If there is ever a question about who brought a customer, we will look at:

- The individual sheet
- Dates
- Outreach records
- Emails or messages
- Conversations
- Other reasonable proof of your work

Simply adding a company to a sheet does not automatically mean you own the lead forever.

There should be genuine work behind the claim.

## One important thing

There is no guaranteed payment for effort alone.

You may contact 10 brands or 1,000 brands and still earn nothing if no customer pays.

Someone else may find one customer through an unusual idea and earn a commission from that customer.

That is intentional.

You have the freedom to think outside the box and find what actually works.

**GOOD LUCK!**
$c$,2,true),
($s$role-expectations$s$,$t$role expectations$t$,$k$role_expectations$k$,$m$what you are here to do$m$,$c$what you are joining to do, what you can do, what you should not do, and how your work is measured are covered in onboarding:

- [Welcome to tResolv](/team/onboarding#welcome)
- [What you can do and what you should not do](/team/onboarding#do-and-dont)
- [Communication, questions, and how we measure your work](/team/onboarding#communication-and-measures)
$c$,3,true),
($s$outreach-sop$s$,$t$outreach sop$t$,$k$outreach_sop$k$,$m$how we reach out$m$,$c$how outreach works, how to keep your sheet honest, and how we talk about tResolv are covered in onboarding:

- [Contact tracking](/team/onboarding#contact-tracking)
- [How outreach can work](/team/onboarding#outreach-methods)
- [Duplicates, manual first, and what we learn](/team/onboarding#sheet-rules)
- [The most important part](/team/onboarding#talking-to-businesses)
$c$,4,true),
($s$communication-guidelines$s$,$t$communication guidelines$t$,$k$communication$k$,$m$how we communicate$m$,$c$how we communicate, when to ask questions, and how your work is measured are covered in onboarding:

- [Communication, questions, and how we measure your work](/team/onboarding#communication-and-measures)
$c$,5,true)
on conflict (slug) do update set title = excluded.title, kind = excluded.kind, summary = excluded.summary, content = excluded.content, position = excluded.position, published = true;

insert into public.team_resources (slug, title, description, url, position) values ('team-whatsapp','join the team whatsapp','quick updates, questions, and team stuff.','https://chat.whatsapp.com/Ek7xKVE0nDNL1KOvL8x8x8',1)
on conflict (slug) do update set title = excluded.title, description = excluded.description, url = excluded.url, published = true;

insert into public.task_templates (slug, position, title, description) values
($s$understand-tresolv$s$,1,$t$Understand tResolv$t$,$d$Go through the onboarding. Look at the product. Understand who we want to sell to.$d$),
($s$find-first-brands$s$,2,$t$Find your first 5 Shopify brands$t$,$d$Start with 5 good Shopify brands, not hundreds. Focus on quality. For each one, find: brand name, website, country, what they sell, Shopify confirmation, founder or decision maker if easy to find, contact information if publicly available, customer support information if available, and why tResolv could help them. Add them to your contact sheet.$d$),
($s$research-properly$s$,3,$t$Research the businesses properly$t$,$d$Research the businesses properly. Understand why they could need tResolv. For every good lead, answer: why could this business need tResolv?$d$),
($s$plan-outreach$s$,4,$t$Think about how you would reach them$t$,$d$Start thinking about how you would reach them. Look for personalized and creative ways to start conversations.$d$),
($s$start-prospects$s$,5,$t$Start working with your selected prospects$t$,$d$Start working with your selected prospects. Track everything in your sheet.$d$)
on conflict (slug) do update set position = excluded.position, title = excluded.title, description = excluded.description, active = true;

-- give the starter tasks to existing active team members (new members get them from a trigger)
insert into public.tasks (team_member_id, template_id, position, title, description, priority, resource_url)
select m.id, t.id, t.position, t.title, t.description, t.priority, t.resource_url
from public.team_members m cross join public.task_templates t
where m.status = 'active' and t.active
on conflict do nothing;