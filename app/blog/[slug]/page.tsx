import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Calendar, Clock, Share2, Twitter, Linkedin, Facebook } from 'lucide-react';
import { notFound } from 'next/navigation';

export const dynamicParams = false;

export async function generateStaticParams() {
  return [
    { slug: 'featured' },
    { slug: '1' },
    { slug: '2' },
    { slug: '3' },
    { slug: '4' },
    { slug: '5' },
    { slug: '6' }
  ];
}

const articles: Record<string, any> = {
  'featured': {
    title: "Why I stopped thinking of AI as a chatbot",
    category: "Vision",
    date: "Nov 02, 2026",
    readTime: "6 min read",
    author: {
      name: "Knox",
      role: "Founder, Knoxified",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=150&auto=format&fit=crop"
    },
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop",
    content: `
<p>Picture a tenant standing in a kitchen at 2 AM, ankle-deep in water from a burst pipe. They are not looking for a chat. They are not curious about your company values. They want one thing: to know that somebody is on the way.</p>
<p>That small moment is why I stopped thinking about AI as something that talks, and started thinking about it as something that <em>does</em>.</p>
<h2>Talking is the easy part</h2>
<p>A lot of AI tools I tried early on were impressive for about five minutes. They could answer questions, write a polite paragraph, even crack a joke. But when I asked what actually happened after the conversation, the honest answer was usually: nothing. A person still had to read the transcript, copy the details somewhere, check the calendar, and follow up.</p>
<p>The conversation was never the job. The job was the booking, the callback, the reminder, the note in the right place.</p>
<h2>What changes when it can act</h2>
<p>When a voice agent can answer a call, check what is free in a calendar, book the slot, and send a confirmation, the caller gets certainty instead of a promise. And the owner wakes up to a booked appointment rather than a voicemail to chase.</p>
<p>That is the whole idea behind Knoxified. Not a smarter chat window, but a front desk that finishes the task.</p>
<h2>Where I think this goes</h2>
<p>I do not believe small businesses need to become tech companies. A dentist should be thinking about teeth, a roofer about roofs. If the phone, the follow-ups and the scheduling quietly take care of themselves, those owners get their evenings back, and their customers feel looked after.</p>
<p>That is the bar I hold Knoxified to: did the thing actually get done?</p>
`
  },
  '1': {
    title: "The call nobody answered at 12:40 on a Saturday",
    category: "AI Voice",
    date: "Oct 11, 2026",
    readTime: "5 min read",
    author: {
      name: "Knoxified Team",
      role: "Automation Specialists",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&auto=format&fit=crop"
    },
    image: "https://images.unsplash.com/photo-1596524430615-b46475ddff6e?q=80&w=2000&auto=format&fit=crop",
    content: `
<p>Let me tell you about a clinic that does not exist, but could be any of them.</p>
<p>It is a Saturday, 12:40 in the afternoon. The front desk closed at noon. A woman has just chipped a tooth on a piece of bread, and she is not in agony, but she is worried. She calls the first dental practice that came up on her phone. It rings six times and goes to a voicemail greeting that sounds like it was recorded in 2014.</p>
<p>She does not leave a message. She taps the next result on the list. By 12:45 she has an appointment for Monday morning, with someone else.</p>
<h2>Nobody did anything wrong</h2>
<p>That is the uncomfortable part. The staff were off the clock. The voicemail worked exactly as designed. The practice simply was not there at the moment a new patient needed it.</p>
<p>Human receptionists are wonderful, and a good one is worth a lot. But no one can sit at a desk at lunchtime on a Saturday, at 7 PM on a Wednesday, and during the morning rush when three lines ring at once.</p>
<h2>What a voice agent actually does here</h2>
<p>It picks up on the first or second ring, every time. It greets the caller warmly, asks what is going on, checks the calendar, and books a time. If it is a real emergency, it passes the caller to the right person.</p>
<p>It will not replace the friendly face people meet when they walk in. It covers the gaps around them, so the first thing a new patient hears is a helpful voice instead of a beep.</p>
`
  },
  '2': {
    title: "What one missed call actually costs",
    category: "Growth Strategy",
    date: "Aug 19, 2026",
    readTime: "5 min read",
    author: {
      name: "Knoxified Team",
      role: "Data Science",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop"
    },
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop",
    content: `
<p>I like numbers you can check on the back of an envelope. So here is one, and I will be upfront: these figures are examples. Swap in your own.</p>
<h2>The example</h2>
<p>Say a home services company, plumbing or HVAC for instance, gets around 25 calls a week. Say 6 of them go unanswered because the team is on jobs, in traffic or at lunch.</p>
<p>Many of those callers will not leave a voicemail. They will call the next company. Let us be cautious and say only half of them would have become paying customers, so about 3 a week. If an average job brings in $350, that is roughly $1,050 a week.</p>
<p>Over a year, that is more than $50,000 walking away. And the business owner never sees it, because a missed call leaves no trace on a bank statement.</p>
<h2>Why this stays hidden</h2>
<p>We notice the things we can see: a bad review, a cancelled job. A call that rang out looks like nothing. There is no complaint, no invoice, no record.</p>
<h2>Do your own version</h2>
<ul>
<li>Check your phone log for last month: how many calls went unanswered?</li>
<li>Estimate honestly how many would have turned into work.</li>
<li>Multiply by what an average job is worth to you.</li>
</ul>
<p>If the number is small, great, you are covered. If it is not, that is the gap a voice agent is built to close.</p>
`
  },
  '3': {
    title: "A sales pipeline that keeps working after you go home",
    category: "Sales Automation",
    date: "Jul 07, 2026",
    readTime: "5 min read",
    author: {
      name: "Knoxified Team",
      role: "Revenue Architect",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=150&auto=format&fit=crop"
    },
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop",
    content: `
<p>I have never met a business owner who does not know follow-up matters. I have also never met one who does it perfectly. Life gets in the way: a sick kid, a big job, a week where everything catches fire.</p>
<p>So the problem is not knowledge or even effort. It is that follow-up depends on you remembering, on the days you have the least energy to remember.</p>
<h2>Take the remembering away</h2>
<p>The best pipelines I have seen are not clever. They are consistent. Someone enquires, and within minutes they get a reply. A day later they get a gentle nudge. A few days after that, a short check-in with something useful in it.</p>
<p>None of it is fancy. It just happens every single time, whether the owner is in a meeting, on a plane or asleep.</p>
<h2>A simple way to start</h2>
<ul>
<li><strong>Reply fast:</strong> a quick response to a new enquiry tends to matter more than a perfect one.</li>
<li><strong>Write it once:</strong> draft three short follow-ups in your own words, then let them go out automatically.</li>
<li><strong>Stop when they answer:</strong> the sequence should end the moment the person replies, and a human steps in.</li>
</ul>
<p>That last point matters. Automation should open the door, and you should be the one who walks through it.</p>
`
  },
  '4': {
    title: "Why an AI that knows your industry beats one that knows everything",
    category: "AI Technology",
    date: "May 26, 2026",
    readTime: "5 min read",
    author: {
      name: "Knoxified Team",
      role: "AI Engineering",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop"
    },
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2000&auto=format&fit=crop",
    content: `
<p>Ask a general AI to write a poem about autumn and it will do a lovely job. Ask it to handle a call from someone whose air conditioner just died in July, and things get more interesting.</p>
<p>Because the right response depends on things a general tool does not know about your business.</p>
<h2>The small details are the whole job</h2>
<p>A dental front desk asks whether the caller is a new or existing patient, and whether they have pain. An HVAC dispatcher asks whether there is no cooling at all or just weak airflow, and whether an elderly person is in the house. A law firm intake asks about the type of matter before anything else.</p>
<p>These questions are not complicated. They are just specific. Get them wrong and the caller feels like they are talking to a machine reading a script. Get them right and it feels like talking to someone who has done this before.</p>
<h2>That is why we build by industry</h2>
<p>Each Knoxified system starts from the way a particular kind of business actually handles calls: what to ask, what counts as urgent, what to book and when to hand over to a person.</p>
<p>You can then adjust the agent's behaviour, accent, voice tone and memory to suit your own business. The foundation is already shaped like your work, so you are adjusting, not starting from a blank page.</p>
`
  },
  '5': {
    title: "The old leads in your inbox are not dead",
    category: "Client Retention",
    date: "Apr 14, 2026",
    readTime: "5 min read",
    author: {
      name: "Knoxified Team",
      role: "Growth Strategy",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop"
    },
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop",
    content: `
<p>Open your email or CRM and scroll back six months. Somewhere in there are people who asked for a quote and never answered, or said "let me think about it" and disappeared.</p>
<p>It is easy to call them dead leads. I prefer to call them people whose timing was wrong.</p>
<h2>Why people go quiet</h2>
<p>Rarely because they decided against you. More often a busy month, a budget freeze, a family thing, or simply forgetting. They meant to reply. Then life happened.</p>
<h2>What a good re-engagement message looks like</h2>
<p>It is short. It does not guilt anyone. It does not say "just checking in" and nothing else. It gives the person an easy reason to reply, something like:</p>
<blockquote>Hi Sam, we spoke back in the spring about replacing your roof. Slots for early next month have just opened up, so I wanted you to hear before they fill. No pressure either way.</blockquote>
<p>That is warm, specific and easy to answer in a single line.</p>
<h2>Do not expect a flood</h2>
<p>Even if a small share of those old contacts reply, that is revenue from people you have already paid to find. Nothing is gained by letting them sit untouched. Send a note. The worst outcome is silence, which is where you started.</p>
`
  },
  '6': {
    title: "How to make automation sound like your business, not a robocall",
    category: "Brand Identity",
    date: "Feb 24, 2026",
    readTime: "5 min read",
    author: {
      name: "Knoxified Team",
      role: "Brand Architecture",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop"
    },
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=2000&auto=format&fit=crop",
    content: `
<p>Most of us have a strong reaction to robocalls. That flat voice, the awkward pause, the feeling of being processed. The fear many owners have about AI is that their customers will feel exactly that.</p>
<p>It is a fair worry. But I do not think the problem is that it is an AI. The problem is when it is careless.</p>
<h2>Warmth is made of small choices</h2>
<ul>
<li><strong>The greeting:</strong> it should sound like your business, not a template. A friendly, plain sentence beats a long corporate one.</li>
<li><strong>The voice and accent:</strong> pick ones that match the people you serve. A local feel builds trust quickly.</li>
<li><strong>The pace:</strong> short sentences, natural pauses, no rushing.</li>
<li><strong>Remembering:</strong> if a returning caller has to repeat everything, it feels cold. Memory makes it feel attentive.</li>
</ul>
<h2>Be honest about what it is</h2>
<p>You do not need to hide that it is an AI, and trying to can backfire. Callers tend to be fine with it when it is helpful, clear and quick, and when there is an easy way to reach a person.</p>
<h2>Try it as a customer</h2>
<p>Call your own agent a few times, on a good day and as a grumpy customer. If anything makes you wince, change it. You know your people better than any template does.</p>
`
  }
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = articles[slug];
  if (!post) return { title: 'Not found — Knoxified', robots: { index: false } };
  const description = String(post.content).replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 155);
  return {
    title: `${post.title} | Knoxified`,
    description,
    alternates: { canonical: `https://knoxified.org/blog/${slug}` },
    openGraph: { title: post.title, description, url: `https://knoxified.org/blog/${slug}`, type: 'article' },
  };
}

interface BlogPostProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: BlogPostProps) {
  const resolvedParams = await params;
  
  const post = articles[resolvedParams.slug];
  if (!post) notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    author: { '@type': 'Organization', name: 'Knoxified', url: 'https://knoxified.org' },
    publisher: { '@type': 'Organization', name: 'Knoxified', url: 'https://knoxified.org' },
    mainEntityOfPage: `https://knoxified.org/blog/${resolvedParams.slug}`,
  };

  return (
    <div className="container mx-auto px-4 py-24 max-w-4xl">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Link href="/blog" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium mb-12 transition-colors">
        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
      </Link>
      
      <div className="mb-10">
        <div className="flex items-center gap-4 mb-6">
          <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 text-xs font-semibold rounded-full border border-cyan-500/20 shadow-[0_0_10px_rgba(6,182,212,0.1)]">
            {post.category}
          </span>
          <span className="flex items-center text-slate-500 text-sm">
            <Clock className="w-4 h-4 mr-1" /> {post.readTime}
          </span>
          <span className="flex items-center text-slate-500 text-sm hidden sm:flex">
            <Calendar className="w-4 h-4 mr-1" /> {post.date}
          </span>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-50 mb-8 tracking-tight leading-tight">
          {post.title}
        </h1>
        
        <div className="flex flex-wrap items-center justify-between gap-6 py-6 border-y border-slate-700/50 mb-12">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-slate-700 border border-slate-600 flex items-center justify-center overflow-hidden relative">
              <Image src={post.author.avatar} alt={post.author.name} fill className="object-cover" referrerPolicy="no-referrer" />
            </div>
            <div>
              <div className="font-semibold text-slate-200">{post.author.name}</div>
              <div className="text-slate-500 text-sm">{post.author.role}</div>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <span className="text-slate-500 text-sm mr-2 flex items-center"><Share2 className="w-4 h-4 mr-2" /> Share:</span>
            <button className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all">
              <Twitter className="w-4 h-4" />
            </button>
            <button className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all">
              <Linkedin className="w-4 h-4" />
            </button>
            <button className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all">
              <Facebook className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
      
      <div className="w-full aspect-[2/1] bg-slate-800 rounded-3xl mb-12 overflow-hidden relative shadow-2xl border border-slate-700/50">
        <Image src={post.image} alt={post.title} fill className="object-cover" referrerPolicy="no-referrer" priority />
      </div>
      
      <div 
        className="prose prose-invert prose-slate max-w-none prose-headings:text-slate-50 prose-headings:font-bold prose-headings:tracking-tight prose-a:text-cyan-400 hover:prose-a:text-cyan-300 prose-p:text-slate-300 prose-p:leading-relaxed prose-li:text-slate-300"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
      
      <div className="mt-24 p-10 rounded-3xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50 text-center relative overflow-hidden shadow-2xl">
         <div className="absolute inset-0 bg-cyan-500/5 blur-[80px] rounded-full pointer-events-none" />
         <div className="relative z-10">
           <h3 className="text-3xl font-bold text-slate-50 mb-4 tracking-tight">Ready to build your agentic workforce?</h3>
           <p className="text-lg text-slate-400 mb-8 max-w-xl mx-auto">
             Stop settling for basic chatbots. Deploy full-scale AI automation across your entire business today.
           </p>
           <Link href="/get-started" className="inline-flex px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold rounded-full transition-all shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:-translate-y-1">
              Start Free Trial
           </Link>
         </div>
      </div>
    </div>
  );
}
