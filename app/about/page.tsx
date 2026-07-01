export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-24 max-w-5xl">
      <h1 className="text-4xl md:text-6xl font-bold text-slate-50 mb-10 tracking-tight">About Knoxified</h1>
      
      <div className="prose prose-lg max-w-none mb-24 text-slate-300">
        <p className="text-xl md:text-2xl leading-relaxed font-medium">
          You&apos;ve built something valuable; this helps it run smoother. Knoxified was built on the premise that businesses shouldn&apos;t lose growth due to bandwidth constraints.
        </p>
        <p className="leading-relaxed mt-6">
          We engineer systems that act as an invisible operating layer over your existing workflow. By providing reliable automations with a soul, you regain the time needed to focus on strategy rather than mechanics. AI is powerful, but it can never replace your thinking.
        </p>
      </div>
      
      <div className="text-center pt-16 border-t border-cyan-500/10">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-50 mb-12 tracking-tight">The future works through us.</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Knox Favour",
                title: "Founder & Lead System Architect",
                bio: "My name is Knox. I lead all strategic and technical operations, personally overseeing agent design, automation quality, and performance metrics. Every solution deployed reflects the exacting standards — ensuring only qualified clients experience the full impact of Knoxified’s systems.",
                coreValue: "High-leverage, precision-engineered systems that turn complex workflows into automated, scalable operations.",
                email: "knox@knoxified.org",
                image: "/knox.png"
              },
              {
                name: "Mara Adeyemi",
                title: "Technical Director",
                bio: "Hi, my name's Mara and i oversee the engineering backbone of Knoxified’s AI and voice agent infrastructure. With deep technical range, i ensures every deployment is stable, optimized, and future-ready — enabling clients to run lean, efficient, always-on operations.",
                coreValue: "Engineering excellence that guarantees system reliability at scale.",
                email: "maraadeyemi@knoxified.org",
                image: "/mara.png"
              },
              {
                name: "Tomi Peters",
                title: "Director of Client Enablement",
                bio: "Hi, I am Tomi by name. I champion client success end-to-end, ensuring smooth onboarding, seamless adoption, and long-term performance across all automation assets. I translate client goals into clear delivery pathways and keeps satisfaction metrics consistently high.",
                coreValue: "Proactive guidance and white-glove support that maximizes automation outcomes.",
                email: "tomi.p@knoxified.org",
                image: "/tomi.png"
              },
              {
                name: "Adrian Cole",
                title: "Voice Intelligence Lead",
                bio: "Hi, i'm Adrian. I'm tasked with the architect of Knoxified’s advanced voice agent experiences, blending conversational AI, human-centric UX, and business logic to create agents that perform with clarity, efficiency, and brand alignment.",
                coreValue: "High-conversion voice flows that reduce load, boost retention, and elevate customer experience.",
                email: "adrian.cole@knoxified.org",
                image: "/adrian.png"
              }
            ].map((member, i) => (
              <div key={i} className="text-left group cursor-default">
                {member.image ? (
                  <div className="w-full aspect-[4/5] relative rounded-2xl overflow-hidden mb-6 border border-slate-700/50 shadow-md group-hover:border-cyan-500/50 transition-colors">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                ) : (
                  <div className="w-full aspect-[4/5] rounded-2xl bg-slate-800/80 backdrop-blur-md border border-slate-700/50 shadow-md mb-6"></div>
                )}
                <h4 className="text-2xl font-bold text-slate-50">{member.name}</h4>
                <p className="text-sm font-medium text-cyan-400 mb-3">{member.title}</p>
                <div className="space-y-4">
                  <p className="text-sm text-slate-300 leading-relaxed italic border-l-2 border-cyan-500/30 pl-3">&quot;{member.coreValue}&quot;</p>
                  <p className="text-sm text-slate-400 leading-relaxed">{member.bio}</p>
                  <a href={`mailto:${member.email}`} className="inline-block text-sm text-cyan-500 hover:text-cyan-400 transition-colors mt-2">
                    {member.email}
                  </a>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
