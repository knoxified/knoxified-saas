'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { PhoneOff, Bot, Clock, TrendingUp, CheckCircle2, ChevronRight, MessageSquare, Zap, XCircle, ArrowRight, Activity, CalendarDays, Inbox, Building, ShieldCheck, Globe, Star } from 'lucide-react';

const testimonials = [
  {
    quote: "One missed-call workflow recovered 17 appointments in 30 days. It paid for a year of Our Platform in the first two weeks.",
    name: "Ariyah M Caldwell",
    title: "Founder and Sales Manager",
    image: "/ariyah.png",
    logo: "/gd-logo.png"
  },
  {
    quote: "The voice AI handles our peak hours flawlessly. We've seen a 40% increase in booked consultations without adding staff.",
    name: "Marcus Thorne",
    title: "Managing Partner",
    image: "/marcus.png",
    logo: "/thorne-logo.png"
  },
  {
    quote: "Our lead response time dropped from 4 hours to 3 seconds. The ROI on this system was immediate and undeniable.",
    name: "Elena Rodriguez",
    title: "Growth Lead",
    image: "/elena.png",
    logo: "/cloudtech-logo.png"
  },
  {
    quote: "We automated our patient scheduling and follow-ups. The reduction in no-shows has been incredible for our practice.",
    name: "Dr. Mira Chen",
    title: "Clinic Director",
    image: "/mira.png",
    logo: "/health-logo.png"
  },
  {
    quote: "Our Platform completely transformed how we handle wealth management inquiries. It's like having a dedicated analyst 24/7.",
    name: "Robert Hughes",
    title: "Senior Partner",
    image: "/robert.png",
    logo: "/finance-logo.png"
  },
  {
    quote: "Coordinating fleets used to be a nightmare of missed calls. Now everything routes perfectly without human intervention.",
    name: "David Okafor",
    title: "VP of Operations",
    image: "/david.png",
    logo: "/logistics-logo.png"
  },
  {
    quote: "Our ad campaigns generate leads around the clock. Our Platform ensures not a single one slips through the cracks, no matter the time.",
    name: "Sarah Lin",
    title: "Marketing Director",
    image: "/sarah.png",
    logo: "/marketing-logo.png"
  }
];

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export default function HomePage() {
  const [showExitModal, setShowExitModal] = useState(false);
  const [hasDismissedModal, setHasDismissedModal] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [autoScroll, setAutoScroll] = useState(true);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (autoScroll) {
      interval = setInterval(() => {
        setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [autoScroll]);

  useEffect(() => {
    // Initialize dismissal state from session storage
    if (typeof window !== 'undefined') {
      const dismissed = sessionStorage.getItem('exitModalDismissed') === 'true';
      if (dismissed && !hasDismissedModal) {
        setTimeout(() => setHasDismissedModal(true), 0);
      }
    }
  }, [hasDismissedModal]);

  const dismissExitModal = () => {
    setShowExitModal(false);
    setHasDismissedModal(true);
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('exitModalDismissed', 'true');
    }
  };

  useEffect(() => {
    if (hasDismissedModal || showExitModal) return;

    let timeoutId: NodeJS.Timeout;

    const handleMouseLeave = (e: MouseEvent) => {
      // Exit intent on desktop
      if (e.clientY <= 0 && window.innerWidth >= 768 && !hasDismissedModal) {
        setShowExitModal(true);
      }
    };

    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      // Show on mobile after 45 seconds if not dismissed
      timeoutId = setTimeout(() => {
        if (!hasDismissedModal && !showExitModal) {
          setShowExitModal(true);
        }
      }, 45000);
    }

    document.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hasDismissedModal, showExitModal]);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Knoxified?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Knoxified provides advanced AI voice agents and automation systems designed to handle calls, schedule appointments, and streamline business operations 24/7."
        }
      },
      {
        "@type": "Question",
        "name": "Which system do I need?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer Starter, Pro, and Enterprise plans. The best system depends on your inbound/outbound minute volume requirements and complexity of automations needed."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer a free trial?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer a free trial to help you test our AI agents and experience the difference in automation before committing to a full plan."
        }
      }
    ]
  };

  return (
    <div className="flex flex-col gap-24 md:gap-32 pb-32">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {/* 1. Hero Section */}
      <section className="pt-32 px-4 relative flex flex-col items-center justify-center text-center">
        <div className="container mx-auto max-w-5xl relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/80 backdrop-blur-md border border-cyan-500/30 text-sm font-medium text-cyan-400 mb-8 tracking-wide shadow-[0_0_15px_rgba(6,182,212,0.15)]"
          >
             <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
             Think. Automate. Elevate.
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8 leading-[1.1] md:leading-[1.1]"
          >
            Your Competitors Are Automating.<br className="hidden md:block" />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent [text-shadow:_0_0_20px_rgb(6_182_212_/_30%)]">
              Are You Still Leaving Growth on the Table?
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Our system builds the invisible operating system that catches every missed call, recovers every lost lead, and scales your business – 24/7.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link 
              href="/get-started" 
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-semibold rounded-xl transition-all shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:shadow-[0_0_35px_rgba(6,182,212,0.6)] flex items-center justify-center gap-2"
            >
              Get Started <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="w-full relative z-10 py-10 my-12 overflow-hidden border-y border-cyan-500/10 bg-slate-800/20 backdrop-blur-sm -mt-8 mb-24 md:-mt-12 md:mb-32">
        <div className="container mx-auto px-4 text-center mb-8">
          <p className="text-sm font-medium text-slate-500 uppercase tracking-widest">Trusted by industry leaders worldwide</p>
        </div>
        
        <div className="relative w-full flex overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
          <motion.div 
            className="flex whitespace-nowrap items-center flex-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 30, repeat: Infinity }}
          >
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-16 md:gap-24 items-center px-8 md:px-12 flex-nowrap">
                <div className="flex items-center gap-2 text-slate-400 opacity-50 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                  <Activity className="w-6 h-6" />
                  <span className="font-bold text-xl tracking-tighter">Stellar Automations</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400 opacity-50 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                  <Zap className="w-6 h-6" />
                  <span className="font-bold text-xl tracking-tighter">Nimbus Cloud Solutions</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400 opacity-50 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                  <TrendingUp className="w-6 h-6" />
                  <span className="font-bold text-xl tracking-tighter">CyberFlow</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400 opacity-50 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                  <Building className="w-6 h-6" />
                  <span className="font-bold text-xl tracking-tighter">AeroSync</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400 opacity-50 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                  <ShieldCheck className="w-6 h-6" />
                  <span className="font-bold text-xl tracking-tighter">OmniNet</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400 opacity-50 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                  <Globe className="w-6 h-6" />
                  <span className="font-bold text-xl tracking-tighter">Quantum Shift</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Manual Hell vs Automated Heaven */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 relative z-10"
      >
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Manual Hell */}
          <div className="bg-slate-800/80 backdrop-blur-md border border-red-500/20 rounded-2xl p-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 blur-[50px] rounded-full pointer-events-none group-hover:bg-red-500/10 transition-colors"></div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-500">
                <XCircle className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-50">Manual Hell</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-300">
                <div className="w-6 h-6 rounded bg-red-500/10 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-red-500"></span>
                </div>
                <span>Losing 30% of leads to slow follow-ups</span>
              </li>
              <li className="flex items-start gap-3 text-slate-300">
                <div className="w-6 h-6 rounded bg-red-500/10 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-red-500"></span>
                </div>
                <span>Team burned out from repetitive tasks</span>
              </li>
              <li className="flex items-start gap-3 text-slate-300">
                <div className="w-6 h-6 rounded bg-red-500/10 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-red-500"></span>
                </div>
                <span>Missing upsell opportunities worth thousands</span>
              </li>
              <li className="flex items-start gap-3 text-slate-300">
                <div className="w-6 h-6 rounded bg-red-500/10 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-red-500"></span>
                </div>
                <span>Scaling requires hiring (expensive & slow)</span>
              </li>
              <li className="flex items-start gap-3 text-slate-300">
                <div className="w-6 h-6 rounded bg-red-500/10 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-red-500"></span>
                </div>
                <span>No 24/7 customer engagement</span>
              </li>
            </ul>
          </div>

          {/* Automated Heaven */}
          <div className="bg-slate-800/95 backdrop-blur-lg border border-emerald-500/30 rounded-2xl p-8 relative overflow-hidden shadow-[0_0_30px_rgba(16,185,129,0.1)] group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-[50px] rounded-full pointer-events-none group-hover:bg-emerald-500/20 transition-colors"></div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-50">Automated Heaven</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-300">
                <div className="w-6 h-6 rounded bg-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5 shadow-[0_0_10px_rgba(16,185,129,0.2)]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                </div>
                <span>Recover 100% of leads with AI follow-up</span>
              </li>
              <li className="flex items-start gap-3 text-slate-300">
                <div className="w-6 h-6 rounded bg-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5 shadow-[0_0_10px_rgba(16,185,129,0.2)]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                </div>
                <span>Team focused on strategy & growth</span>
              </li>
              <li className="flex items-start gap-3 text-slate-300">
                <div className="w-6 h-6 rounded bg-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5 shadow-[0_0_10px_rgba(16,185,129,0.2)]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                </div>
                <span>Upsell automation captures 9-11% of revenue</span>
              </li>
              <li className="flex items-start gap-3 text-slate-300">
                <div className="w-6 h-6 rounded bg-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5 shadow-[0_0_10px_rgba(16,185,129,0.2)]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                </div>
                <span>Scale infinitely without hiring</span>
              </li>
              <li className="flex items-start gap-3 text-slate-300">
                <div className="w-6 h-6 rounded bg-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5 shadow-[0_0_10px_rgba(16,185,129,0.2)]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                </div>
                <span>24/7 AI agents working for you</span>
              </li>
            </ul>
          </div>
        </div>
      </motion.section>

      <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent max-w-5xl mx-auto w-full"></div>

      {/* Mirror Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-50 mb-6">Every missed interaction is a hidden leak.</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">You&apos;ve built something valuable; this helps it run smoother.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div className="bg-gradient-to-b from-slate-800 to-slate-800/50 border-t border-cyan-500/20 rounded-xl p-8 backdrop-blur-md border-[1px] border-x-slate-700/50 border-b-slate-700/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] transition-all">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center text-red-400">
                <PhoneOff className="w-6 h-6" />
              </div>
              <ChevronRight className="w-5 h-5 text-slate-600" />
              <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                <Bot className="w-6 h-6" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-50 mb-3">Missed calls = missed revenue</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              While you sleep or focus on clients, our AI naturally answers every call instantly, booking appointments on your behalf.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gradient-to-b from-slate-800 to-slate-800/50 border-t border-cyan-500/20 rounded-xl p-8 backdrop-blur-md border-[1px] border-x-slate-700/50 border-b-slate-700/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] transition-all">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400">
                <Clock className="w-6 h-6" />
              </div>
              <ChevronRight className="w-5 h-5 text-slate-600" />
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                <Zap className="w-6 h-6" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-50 mb-3">Slow response loses leads</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              We intercept incoming inquiries via chat or form and qualify them in under 3 seconds, transferring hot leads straight to you.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-gradient-to-b from-slate-800 to-slate-800/50 border-t border-cyan-500/20 rounded-xl p-8 backdrop-blur-md border-[1px] border-x-slate-700/50 border-b-slate-700/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] transition-all">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center text-slate-400">
                <TrendingUp className="w-6 h-6 rotate-180" />
              </div>
              <ChevronRight className="w-5 h-5 text-slate-600" />
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                <Activity className="w-6 h-6" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-50 mb-3">Stagnant pipelines</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              AI is powerful, but it can never replace your thinking. Our sequences revive past conversations automatically so you can strategize.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Proof Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="bg-slate-800/30 backdrop-blur-sm border-y border-cyan-500/10 py-24 relative"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/10 via-transparent to-transparent pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-center items-center gap-16 md:gap-32 mb-20 text-center">
            <div>
              <div className="text-5xl md:text-6xl font-bold text-emerald-500 mb-2 tracking-tight">$50M+</div>
              <div className="text-slate-400 font-medium tracking-wide uppercase text-sm border-t border-cyan-500/20 pt-2 shadow-[0_-1px_10px_rgba(6,182,212,0.1)]">Revenue Recovered</div>
            </div>
            <div className="hidden md:block w-px h-16 bg-slate-700"></div>
            <div>
              <div className="text-5xl md:text-6xl font-bold text-emerald-500 mb-2 tracking-tight">500K+</div>
              <div className="text-slate-400 font-medium tracking-wide uppercase text-sm border-t border-cyan-500/20 pt-2 shadow-[0_-1px_10px_rgba(6,182,212,0.1)]">Hours Saved</div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto relative px-4 sm:px-12">
            <div className="overflow-hidden">
              <motion.div
                className="flex cursor-grab active:cursor-grabbing"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);
                  if (swipe < -swipeConfidenceThreshold && activeTestimonial < testimonials.length - 1) {
                    setActiveTestimonial(activeTestimonial + 1);
                  } else if (swipe > swipeConfidenceThreshold && activeTestimonial > 0) {
                    setActiveTestimonial(activeTestimonial - 1);
                  }
                }}
                animate={{ x: `-${activeTestimonial * 100}%` }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                onMouseEnter={() => setAutoScroll(false)}
                onMouseLeave={() => setAutoScroll(true)}
              >
                {testimonials.map((t, idx) => (
                  <div key={idx} className="w-full flex-shrink-0 px-2 sm:px-4">
                    <div className="p-8 md:p-12 rounded-2xl bg-slate-800/95 backdrop-blur-lg border border-slate-700/50 relative text-center shadow-[0_10px_40px_rgba(0,0,0,0.3)]">
                      <MessageSquare className="w-10 h-10 text-cyan-500/30 absolute top-8 right-8" />
                      {t.logo && (
                        <div className="absolute top-6 left-6 sm:top-8 sm:left-8 h-[40px] w-[90px] bg-white/95 p-1.5 rounded-lg flex items-center justify-center shadow-sm">
                          <Image src={t.logo} alt="Company logo" fill sizes="90px" className="object-contain opacity-90 p-1.5" />
                        </div>
                      )}
                      
                      <p className="text-slate-300 text-xl md:text-2xl mb-10 relative z-10 font-serif italic leading-relaxed mt-4">
                        &quot;{t.quote}&quot;
                      </p>
                      
                      <div className="flex flex-col items-center gap-3">
                        <div className="w-16 h-16 rounded-full border-2 border-cyan-500/30 overflow-hidden bg-slate-700 relative">
                          {t.image ? (
                            <Image src={t.image} alt={t.name} fill sizes="64px" className="object-cover" />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-xl text-slate-500 font-bold bg-slate-800">
                              {t.name.charAt(0)}
                            </div>
                          )}
                        </div>
                        <div>
                          <div className="text-slate-50 font-bold text-lg">{t.name}</div>
                          <div className="text-sm text-cyan-400 font-medium">{t.title}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
            
            {/* Desktop Navigation Arrows */}
            <button 
              onClick={() => setActiveTestimonial(Math.max(0, activeTestimonial - 1))}
              className={`hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 items-center justify-center w-10 h-10 rounded-full bg-slate-800 border border-slate-700 text-slate-300 transition-all z-20 shadow-lg ${activeTestimonial === 0 ? 'opacity-0 cursor-not-allowed pointer-events-none' : 'hover:bg-slate-700 hover:text-white hover:scale-110'}`}
              aria-label="Previous testimonial"
            >
              <ChevronRight className="w-6 h-6 rotate-180" />
            </button>
            
            <button 
              onClick={() => setActiveTestimonial(Math.min(testimonials.length - 1, activeTestimonial + 1))}
              className={`hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 items-center justify-center w-10 h-10 rounded-full bg-slate-800 border border-slate-700 text-slate-300 transition-all z-20 shadow-lg ${activeTestimonial === testimonials.length - 1 ? 'opacity-0 cursor-not-allowed pointer-events-none' : 'hover:bg-slate-700 hover:text-white hover:scale-110'}`}
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            
            {/* Dot Indicators */}
            <div className="flex justify-center gap-3 mt-8">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTestimonial(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${idx === activeTestimonial ? 'bg-cyan-400 w-8' : 'bg-slate-600 hover:bg-slate-500 w-2'}`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Pricing Table */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-50 mb-4 tracking-tight">Pricing</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-4">Which system do I need?</p>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-500/10 text-amber-400 text-sm border border-amber-500/20">
            <span className="font-semibold">Note:</span> AI handles the repetition. You handle the core decisions.
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto items-center mb-32">
          {/* Starter */}
          <div className="p-8 rounded-2xl bg-slate-800/80 backdrop-blur-md border border-slate-700/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.1)] transition-all flex flex-col h-full">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-slate-50 mb-2">Starter</h3>
              <p className="text-sm text-slate-400">For solopreneurs tightening the loop.</p>
            </div>
            <div className="mb-6 flex items-baseline gap-1">
              <span className="text-4xl font-bold text-slate-50">$247</span>
              <span className="text-slate-500">/mo</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-start gap-3 text-sm text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" />
                <span>Inbound Voice Agents</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" />
                <span>1 Active Automation</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" />
                <span>250 Mins Inbound Limit</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" />
                <span>700 Automation Credits</span>
              </li>
            </ul>
            <Link href="/get-started" className="block text-center w-full py-3 px-4 rounded-lg font-medium border border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors">
              Start Free Trial
            </Link>
          </div>

          {/* Pro */}
          <div className="p-8 rounded-2xl bg-slate-800/95 backdrop-blur-lg border border-cyan-500/50 relative shadow-[0_0_40px_rgba(6,182,212,0.2)] md:-translate-y-4 flex flex-col h-[105%] z-10">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-[0_0_15px_rgba(6,182,212,0.4)]">
              Recommended
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-slate-50 mb-2">Pro</h3>
              <p className="text-sm text-cyan-400">The complete growth engine for scaling teams.</p>
            </div>
            <div className="mb-6 flex items-baseline gap-1">
              <span className="text-5xl font-bold text-slate-50">$697</span>
              <span className="text-slate-400">/mo</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-start gap-3 text-sm text-white">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <span className="font-semibold">Everything in Starter</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" />
                <span>Outbound System Tools</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" />
                <span>3 Active Automations</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" />
                <span>1,000 Mins (Inbound/Outbound)</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" />
                <span>2,000 Automation Credits</span>
              </li>
            </ul>
            <Link href="/get-started" className="block text-center w-full py-3 px-4 rounded-lg font-medium bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]">
              Start Free Trial
            </Link>
          </div>

          {/* Enterprise */}
          <div className="p-8 rounded-2xl bg-slate-800/80 backdrop-blur-md border border-slate-700/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.1)] transition-all flex flex-col h-full">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-slate-50 mb-2">Enterprise</h3>
              <p className="text-sm text-slate-400">For growing teams needing massive scale.</p>
            </div>
            <div className="mb-6 flex items-baseline gap-1">
              <span className="text-4xl font-bold text-slate-50">$2,497</span>
              <span className="text-slate-500">/mo</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-start gap-3 text-sm text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" />
                <span><strong className="text-slate-200">Everything in Pro</strong></span>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
                <span>Virtual System Tools</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
                <span>8 Active Automations</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
                <span>5,500 Mins Limits</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
                <span>8,000 Automation Credits</span>
              </li>
            </ul>
            <Link href="/get-started" className="block text-center w-full py-3 px-4 rounded-lg font-medium border border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors">
              Start Free Trial
            </Link>
          </div>

          {/* Custom */}
          <div className="p-8 rounded-2xl bg-slate-800/80 backdrop-blur-md border border-slate-700/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.1)] transition-all flex flex-col h-full">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-slate-50 mb-2">Custom</h3>
              <p className="text-sm text-slate-400">Custom deployment & hands-on strategy.</p>
            </div>
            <div className="mb-6 flex items-baseline gap-1">
              <span className="text-4xl font-bold text-slate-50">Let&apos;s Talk</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-start gap-3 text-sm text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" />
                <span><strong className="text-slate-200">Everything in Enterprise</strong></span>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
                <span>Dedicated Success Manager</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
                <span>Custom AI model training</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
                <span>Bespoke limits</span>
              </li>
            </ul>
            <Link href="/contact" className="block text-center w-full py-3 px-4 rounded-lg font-medium border border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors">
              Contact Sales
            </Link>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="max-w-6xl mx-auto mb-32 hidden md:block">
          <h2 className="text-3xl font-bold text-slate-50 mb-10 text-center tracking-tight">Compare Plans</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-700/50">
                  <th className="py-4 px-6 text-slate-400 font-medium">Features</th>
                  <th className="py-4 px-6 text-slate-50 font-semibold w-1/5 text-center">Starter</th>
                  <th className="py-4 px-6 font-bold text-cyan-400 w-1/5 text-center bg-slate-800/30 rounded-t-xl relative">
                    <div className="absolute inset-x-0 top-0 h-px bg-cyan-500/50"></div>
                    Pro
                  </th>
                  <th className="py-4 px-6 text-slate-50 font-semibold w-1/5 text-center">Enterprise</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {/* Category */}
                <tr>
                  <td colSpan={4} className="py-4 px-6 font-semibold text-slate-300 bg-slate-800/20">Operational Scale & Infrastructure</td>
                </tr>
                <tr className="border-b border-slate-800 hover:bg-slate-800/30 transition-colors">
                  <td className="py-4 px-6 text-slate-400">Monthly Minutes Limit</td>
                  <td className="py-4 px-6 text-center text-slate-300">250 Mins</td>
                  <td className="py-4 px-6 text-center bg-slate-800/30 text-white font-medium">1,000 Mins</td>
                  <td className="py-4 px-6 text-center text-slate-300">5,500 Mins</td>
                </tr>
                <tr className="border-b border-slate-800 hover:bg-slate-800/30 transition-colors">
                  <td className="py-4 px-6 text-slate-400">Active Automations</td>
                  <td className="py-4 px-6 text-center text-slate-300">1 Automation</td>
                  <td className="py-4 px-6 text-center bg-slate-800/30 text-white font-medium">3 Automations</td>
                  <td className="py-4 px-6 text-center text-slate-300">8 Automations</td>
                </tr>
                <tr className="border-b border-slate-800 hover:bg-slate-800/30 transition-colors">
                  <td className="py-4 px-6 text-slate-400">Automation Credits</td>
                  <td className="py-4 px-6 text-center text-slate-300">700 Credits</td>
                  <td className="py-4 px-6 text-center bg-slate-800/30 text-white font-medium">2,000 Credits</td>
                  <td className="py-4 px-6 text-center text-slate-300">8,000 Credits</td>
                </tr>
                <tr className="border-b border-slate-800 hover:bg-slate-800/30 transition-colors">
                  <td className="py-4 px-6 text-slate-400">AI Systems</td>
                  <td className="py-4 px-6 text-center text-slate-600">—</td>
                  <td className="py-4 px-6 text-center bg-slate-800/30"><CheckCircle2 className="w-5 h-5 text-cyan-500 mx-auto" /></td>
                  <td className="py-4 px-6 text-center"><CheckCircle2 className="w-5 h-5 text-slate-600 mx-auto" /></td>
                </tr>
                <tr className="border-b border-slate-800 hover:bg-slate-800/30 transition-colors">
                  <td className="py-4 px-6 text-slate-400">System Capabilities</td>
                  <td className="py-4 px-6 text-center text-slate-300">Inbound Only</td>
                  <td className="py-4 px-6 text-center bg-slate-800/30 text-white font-medium">Inbound & Outbound</td>
                  <td className="py-4 px-6 text-center text-slate-300">Virtual System Tools</td>
                </tr>

                {/* Category */}
                <tr>
                  <td colSpan={4} className="py-4 px-6 font-semibold text-slate-300 bg-slate-800/20">Growth & Retargeting</td>
                </tr>
                <tr className="border-b border-slate-800 hover:bg-slate-800/30 transition-colors">
                  <td className="py-4 px-6 text-slate-400">Lead Reactivation</td>
                  <td className="py-4 px-6 text-center"><CheckCircle2 className="w-5 h-5 text-cyan-500 mx-auto" /></td>
                  <td className="py-4 px-6 text-center bg-slate-800/30"><CheckCircle2 className="w-5 h-5 text-cyan-500 mx-auto" /></td>
                  <td className="py-4 px-6 text-center"><CheckCircle2 className="w-5 h-5 text-slate-600 mx-auto" /></td>
                </tr>
                <tr className="border-b border-slate-800 hover:bg-slate-800/30 transition-colors">
                  <td className="py-4 px-6 text-slate-400">Multi-Channel Retargeting</td>
                  <td className="py-4 px-6 text-center text-slate-600">—</td>
                  <td className="py-4 px-6 text-center bg-slate-800/30"><CheckCircle2 className="w-5 h-5 text-cyan-500 mx-auto" /></td>
                  <td className="py-4 px-6 text-center"><CheckCircle2 className="w-5 h-5 text-slate-600 mx-auto" /></td>
                </tr>
                <tr className="border-b border-slate-800 hover:bg-slate-800/30 transition-colors">
                  <td className="py-4 px-6 text-slate-400">Intelligent Upsell Workflows</td>
                  <td className="py-4 px-6 text-center text-slate-600">—</td>
                  <td className="py-4 px-6 text-center bg-slate-800/30"><CheckCircle2 className="w-5 h-5 text-cyan-500 mx-auto" /></td>
                  <td className="py-4 px-6 text-center"><CheckCircle2 className="w-5 h-5 text-slate-600 mx-auto" /></td>
                </tr>

                {/* Category */}
                <tr>
                  <td colSpan={4} className="py-4 px-6 font-semibold text-slate-300 bg-slate-800/20">Support & Setup</td>
                </tr>
                <tr className="border-b border-slate-800 hover:bg-slate-800/30 transition-colors">
                  <td className="py-4 px-6 text-slate-400">Instant Setup (No 2-Day Delay)</td>
                  <td className="py-4 px-6 text-center"><CheckCircle2 className="w-5 h-5 text-cyan-500 mx-auto" /></td>
                  <td className="py-4 px-6 text-center bg-slate-800/30"><CheckCircle2 className="w-5 h-5 text-cyan-500 mx-auto" /></td>
                  <td className="py-4 px-6 text-center"><CheckCircle2 className="w-5 h-5 text-slate-600 mx-auto" /></td>
                </tr>
                <tr className="border-b border-slate-800 hover:bg-slate-800/30 transition-colors">
                  <td className="py-4 px-6 text-slate-400">Email Support</td>
                  <td className="py-4 px-6 text-center text-slate-300">Standard</td>
                  <td className="py-4 px-6 text-center bg-slate-800/30 text-white font-medium">Priority</td>
                  <td className="py-4 px-6 text-center text-slate-300">24/7 Custom</td>
                </tr>
                <tr className="border-b border-slate-800 hover:bg-slate-800/30 transition-colors">
                  <td className="py-4 px-6 text-slate-400 rounded-bl-xl">Dedicated Success Manager</td>
                  <td className="py-4 px-6 text-center text-slate-600">—</td>
                  <td className="py-4 px-6 text-center bg-slate-800/30 rounded-b-xl relative text-slate-600">
                    <div className="absolute inset-x-0 bottom-0 h-px bg-cyan-500/50"></div>
                    —
                  </td>
                  <td className="py-4 px-6 text-center rounded-br-xl"><CheckCircle2 className="w-5 h-5 text-emerald-500 mx-auto" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </motion.section>

      {/* Team Teaser */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 text-center"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-slate-50 mb-16 tracking-tight">The future works through us.</h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              name: "Mara Adeyemi",
              title: "Technical Director",
              bio: "Hi, my name's Mara and i oversee the engineering backbone of Knoxified’s AI and voice agent infrastructure. With deep technical range, i ensures every deployment is stable, optimized, and future-ready — enabling clients to run lean, efficient, always-on operations.",
              image: "/mara.png"
            },
            {
              name: "Tomi Peters",
              title: "Director of Client Enablement",
              bio: "Hi, I am Tomi by name. I champion client success end-to-end, ensuring smooth onboarding, seamless adoption, and long-term performance across all automation assets. I translate client goals into clear delivery pathways and keeps satisfaction metrics consistently high.",
              image: "/tomi.png"
            },
            {
              name: "Adrian Cole",
              title: "Voice Intelligence Lead",
              bio: "Hi, i'm Adrian. I'm tasked with the architect of Knoxified’s advanced voice agent experiences, blending conversational AI, human-centric UX, and business logic to create agents that perform with clarity, efficiency, and brand alignment.",
              image: "/adrian.png"
            }
          ].map((member, i) => (
            <div key={i} className="text-left group cursor-default">
              {member.image ? (
                <div className="w-full aspect-square relative rounded-2xl overflow-hidden mb-4 border border-slate-700/50 shadow-md group-hover:border-cyan-500/50 transition-colors">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
              ) : (
                <div className="w-full aspect-square rounded-2xl bg-slate-800/80 border border-slate-700/50 mb-4 backdrop-blur-md"></div>
              )}
              <h4 className="text-lg font-bold text-slate-50">{member.name}</h4>
              <p className="text-sm font-medium text-cyan-400 mb-2">{member.title}</p>
              <p className="text-sm text-slate-400 line-clamp-4">{member.bio}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Final CTA */}
      <motion.section 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="container mx-auto px-4 relative z-10 pb-16"
      >
        <div className="bg-slate-800/95 backdrop-blur-xl border border-cyan-500/30 rounded-3xl p-12 md:p-24 text-center shadow-[0_0_60px_rgba(6,182,212,0.15)] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />
          
          <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-6 relative z-10 tracking-tight">Stop losing leads. <br/>Start recovering revenue.</h2>
          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto relative z-10">
            Plug your business into the Our Platform OS today.
          </p>
          <div className="relative z-10 flex justify-center">
            <Link 
              href="/get-started" 
              className="px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-400 hover:to-blue-400 font-bold rounded-xl transition-all shadow-[0_0_30px_rgba(6,182,212,0.3)] hover:shadow-[0_0_40px_rgba(6,182,212,0.5)] flex items-center justify-center gap-2"
            >
              Start Free Trial <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </motion.section>

      {/* Scroll Interrupt / Exit Modal */}
      <AnimatePresence>
        {showExitModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ delay: 0.1, duration: 0.3, ease: "easeOut" }}
              className="bg-slate-800 border border-cyan-500/30 rounded-3xl p-8 md:p-12 max-w-2xl w-full relative shadow-[0_0_60px_rgba(6,182,212,0.15)] text-center overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-cyan-500/10 blur-[80px] rounded-full pointer-events-none" />
              
              <div className="text-5xl mb-6">⚠️</div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">Wait — Before You Go</h2>
              
              <p className="text-slate-300 text-base md:text-lg mb-6 mx-auto leading-relaxed max-w-xl">
                Every missed call, ignored lead, delayed follow-up, and repetitive task is costing your business opportunities.
              </p>

              <p className="text-slate-300 text-lg mb-6 max-w-xl mx-auto leading-relaxed">
                Our system builds AI systems that work behind the scenes to capture leads, automate follow-ups, recover lost opportunities, and keep your business moving 24/7.
              </p>
              
              <p className="text-slate-400 mb-10 max-w-lg mx-auto leading-relaxed">
                In just 2 minutes, we&apos;ll identify where automation can save time, increase conversions, and unlock growth in your business.
              </p>
              
              <div className="flex flex-col items-center gap-5 relative z-10">
                <Link 
                  href="/contact"
                  onClick={dismissExitModal}
                  className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] flex items-center justify-center gap-2"
                >
                  Get Your Free AI Growth Audit <ArrowRight className="w-5 h-5" />
                </Link>
                <button 
                  onClick={dismissExitModal}
                  className="text-slate-500 hover:text-slate-300 transition-colors text-sm font-medium tracking-wide"
                >
                  Maybe Later
                </button>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 mt-10 text-sm text-slate-400">
                <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> No credit card required</span>
                <span className="flex text-slate-600 hidden sm:block">•</span>
                <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Personalized recommendations</span>
                <span className="flex text-slate-600 hidden sm:block">•</span>
                <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Actionable automation opportunities</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
