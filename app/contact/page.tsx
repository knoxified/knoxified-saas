
'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const mailtoLink = `mailto:support@knoxified.org?subject=New Message from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          to: 'support@knoxified.org',
          from: formData.email,
          name: formData.name,
          message: formData.message,
        }),
      }).catch(() => null);

      if (response?.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        window.location.href = mailtoLink;
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col md:flex-row relative overflow-hidden">
      {/* Left Panel - Information */}
      <div className="w-full md:w-[40%] lg:w-[35%] bg-slate-900 border-r border-slate-800 relative flex flex-col p-8 md:p-12 z-20 md:min-h-screen">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-cyan-500/10 to-transparent pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-cyan-500/20 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="relative z-10 flex flex-col justify-between h-full">
          <div>
            <Link href="/" className="inline-block mb-12 group">
              <span className="text-2xl font-bold tracking-tight text-white drop-shadow-[0_0_10px_rgba(6,182,212,0.3)]">Knoxified</span>
            </Link>
            
            <h1 className="text-3xl md:text-4xl font-bold text-slate-50 mb-6 tracking-tight leading-tight">
              Get in touch with our team.
            </h1>
            <p className="text-lg text-slate-400 mb-12 leading-relaxed">
              Have questions about automation deployments or need support? We're here to help.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Mail className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-50 mb-1">Email</h4>
                  <a href="mailto:support@knoxified.org" className="text-cyan-400 hover:text-cyan-300 transition-colors break-all">
                    support@knoxified.org
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-50 mb-1">Location</h4>
                  <p className="text-slate-400">Lagos, Nigeria</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Phone className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-50 mb-1">Support Hours</h4>
                  <p className="text-slate-400 text-sm">24/7 Monitoring<br/>Human: 9AM-5PM EST</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="hidden md:block text-slate-500 text-sm mt-12">
            <p>© 2025 Knoxified. All rights reserved.</p>
          </div>
        </div>
      </div>

      {/* Right Panel - Form */}
      <div className="w-full md:flex-1 flex flex-col items-center justify-center p-4 md:p-12 relative overflow-y-auto">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="w-full max-w-xl relative z-10">
          {submitStatus === 'success' ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-50 mb-2">Message Sent!</h3>
              <p className="text-slate-400 mb-6">Thank you for reaching out. We'll get back to you shortly.</p>
              <button
                onClick={() => setSubmitStatus('idle')}
                className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="mb-10">
                <h2 className="text-3xl font-bold text-slate-50 mb-3">Send us a Message</h2>
                <p className="text-slate-400">We typically respond within 24 hours.</p>
              </div>

              {submitStatus === 'error' && (
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm font-medium">
                  Failed to send message. Please try again or email us directly.
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-3">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="w-full bg-slate-900/50 border border-slate-700/50 rounded-xl px-5 py-3 text-slate-50 placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/50 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-3">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@company.com"
                  className="w-full bg-slate-900/50 border border-slate-700/50 rounded-xl px-5 py-3 text-slate-50 placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/50 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-3">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell us how we can help..."
                  className="w-full bg-slate-900/50 border border-slate-700/50 rounded-xl px-5 py-3 text-slate-50 placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/50 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 mt-6 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 disabled:from-slate-600 disabled:to-slate-700 text-white font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] disabled:shadow-none flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

