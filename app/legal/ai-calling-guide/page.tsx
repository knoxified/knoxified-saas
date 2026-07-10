export default function AICallingGuidePage() {
  return (
    <div className="container mx-auto px-4 py-24 max-w-4xl">
      <h1 className="text-4xl md:text-5xl font-bold text-slate-50 mb-8 tracking-tight">AI Calling Guide</h1>
      <div className="prose prose-invert prose-lg text-slate-300 max-w-none">
        <p>
          This guide provides practical information for customers configuring Voice Agents for outbound calling. It is general guidance, not legal advice — laws vary by jurisdiction and by how you use the platform, so we encourage speaking with a qualified attorney about your specific use case.
        </p>

        <h2 className="text-2xl font-bold text-slate-50 mt-12 mb-4">1. Know Who You&apos;re Calling</h2>
        <p>
          Before launching an outbound campaign, confirm you have a lawful basis to contact each person on your list. This typically means the contact is an existing customer, has previously inquired with your business, or has otherwise given consent to be contacted. Purchased, scraped, or otherwise unverified contact lists are not permitted on Knoxified.
        </p>

        <h2 className="text-2xl font-bold text-slate-50 mt-12 mb-4">2. Document Consent</h2>
        <p>
          Keep a record of how and when each contact consented to be reached, or the nature of your prior relationship with them (for example: submitted a form, made a purchase, booked a call). This documentation is your responsibility to maintain, and may be required if a complaint or dispute arises.
        </p>

        <h2 className="text-2xl font-bold text-slate-50 mt-12 mb-4">3. Disclose That It&apos;s an AI</h2>
        <p>
          Where required by applicable law, your Voice Agent should clearly state that the call recipient is speaking with an AI system, early in the call. We recommend including this disclosure in your agent&apos;s opening script regardless of jurisdiction, as a best practice.
        </p>

        <h2 className="text-2xl font-bold text-slate-50 mt-12 mb-4">4. Identify Yourself and Your Business</h2>
        <p>
          Calls should open with a clear identification of the calling business — for example, &quot;Hello, this is {'{assistant name}'} from {'{your business name}'}.&quot; This supports both caller-ID transparency expectations and general good-faith calling practices.
        </p>

        <h2 className="text-2xl font-bold text-slate-50 mt-12 mb-4">5. Honor Opt-Outs Immediately</h2>
        <p>
          If someone asks not to be contacted again, add them to your suppression list right away using the tools available in your dashboard. Numbers on a suppression list are excluded from future campaigns for your account. Delayed or inconsistent opt-out handling is one of the most common sources of complaints and legal exposure.
        </p>

        <h2 className="text-2xl font-bold text-slate-50 mt-12 mb-4">6. Respect Calling Windows</h2>
        <p>
          Many jurisdictions restrict the hours during which outbound calls may be made (commonly 8am–9pm in the recipient&apos;s local time zone under U.S. federal rules, with some states applying stricter windows). Configure your campaigns accordingly.
        </p>

        <h2 className="text-2xl font-bold text-slate-50 mt-12 mb-4">7. Call Recording Disclosure</h2>
        <p>
          Several U.S. states and countries require all parties to consent before a call is recorded (&quot;two-party&quot; or &quot;all-party&quot; consent jurisdictions), and in some of these, recording without disclosure can carry criminal as well as civil liability. If your Voice Agent records calls, Knoxified includes a recording disclosure by default near the start of every call (for example, &quot;this call may be recorded for quality purposes&quot;), regardless of jurisdiction. We recommend leaving this enabled unless you have confirmed with legal counsel that it is unnecessary for your specific use case.
        </p>

        <h2 className="text-2xl font-bold text-slate-50 mt-12 mb-4">7A. The National Do-Not-Call Registry</h2>
        <p>
          If your outbound calling falls within the definition of telemarketing under applicable law, you may be required to scrub your calling list against the U.S. National Do-Not-Call Registry (or the equivalent registry in your jurisdiction) in addition to maintaining your own suppression list. Access to the U.S. National DNC Registry requires businesses to register directly and obtain a Subscription Account Number (SAN) at <a href="https://telemarketing.donotcall.gov" className="text-cyan-400 hover:text-cyan-300" target="_blank" rel="noopener noreferrer">telemarketing.donotcall.gov</a>. This registration and any resulting scrubbing obligation is the customer&apos;s responsibility; Knoxified does not register on a customer&apos;s behalf. Calls to existing customers or contacts with an established business relationship are generally exempt from DNC Registry requirements, but exemptions vary by jurisdiction — confirm your specific obligations with legal counsel.
        </p>

        <h2 className="text-2xl font-bold text-slate-50 mt-12 mb-4">8. What Knoxified Provides</h2>
        <p>
          Knoxified provides tools to help support compliant calling practices, including suppression list management, consent-source tracking, and audit logs of automation activity. These tools are designed to support your compliance efforts — they do not substitute for your own legal review of how you use the platform.
        </p>

        <h2 className="text-2xl font-bold text-slate-50 mt-12 mb-4">9. Questions</h2>
        <p>
          For questions about this guide or your specific use case, contact <a href="mailto:compliance@knoxified.org" className="text-cyan-400 hover:text-cyan-300">compliance@knoxified.org</a>. See also our <a href="/legal/compliance" className="text-cyan-400 hover:text-cyan-300">Compliance page</a> and <a href="/legal/acceptable-use" className="text-cyan-400 hover:text-cyan-300">Acceptable Use Policy</a>.
        </p>
      </div>
    </div>
  );
}
