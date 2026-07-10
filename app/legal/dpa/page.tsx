export default function DPAPage() {
  return (
    <div className="container mx-auto px-4 py-24 max-w-4xl">
      <h1 className="text-4xl md:text-5xl font-bold text-slate-50 mb-8 tracking-tight">Data Processing Agreement</h1>
      <div className="prose prose-invert prose-lg text-slate-300 max-w-none">
        <p>
          This Data Processing Agreement (&quot;DPA&quot;) forms part of the Terms &amp; Conditions between Knoxified (&quot;Processor&quot;) and the customer (&quot;Controller&quot;) and applies where Knoxified processes personal data on the Controller&apos;s behalf in connection with the Services.
        </p>

        <h2 className="text-2xl font-bold text-slate-50 mt-12 mb-4">1. Subject Matter and Duration</h2>
        <p>This DPA applies for as long as Knoxified processes personal data on the Controller&apos;s behalf under the Terms &amp; Conditions.</p>

        <h2 className="text-2xl font-bold text-slate-50 mt-12 mb-4">2. Nature and Purpose of Processing</h2>
        <p>Knoxified processes personal data to provide the Services, including AI voice agents, automations, call handling, scheduling, and related workflow features, as configured by the Controller.</p>

        <h2 className="text-2xl font-bold text-slate-50 mt-12 mb-4">3. Categories of Data and Data Subjects</h2>
        <p>Personal data processed may include contact information, call recordings and transcripts, automation inputs and outputs, and related metadata, relating to the Controller&apos;s customers, leads, employees, or other individuals the Controller interacts with through the Services.</p>

        <h2 className="text-2xl font-bold text-slate-50 mt-12 mb-4">4. Controller and Processor Obligations</h2>
        <p>The Controller is responsible for ensuring it has a lawful basis to provide personal data to Knoxified for processing, and for complying with its own obligations under applicable data protection law. Knoxified will process personal data only on the Controller&apos;s documented instructions, as set out in the Terms &amp; Conditions and this DPA, except where otherwise required by law.</p>

        <h2 className="text-2xl font-bold text-slate-50 mt-12 mb-4">5. Confidentiality</h2>
        <p>Knoxified ensures that personnel authorized to process personal data are subject to confidentiality obligations.</p>

        <h2 className="text-2xl font-bold text-slate-50 mt-12 mb-4">6. Security Measures</h2>
        <p>Knoxified implements appropriate technical and organizational measures to protect personal data against unauthorized access, loss, or disclosure, consistent with our <a href="/legal/privacy" className="text-cyan-400 hover:text-cyan-300">Privacy Policy</a>.</p>

        <h2 className="text-2xl font-bold text-slate-50 mt-12 mb-4">7. Sub-processors</h2>
        <p>Knoxified may engage sub-processors (including cloud hosting, AI model, and telephony providers) to support delivery of the Services, and remains responsible for such sub-processors&apos; compliance with data protection obligations equivalent to those in this DPA.</p>

        <h2 className="text-2xl font-bold text-slate-50 mt-12 mb-4">8. Data Subject Requests</h2>
        <p>Where Knoxified receives a request from a data subject relating to personal data processed on the Controller&apos;s behalf, Knoxified will notify the Controller and provide reasonable assistance in responding to that request.</p>

        <h2 className="text-2xl font-bold text-slate-50 mt-12 mb-4">9. Data Breach Notification</h2>
        <p>Knoxified will notify the Controller without undue delay after becoming aware of a personal data breach affecting the Controller&apos;s data, and will provide reasonably available information to assist the Controller in meeting its own notification obligations.</p>

        <h2 className="text-2xl font-bold text-slate-50 mt-12 mb-4">10. International Transfers</h2>
        <p>Where personal data is transferred outside the Controller&apos;s jurisdiction, Knoxified takes reasonable steps to ensure such transfers are subject to appropriate safeguards, consistent with our <a href="/legal/privacy" className="text-cyan-400 hover:text-cyan-300">Privacy Policy</a>.</p>

        <h2 className="text-2xl font-bold text-slate-50 mt-12 mb-4">11. Deletion or Return of Data</h2>
        <p>Upon termination of the Services, Knoxified will delete or return personal data processed on the Controller&apos;s behalf in accordance with the retention terms described in our <a href="/legal/terms" className="text-cyan-400 hover:text-cyan-300">Terms &amp; Conditions</a> and <a href="/legal/privacy" className="text-cyan-400 hover:text-cyan-300">Privacy Policy</a>, except where retention is required by law.</p>

        <h2 className="text-2xl font-bold text-slate-50 mt-12 mb-4">12. Contact</h2>
        <p>For questions about this DPA, or to request a countersigned copy for your records, contact <a href="mailto:compliance@knoxified.org" className="text-cyan-400 hover:text-cyan-300">compliance@knoxified.org</a>.</p>
      </div>
    </div>
  );
}
