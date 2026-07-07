'use client';
import { useState, useEffect, useRef, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { supabase } from '@/src/lib/supabase';

// ─── Types ────────────────────────────────────────────────────────────────────

interface FormData {
  // Step 1 – About You
  full_name: string;
  position_in_org: string;
  // Step 2 – Business Details
  organization_name: string;
  organization_website: string;
  organization_industry: string;
  // Step 3 – Operations
  business_hours: string;
  business_phone: string;
  // Step 4 – AI Employee
  agent_nickname: string;
  agent_position: string;
  // Step 5 – Directives
  main_call_to_action: string;
  communication_style: string;
  system_type: string;
  // Step 6 – Knowledge (optional)
  memory_context: string;
  negative_instructions: string;
}

// ─── Static data ──────────────────────────────────────────────────────────────

const POSITIONS = [
  'Business Owner', 'CEO / Founder', 'General Manager', 'Operations Manager',
  'Marketing Manager', 'Sales Manager', 'Office Manager', 'HR Manager',
  'Customer Success Manager', 'IT Manager', 'Director', 'Executive Assistant', 'Other',
];

const INDUSTRIES = [
  { value: 'real-estate', label: 'Real Estate', icon: '🏠' },
  { value: 'solar', label: 'Solar Energy', icon: '☀️' },
  { value: 'roofing', label: 'Roofing', icon: '🏗️' },
  { value: 'dental', label: 'Dental Care', icon: '🦷' },
  { value: 'hvac', label: 'HVAC Services', icon: '❄️' },
  { value: 'hotel', label: 'Hotel & Hospitality', icon: '🏨' },
  { value: 'retail', label: 'Retail / E-commerce', icon: '🛒' },
  { value: 'legal', label: 'Legal Services', icon: '⚖️' },
  { value: 'financial', label: 'Financial Services', icon: '💼' },
  { value: 'healthcare', label: 'Healthcare', icon: '🏥' },
  { value: 'construction', label: 'Construction', icon: '🔨' },
  { value: 'automotive', label: 'Automotive', icon: '🚗' },
  { value: 'other', label: 'Other', icon: '✨' },
];

const HOURS_PRESETS = [
  { value: 'Mon-Fri 9am-5pm', label: 'Standard', sub: 'Mon – Fri, 9 AM – 5 PM' },
  { value: 'Mon-Fri 8am-6pm', label: 'Extended', sub: 'Mon – Fri, 8 AM – 6 PM' },
  { value: 'Mon-Sat 9am-6pm', label: 'Six Days', sub: 'Mon – Sat, 9 AM – 6 PM' },
  { value: '24/7', label: '24/7', sub: 'Around the clock, every day' },
  { value: 'Appointment Only', label: 'By Appt.', sub: 'Appointment only hours' },
  { value: 'Custom', label: 'Custom', sub: 'Define your own schedule' },
];

const AI_ROLES = [
  { value: 'Receptionist', label: 'Receptionist', icon: '📋', desc: 'Greets callers, routes inquiries, manages first contact' },
  { value: 'Front Desk', label: 'Front Desk', icon: '🖥️', desc: 'Handles intake, bookings, and general inquiries' },
  { value: 'Customer Support', label: 'Customer Support', icon: '🎧', desc: 'Resolves issues, answers questions, retains customers' },
  { value: 'Sales Assistant', label: 'Sales Assistant', icon: '📈', desc: 'Qualifies leads, handles objections, books demos' },
  { value: 'Office Assistant', label: 'Office Assistant', icon: '🗂️', desc: 'Manages appointments, reminders, and coordination' },
  { value: 'Virtual Assistant', label: 'Virtual Assistant', icon: '🤖', desc: 'General purpose AI employee for your team' },
  { value: 'Custom', label: 'Custom Role', icon: '⚡', desc: 'Define a unique role for your business needs' },
];

const PRIMARY_OBJECTIVES = [
  { value: 'book_appointments', label: 'Book Appointments', icon: '📅', desc: 'Schedule and confirm meetings automatically' },
  { value: 'generate_leads', label: 'Generate Leads', icon: '🎯', desc: 'Organize new inquiries and capture contact info' },
  { value: 'answer_questions', label: 'Answer Questions', icon: '💬', desc: 'Handle FAQs and product/service inquiries' },
  { value: 'route_callers', label: 'Route Callers', icon: '📞', desc: 'Direct callers to the right person or department' },
  { value: 'take_messages', label: 'Take Messages', icon: '📝', desc: 'Capture caller details and relay to your team' },
];

const COMM_STYLES = [
  { value: 'Professional', label: 'Professional', color: 'cyan', desc: 'Polished and precise' },
  { value: 'Friendly', label: 'Friendly', color: 'emerald', desc: 'Warm and approachable' },
  { value: 'Luxury', label: 'Luxury', color: 'amber', desc: 'Elevated and refined' },
  { value: 'High-energy', label: 'High-Energy', color: 'orange', desc: 'Enthusiastic and driven' },
  { value: 'Calm', label: 'Calm', color: 'violet', desc: 'Composed and reassuring' },
];

const STYLE_COLOR_MAP: Record<string, string> = {
  'Professional': 'from-cyan-500 to-blue-500',
  'Friendly': 'from-emerald-500 to-teal-500',
  'Luxury': 'from-amber-400 to-yellow-500',
  'High-energy': 'from-orange-500 to-rose-500',
  'Calm': 'from-violet-500 to-purple-600',
};

const STYLE_GLOW_MAP: Record<string, string> = {
  'Professional': 'rgba(6,182,212,0.5)',
  'Friendly': 'rgba(16,185,129,0.5)',
  'Luxury': 'rgba(251,191,36,0.5)',
  'High-energy': 'rgba(249,115,22,0.5)',
  'Calm': 'rgba(139,92,246,0.5)',
};

const TOTAL_STEPS = 6;

// ─── Sub-components ───────────────────────────────────────────────────────────

function SelectableCard({
  selected, onClick, children, className = '',
}: { selected: boolean; onClick: () => void; children: React.ReactNode; className?: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full text-left rounded-2xl border transition-all duration-200 cursor-pointer ${
        selected
          ? 'border-cyan-500 bg-cyan-500/10 shadow-[0_0_20px_rgba(6,182,212,0.15)]'
          : 'border-slate-700/60 bg-slate-900/60 hover:border-slate-600 hover:bg-slate-900'
      } ${className}`}
    >
      {children}
    </button>
  );
}

function Chip({
  label, desc, color = 'cyan', selected, onClick,
}: { label: string; desc?: string; color?: string; selected: boolean; onClick: () => void }) {
  const colorMap: Record<string, string> = {
    cyan: 'border-cyan-500 bg-cyan-500/15 text-cyan-300',
    emerald: 'border-emerald-500 bg-emerald-500/15 text-emerald-300',
    amber: 'border-amber-500 bg-amber-500/15 text-amber-300',
    orange: 'border-orange-500 bg-orange-500/15 text-orange-300',
    violet: 'border-violet-500 bg-violet-500/15 text-violet-300',
  };
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex flex-col items-start px-4 py-3 rounded-xl border text-sm font-semibold transition-all duration-200 ${
        selected
          ? colorMap[color] || colorMap.cyan
          : 'border-slate-700/60 bg-slate-900/60 text-slate-400 hover:border-slate-600 hover:text-slate-300'
      }`}
    >
      <span>{label}</span>
      {desc && <span className="text-xs font-normal opacity-70 mt-0.5">{desc}</span>}
    </button>
  );
}

function StepIndicator({ current, total }: { current: number; total: number }) {
  return (
    <div className="flex items-center gap-1.5">
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          className={`rounded-full transition-all duration-400 ${
            i < current
              ? 'w-6 h-1.5 bg-cyan-500'
              : i === current
              ? 'w-8 h-1.5 bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.6)]'
              : 'w-4 h-1.5 bg-slate-700'
          }`}
        />
      ))}
    </div>
  );
}

// ─── Live Preview Panel ───────────────────────────────────────────────────────

function LivePreview({ form, step }: { form: FormData; step: number }) {
  const gradient = form.communication_style
    ? STYLE_COLOR_MAP[form.communication_style] || 'from-cyan-500 to-blue-500'
    : 'from-cyan-500 to-blue-500';
  const glow = form.communication_style
    ? STYLE_GLOW_MAP[form.communication_style] || 'rgba(6,182,212,0.4)'
    : 'rgba(6,182,212,0.4)';

  const agentName = form.agent_nickname || 'Unnamed';
  const agentRole = form.agent_position || 'AI Employee';
  const orgName = form.organization_name || 'Your Business';
  const objective = form.main_call_to_action
    ? PRIMARY_OBJECTIVES.find(o => o.value === form.main_call_to_action)?.label || '–'
    : '–';

  const logs = [
    step >= 1 ? `[✓] Operator profile linked` : `[…] Awaiting operator profile`,
    step >= 2 ? `[✓] Business context loaded` : `[…] Awaiting business context`,
    step >= 3 ? `[✓] Schedule & routing configured` : `[…] Awaiting schedule setup`,
    step >= 4 ? `[✓] Agent identity assigned` : `[…] Building agent identity`,
    step >= 5 ? `[✓] Directives compiled` : `[…] Awaiting directives`,
    step >= 6 ? `[✓] Knowledge base initialised` : `[…] Awaiting knowledge`,
  ];

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center gap-3 mb-8">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <div className="w-2 h-2 rounded-full bg-cyan-400/60 animate-pulse" style={{ animationDelay: '0.3s' }} />
          <div className="w-2 h-2 rounded-full bg-cyan-400/30 animate-pulse" style={{ animationDelay: '0.6s' }} />
        </div>
        <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">Live Preview</span>
      </div>

      {/* Agent card */}
      <div className="relative mb-6">
        <div
          className="absolute -inset-px rounded-2xl opacity-60 blur-sm"
          style={{ background: `linear-gradient(135deg, ${glow.replace('0.5', '0.3')}, transparent)` }}
        />
        <div className="relative rounded-2xl border border-slate-700/50 bg-slate-900/80 p-5 backdrop-blur-sm">
          {/* Avatar orb */}
          <div className="flex items-center gap-4 mb-4">
            <div className="relative">
              <div
                className={`w-14 h-14 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center text-xl font-bold text-white shadow-lg`}
                style={{ boxShadow: `0 0 20px ${glow}` }}
              >
                {agentName.charAt(0).toUpperCase()}
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-slate-900 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
            </div>
            <div>
              <AnimatePresence mode="wait">
                <motion.p
                  key={agentName}
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 4 }}
                  transition={{ duration: 0.2 }}
                  className="font-bold text-white text-lg leading-tight"
                >
                  {agentName}
                </motion.p>
              </AnimatePresence>
              <AnimatePresence mode="wait">
                <motion.p
                  key={agentRole}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-sm text-slate-400"
                >
                  {agentRole}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>

          <div className="space-y-2.5">
            <div className="flex justify-between text-xs">
              <span className="text-slate-500">Organisation</span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={orgName}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-slate-300 font-medium text-right max-w-[140px] truncate"
                >
                  {orgName}
                </motion.span>
              </AnimatePresence>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-slate-500">Objective</span>
              <span className="text-slate-300 font-medium">{objective}</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-slate-500">Style</span>
              <span className={`font-semibold bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
                {form.communication_style || '–'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Console log */}
      <div className="font-mono text-xs rounded-xl bg-slate-950/80 border border-slate-800 p-4 space-y-1.5 flex-1">
        <p className="text-slate-600 mb-2 uppercase tracking-widest text-[10px]">Build Log</p>
        {logs.map((log, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0.3 }}
            animate={{ opacity: i < step ? 1 : 0.35 }}
            transition={{ duration: 0.3 }}
            className={i < step ? 'text-emerald-400' : 'text-slate-600'}
          >
            {log}
          </motion.p>
        ))}
      </div>

      <div className="mt-6 text-slate-600 text-xs">
        © {new Date().getFullYear()} Knoxified. All rights reserved.
      </div>
    </div>
  );
}

// ─── Deployment Loader ────────────────────────────────────────────────────────

function DeploymentLoader({ onComplete }: { onComplete: () => void }) {
  const [currentTask, setCurrentTask] = useState(0);
  const tasks = [
    'Encrypting agent configuration…',
    'Provisioning secure endpoints…',
    'Linking knowledge base…',
    'Compiling AI directives…',
    'Activating voice engine…',
    'Agent is online.',
  ];

  useEffect(() => {
    if (currentTask >= tasks.length - 1) {
      const t = setTimeout(onComplete, 1000);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setCurrentTask(c => c + 1), 700);
    return () => clearTimeout(t);
  }, [currentTask, onComplete, tasks.length]);

  return (
    <div className="flex flex-col items-center justify-center py-10 space-y-8">
      <div className="relative w-24 h-24">
        <div className="absolute inset-0 rounded-full border-2 border-cyan-500/30 animate-ping" />
        <div className="absolute inset-2 rounded-full border-2 border-cyan-500/50 animate-spin" style={{ animationDuration: '2s' }} />
        <div className="absolute inset-4 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.5)]">
          <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1 1 .903 2.68-.1 3.5A10.43 10.43 0 0112 21.5a10.43 10.43 0 01-5.102-1.198c-1.003-.82-1.1-2.5-.1-3.5L8.2 15.3" />
          </svg>
        </div>
      </div>

      <div className="w-full max-w-xs space-y-2">
        {tasks.map((task, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{
              opacity: i <= currentTask ? 1 : 0.2,
              x: 0,
            }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
            className={`flex items-center gap-3 text-sm font-mono ${
              i < currentTask ? 'text-emerald-400' : i === currentTask ? 'text-cyan-300' : 'text-slate-600'
            }`}
          >
            <span className="w-4 shrink-0">
              {i < currentTask ? '✓' : i === currentTask ? '›' : '·'}
            </span>
            {task}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// ─── Success Screen ───────────────────────────────────────────────────────────

function SuccessScreen({ form }: { form: FormData }) {
  const gradient = form.communication_style
    ? STYLE_COLOR_MAP[form.communication_style] || 'from-cyan-500 to-blue-500'
    : 'from-cyan-500 to-blue-500';
  const glow = form.communication_style
    ? STYLE_GLOW_MAP[form.communication_style] || 'rgba(6,182,212,0.5)'
    : 'rgba(6,182,212,0.5)';

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center text-center py-6 px-2"
    >
      {/* Agent avatar */}
      <div className="relative mb-6">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          className={`w-28 h-28 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center text-4xl font-bold text-white`}
          style={{ boxShadow: `0 0 40px ${glow}, 0 0 80px ${glow.replace('0.5', '0.2')}` }}
        >
          {(form.agent_nickname || 'A').charAt(0).toUpperCase()}
        </motion.div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: 'spring' }}
          className="absolute -bottom-2 -right-2 w-9 h-9 rounded-full bg-emerald-500 border-2 border-slate-900 flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.7)]"
        >
          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
        <p className="text-xs font-mono text-emerald-400 uppercase tracking-widest mb-2">Agent Online</p>
        <h2 className="text-3xl font-bold text-white mb-1">{form.agent_nickname || 'Your AI Employee'} is ready.</h2>
        <p className="text-slate-400 mb-1 text-sm">{form.agent_position} · {form.organization_name}</p>
        <p className="text-slate-500 text-sm mb-8">
          Your AI employee has been configured and is ready to serve your customers 24/7.
        </p>
      </motion.div>

      <motion.button
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        onClick={() => { window.location.href = 'https://dashboard.knoxified.org'; }}
        className={`w-full py-4 rounded-xl font-bold text-white bg-gradient-to-r ${gradient} hover:opacity-90 transition-all shadow-[0_0_25px_rgba(6,182,212,0.35)] hover:shadow-[0_0_40px_rgba(6,182,212,0.5)] flex items-center justify-center gap-3 text-base`}
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
        Launch Command Center
      </motion.button>

      <p className="text-slate-600 text-xs mt-4">You will be redirected to dashboard.knoxified.org</p>
    </motion.div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

const INITIAL_FORM: FormData = {
  full_name: '',
  position_in_org: '',
  organization_name: '',
  organization_website: '',
  organization_industry: '',
  business_hours: 'Mon-Fri 9am-5pm',
  business_phone: '',
  agent_nickname: '',
  agent_position: '',
  main_call_to_action: '',
  communication_style: 'Professional',
  system_type: '',
  memory_context: '',
  negative_instructions: '',
};

export default function OnboardingPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [isCheckingSession, setIsCheckingSession] = useState(true);
  const [step, setStep] = useState(0); // 0-5 = wizard steps; 6 = deploying; 7 = success
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward
  const [form, setForm] = useState<FormData>(INITIAL_FORM);
  const [positionSearch, setPositionSearch] = useState('');
  const [positionOpen, setPositionOpen] = useState(false);
  const [customHours, setCustomHours] = useState('');
  const [customHoursVisible, setCustomHoursVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [deployDone, setDeployDone] = useState(false);
  const positionRef = useRef<HTMLDivElement>(null);

  // ── Session check ──────────────────────────────────────────────────────────

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const { data: { user: authUser }, error } = await supabase.auth.getUser();
        if (error || !authUser) {
          router.push('/login');
          return;
        }
        setUser(authUser);
        // Pre-fill name from auth metadata if available
        const meta = authUser.user_metadata;
        if (meta?.full_name) setForm(f => ({ ...f, full_name: meta.full_name }));
        if (meta?.name) setForm(f => ({ ...f, full_name: meta.name }));
      } catch {
        router.push('/login');
      } finally {
        setIsCheckingSession(false);
      }
    };
    fetchSession();
  }, [router]);

  // ── Close dropdown on outside click ───────────────────────────────────────

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (positionRef.current && !positionRef.current.contains(e.target as Node)) {
        setPositionOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  // ── Field update helper ────────────────────────────────────────────────────

  const set = useCallback(<K extends keyof FormData>(key: K, value: FormData[K]) => {
    setForm(f => ({ ...f, [key]: value }));
  }, []);

  // ── Navigation ─────────────────────────────────────────────────────────────

  const goNext = useCallback(() => {
    setErrorMsg(null);
    setDirection(1);
    setStep(s => s + 1);
  }, []);

  const goBack = useCallback(() => {
    setErrorMsg(null);
    setDirection(-1);
    setStep(s => s - 1);
  }, []);

  // ── Validation per step ────────────────────────────────────────────────────

  const isStepValid = useCallback(() => {
    if (step === 0) return form.full_name.trim().length > 0 && form.position_in_org.length > 0;
    if (step === 1) return form.organization_name.trim().length > 0 && form.organization_industry.length > 0;
    if (step === 2) return form.business_hours.length > 0;
    if (step === 3) return form.agent_nickname.trim().length > 0 && form.agent_position.length > 0;
    if (step === 4) return form.main_call_to_action.length > 0;
    return true; // step 5 is optional
  }, [step, form]);

  // ── Submit / Save ──────────────────────────────────────────────────────────

  const handleSubmit = useCallback(async () => {
    if (!user) return;
    setErrorMsg(null);
    setIsLoading(true);
    setDirection(1);
    setStep(6); // show deployment loader

    try {
      const effectiveHours = form.business_hours === 'Custom' ? customHours || 'Custom' : form.business_hours;

      // 1. Upsert user_profiles
      const { error: profileError } = await supabase
        .from('user_profiles')
        .upsert({
          user_id: user.id,
          full_name: form.full_name,
          position_in_org: form.position_in_org,
          organization_name: form.organization_name,
          organization_industry: form.organization_industry,
          organization_website: form.organization_website || null,
          onboarding_completed: true,
          onboarding_step: TOTAL_STEPS,
        }, { onConflict: 'user_id' });

      if (profileError) {
        console.error('user_profiles upsert error:', profileError);
        setErrorMsg(`Profile save error: ${profileError.message}`);
        setIsLoading(false);
        setStep(5);
        return;
      }

      // 2. Upsert agent_configs (attempt with business_phone)
      const agentPayload: Record<string, any> = {
        user_id: user.id,
        organization_name: form.organization_name,
        agent_nickname: form.agent_nickname,
        agent_position: form.agent_position,
        system_type: form.system_type || form.agent_position,
        business_hours: effectiveHours,
        main_call_to_action: form.main_call_to_action,
        memory_context: form.memory_context || null,
        negative_instructions: form.negative_instructions || null,
        business_phone: form.business_phone || null,
      };

      let { error: agentError } = await supabase
        .from('agent_configs')
        .upsert(agentPayload, { onConflict: 'user_id' });

      // Retry without business_phone if column doesn't exist (42703 = undefined_column)
      if (agentError && (agentError.code === '42703' || agentError.message?.includes('business_phone'))) {
        const { business_phone, ...withoutPhone } = agentPayload;
        const retry = await supabase
          .from('agent_configs')
          .upsert(withoutPhone, { onConflict: 'user_id' });
        agentError = retry.error;
      }

      if (agentError) {
        console.error('agent_configs upsert error:', agentError);
        setErrorMsg(`Agent config error: ${agentError.message}`);
        setIsLoading(false);
        setStep(5);
        return;
      }

      // 3. Mark auth metadata as onboarded
      await supabase.auth.updateUser({ data: { onboarded: true } });

      setIsLoading(false);
      // Loader will trigger success via onComplete callback
    } catch (err: any) {
      setErrorMsg(err.message || 'An unexpected error occurred.');
      setIsLoading(false);
      setStep(5);
    }
  }, [user, form, customHours]);

  const handleDeployComplete = useCallback(() => {
    setDeployDone(true);
    setStep(7);
  }, []);

  // ── Slide animation variants ───────────────────────────────────────────────

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 60 : -60, opacity: 0, scale: 0.98 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -60 : 60, opacity: 0, scale: 0.98 }),
  };

  const transition = { duration: 0.3, ease: [0.4, 0, 0.2, 1] as any };

  // ── Loading gate ───────────────────────────────────────────────────────────

  if (isCheckingSession) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="flex flex-col items-center gap-5">
          <div className="relative w-14 h-14">
            <div className="absolute inset-0 rounded-full border-2 border-cyan-500/40 animate-ping" />
            <div className="absolute inset-1 rounded-full border-2 border-cyan-500/60 animate-spin" style={{ animationDuration: '1.5s' }} />
            <div className="absolute inset-3 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600" />
          </div>
          <p className="text-slate-400 text-sm font-medium">Initialising your session…</p>
        </div>
      </div>
    );
  }

  // ── Filtered positions ─────────────────────────────────────────────────────

  const filteredPositions = POSITIONS.filter(p =>
    p.toLowerCase().includes(positionSearch.toLowerCase())
  );

  // ─────────────────────────────────────────────────────────────────────────────

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col lg:flex-row relative overflow-hidden">
      {/* ── Left Preview Panel (desktop) ── */}
      <div className="hidden lg:flex w-[340px] xl:w-[380px] shrink-0 bg-slate-900/80 border-r border-slate-800/60 flex-col p-8 xl:p-10 relative">
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-[radial-gradient(ellipse_at_top_left,rgba(6,182,212,0.12),transparent_60%)] pointer-events-none" />
        <div className="relative z-10 flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-10">
            <Image src="/hotel_system.png" alt="Knoxified" width={40} height={40} style={{ width: 'auto' }} className="mix-blend-screen opacity-90 drop-shadow-[0_0_12px_rgba(6,182,212,0.6)]" />
            <span className="text-xl font-bold tracking-tight text-white">Knoxified</span>
          </div>

          {/* Headline */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-slate-50 mb-2 leading-tight">
              Your AI employee is<br />coming to life.
            </h1>
            <p className="text-sm text-slate-500 leading-relaxed">
              Each step builds the intelligence that will represent your business 24/7.
            </p>
          </div>

          {/* Step progress */}
          <div className="mb-8">
            <StepIndicator current={Math.min(step, TOTAL_STEPS - 1)} total={TOTAL_STEPS} />
            <p className="text-xs text-slate-600 mt-2 font-mono">
              {step < TOTAL_STEPS ? `Step ${step + 1} of ${TOTAL_STEPS}` : 'Deployment complete'}
            </p>
          </div>

          {/* Live preview */}
          <div className="flex-1 min-h-0">
            <LivePreview form={form} step={step} />
          </div>
        </div>
      </div>

      {/* ── Right Form Panel ── */}
      <div className="flex-1 flex flex-col items-center justify-center p-4 sm:p-8 lg:p-12 relative min-h-screen lg:min-h-0">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/8 rounded-full blur-[120px] pointer-events-none" />

        {/* Mobile header */}
        <div className="lg:hidden flex items-center gap-3 mb-8 self-start">
          <Image src="/hotel_system.png" alt="Knoxified" width={36} height={36} style={{ width: 'auto' }} className="mix-blend-screen opacity-90" />
          <span className="text-lg font-bold text-white">Knoxified</span>
        </div>

        <div className="w-full max-w-lg relative z-10">
          {/* Mobile step indicator */}
          <div className="lg:hidden mb-6">
            <StepIndicator current={Math.min(step, TOTAL_STEPS - 1)} total={TOTAL_STEPS} />
            {step < TOTAL_STEPS && (
              <p className="text-xs text-slate-600 mt-2 font-mono">Step {step + 1} of {TOTAL_STEPS}</p>
            )}
          </div>

          {/* Card shell */}
          <div className="bg-slate-900/80 border border-slate-800/60 rounded-3xl shadow-2xl shadow-black/40 backdrop-blur-sm overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              {/* ── STEP 0: About You ── */}
              {step === 0 && (
                <motion.div
                  key="step0"
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={transition}
                  className="p-8 sm:p-10"
                >
                  <div className="mb-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold mb-4">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                      Step 1 — About You
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-2">Let's start with you.</h2>
                    <p className="text-slate-400 text-sm">Your AI employee will represent you — so it needs to know who you are.</p>
                  </div>

                  <div className="space-y-5">
                    {/* Full Name */}
                    <div className="space-y-1.5">
                      <label className="block text-sm font-medium text-slate-300">Full Name</label>
                      <input
                        type="text"
                        value={form.full_name}
                        onChange={e => set('full_name', e.target.value)}
                        placeholder="e.g. Alex Johnson"
                        className="w-full px-4 py-3 rounded-xl border border-slate-700/60 bg-slate-950/60 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/50 transition-all"
                        autoFocus
                      />
                    </div>

                    {/* Position searchable dropdown */}
                    <div className="space-y-1.5" ref={positionRef}>
                      <label className="block text-sm font-medium text-slate-300">Your Role / Position</label>
                      <p className="text-xs text-slate-600">Used to personalise how your AI handles internal escalations.</p>
                      <div className="relative">
                        <input
                          type="text"
                          value={form.position_in_org || positionSearch}
                          onChange={e => {
                            setPositionSearch(e.target.value);
                            set('position_in_org', '');
                            setPositionOpen(true);
                          }}
                          onFocus={() => setPositionOpen(true)}
                          placeholder="Search your role…"
                          className="w-full px-4 py-3 rounded-xl border border-slate-700/60 bg-slate-950/60 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/50 transition-all pr-10"
                        />
                        <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                        {positionOpen && filteredPositions.length > 0 && (
                          <div className="absolute top-full left-0 right-0 mt-1 z-50 bg-slate-900 border border-slate-700 rounded-xl shadow-2xl overflow-hidden max-h-52 overflow-y-auto">
                            {filteredPositions.map(p => (
                              <button
                                key={p}
                                type="button"
                                onClick={() => {
                                  set('position_in_org', p);
                                  setPositionSearch(p);
                                  setPositionOpen(false);
                                }}
                                className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${
                                  form.position_in_org === p
                                    ? 'bg-cyan-500/10 text-cyan-400'
                                    : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                                }`}
                              >
                                {p}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={goNext}
                    disabled={!isStepValid()}
                    className="mt-8 w-full py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 transition-all shadow-[0_0_20px_rgba(6,182,212,0.25)] hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    Continue
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                </motion.div>
              )}

              {/* ── STEP 1: Business Details ── */}
              {step === 1 && (
                <motion.div
                  key="step1"
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={transition}
                  className="p-8 sm:p-10"
                >
                  <div className="mb-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold mb-4">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                      Step 2 — Your Business
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-2">Tell us about your business.</h2>
                    <p className="text-slate-400 text-sm">This gives your AI employee business context so it can represent you accurately.</p>
                  </div>

                  <div className="space-y-5">
                    <div className="space-y-1.5">
                      <label className="block text-sm font-medium text-slate-300">Organisation Name</label>
                      <input
                        type="text"
                        value={form.organization_name}
                        onChange={e => set('organization_name', e.target.value)}
                        placeholder="e.g. Acme Corp"
                        className="w-full px-4 py-3 rounded-xl border border-slate-700/60 bg-slate-950/60 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/50 transition-all"
                        autoFocus
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-sm font-medium text-slate-300">Website <span className="text-slate-600 font-normal">(optional)</span></label>
                      <p className="text-xs text-slate-600">Your AI will use this to learn about your services later in the dashboard.</p>
                      <input
                        type="url"
                        value={form.organization_website}
                        onChange={e => set('organization_website', e.target.value)}
                        placeholder="https://yourbusiness.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-700/60 bg-slate-950/60 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/50 transition-all"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-slate-300">Industry</label>
                      <p className="text-xs text-slate-600">Tailors your AI's language and knowledge to your sector.</p>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {INDUSTRIES.map(ind => (
                          <SelectableCard
                            key={ind.value}
                            selected={form.organization_industry === ind.value}
                            onClick={() => set('organization_industry', ind.value)}
                            className="px-3 py-3 flex items-center gap-2"
                          >
                            <span className="text-lg">{ind.icon}</span>
                            <span className={`text-xs font-semibold ${form.organization_industry === ind.value ? 'text-cyan-300' : 'text-slate-400'}`}>
                              {ind.label}
                            </span>
                          </SelectableCard>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3 mt-8">
                    <button onClick={goBack} className="flex-1 py-3.5 rounded-xl font-semibold text-slate-400 border border-slate-700/60 hover:border-slate-600 hover:text-slate-300 transition-all bg-slate-900/40">
                      Back
                    </button>
                    <button
                      onClick={goNext}
                      disabled={!isStepValid()}
                      className="flex-[2] py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 transition-all shadow-[0_0_20px_rgba(6,182,212,0.25)] disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      Continue
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </button>
                  </div>
                </motion.div>
              )}

              {/* ── STEP 2: Operations & Schedule ── */}
              {step === 2 && (
                <motion.div
                  key="step2"
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={transition}
                  className="p-8 sm:p-10"
                >
                  <div className="mb-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold mb-4">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                      Step 3 — Operations
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-2">When are you open?</h2>
                    <p className="text-slate-400 text-sm">Your AI employee works 24/7, but knows when to escalate and when to take messages.</p>
                  </div>

                  <div className="space-y-5">
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-slate-300">Business Hours</label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {HOURS_PRESETS.map(preset => (
                          <SelectableCard
                            key={preset.value}
                            selected={form.business_hours === preset.value}
                            onClick={() => {
                              set('business_hours', preset.value);
                              setCustomHoursVisible(preset.value === 'Custom');
                            }}
                            className="px-4 py-3 flex flex-col"
                          >
                            <span className={`font-bold text-sm ${form.business_hours === preset.value ? 'text-cyan-300' : 'text-slate-300'}`}>
                              {preset.label}
                            </span>
                            <span className="text-xs text-slate-500 mt-0.5 leading-tight">{preset.sub}</span>
                          </SelectableCard>
                        ))}
                      </div>
                      {customHoursVisible && (
                        <motion.input
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          type="text"
                          value={customHours}
                          onChange={e => setCustomHours(e.target.value)}
                          placeholder="e.g. Mon–Thu 10am–7pm, Fri 10am–4pm"
                          className="w-full px-4 py-3 rounded-xl border border-slate-700/60 bg-slate-950/60 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/50 transition-all mt-2"
                        />
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-sm font-medium text-slate-300">
                        Business Phone <span className="text-slate-600 font-normal">(optional)</span>
                      </label>
                      <p className="text-xs text-slate-600">Used for routing and caller ID configuration in your dashboard.</p>
                      <input
                        type="tel"
                        value={form.business_phone}
                        onChange={e => set('business_phone', e.target.value)}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-4 py-3 rounded-xl border border-slate-700/60 bg-slate-950/60 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/50 transition-all"
                      />
                    </div>
                  </div>

                  <div className="flex gap-3 mt-8">
                    <button onClick={goBack} className="flex-1 py-3.5 rounded-xl font-semibold text-slate-400 border border-slate-700/60 hover:border-slate-600 hover:text-slate-300 transition-all bg-slate-900/40">Back</button>
                    <button
                      onClick={goNext}
                      disabled={!isStepValid()}
                      className="flex-[2] py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 transition-all shadow-[0_0_20px_rgba(6,182,212,0.25)] disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      Continue
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </button>
                  </div>
                </motion.div>
              )}

              {/* ── STEP 3: AI Employee Identity ── */}
              {step === 3 && (
                <motion.div
                  key="step3"
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={transition}
                  className="p-8 sm:p-10"
                >
                  <div className="mb-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold mb-4">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                      Step 4 — Your AI Employee
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-2">Meet your new employee.</h2>
                    <p className="text-slate-400 text-sm">Give your AI a name and role. This is who your customers will interact with.</p>
                  </div>

                  <div className="space-y-6">
                    <div className="space-y-1.5">
                      <label className="block text-sm font-medium text-slate-300">Agent Name</label>
                      <p className="text-xs text-slate-600">What should your AI employee be called? e.g. "Alex", "Maya", "Kai"</p>
                      <input
                        type="text"
                        value={form.agent_nickname}
                        onChange={e => set('agent_nickname', e.target.value)}
                        placeholder="e.g. Maya"
                        className="w-full px-4 py-3 rounded-xl border border-slate-700/60 bg-slate-950/60 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/50 transition-all"
                        autoFocus
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-slate-300">AI Role</label>
                      <p className="text-xs text-slate-600">Shapes how your AI approaches interactions and resolves requests.</p>
                      <div className="grid grid-cols-1 gap-2">
                        {AI_ROLES.map(role => (
                          <SelectableCard
                            key={role.value}
                            selected={form.agent_position === role.value}
                            onClick={() => {
                              set('agent_position', role.value);
                              if (role.value !== 'Custom') set('system_type', role.value);
                            }}
                            className="px-4 py-3 flex items-center gap-4"
                          >
                            <span className="text-xl">{role.icon}</span>
                            <div className="flex-1 min-w-0">
                              <span className={`font-semibold text-sm block ${form.agent_position === role.value ? 'text-cyan-300' : 'text-slate-300'}`}>
                                {role.label}
                              </span>
                              <span className="text-xs text-slate-500 block truncate">{role.desc}</span>
                            </div>
                            <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                              form.agent_position === role.value ? 'border-cyan-500 bg-cyan-500' : 'border-slate-700'
                            }`}>
                              {form.agent_position === role.value && (
                                <svg className="w-2.5 h-2.5 text-slate-950" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                              )}
                            </div>
                          </SelectableCard>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3 mt-8">
                    <button onClick={goBack} className="flex-1 py-3.5 rounded-xl font-semibold text-slate-400 border border-slate-700/60 hover:border-slate-600 hover:text-slate-300 transition-all bg-slate-900/40">Back</button>
                    <button
                      onClick={goNext}
                      disabled={!isStepValid()}
                      className="flex-[2] py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 transition-all shadow-[0_0_20px_rgba(6,182,212,0.25)] disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      Continue
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </button>
                  </div>
                </motion.div>
              )}

              {/* ── STEP 4: Directives & Communication Style ── */}
              {step === 4 && (
                <motion.div
                  key="step4"
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={transition}
                  className="p-8 sm:p-10"
                >
                  <div className="mb-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold mb-4">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                      Step 5 — Directives
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-2">Give {form.agent_nickname || 'your agent'} a mission.</h2>
                    <p className="text-slate-400 text-sm">Define what your AI employee is optimised to accomplish on every call.</p>
                  </div>

                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-slate-300">Primary Objective</label>
                      <div className="grid grid-cols-1 gap-2">
                        {PRIMARY_OBJECTIVES.map(obj => (
                          <SelectableCard
                            key={obj.value}
                            selected={form.main_call_to_action === obj.value}
                            onClick={() => set('main_call_to_action', obj.value)}
                            className="px-4 py-3.5 flex items-center gap-4"
                          >
                            <span className="text-xl">{obj.icon}</span>
                            <div>
                              <span className={`font-semibold text-sm block ${form.main_call_to_action === obj.value ? 'text-cyan-300' : 'text-slate-300'}`}>
                                {obj.label}
                              </span>
                              <span className="text-xs text-slate-500">{obj.desc}</span>
                            </div>
                          </SelectableCard>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-slate-300">Communication Style</label>
                      <p className="text-xs text-slate-600">The tone and personality of every interaction {form.agent_nickname || 'your agent'} has with customers.</p>
                      <div className="flex flex-wrap gap-2">
                        {COMM_STYLES.map(style => (
                          <Chip
                            key={style.value}
                            label={style.label}
                            desc={style.desc}
                            color={style.color}
                            selected={form.communication_style === style.value}
                            onClick={() => set('communication_style', style.value)}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3 mt-8">
                    <button onClick={goBack} className="flex-1 py-3.5 rounded-xl font-semibold text-slate-400 border border-slate-700/60 hover:border-slate-600 hover:text-slate-300 transition-all bg-slate-900/40">Back</button>
                    <button
                      onClick={goNext}
                      disabled={!isStepValid()}
                      className="flex-[2] py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 transition-all shadow-[0_0_20px_rgba(6,182,212,0.25)] disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      Continue
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </button>
                  </div>
                </motion.div>
              )}

              {/* ── STEP 5: Knowledge & Boundaries ── */}
              {step === 5 && (
                <motion.div
                  key="step5"
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={transition}
                  className="p-8 sm:p-10"
                >
                  <div className="mb-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold mb-4">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                      Step 6 — Knowledge <span className="text-slate-600">· Optional</span>
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-2">Train {form.agent_nickname || 'your agent'}.</h2>
                    <p className="text-slate-400 text-sm">The more context you provide, the more accurate and helpful your AI will be from day one. Both fields are optional and can be updated from the dashboard.</p>
                  </div>

                  {errorMsg && (
                    <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                      {errorMsg}
                    </div>
                  )}

                  <div className="space-y-5">
                    <div className="space-y-1.5">
                      <label className="block text-sm font-medium text-slate-300">Knowledge Base</label>
                      <p className="text-xs text-slate-600">
                        What should {form.agent_nickname || 'your agent'} know about your business? Services, pricing, FAQs, locations, team members — anything helpful.
                      </p>
                      <textarea
                        value={form.memory_context}
                        onChange={e => set('memory_context', e.target.value)}
                        placeholder={`e.g. We are a dental practice in Austin, TX. We offer cleanings, whitening, and orthodontics. Our lead dentist is Dr. Patel. We accept most major insurance plans...`}
                        rows={5}
                        className="w-full px-4 py-3 rounded-xl border border-slate-700/60 bg-slate-950/60 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/50 transition-all resize-none text-sm"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-sm font-medium text-slate-300">Off-Limits Instructions</label>
                      <p className="text-xs text-slate-600">
                        Topics, phrases, or actions {form.agent_nickname || 'your agent'} should never engage with. Competitors, legal topics, pricing guarantees, etc.
                      </p>
                      <textarea
                        value={form.negative_instructions}
                        onChange={e => set('negative_instructions', e.target.value)}
                        placeholder="e.g. Never mention competitor names. Do not discuss refund policies. Do not quote prices directly..."
                        rows={3}
                        className="w-full px-4 py-3 rounded-xl border border-slate-700/60 bg-slate-950/60 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/50 transition-all resize-none text-sm"
                      />
                    </div>
                  </div>

                  <div className="flex gap-3 mt-8">
                    <button onClick={goBack} className="flex-1 py-3.5 rounded-xl font-semibold text-slate-400 border border-slate-700/60 hover:border-slate-600 hover:text-slate-300 transition-all bg-slate-900/40">Back</button>
                    <button
                      onClick={handleSubmit}
                      disabled={isLoading}
                      className="flex-[2] py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 transition-all shadow-[0_0_20px_rgba(6,182,212,0.25)] hover:shadow-[0_0_35px_rgba(6,182,212,0.45)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isLoading ? (
                        <>
                          <svg className="animate-spin w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Deploying…
                        </>
                      ) : (
                        <>
                          Deploy {form.agent_nickname || 'Agent'}
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-center text-slate-600 text-xs mt-4">
                    You can update all of this from your dashboard at any time.
                  </p>
                </motion.div>
              )}

              {/* ── STEP 6: Deployment Loader ── */}
              {step === 6 && (
                <motion.div
                  key="step6"
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={transition}
                  className="p-8 sm:p-10"
                >
                  <div className="mb-4 text-center">
                    <h2 className="text-2xl font-bold text-white mb-2">Activating {form.agent_nickname || 'your agent'}…</h2>
                    <p className="text-slate-400 text-sm">Your AI employee is being brought online. This takes just a moment.</p>
                  </div>
                  <DeploymentLoader onComplete={handleDeployComplete} />
                </motion.div>
              )}

              {/* ── STEP 7: Success ── */}
              {step === 7 && (
                <motion.div
                  key="step7"
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={transition}
                  className="p-8 sm:p-10"
                >
                  <SuccessScreen form={form} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
