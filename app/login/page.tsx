'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';

import { Eye, EyeOff } from 'lucide-react';
import { supabase } from '@/src/lib/supabase';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    // If user is already logged in, redirect them
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session?.user) {
        let onboarded = session.user.user_metadata?.onboarded;
        try {
          const { data: dbProfile } = await supabase
            .from('user_profiles')
            .select('onboarding_completed')
            .eq('user_id', session.user.id)
            .maybeSingle();
          if (dbProfile) {
            onboarded = dbProfile.onboarding_completed;
          }
        } catch (e) {
          console.warn("Could not check user_profiles table:", e);
        }
        if (onboarded) {
          window.location.href = 'https://dashboard.knoxified.org';
        } else {
          router.push('/onboarding');
        }
      }
    };
    checkUser();
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setIsLoading(true);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        setErrorMsg(error.message);
        setIsLoading(false);
        return;
      }

      if (data.user) {
        let onboarded = data.user.user_metadata?.onboarded;
        try {
          const { data: dbProfile } = await supabase
            .from('user_profiles')
            .select('onboarding_completed')
            .eq('user_id', data.user.id)
            .maybeSingle();
          if (dbProfile) {
            onboarded = dbProfile.onboarding_completed;
          }
        } catch (e) {
          console.warn("Could not check user_profiles table:", e);
        }

        if (onboarded) {
          window.location.href = 'https://dashboard.knoxified.org';
        } else {
          router.push('/onboarding');
        }
      }
    } catch (err: any) {
      setErrorMsg(err.message || 'An unexpected error occurred during login.');
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col md:flex-row relative overflow-hidden">
      {/* Left Branding Panel */}
      <div className="w-full md:w-[40%] lg:w-[35%] bg-slate-900 border-r border-slate-800 relative flex flex-col p-8 md:p-12 z-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-cyan-500/20 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="relative z-10 flex flex-col justify-between h-full">
          <div>
            <Link href="/" className="inline-block mb-12 group">
              <div className="flex items-center gap-3">
                <Image src="/hotel_system.png" alt="Knoxified Logo" width={48} height={48} style={{ width: "auto" }} className="mix-blend-screen opacity-90 drop-shadow-[0_0_15px_rgba(6,182,212,0.6)]" />
                <span className="text-2xl font-bold tracking-tight text-white drop-shadow-[0_0_10px_rgba(6,182,212,0.3)]">Knoxified</span>
              </div>
            </Link>
            
            <h1 className="text-3xl md:text-4xl font-bold text-slate-50 mb-6 tracking-tight leading-tight">
              Welcome back to your operations command.
            </h1>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              Sign in to review your autonomous agents, configure CRM sync settings, and monitor outbound pipelines.
            </p>
            
            <div className="space-y-4">
               <div className="flex items-center gap-3 text-sm text-slate-300">
                 <div className="w-8 h-8 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                   <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                 </div>
                 Active System Dashboard Access
               </div>
               <div className="flex items-center gap-3 text-sm text-slate-300">
                 <div className="w-8 h-8 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                   <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                 </div>
                 Real-Time Live Logs & Monitoring
               </div>
               <div className="flex items-center gap-3 text-sm text-slate-300">
                 <div className="w-8 h-8 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                   <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                 </div>
                 Encrypted Control Panel
               </div>
            </div>
          </div>
          
          <div className="hidden md:block text-slate-500 text-sm mt-12">
            <p>© {new Date().getFullYear()} Knoxified. All rights reserved.</p>
          </div>
        </div>
      </div>

      {/* Right Content Panel - Form */}
      <div className="w-full md:w-[60%] lg:w-[65%] flex flex-col items-center justify-center p-4 md:p-12 relative">
        <div className="w-full max-w-md relative z-10">
          <div className="mb-10 text-center md:text-left">
             <h2 className="text-3xl font-bold text-slate-50 mb-3 tracking-tight">
               Sign In to Knoxified
             </h2>
             <p className="text-slate-400">
               Enter your credentials to control your business engines.
             </p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-slate-900 border border-slate-800 p-8 rounded-3xl shadow-2xl shadow-cyan-500/5 relative overflow-hidden"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {errorMsg && (
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium">
                  {errorMsg}
                </div>
              )}

              <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-300">
                  Email Address
                </label>
                <input 
                  type="email" 
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  className="w-full px-5 py-3 rounded-xl border border-slate-700 bg-slate-950 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                  placeholder="name@company.com"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-300">
                  Password
                </label>
                <div className="relative">
                  <input 
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                    className="w-full px-5 py-3 rounded-xl border border-slate-700 bg-slate-950 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all pr-12"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-300 transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-4 mt-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Signing In...
                  </>
                ) : 'Sign In'}
              </button>
            </form>

            <div className="mt-8 text-center text-sm text-slate-500">
              Don&apos;t have an account? <Link href="/create-account" className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors">Sign up</Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
