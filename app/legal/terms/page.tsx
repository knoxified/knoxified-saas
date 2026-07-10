export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-24 max-w-4xl">
      <h1 className="text-4xl md:text-5xl font-bold text-slate-50 mb-8 tracking-tight">Terms &amp; Conditions</h1>
      <div className="prose prose-invert prose-lg text-slate-300 max-w-none">
        
        <p>Welcome to Knoxified.</p>
        <p className="mt-4">
          These Terms and Conditions (&ldquo;Terms&rdquo;) govern access to and use of Knoxified&apos;s platform, AI systems, automations, voice agents, APIs, software tools, websites, and related services (&ldquo;Services&rdquo;). By accessing or using the Services, creating an account, subscribing, or making payment, you agree to these Terms.
        </p>
        <p className="mt-4">
          These Terms should be read together with our Privacy Policy and Refund Policy, both incorporated by reference.
        </p>

        <h2 className="text-2xl font-bold text-slate-50 mt-12 mb-4">1. Definitions</h2>
        <ul className="list-none space-y-4">
          <li><strong>1.1.</strong> &ldquo;Knoxified&rdquo; refers to Knoxified and its operators, affiliates, platforms, systems, and authorized representatives.</li>
          <li><strong>1.2.</strong> &ldquo;Client,&rdquo; &ldquo;User,&rdquo; or &ldquo;Customer&rdquo; refers to any individual, business, or organization using the Services.</li>
          <li><strong>1.3.</strong> &ldquo;Services&rdquo; refers to all software, AI systems, automations, APIs, dashboards, integrations, deployments, consulting, and related offerings provided by Knoxified.</li>
          <li><strong>1.4.</strong> &ldquo;Third-Party Services&rdquo; refers to external providers, APIs, telephony providers, hosting platforms, payment processors, AI model providers, or software not owned by Knoxified.</li>
          <li><strong>1.5.</strong> &ldquo;Automation Credits&rdquo; refers to the consumable usage unit allocated under a User&apos;s plan, deducted per automation run, voice minute, or other metered action as described in Section 5.</li>
          <li><strong>1.6.</strong> &ldquo;Voice Agent&rdquo; refers to any AI-driven voice system, whether inbound, outbound, or virtual, provided as part of the Services.</li>
        </ul>

        <h2 className="text-2xl font-bold text-slate-50 mt-12 mb-4">2. Nature of Services</h2>
        <ul className="list-none space-y-4">
          <li><strong>2.1.</strong> Knoxified primarily operates as a Software-as-a-Service (SaaS) platform providing AI-powered systems and automation solutions.</li>
          <li><strong>2.2.</strong> Certain Services may include custom implementation, onboarding, integrations, consulting, or enterprise configuration.</li>
          <li><strong>2.3.</strong> Knoxified does not provide legal, financial, medical, accounting, or regulatory advice.</li>
          <li><strong>2.4.</strong> Users are solely responsible for ensuring their use of the Services complies with applicable laws, regulations, platform policies, and consent requirements within their jurisdiction, including but not limited to telemarketing, robocall, call-recording, and consumer-protection laws referenced in Section 7A.</li>
          <li><strong>2.5.</strong> Voice Agents and outbound calling features are provided for legitimate business communications (e.g., appointment scheduling, customer support, lead follow-up). Use of Voice Agents to impersonate a real individual without consent, to generate deceptive or fraudulent content, or to circumvent telemarketing consent requirements is strictly prohibited and grounds for immediate termination under Section 14.</li>
        </ul>

        <h2 className="text-2xl font-bold text-slate-50 mt-12 mb-4">3. Accounts and Access</h2>
        <ul className="list-none space-y-4">
          <li><strong>3.1.</strong> Users may be required to create an account to access portions of the Services.</li>
          <li><strong>3.2.</strong> Users are responsible for maintaining the security of their credentials and systems.</li>
          <li><strong>3.3.</strong> Users must provide accurate and current information.</li>
          <li><strong>3.4.</strong> Knoxified reserves the right to suspend or terminate accounts for fraud, abuse, unlawful activity, security risks, or violations of these Terms.</li>
        </ul>

        <h2 className="text-2xl font-bold text-slate-50 mt-12 mb-4">4. Subscriptions and Billing</h2>
        <ul className="list-none space-y-4">
          <li><strong>4.1.</strong> Certain Services operate on recurring subscription billing, at the plans, pricing, and limits published on our pricing page at the time of purchase (currently: Starter, Pro, Enterprise, and Custom).</li>
          <li><strong>4.2.</strong> Subscription pricing, limits, usage allowances, and billing intervals may be modified periodically. Material changes affecting an active subscription will be communicated in advance of the next billing cycle.</li>
          <li><strong>4.3.</strong> By subscribing, Users authorize recurring charges through our payment processor. Payments are processed by Paddle.com Market Limited (or its applicable regional affiliate), acting as our authorized reseller and Merchant of Record. Your purchase is subject to Paddle&apos;s own Buyer Terms in addition to these Terms.</li>
          <li><strong>4.4.</strong> Third-party costs including API usage, telephony charges, hosting fees, model usage fees, and infrastructure costs may apply separately and are disclosed at the time of purchase where applicable.</li>
          <li><strong>4.5.</strong> Failure to complete payment may result in suspension, limitation, or termination of Services.</li>
          <li><strong>4.6.</strong> Users may cancel a subscription at any time through account settings or by contacting <a href="mailto:support@knoxified.org" className="text-cyan-400 hover:text-cyan-300">support@knoxified.org</a>. Cancellation takes effect at the end of the current billing period, and no further charges will be made. Refund eligibility is governed by our Refund Policy.</li>
        </ul>

        <h2 className="text-2xl font-bold text-slate-50 mt-12 mb-4">5. Usage Limits and Automation Credits</h2>
        <ul className="list-none space-y-4">
          <li><strong>5.1.</strong> Each plan includes fixed allowances for voice minutes, active automations, and Automation Credits, as published on our pricing page.</li>
          <li><strong>5.2.</strong> Automation Credits, voice minutes, and active automation slots reset at the start of each billing cycle. Unused amounts do not carry over to the next cycle unless expressly stated otherwise for a specific plan.</li>
          <li><strong>5.3.</strong> Overage beyond plan allowances is not permitted by default; once a limit is reached, the affected feature (e.g., voice calls, automation runs) may be paused until the next billing cycle or until the User upgrades their plan. Knoxified will provide usage warnings at 80% and 95% of plan allowances where technically feasible.</li>
          <li><strong>5.4.</strong> Knoxified reserves the right to throttle, restrict, suspend, or block usage exceeding plan allocations or creating infrastructure risk.</li>
          <li><strong>5.5.</strong> Unlimited or high-allowance plans remain subject to reasonable use protections against abuse, exploitation, automation attacks, or system degradation.</li>
        </ul>

        <h2 className="text-2xl font-bold text-slate-50 mt-12 mb-4">6. Trials and Promotional Access</h2>
        <ul className="list-none space-y-4">
          <li><strong>6.1.</strong> Knoxified may offer free trials, promotional access, or temporary feature unlocks, with limits as described on our pricing page (e.g., a 14-day Trial Package with limited voice minutes and Automation Credits).</li>
          <li><strong>6.2.</strong> Where a trial requires payment details at signup, your subscription will automatically convert to a paid plan at the then-current price upon expiry of the trial period, unless you cancel before the trial ends. We will make reasonable efforts to notify you before this conversion occurs.</li>
          <li><strong>6.3.</strong> Trial availability, duration, and feature access may be modified or revoked at any time.</li>
          <li><strong>6.4.</strong> Expired trials may result in restricted functionality until a paid subscription is activated.</li>
        </ul>

        <h2 className="text-2xl font-bold text-slate-50 mt-12 mb-4">7. Third-Party Integrations</h2>
        <ul className="list-none space-y-4">
          <li><strong>7.1.</strong> Knoxified may integrate with external services including AI providers, CRMs, communication platforms, telephony providers, payment processors, and automation systems.</li>
          <li><strong>7.2.</strong> Knoxified is not responsible for outages, policy changes, suspensions, pricing changes, or failures caused by Third-Party Services.</li>
          <li><strong>7.3.</strong> Users remain responsible for compliance with third-party platform rules and policies.</li>
        </ul>

        <h2 className="text-2xl font-bold text-slate-50 mt-12 mb-4">7A. Telephony and Communications Compliance</h2>
        <ul className="list-none space-y-4">
          <li><strong>7A.1.</strong> Where Services include inbound or outbound calling (Voice Agents), Users are solely responsible for obtaining all consents required under applicable telemarketing, robocall, and call-recording laws in their jurisdiction and the jurisdiction of the call recipient (including, where applicable, the U.S. Telephone Consumer Protection Act and equivalent state or international laws).</li>
          <li><strong>7A.2.</strong> Users must not use Voice Agents for unsolicited telemarketing, spam calling, or any purpose prohibited under applicable law or platform policy.</li>
          <li><strong>7A.3.</strong> Knoxified may suspend telephony features for any account showing patterns consistent with unlawful or unauthorized calling activity.</li>
          <li><strong>7A.4.</strong> User agrees to indemnify, defend, and hold harmless Knoxified, its officers, directors, employees, and agents from and against any and all claims, demands, losses, liabilities, damages, fines, and expenses (including reasonable attorneys&apos; fees) arising out of or relating to: (a) User&apos;s use of Voice Agents or outbound calling features in violation of the Telephone Consumer Protection Act (TCPA), the Telemarketing Sales Rule, or any applicable state or international telemarketing, robocall, or consent law; (b) User&apos;s failure to obtain, document, or maintain required consent from call recipients; or (c) User&apos;s failure to honor do-not-call requests or maintain suppression lists as required by law. Knoxified reserves the right, at its own expense, to assume exclusive defense of any matter otherwise subject to indemnification by User, in which case User will cooperate with Knoxified&apos;s defense of such claim.</li>
          <li><strong>7A.5.</strong> Users must ensure that any Voice Agent clearly discloses to call recipients, at the start of the interaction, that they are speaking with an AI system, where required by applicable law.</li>
          <li><strong>7A.6.</strong> Users are responsible for maintaining and honoring do-not-call and suppression list requests. Knoxified provides tools within the Services to support suppression list management; Users remain responsible for ensuring such lists are applied correctly and promptly.</li>
        </ul>

        <h2 className="text-2xl font-bold text-slate-50 mt-12 mb-4">8. Data and Privacy</h2>
        <ul className="list-none space-y-4">
          <li><strong>8.1.</strong> Knoxified may process system data, logs, metadata, prompts, automation events, and communication data necessary for service delivery, monitoring, security, and optimization.</li>
          <li><strong>8.2.</strong> Users are responsible for obtaining legally required consent from their end-users where applicable, including consent to call recording and AI-driven communication where required.</li>
          <li><strong>8.3.</strong> Use of the Services is also governed by our Privacy Policy.</li>
        </ul>

        <h2 className="text-2xl font-bold text-slate-50 mt-12 mb-4">8A. AI Governance and Human Oversight</h2>
        <ul className="list-none space-y-4">
          <li><strong>8A.1.</strong> Knoxified provides AI-assisted workflow tools. AI outputs are intended to support Users, not replace User judgment, professional review, or legally required human oversight.</li>
          <li><strong>8A.2.</strong> Users configure their own workflows, criteria, prompts, integrations, communication settings, and business rules, and remain responsible for all decisions, actions, and outcomes resulting from their use of the Services.</li>
          <li><strong>8A.3.</strong> Knoxified is not intended to autonomously determine employment, lending, insurance, healthcare, housing, legal eligibility, or similar regulated decisions about a natural person.</li>
          <li><strong>8A.4.</strong> Users must review AI-assisted outputs before relying on them in operational, legal, financial, medical, employment, insurance, or similarly sensitive contexts.</li>
        </ul>

        <h2 className="text-2xl font-bold text-slate-50 mt-12 mb-4">9. Intellectual Property</h2>
        <ul className="list-none space-y-4">
          <li><strong>9.1.</strong> Knoxified retains ownership of all proprietary software, frameworks, systems, workflows, automation logic, infrastructure, branding, and platform architecture.</li>
          <li><strong>9.2.</strong> Users receive a limited, non-exclusive, revocable license to use the Services under their active subscription or agreement.</li>
          <li><strong>9.3.</strong> Users may not copy, reverse-engineer, redistribute, resell, exploit, or white-label the Services without written authorization.</li>
        </ul>

        <h2 className="text-2xl font-bold text-slate-50 mt-12 mb-4">10. Affiliate Programs</h2>
        <ul className="list-none space-y-4">
          <li><strong>10.1.</strong> Knoxified may offer affiliate, referral, or partner programs.</li>
          <li><strong>10.2.</strong> Participation may be suspended or terminated for fraud, spam, deceptive marketing, or abuse.</li>
          <li><strong>10.3.</strong> Knoxified reserves the right to modify commission structures and program terms.</li>
        </ul>

        <h2 className="text-2xl font-bold text-slate-50 mt-12 mb-4">11. Service Availability</h2>
        <ul className="list-none space-y-4">
          <li><strong>11.1.</strong> Knoxified does not guarantee uninterrupted or error-free operation.</li>
          <li><strong>11.2.</strong> Maintenance, upgrades, outages, infrastructure failures, AI provider limitations, or security incidents may affect availability.</li>
          <li><strong>11.3.</strong> AI systems are probabilistic and outputs may contain inaccuracies or unexpected behavior.</li>
        </ul>

        <h2 className="text-2xl font-bold text-slate-50 mt-12 mb-4">12. Limitation of Liability</h2>
        <ul className="list-none space-y-4">
          <li><strong>12.1.</strong> Knoxified shall not be liable for indirect, incidental, special, consequential, or business-related damages.</li>
          <li><strong>12.2.</strong> Total liability shall not exceed the amount paid by the User to Knoxified during the preceding three months.</li>
          <li><strong>12.3.</strong> Knoxified is not responsible for losses resulting from misuse, configuration errors, third-party failures, security breaches outside its control, or unlawful use of the Services.</li>
        </ul>

        <h2 className="text-2xl font-bold text-slate-50 mt-12 mb-4">13. Indemnification</h2>
        <ul className="list-none space-y-4">
          <li><strong>13.1.</strong> Users agree to indemnify and hold harmless Knoxified from claims, liabilities, losses, damages, and expenses arising from misuse of the Services or violations of applicable law.</li>
        </ul>

        <h2 className="text-2xl font-bold text-slate-50 mt-12 mb-4">14. Termination</h2>
        <ul className="list-none space-y-4">
          <li><strong>14.1.</strong> Users may stop using the Services at any time.</li>
          <li><strong>14.2.</strong> Knoxified may suspend or terminate Services for violations of these Terms, fraud, abuse, security risks, or non-payment.</li>
          <li><strong>14.3.</strong> Upon termination, access to certain systems, automations, dashboards, or stored data may be restricted or removed. Knoxified will retain account and usage data for up to 30 days following termination to allow for reactivation or data export requests, after which it may be permanently deleted, except where longer retention is required by law.</li>
        </ul>

        <h2 className="text-2xl font-bold text-slate-50 mt-12 mb-4">15. Changes to Terms</h2>
        <ul className="list-none space-y-4">
          <li><strong>15.1.</strong> Knoxified may modify these Terms periodically.</li>
          <li><strong>15.2.</strong> Continued use of the Services after updates constitutes acceptance of the revised Terms.</li>
        </ul>

        <h2 className="text-2xl font-bold text-slate-50 mt-12 mb-4">16. Governing Law</h2>
        <ul className="list-none space-y-4">
          <li><strong>16.1.</strong> These Terms are governed by the laws of the Federal Republic of Nigeria, without regard to its conflict-of-laws principles, without limiting any mandatory consumer-protection rights available to Users under the law of their own jurisdiction.</li>
          <li><strong>16.2.</strong> Any dispute arising from these Terms shall be subject to the exclusive jurisdiction of the courts of Nigeria, except where a User&apos;s local law requires otherwise.</li>
          <li><strong>16.3.</strong> Should Knoxified&apos;s operating entity be reincorporated in another jurisdiction, this Section will be updated accordingly and the updated Terms will apply prospectively from the date of publication.</li>
        </ul>

        <h2 className="text-2xl font-bold text-slate-50 mt-12 mb-4">17. Contact Information</h2>
        <p>For questions regarding these Terms:</p>
        <p className="mt-2">📧 <a href="mailto:support@knoxified.org" className="text-cyan-400 hover:text-cyan-300">support@knoxified.org</a></p>
        <p className="mt-1">🌐 <a href="https://knoxified.org" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300">https://knoxified.org</a></p>

      </div>
    </div>
  )
}
