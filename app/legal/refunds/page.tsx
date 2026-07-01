export default function RefundsPage() {
  return (
    <div className="container mx-auto px-4 py-24 max-w-4xl">
      <h1 className="text-4xl md:text-5xl font-bold text-slate-50 mb-8 tracking-tight">Refund Policy</h1>
      <div className="prose prose-invert prose-lg text-slate-300 max-w-none">
        <p>This Refund Policy governs purchases, subscriptions, usage charges, and related payments made to Knoxified.</p>
        
        <h2 className="text-2xl font-bold text-slate-50 mt-12 mb-4">1. General Policy</h2>
        <ul className="list-none space-y-4">
          <li><strong>1.1.</strong> Refund eligibility depends on subscription status, usage consumption, infrastructure provisioning, operational costs incurred, and applicable law.</li>
          <li><strong>1.2.</strong> Due to the nature of AI infrastructure, cloud resources, API consumption, automation execution, and digital service provisioning, many costs are incurred immediately upon usage or activation.</li>
        </ul>

        <h2 className="text-2xl font-bold text-slate-50 mt-12 mb-4">2. Subscription Billing</h2>
        <ul className="list-none space-y-4">
          <li><strong>2.1.</strong> Subscription fees are generally non-refundable once a billing cycle has started.</li>
          <li><strong>2.2.</strong> Cancelling a subscription stops future renewals but does not automatically generate refunds for the active billing period.</li>
          <li><strong>2.3.</strong> Users remain responsible for charges incurred before cancellation.</li>
        </ul>

        <h2 className="text-2xl font-bold text-slate-50 mt-12 mb-4">3. Usage-Based Charges</h2>
        <ul className="list-none space-y-4">
          <li><strong>3.1.</strong> Usage-related charges including AI processing, telephony usage, API consumption, hosting resources, automation execution, storage, and infrastructure costs are non-refundable.</li>
          <li><strong>3.2.</strong> Third-party processing fees and payment provider charges are non-refundable.</li>
        </ul>

        <h2 className="text-2xl font-bold text-slate-50 mt-12 mb-4">4. Trial Access</h2>
        <ul className="list-none space-y-4">
          <li><strong>4.1.</strong> Trial plans may contain feature limits, operational caps, or restricted functionality.</li>
          <li><strong>4.2.</strong> Knoxified reserves the right to modify or terminate trial access at any time.</li>
        </ul>

        <h2 className="text-2xl font-bold text-slate-50 mt-12 mb-4">5. Billing Errors</h2>
        <ul className="list-none space-y-4">
          <li><strong>5.1.</strong> If a User believes an incorrect charge occurred, they must contact Knoxified within a reasonable period for investigation.</li>
          <li><strong>5.2.</strong> Verified billing errors may be corrected through credits, adjustments, or refunds where appropriate.</li>
        </ul>

        <h2 className="text-2xl font-bold text-slate-50 mt-12 mb-4">6. Abuse Prevention</h2>
        <ul className="list-none space-y-4">
          <li><strong>6.1.</strong> Refund abuse, chargeback abuse, fraudulent disputes, policy exploitation, automation abuse, or attempts to intentionally consume infrastructure before refund requests may result in suspension or permanent termination of Services.</li>
        </ul>

        <h2 className="text-2xl font-bold text-slate-50 mt-12 mb-4">7. Legal Rights</h2>
        <ul className="list-none space-y-4">
          <li><strong>7.1.</strong> Nothing in this Refund Policy limits rights that may apply under mandatory consumer protection laws or regulations.</li>
        </ul>

        <h2 className="text-2xl font-bold text-slate-50 mt-12 mb-4">8. Contact</h2>
        <p>Refund-related inquiries:</p>
        <p className="mt-2">📧 <a href="mailto:support@knoxified.org" className="text-cyan-400 hover:text-cyan-300">support@knoxified.org</a></p>
        <p className="mt-1">🌐 <a href="https://knoxified.org" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300">https://knoxified.org</a></p>

      </div>
    </div>
  )
}
