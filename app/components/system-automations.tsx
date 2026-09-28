import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { ComingSoonBadge, isLiveAutomation } from './automation-status';

interface SystemAutomationsProps {
  automations: {
    title: string;
    description: string;
    href: string;
    icon: string;
  }[];
}

export function SystemAutomations({ automations }: SystemAutomationsProps) {
  return (
    <div className="mb-24 mt-24 border-t border-slate-700/50 pt-16">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-50 mb-4 text-center tracking-tight">Powered By Core Automations</h2>
      <p className="text-slate-400 text-center max-w-2xl mx-auto mb-12">
        This system is designed around these Knoxified automations. Ones marked Coming soon are still in development.
      </p>
      
      <div className="grid md:grid-cols-3 gap-6">
        {automations.map((auto, idx) => (
          <Link href={auto.href} key={idx} className="block group">
            <div className="bg-slate-800/40 border border-slate-700/50 hover:border-cyan-500/50 rounded-2xl p-6 h-full transition-all hover:bg-slate-800/80 hover:-translate-y-1 shadow-lg">
               <div className="text-3xl mb-4">{auto.icon}</div>
               <h3 className="text-xl font-bold text-slate-50 mb-2 flex items-center justify-between">
                 <span>{auto.title}{!isLiveAutomation(auto.href) && <ComingSoonBadge />}</span>
                 <ChevronRight className="w-5 h-5 text-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
               </h3>
               <p className="text-sm text-slate-400">
                 {auto.description}
               </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
