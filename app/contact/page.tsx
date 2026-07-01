export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-24 max-w-5xl">
       <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/80 backdrop-blur-md border border-cyan-500/30 text-sm font-medium text-cyan-400 mb-8 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
         Get in touch
       </div>
      <h1 className="text-4xl md:text-6xl font-bold text-slate-50 mb-6 tracking-tight">Contact Us</h1>
      <p className="text-xl md:text-2xl text-slate-400 mb-16">Reach out for custom deployments or general inquiries.</p>
      
      <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
        <div>
          <h3 className="text-3xl font-semibold text-slate-50 mb-6 tracking-tight">Information</h3>
          <p className="text-slate-400 mb-2 text-lg">Email: <a href="mailto:support@knoxified.org" className="text-cyan-400 hover:text-cyan-300">support@knoxified.org</a></p>
          <p className="text-slate-400 mb-12 text-lg">Location: [Global / Remote]</p>
          
          <div className="p-8 rounded-2xl bg-slate-800/80 backdrop-blur-md border border-slate-700/50 shadow-lg">
            <h4 className="text-slate-50 font-bold mb-4 text-xl">Support Hours</h4>
            <p className="text-slate-400 leading-relaxed mb-4">24/7 Engine monitoring.</p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-emerald-500/20 text-emerald-400 text-sm font-medium border border-emerald-500/20">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              Human support: 9AM - 5PM EST
            </div>
          </div>
        </div>
        
        <form className="space-y-6 bg-slate-800/80 backdrop-blur-md p-8 md:p-10 rounded-3xl border border-slate-700/50 shadow-xl">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Name</label>
            <input type="text" className="w-full bg-slate-900/50 border border-slate-700/50 rounded-xl px-5 py-3 text-slate-50 focus:outline-none focus:border-cyan-500 focus:shadow-[0_0_15px_rgba(6,182,212,0.2)] transition-all" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
            <input type="email" className="w-full bg-slate-900/50 border border-slate-700/50 rounded-xl px-5 py-3 text-slate-50 focus:outline-none focus:border-cyan-500 focus:shadow-[0_0_15px_rgba(6,182,212,0.2)] transition-all" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Message</label>
            <textarea rows={5} className="w-full bg-slate-900/50 border border-slate-700/50 rounded-xl px-5 py-3 text-slate-50 focus:outline-none focus:border-cyan-500 focus:shadow-[0_0_15px_rgba(6,182,212,0.2)] transition-all resize-none"></textarea>
          </div>
          <button type="button" className="w-full py-4 mt-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-xl hover:from-cyan-400 hover:to-blue-400 transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]">
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}
