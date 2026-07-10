export default function CompliancePage() {
  return (
    <div className="container mx-auto px-4 py-24 max-w-4xl">
      <h1 className="text-4xl md:text-5xl font-bold text-slate-50 mb-8 tracking-tight">Compliance</h1>
      <div className="prose prose-invert prose-lg text-slate-300 max-w-none">
        <p>
          Knoxified provides tools to help customers meet their applicable legal obligations when using AI voice agents, automations, and customer communication features. This page explains how responsibility is divided between Knoxified and our customers, and what tools we provide to support compliant use.
        </p>

        <h2 className="text-2xl font-bold text-slate-50 mt-12 mb-4">1. Business Information</h2>
        <p>
          Knoxified is operated from Lagos, Nigeria. See our <a href="/legal/terms" className="text-cyan-400 hover:text-cyan-300">Terms &amp; Conditions</a> for our governing law and jurisdiction.
        </p>

        <h2 className="text-2xl font-bold text-slate-50 mt-12 mb-4">2. How Responsibility Is Divided</h2>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li><strong>Knoxified provides the infrastructure</strong> — AI voice agents, automation workflows, and supporting tools.</li>
          <li><strong>Customers are contractually required to comply with applicable law</strong>, including telemarketing, robocall, consent, and data-protection laws in their jurisdiction and the jurisdiction of anyone they contact.</li>
          <li><strong>Knoxified implements reasonable compliance features</strong> in the product, including suppression list management, consent-source tracking, and audit logging.</li>
          <li><strong>Knoxified monitors for abuse</strong> and takes action, including suspension or termination, when violations are detected or reported.</li>
        </ul>
        <p className="mt-4">
          This is a shared responsibility model. Knoxified does not represent or warrant that use of the Services is automatically compliant with any specific law — that depends on how a customer configures and uses the platform. Our aim is to provide the tools and guardrails that make compliant use straightforward.
        </p>

        <h2 className="text-2xl font-bold text-slate-50 mt-12 mb-4">3. TCPA, DNC, and Telemarketing Law</h2>
        <p>
          Customers using Voice Agents for outbound calling are responsible for ensuring they have a lawful basis to contact each recipient, in accordance with the U.S. Telephone Consumer Protection Act (TCPA), Telemarketing Sales Rule, and equivalent state or international laws. This includes obtaining and documenting consent where required, honoring do-not-call requests, and maintaining accurate suppression lists. See our <a href="/legal/ai-calling-guide" className="text-cyan-400 hover:text-cyan-300">AI Calling Guide</a> for practical guidance.
        </p>

        <h2 className="text-2xl font-bold text-slate-50 mt-12 mb-4">4. Suppression Lists and Opt-Outs</h2>
        <p>
          Knoxified provides tools for customers to manage suppression and do-not-call lists within their account. Numbers on a suppression list are excluded from future outbound campaigns for that account. Customers are responsible for keeping suppression lists current and for promptly processing opt-out requests received through any channel.
        </p>

        <h2 className="text-2xl font-bold text-slate-50 mt-12 mb-4">5. Audit Logs and Records</h2>
        <p>
          Knoxified maintains logs of automation activity, call events, and account actions to support accountability and, where needed, dispute resolution. Customers are responsible for maintaining their own records of consent and lawful basis for contact, as required by applicable law.
        </p>

        <h2 className="text-2xl font-bold text-slate-50 mt-12 mb-4">6. Data Retention</h2>
        <p>
          Call recordings, transcripts, and automation logs are retained as described in our <a href="/legal/privacy" className="text-cyan-400 hover:text-cyan-300">Privacy Policy</a>. Customers should not rely on Knoxified for long-term retention of records they are independently required to keep under applicable law.
        </p>

        <h2 className="text-2xl font-bold text-slate-50 mt-12 mb-4">7. Reporting a Concern</h2>
        <p>
          If you believe a Knoxified customer has contacted you unlawfully or without consent, or if you have a compliance question, contact <a href="mailto:compliance@knoxified.org" className="text-cyan-400 hover:text-cyan-300">compliance@knoxified.org</a>. We investigate all reports.
        </p>

        <h2 className="text-2xl font-bold text-slate-50 mt-12 mb-4">8. Related Policies</h2>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li><a href="/legal/terms" className="text-cyan-400 hover:text-cyan-300">Terms &amp; Conditions</a></li>
          <li><a href="/legal/privacy" className="text-cyan-400 hover:text-cyan-300">Privacy Policy</a></li>
          <li><a href="/legal/acceptable-use" className="text-cyan-400 hover:text-cyan-300">Acceptable Use Policy</a></li>
          <li><a href="/legal/ai-calling-guide" className="text-cyan-400 hover:text-cyan-300">AI Calling Guide</a></li>
          <li><a href="/legal/refunds" className="text-cyan-400 hover:text-cyan-300">Refund Policy</a></li>
        </ul>
      </div>
    </div>
  );
}
