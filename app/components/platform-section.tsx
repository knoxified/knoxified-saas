'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { PhoneCall, HelpCircle, BookOpen, Users, Search, PenLine, Send, CalendarCheck, ArrowRight } from 'lucide-react';

const features = [
  {
    icon: PhoneCall,
    title: 'Review every call',
    text: 'Read transcripts and summaries of each conversation, and decide whether calls are recorded.',
  },
  {
    icon: HelpCircle,
    title: 'Teach it once',
    text: "When a caller asks something your agent can't answer, the question lands in your Questions inbox. Answer it once and your agent knows it on every call after.",
  },
  {
    icon: BookOpen,
    title: 'Give it your knowledge',
    text: 'Upload documents, crawl a web page or add your own question-and-answer pairs, so the agent speaks like your business.',
  },
  {
    icon: Users,
    title: 'Follow up with leads',
    text: 'Import a list, build an email sequence and let it run from your own mailbox. It stops when someone replies or unsubscribes.',
  },
];

const automations = [
  {
    icon: Search,
    name: 'LeadReach',
    line: 'Finds and enriches a lead with verified contact details.',
    example: ['Dana Whitfield', 'Owner, Brightside Roofing', 'Email and phone verified'],
  },
  {
    icon: PenLine,
    name: 'MailCraft',
    line: 'Drafts a personal follow-up for your team to review.',
    example: ['"Hi Dana, I noticed Brightside is hiring estimators..."', 'Draft ready for your review'],
  },
];

export function PlatformSection() {
  return (
    <section className="w-full relative z-10 py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-50 tracking-tight mb-4">
            Your agent answers the calls. You stay in control.
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            The Knoxified dashboard is where you set up your voice agent, review every call and teach it what it doesn&apos;t know yet.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 mb-24">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-2xl border border-slate-700/50 bg-slate-800/60 p-8 backdrop-blur-md transition-all hover:border-cyan-500/40 hover:shadow-[0_0_30px_rgba(6,182,212,0.12)]"
            >
              <div className="w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-5 group-hover:bg-cyan-500/20 transition-colors">
                <f.icon className="w-5 h-5 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold text-slate-50 mb-2">{f.title}</h3>
              <p className="text-slate-400 leading-relaxed">{f.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-slate-50 mb-3">Automations that work while you sleep</h3>
          <p className="text-slate-400">Four are live today: LeadReach, MailCraft, FollowFlow and AppointMate. More are on the way.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10">
          {automations.map((a, i) => (
            <motion.div
              key={a.name}
              initial={{ opacity: 0, x: i === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-slate-800/80 to-slate-900/80 p-7"
            >
              <div className="flex items-center gap-3 mb-3">
                <a.icon className="w-5 h-5 text-cyan-400" />
                <span className="text-lg font-semibold text-slate-50">{a.name}</span>
              </div>
              <p className="text-slate-400 mb-5">{a.line}</p>
              <div className="rounded-xl bg-slate-950/60 border border-slate-700/50 p-4 space-y-1.5 text-sm text-slate-300">
                <div className="text-[10px] uppercase tracking-wider text-slate-500 mb-1">Example</div>
                {a.example.map((l) => (
                  <div key={l}>{l}</div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400 mb-12">
          <span className="inline-flex items-center gap-2"><Send className="w-4 h-4 text-cyan-400" /> FollowFlow sends sequences from your own mailbox</span>
          <span className="inline-flex items-center gap-2"><CalendarCheck className="w-4 h-4 text-cyan-400" /> AppointMate books appointments</span>
        </div>

        <div className="text-center">
          <Link
            href="/get-started"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-medium shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all"
          >
            Get started <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
