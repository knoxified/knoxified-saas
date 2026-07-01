'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';

import { Eye, EyeOff } from 'lucide-react';
import { supabase } from '@/src/lib/supabase';

export default function CreateAccountPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);


  useEffect(() => {
    const savedEmail = localStorage.getItem('signup_email');
    if (savedEmail && !email) {
      setTimeout(() => setEmail(savedEmail), 0);
    }
  }, [email]);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    localStorage.setItem('signup_email', newEmail);
  };

  const hasMinLength = password.length >= 8;
  const hasNumber = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>\-_\+=\/\[\]\\;']/.test(password);
  
  const passwordsMatch = password === confirmPassword && password.length > 0;
  const isValidPassword = hasMinLength && hasNumber && hasSpecialChar && passwordsMatch;

  const strengthScore = [hasMinLength, hasNumber, hasSpecialChar].filter(Boolean).length;

  const getStrengthColor = () => {
    if (strengthScore === 0) return 'bg-slate-700';
    if (strengthScore === 1) return 'bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]';
    if (strengthScore === 2) return 'bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.5)]';
    return 'bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setErrorMsg(null);
    
    if (!isValidPassword) {
      return;
    }

    setIsLoading(true);
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/onboarding`,
        },
      });

      if (error) {
        setErrorMsg(error.message);
        setIsLoading(false);
        return;
      }

      console.log('Account creation succeeded', data);
      localStorage.removeItem('signup_email');
      
      // If auto-confirm is enabled and a session is returned immediately
      if (data.session) {
        router.push('/onboarding');
      } else {
        setIsSuccess(true);
      }
    } catch (err: any) {
      setErrorMsg(err.message || 'An unexpected error occurred during signup.');
    } finally {
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
              Start building your autonomous future.
            </h1>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              Join industry leaders automating their operations, securely managing inbound traffic, and driving new revenue around the clock.
            </p>
            
            <div className="space-y-4">
               <div className="flex items-center gap-3 text-sm text-slate-300">
                 <div className="w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                   <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                 </div>
                 Secure, End-to-End Encryption
               </div>
               <div className="flex items-center gap-3 text-sm text-slate-300">
                 <div className="w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                   <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                 </div>
                 Continuous System Upgrades
               </div>
               <div className="flex items-center gap-3 text-sm text-slate-300">
                 <div className="w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                   <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                 </div>
                 Dedicated Expert Support
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
               Create Your Account
             </h2>
             <p className="text-slate-400">
               Your invisible operating system is ready to deploy.
             </p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-slate-900 border border-slate-800 p-8 rounded-3xl shadow-2xl shadow-cyan-500/5 relative overflow-hidden"
          >
          <AnimatePresence mode="wait">
            {isSuccess ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="text-center py-6"
              >
                <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-slate-50 mb-4">Check your email</h2>
                <p className="text-slate-400 mb-8 leading-relaxed">
                  We&apos;ve sent a verification link to <br/>
                  <span className="font-semibold text-white">{email}</span>. <br/>
                  Please verify your email to continue.
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                 >
                  Back to sign in
                </button>
              </motion.div>
            ) : (
              <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
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
                 onChange={handleEmailChange}
                 required
                 className="w-full px-5 py-3 rounded-xl border border-slate-700 bg-slate-950 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                 placeholder="name@company.com"
               />
             </div>

             <div className="space-y-4">
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
                     className={`w-full px-5 py-3 rounded-xl border bg-slate-950 text-slate-200 placeholder-slate-600 focus:outline-none focus:ring-1 transition-all pr-12 ${
                        isSubmitted && !isValidPassword 
                        ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/50' 
                        : 'border-slate-700 focus:border-cyan-500 focus:ring-cyan-500'
                     }`}
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

               <div className="space-y-2">
                 <label className="block text-sm font-medium text-slate-300">
                   Confirm Password
                 </label>
                 <div className="relative">
                   <input 
                     type={showConfirmPassword ? "text" : "password"}
                     value={confirmPassword}
                     onChange={e => setConfirmPassword(e.target.value)}
                     required
                     className={`w-full px-5 py-3 rounded-xl border bg-slate-950 text-slate-200 placeholder-slate-600 focus:outline-none focus:ring-1 transition-all pr-12 ${
                        isSubmitted && (!passwordsMatch || !isValidPassword) 
                        ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/50' 
                        : 'border-slate-700 focus:border-cyan-500 focus:ring-cyan-500'
                     }`}
                     placeholder="••••••••"
                   />
                   <button
                     type="button"
                     onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                     className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-300 transition-colors"
                   >
                     {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                   </button>
                 </div>
                 {isSubmitted && !passwordsMatch && confirmPassword.length > 0 && (
                   <p className="text-red-400 text-xs mt-1 text-left">Passwords do not match</p>
                 )}
               </div>

               <div className="pt-2">
                 <p className="text-xs text-slate-400 mb-3 leading-relaxed">
                   Your automation system will handle sensitive business data. We enforce strict physical-grade password policies to keep your operations secure.
                 </p>
               </div>

               {/* Strength Meter */}
               <div className="pt-2">
                 <div className="flex justify-between items-center mb-1.5 px-1">
                   <span className="text-xs font-medium text-slate-400">Security Level</span>
                   <span className={`text-xs font-bold uppercase tracking-wider ${
                     password.length === 0 ? 'opacity-0' : 
                     strengthScore <= 1 ? 'text-red-400' :
                     strengthScore === 2 ? 'text-amber-400' : 'text-emerald-400'
                   }`}>
                     {strengthScore <= 1 ? 'Weak' : strengthScore === 2 ? 'Fair' : 'Strong'}
                   </span>
                 </div>
                 <div className="flex gap-2 h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                   <div className={`h-full transition-all duration-300 w-1/3 ${password.length > 0 ? getStrengthColor() : 'bg-transparent'}`}></div>
                   <div className={`h-full transition-all duration-300 w-1/3 ${strengthScore >= 2 ? getStrengthColor() : 'bg-transparent'}`}></div>
                   <div className={`h-full transition-all duration-300 w-1/3 ${strengthScore >= 3 ? getStrengthColor() : 'bg-transparent'}`}></div>
                 </div>
               </div>

               {/* Validation Requirements */}
               <div className="pt-3 space-y-2 text-sm">
                 <div className={`flex items-center gap-2 transition-colors ${hasMinLength ? 'text-emerald-400' : 'text-slate-500'}`}>
                   <svg className="w-4 h-4 shrink-0 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={hasMinLength ? "M5 13l4 4L19 7" : "M6 18L18 6M6 6l12 12"} />
                   </svg>
                   <span>At least 8 characters</span>
                 </div>
                 <div className={`flex items-center gap-2 transition-colors ${hasNumber ? 'text-emerald-400' : 'text-slate-500'}`}>
                   <svg className="w-4 h-4 shrink-0 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={hasNumber ? "M5 13l4 4L19 7" : "M6 18L18 6M6 6l12 12"} />
                   </svg>
                   <span>Contains a number</span>
                 </div>
                 <div className={`flex items-center gap-2 transition-colors ${hasSpecialChar ? 'text-emerald-400' : 'text-slate-500'}`}>
                   <svg className="w-4 h-4 shrink-0 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={hasSpecialChar ? "M5 13l4 4L19 7" : "M6 18L18 6M6 6l12 12"} />
                   </svg>
                   <span>Contains a special character</span>
                 </div>
                 <div className={`flex items-center gap-2 transition-colors ${passwordsMatch ? 'text-emerald-400' : 'text-slate-500'}`}>
                   <svg className="w-4 h-4 shrink-0 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={passwordsMatch ? "M5 13l4 4L19 7" : "M6 18L18 6M6 6l12 12"} />
                   </svg>
                   <span>Passwords match</span>
                 </div>
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
                   Creating...
                 </>
               ) : 'Create Account'}
             </button>
           </form>

           <div className="mt-8 text-center text-sm text-slate-500">
             Already have an account? <Link href="/login" className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors">Sign in</Link>
           </div>
          </motion.div>
         )}
        </AnimatePresence>
        </motion.div>
        </div>
      </div>
    </div>
  );
}
