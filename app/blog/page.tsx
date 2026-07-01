import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Calendar, User } from 'lucide-react';

const posts = [
  {
    id: 1,
    title: "How Voice AI is Replacing the Traditional Receptionist",
    excerpt: "The first 5 seconds of a phone call dictate 80% of your closing rate. Discover how perfectly calibrated AI agents are weaponizing those 5 seconds to out-convert human receptionists.",
    category: "AI Voice",
    date: "Oct 12, 2023",
    author: "Knoxified Team",
    readTime: "5 min read",
    slug: "/blog/1",
    image: "https://images.unsplash.com/photo-1596524430615-b46475ddff6e?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "The Mathematical Cost of Missed Follow-up Calls",
    excerpt: "We analyzed 10,000 local businesses. The '5-minute decay rule' in lead response is silently bankrupting companies. Here is the mathematical proof of what you're losing.",
    category: "Growth Strategy",
    date: "Sep 28, 2023",
    author: "Knoxified Team",
    readTime: "7 min read",
    slug: "/blog/2",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Building an 'Always On' Sales Pipeline",
    excerpt: "Human willpower is a finite resource; code is infinite. Learn how to architect an automation system that relentlessly prospects, nurtures, and closes while you sleep.",
    category: "Sales Automation",
    date: "Sep 15, 2023",
    author: "Knoxified Team",
    readTime: "6 min read",
    slug: "/blog/3",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Why Niche-Trained AI Outperforms General Models",
    excerpt: "ChatGPT writes great poems, but it can't run your HVAC dispatch. Uncover why hyper-specialized, industry-trained AI models are destroying general tools in ROI.",
    category: "AI Technology",
    date: "Aug 30, 2023",
    author: "Knoxified Team",
    readTime: "8 min read",
    slug: "/blog/4",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Client Reactivation: Finding Gold in Dead Pipelines",
    excerpt: "Your CRM is a graveyard of ignored leads. Through the psychology of 'curiosity gaps,' our AI wakes up dormant prospects and turns cold data into immediate cash flow.",
    category: "Client Retention",
    date: "Aug 14, 2023",
    author: "Knoxified Team",
    readTime: "4 min read",
    slug: "/blog/5",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "Integrating AI Without Losing Your Brand's Soul",
    excerpt: "Automation shouldn't sound like a robocall. Explore the paradox of 'synthesized empathy'—how to inject warmth, humor, and hyper-personalized brand voice into your AI.",
    category: "Brand Identity",
    date: "Jul 22, 2023",
    author: "Knoxified Team",
    readTime: "5 min read",
    slug: "/blog/6",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=600&auto=format&fit=crop"
  }
];

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-24 max-w-7xl">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/80 backdrop-blur-md border border-cyan-500/30 text-sm font-medium text-cyan-400 mb-8 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
          Thought Leadership
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-slate-50 mb-6 tracking-tight">The Knoxified Blog</h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Insights, strategies, and deep dives into the world of AI automation and scaling your agency.
        </p>
      </div>

      {/* Featured Article */}
      <Link 
        href="/blog/featured"
        className="group block mb-16 bg-slate-800/70 backdrop-blur-md rounded-3xl border border-slate-700/50 overflow-hidden hover:border-cyan-500/50 hover:shadow-[0_0_40px_rgba(6,182,212,0.15)] transition-all shadow-xl relative"
      >
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="grid md:grid-cols-2 gap-0">
          <div className="w-full h-64 md:h-full bg-slate-700/50 relative overflow-hidden group-hover:bg-slate-700/70 transition-colors hidden md:block">
            <Image 
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop" 
              alt="Featured Article" 
              fill 
              className="object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500" 
              referrerPolicy="no-referrer" 
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-transparent to-transparent z-10 w-full h-full"></div>
          </div>
          
          <div className="p-8 md:p-12 flex flex-col justify-center relative z-20">
            <div className="flex items-center gap-4 mb-6">
              <span className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs font-bold rounded-full shadow-[0_0_15px_rgba(6,182,212,0.4)]">
                Featured
              </span>
              <span className="px-3 py-1 bg-slate-800 border border-slate-700 text-slate-300 text-xs font-semibold rounded-full">
                Vision
              </span>
              <span className="text-slate-500 text-sm hidden sm:block">10 min read</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-50 mb-4 group-hover:text-cyan-400 transition-colors tracking-tight leading-tight">
              The Agentic Future: How AI is Moving from Chat to Action
            </h2>
            
            <p className="text-slate-400 text-base md:text-lg mb-8 leading-relaxed">
              Chatbots are dead. The new era belongs to AI agents that don&apos;t just talk, but execute complex multi-step workflows across your entire tech stack autonomously. Discover why functional execution is the new standard.
            </p>
            
            <div className="flex items-center justify-between mt-auto">
              <div className="flex items-center gap-3 text-slate-400 text-sm">
                <div className="w-8 h-8 rounded-full bg-slate-700 border border-slate-600 flex items-center justify-center overflow-hidden relative">
                  <Image src="https://picsum.photos/seed/avatar1/100/100" alt="Author" fill className="object-cover" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <div className="font-semibold text-slate-300">Knoxified Founder</div>
                  <div className="flex items-center gap-1 text-slate-500 text-xs mt-0.5">
                    <Calendar className="w-3 h-3" /> Nov 05, 2023
                  </div>
                </div>
              </div>
              <div className="flex items-center text-cyan-400 font-bold group-hover:underline">
                Read Full Story <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </div>
        </div>
      </Link>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Link 
            key={post.id} 
            href={post.slug}
            className="group flex flex-col bg-slate-800/70 backdrop-blur-md rounded-2xl border border-slate-700/50 overflow-hidden hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] transition-all h-full shadow-lg"
          >
            <div className="w-full h-48 bg-slate-700/50 relative overflow-hidden group-hover:bg-slate-700/70 transition-colors">
              <Image 
                src={post.image} 
                alt={post.title} 
                fill 
                className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" 
                referrerPolicy="no-referrer" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent z-10 w-full h-full"></div>
            </div>
            
            <div className="p-8 flex flex-col flex-1 relative z-20 -mt-6">
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 text-xs font-semibold rounded-full border border-cyan-500/20 shadow-[0_0_10px_rgba(6,182,212,0.1)]">
                  {post.category}
                </span>
                <span className="text-slate-500 text-sm">{post.readTime}</span>
              </div>
              
              <h3 className="text-xl font-bold text-slate-50 mb-3 group-hover:text-cyan-400 transition-colors line-clamp-2">
                {post.title}
              </h3>
              
              <p className="text-slate-400 text-sm mb-6 line-clamp-3 flex-1 leading-relaxed">
                {post.excerpt}
              </p>
              
              <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-700/50">
                <div className="flex items-center gap-2 text-slate-500 text-sm">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center text-cyan-400 font-medium text-sm group-hover:underline">
                  Read Article <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
