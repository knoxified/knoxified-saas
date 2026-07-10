export default function AcceptableUsePage() {
  return (
    <div className="container mx-auto px-4 py-24 max-w-4xl">
      <h1 className="text-4xl md:text-5xl font-bold text-slate-50 mb-8 tracking-tight">Acceptable Use Policy</h1>
      <div className="prose prose-invert prose-lg text-slate-300 max-w-none">
        <p>
          This Acceptable Use Policy governs use of Knoxified&apos;s platform, AI systems, automations, voice agents, APIs, dashboards, integrations, and related services.
        </p>
        <p className="mt-4">
          Customers are responsible for configuring and using Knoxified lawfully, ethically, and in compliance with all applicable consent, privacy, communications, employment, consumer-protection, and platform rules.
        </p>

        <h2 className="text-2xl font-bold text-slate-50 mt-12 mb-4">1. Prohibited Uses</h2>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li>Spam, phishing, deceptive messaging, impersonation, or fraudulent activity.</li>
          <li>Robocalling, unsolicited telemarketing, unsolicited bulk messaging, or communications without required consent.</li>
          <li>Use of Knoxified to send messages to purchased, scraped, harvested, or otherwise unauthorized contact lists.</li>
          <li>Malware, credential theft, account takeover attempts, security probing, or attempts to disrupt or bypass platform protections.</li>
          <li>Abuse of infrastructure, rate limits, trial access, automation credits, telephony systems, APIs, or integrations.</li>
          <li>Use of AI outputs as the sole basis for employment, lending, insurance, healthcare, housing, legal eligibility, or similarly regulated decisions about a person.</li>
          <li>Any unlawful, harmful, harassing, discriminatory, exploitative, or privacy-invasive use.</li>
        </ul>

        <h2 className="text-2xl font-bold text-slate-50 mt-12 mb-4">2. Communications Consent</h2>
        <p>
          Customers must obtain and maintain all legally required permissions before using Knoxified for calls, SMS, email, voice messages, recordings, or automated communications. This includes documenting the lawful basis and source of consent for each contact, honoring do-not-call and opt-out requests without delay, and maintaining accurate suppression lists. Knoxified provides tools to support these obligations; Customers remain responsible for using them correctly. Knoxified may suspend accounts or features that show signs of unauthorized messaging, spam, robocalling, or platform misuse.
        </p>

        <h2 className="text-2xl font-bold text-slate-50 mt-12 mb-4">2A. AI Disclosure</h2>
        <p>
          Where required by applicable law, Voice Agents must clearly disclose to call recipients that they are interacting with an AI system. See our <a href="/legal/ai-calling-guide" className="text-cyan-400 hover:text-cyan-300">AI Calling Guide</a> for further guidance.
        </p>

        <h2 className="text-2xl font-bold text-slate-50 mt-12 mb-4">3. AI Assistance and Human Oversight</h2>
        <p>
          Knoxified provides AI-assisted workflows. Customers configure those workflows and remain responsible for reviewing outputs, making decisions, and ensuring appropriate human oversight. Knoxified is not intended to autonomously determine employment, lending, insurance, healthcare, housing, legal eligibility, or similar regulated outcomes.
        </p>

        <h2 className="text-2xl font-bold text-slate-50 mt-12 mb-4">4. Enforcement</h2>
        <p>
          Knoxified may investigate suspected violations and may throttle, suspend, restrict, or terminate access to protect users, recipients, third-party platforms, and platform integrity.
        </p>

        <h2 className="text-2xl font-bold text-slate-50 mt-12 mb-4">5. Reporting Abuse</h2>
        <p>
          If you believe you have received an unlawful or unwanted call, message, or communication from a Knoxified customer, please report it to <a href="mailto:compliance@knoxified.org" className="text-cyan-400 hover:text-cyan-300">compliance@knoxified.org</a> with as much detail as possible (date, time, phone number contacted, and nature of the communication). We investigate all reports and take action where warranted, including suspension or termination of the responsible account.
        </p>

        <h2 className="text-2xl font-bold text-slate-50 mt-12 mb-4">6. Contact</h2>
        <p>
          To report abuse or ask questions about this policy, contact <a href="mailto:support@knoxified.org" className="text-cyan-400 hover:text-cyan-300">support@knoxified.org</a> or <a href="mailto:compliance@knoxified.org" className="text-cyan-400 hover:text-cyan-300">compliance@knoxified.org</a>.
        </p>
      </div>
    </div>
  );
}
