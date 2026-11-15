// Knoxified Affiliate Program Terms. One source of truth: the signed agreement record, the
// public terms page on knoxified.org and the portal guide are all generated from this file.
// Any change to the text changes TERMS_SHA256 and must come with a new TERMS_VERSION.

export const TERMS_VERSION = "1.0";
export const TERMS_DATE = "14 November 2026";
export const NOTICE_EMAIL = "affiliates@knoxified.org";

export type TermsSection = {
  id: string;
  title: string;
  // Numbered clauses. A line break followed by "- " starts a bullet list inside the clause.
  clauses: string[];
  table?: { head: string[]; rows: string[][] };
};

export const TERMS: TermsSection[] = [
  {
    id: "parties",
    title: "Who this agreement is between",
    clauses: [
      "This Affiliate Program Terms document (the Terms), together with your Partner Order Form (the Order Form), forms the agreement between you (the Affiliate) and Knoxified (we, us). The Order Form records your name, email address, country, Referral Code and commission rates.",
      "Knoxified is the business name under which Knox Favour, an individual, currently operates the Knoxified platform and its related services. If the business is later carried on by a company, we may transfer this agreement to that company under clause 18.4, and we will tell you when we do.",
      "You may be an individual or a business. If you sign for a business, you confirm that you have authority to bind it. You must be at least 18 years old.",
    ],
  },
  {
    id: "definitions",
    title: "Definitions",
    clauses: [
      "In these Terms:\n- Customer means a person or business that creates a Knoxified account and pays for a Knoxified subscription.\n- New Customer means a Customer who creates their first-ever Knoxified account after clicking your Referral Link, within the Attribution Window, and who is not you, a person connected to you, or someone who held a Knoxified account before.\n- Referred Customer means a New Customer to whom your referral is attributed under clause 4.\n- Referral Link means the link containing your Referral Code that we give you, for example knoxified.org/?ref=your-code, with any campaign tags you add.\n- Referral Code means the short code that identifies you in the Referral Link.\n- Attribution Window means 60 days from the first time a visitor clicks your Referral Link on a given browser or device.\n- Qualifying Payment means a subscription payment made by a Referred Customer that has cleared through our payment processor and has not been refunded, reversed or charged back. Free trials and bonus minutes or credits are never Qualifying Payments.\n- Net Revenue means the amount we actually receive for a Qualifying Payment after deducting the payment processor's fees, and excluding taxes (such as VAT or sales tax), refunds, chargebacks, and pass-through charges for third-party services such as telephony usage that are billed at cost.\n- Commission means the share of Net Revenue we owe you under clause 6.\n- Year One Rate and Year Two Rate mean the percentages stated in your Order Form. Unless your Order Form says otherwise they are 30% and 20%.\n- Hold Period means 21 days from the date of the Qualifying Payment.\n- Payout Date means the 15th day of each month.\n- Portal means the Knoxified Partners website where you see your referrals, Commission, payout history and Payment Log.\n- Payment Log means our record of each Referred Customer payment, the Commission calculated on it, and its status and payout. It is kept by us and does not depend on any particular payment processor.\n- Policies means the Knoxified Terms of Service, Privacy Policy, Acceptable Use Policy, AI Calling Guide, Compliance Notice and Refund Policy published on knoxified.org.",
    ],
  },
  {
    id: "joining",
    title: "Joining the program and signing this agreement",
    clauses: [
      "You join by redeeming an invitation code, giving your name and email address, confirming your email address with a one-time code, reading these Terms and signing electronically in the Portal.",
      "By signing you agree to these Terms and the Order Form. Your typed name and drawn signature are your electronic signature, and you agree that an electronic signature has the same effect as a handwritten one.",
      "We have signed in advance. We are bound by this agreement from the moment we issue you an invitation code that you redeem and sign. Our signature is shown on the signed record.",
      "When you sign, we create a signed record containing the Order Form, these Terms, both signatures, your IP address, the time, and proof that your email address was verified. We calculate a SHA-256 fingerprint of the record and obtain an independent timestamp token for it from a public time-stamping authority. We email you the record, its fingerprint and the timestamp token, and you can download them from the Portal at any time. Anyone can use the fingerprint and token to check that the record has not changed since it was signed.",
      "We may decline or end an application at any time before signing, for example if the details are incomplete or we have concerns about you or your audience.",
    ],
  },
  {
    id: "attribution",
    title: "How referrals are tracked and credited",
    clauses: [
      "When someone clicks your Referral Link we set a first-party cookie on their browser that records your Referral Code for the Attribution Window. If they create a Knoxified account while the cookie is present, the account is attributed to you.",
      "First click wins. If a visitor clicks more than one affiliate's link, the first link clicked within the Attribution Window gets the credit and a later click does not replace it.",
      "Only accounts created after the click can be attributed. A person who already has a Knoxified account cannot become your Referred Customer. Attribution is decided when the account is created and does not change afterwards.",
      "Tracking depends on the visitor's browser. If cookies are blocked, deleted or switched between devices, we may not be able to credit you. We do not make manual attributions, except that we may correct a clear technical error in your favour or against you at our reasonable discretion.",
      "The following do not count: accounts you or people connected to you create; accounts created to collect offers or bonuses; accounts that share a device or network with another account in a way that suggests the same person; and accounts we find to be fake, duplicated or fraudulent. Where your own email address matches a Referred Customer's, the Commission is voided automatically.",
      "If you believe a referral has been missed, email us within 30 days of the signup with the Referred Customer's business name and the date. We will look at our records and reply.",
    ],
  },
  {
    id: "offer",
    title: "The offer your referrals receive",
    clauses: [
      "To help you convert referrals, we may offer New Customers who sign up through a Referral Link a sign-up offer. At the date of these Terms, the offer is: a discount on their first payment (50% off the first payment of a monthly plan, or 3 months free in the first year of an annual plan), and bonus voice minutes and automation credits (currently 50 minutes and 200 credits, valid for 30 days). The offer can be used once per account and has its own eligibility rules and a limited window.",
      "We set the offer and may change or withdraw it at any time. You may only describe the offer as it is currently shown in the Portal. The offer in force when the Customer signs up applies to that Customer.",
      "Bonus minutes and credits have no cash value and cannot be exchanged, transferred or paid out.",
    ],
  },
  {
    id: "commission",
    title: "Commission",
    clauses: [
      "For each Qualifying Payment by a Referred Customer we owe you a Commission equal to the Net Revenue multiplied by the Year One Rate or the Year Two Rate, as follows:\n- Year One: a Qualifying Payment received before the first anniversary of that Referred Customer's first Qualifying Payment.\n- Year Two: a Qualifying Payment received from that first anniversary until before the second anniversary.\n- After the second anniversary no Commission is due on that Referred Customer.",
      "Commission is earned on every paid plan, including Enterprise and custom plans, but only on Net Revenue we actually receive. If a plan is upgraded, downgraded, paused or cancelled, Commission follows the payments actually made. If a Referred Customer cancels and later returns, the same Year One and Year Two periods continue to run from their first Qualifying Payment; they do not restart.",
      "Commission is calculated and shown in US dollars. If a Qualifying Payment is made in another currency we convert it at the rate applied by our payment processor.",
      "Rate changes apply only to customers referred after the change takes effect. We will not reduce the rates that apply to Referred Customers you have already earned.",
      "No Commission is due on payments made by you or by people connected to you, on payments we are required to refund, or on amounts we do not collect.",
      "You are not an employee or agent of Knoxified. We do not guarantee that you will earn any amount.",
    ],
  },
  {
    id: "payments",
    title: "When and how you are paid",
    clauses: [
      "Each Commission is held for the Hold Period (21 days) so that refunds and card disputes can be resolved first. When the Hold Period ends, the Commission becomes payable on the first Payout Date on or after that day.",
      "We pay on each Payout Date (the 15th of the month, or the next business day if the 15th is not one) the total of your payable Commissions, subject to a minimum payout of US$50. If your payable total is below US$50 it rolls forward to the next Payout Date.",
      "We pay in US dollars. If you choose a local currency and a payout method we support for your country, we can pay in that currency instead, converted at the rate our payout provider applies on the payout date. You choose your currency and enter your bank or other payout details in the Portal. You are responsible for keeping them accurate. If a transfer fails because of incorrect details, we will hold the amount until you correct them.",
      "You pay the fees charged by the payout method and by your bank or provider, including currency conversion costs. We show any such fee on your statement. We pay our own account and platform costs.",
      "We pay only to an account in your own name, or in the name of the business that signed the Order Form. We do not pay third parties.",
      "If we cannot pay you for 12 months because your details are missing or wrong and you do not respond after we email you, the unpaid Commission may be forfeited.",
    ],
  },
  {
    id: "statements",
    title: "Payment Log, statements and corrections",
    clauses: [
      "The Portal shows your Payment Log: each Referred Customer payment, the Net Revenue, the rate, the Commission, its status (in hold, payable, paid or void), the scheduled payout date, and the payout reference once paid. You can export it as a spreadsheet file at any time.",
      "You may ask us at any time, and at least once each quarter, for a copy of the Payment Log in full. We keep the Payment Log in our own records so that it remains available even if we change payment processor.",
      "Customer names are shown as business names only, with their location and plan. We do not give you customers' personal contact details.",
      "If you think a statement is wrong, tell us within 60 days of the Payout Date it relates to. We will review our records and correct any error, including by adjusting a later payout. Corrections are recorded as new entries in the Payment Log; entries are not edited or deleted.",
    ],
  },
  {
    id: "refunds",
    title: "Refunds, chargebacks and fraud",
    clauses: [
      "If a Qualifying Payment is refunded, reversed or charged back before we have paid you the related Commission, that Commission is cancelled. For example, a Customer who converts from a trial and is refunded within the refund period under our Refund Policy earns you nothing on that payment.",
      "If it happens after we have paid you, we may deduct the amount from your next payout, or ask you to repay it if no further payout is due. We will tell you which payment is affected.",
      "If we find fraud, fake accounts, self-referral, offer abuse or a breach of these Terms connected to a referral, we may cancel the related Commission, reclaim what we paid, and suspend or end your participation.",
    ],
  },
  {
    id: "taxes",
    title: "Taxes",
    clauses: [
      "You are responsible for all taxes on what you earn under this agreement, in the country where you live or operate. We do not give tax advice.",
      "We pay Commission in full and do not withhold tax unless the law requires us to. If we must withhold, we will tell you and show the amount on your statement.",
      "Commission amounts exclude VAT, GST and similar taxes. If you are registered for such a tax and the law requires it to be added to your fees, give us a valid tax invoice and tell us before the Payout Date.",
      "We may ask you for your country of tax residence and other information we reasonably need to pay you lawfully, and we may delay a payout until we have it.",
    ],
  },
  {
    id: "promotion",
    title: "How you may promote Knoxified",
    clauses: [
      "Be honest. Describe Knoxified accurately and in line with the Policies. Do not promise results, savings, earnings or return on investment, and do not make claims you cannot support.",
      "Disclose your relationship. Whenever you share your Referral Link, say clearly and prominently, close to the link and in the same medium, that you may earn a commission. Follow the advertising and endorsement rules of the countries you promote in, for example the FTC Endorsement Guides in the United States and the ASA and CMA rules in the United Kingdom.",
      "Calling features. You must describe Knoxified's calling features accurately and consistently with Knoxified's AI Calling Guide, Acceptable Use Policy and Compliance page. You must not state or imply that use of Knoxified is automatically lawful, that calling rules such as consent where required, AI disclosure, calling hours or opt-outs do not apply, or encourage uses those policies prohibit.",
      "No spam. Do not send unsolicited bulk email, messages or calls, and do not buy, scrape or rent contact lists to promote Knoxified. Follow the laws that apply to your messages, such as CAN-SPAM, CASL, the GDPR, the PECR and the TCPA where relevant.",
      "Paid advertising is allowed, but you must not:\n- bid on the Knoxified name, its logo or confusingly similar terms as keywords;\n- use domain names, social handles or ad text that look like they belong to Knoxified;\n- run ads that suggest you are Knoxified or that Knoxified endorses a competitor.",
      "You must not:\n- use cookie stuffing, forced clicks, hidden redirects, adware or any method that sets your Referral Code without a real visitor choosing to click;\n- post fake reviews or testimonials, or pretend to be a customer;\n- offer your own money or gifts for signups that look like signups for rewards;\n- promote on sites or channels that are unlawful, hateful, pornographic or misleading;\n- recruit sub-affiliates or let anyone else use your Referral Code.",
      "If we ask you to change or remove promotional content that breaks these rules, you must do so within 5 business days.",
    ],
  },
  {
    id: "brand",
    title: "Using the Knoxified name and materials",
    clauses: [
      "We give you a limited, non-exclusive, revocable licence to use the Knoxified name, logo and promotional materials that we provide, only to promote Knoxified under these Terms. Do not alter the logo or use it in a way that suggests a partnership beyond this program.",
      "All rights in the Knoxified name, logo and materials stay with us. When this agreement ends you must stop using them.",
    ],
  },
  {
    id: "data",
    title: "Data, privacy and confidentiality",
    clauses: [
      "What you see in the Portal about Referred Customers (such as business names, locations and plans) and our non-public business information is confidential. Use it only to track your own Commission. Do not contact, solicit or market to Referred Customers using it, do not publish it, and do not try to identify individuals from it.",
      "You and we each decide separately how to use any personal data we each hold, and each of us must follow the data protection laws that apply to us. Knoxified's use of visitor and customer data is described in its Privacy Policy, including the referral cookies it sets.",
      "If the law where you promote requires you to tell your audience about tracking or cookies, you are responsible for doing so.",
      "Keep your Portal sign-in secure. You are responsible for activity under your login. Tell us promptly if you think it has been misused.",
    ],
  },
  {
    id: "relationship",
    title: "Your relationship with Knoxified",
    clauses: [
      "You are an independent contractor. Nothing in this agreement makes you our employee, agent, partner or joint venturer, and you cannot bind us or speak for us.",
      "This is not exclusive. We may run our own marketing and work with other affiliates, and you may promote other products, as long as you do not break these Terms.",
    ],
  },
  {
    id: "termination",
    title: "Ending the agreement",
    clauses: [
      "Either of us may end this agreement at any time by giving 30 days' notice by email. We may end it immediately, or suspend your access and payouts, if you break these Terms or the Policies, if we reasonably suspect fraud, or if the law requires.",
      "When it ends you must stop promoting Knoxified and using its materials. Your Portal access will end after any final payout is settled.",
      "If we or you end the agreement without breach or fraud, we continue to pay Commission on your existing Referred Customers until their Year One and Year Two periods run out, under the same Payout schedule. If it ends because of your breach or fraud, we may withhold and reclaim Commission linked to that breach or fraud, and we pay what remains.",
      "Clauses that by their nature continue (including payments owed, refunds and reclaims, confidentiality, liability and disputes) survive the end of the agreement.",
    ],
  },
  {
    id: "changes",
    title: "Changing these Terms",
    clauses: [
      "We may update these Terms. We will email you at least 30 days before a change takes effect, and show the new version number. If you do not agree, you may end the agreement under clause 15.1 before the change takes effect. If you keep promoting Knoxified after it takes effect, you accept the change.",
      "A change never reduces the rates that apply to Referred Customers already attributed to you (clause 6.4), and never applies to Commission already earned.",
    ],
  },
  {
    id: "liability",
    title: "Warranties and liability",
    clauses: [
      "The Portal and program are provided as they are. We do not promise that the Portal will always be available or free of errors, or that you will earn anything.",
      "You confirm that the details you gave us are accurate and that your promotion follows these Terms and the law. You will compensate us for losses, claims and costs caused by your breach of these Terms or by unlawful promotion.",
      "To the fullest extent the law allows, we are not liable for indirect or consequential loss, lost profits or lost opportunities, and our total liability to you under this agreement is limited to the Commission paid or payable to you in the 12 months before the claim arose.",
      "Nothing in this agreement limits liability that cannot lawfully be limited, including liability for fraud or for death or personal injury caused by negligence.",
    ],
  },
  {
    id: "disputes",
    title: "General terms, governing law and disputes",
    clauses: [
      "Governing law. This agreement, and any dispute or claim arising out of or in connection with it, is governed by the laws of England and Wales.",
      "Resolving disagreements. If we disagree, we will first try to settle it in good faith by email for 30 days after one of us gives written notice of the problem.",
      "Arbitration. If it is not settled within those 30 days, the dispute will be finally resolved by arbitration under the Rules of the London Court of International Arbitration (LCIA), with one arbitrator, the seat in London, in English, and proceedings held online or on documents where the arbitrator agrees. Either of us may ask any competent court for urgent injunctive relief to protect brand, confidential information or intellectual property.",
      "Transfer to a company. We may transfer this agreement, and our rights and duties under it, to a company that takes over the Knoxified business, on notice to you, and the transfer does not change what we owe you. You may not transfer this agreement without our written consent.",
      "Whole agreement. This agreement is the Order Form, these Terms and, for the matters they cover, the Policies. If they conflict, the Order Form prevails over these Terms, and these Terms prevail over the Policies on program matters.",
      "Notices. We give notice by email to the address on your Order Form or in the Portal. You give notice by email to affiliates@knoxified.org. Notice by email takes effect when sent unless an error message shows it was not delivered.",
      "If part of this agreement is found unenforceable the rest continues. Not enforcing a right is not a waiver. A person who is not a party has no right to enforce this agreement. We are not responsible for delays caused by events outside our reasonable control. This agreement is in English.",
    ],
  },
  {
    id: "schedule-a",
    title: "Schedule A: worked examples (illustrative figures)",
    clauses: [
      "These examples use the standard rates of 30% and 20%. Processor fees and prices change; the figures only show how the calculation works.",
      "Example 1, monthly plan. A Referred Customer pays for a monthly plan and the first payment, after the sign-up offer, is US$348.50. Suppose the payment processor's fees are US$11.00. Net Revenue is US$337.50 and your Year One Commission is 30%, which is US$101.25. The next month the customer pays the full US$697.00 with US$21.00 in fees, so Net Revenue is US$676.00 and your Commission is US$202.80.",
      "Example 2, annual plan. A Referred Customer pays US$6,273.00 for the first year of an annual plan, with US$190.00 in fees. Net Revenue is US$6,083.00 and your Year One Commission is US$1,824.90. When the plan renews a year later the customer pays US$6,970.00 with US$212.00 in fees. That renewal is in Year Two, so Net Revenue of US$6,758.00 earns the 20% Year Two Commission of US$1,351.60.",
      "Example 3, refund. A Customer converts from a trial and asks for a refund within the refund period. The refunded payment earns you nothing, and the Commission is cancelled before any payout.",
      "Example 4, payout timing. A Qualifying Payment made on 20 November has its Hold Period end on 11 December, so its Commission is paid on 15 December. A payment made on 25 November has its Hold Period end on 16 December, so its Commission is paid on 15 January.",
      "Example 5, minimum payout. If your payable Commission on the 15th is US$32.00, it rolls forward. If next month adds US$40.00, you are paid US$72.00.",
    ],
    table: {
      head: ["Payment made", "Hold ends", "Paid on"],
      rows: [
        ["1 to 24 November", "22 November to 15 December", "15 December"],
        ["25 November to 24 December", "16 December to 14 January", "15 January"],
        ["Any date", "Payment date + 21 days", "First 15th on or after the hold ends"],
      ],
    },
  },
  {
    id: "schedule-b",
    title: "Schedule B: promotion do and don't",
    clauses: [
      "Do: say you earn a commission, next to your link. Do: describe what Knoxified does in plain words and point people to the current offer in the Portal. Do: follow the rules of the platform you post on. Do: ask us if you are unsure.",
      "Don't: guarantee results or earnings. Don't: say calling rules do not apply or that Knoxified makes you automatically compliant. Don't: send unsolicited messages or use bought lists. Don't: bid on the Knoxified name in ads. Don't: contact Referred Customers using Portal information. Don't: sign yourself or people you know up to collect offers.",
    ],
  },
];

// Plain text of the whole Terms, in the exact order and wording they are signed.
export function termsText(): string {
  const out: string[] = [`Knoxified Affiliate Program Terms, version ${TERMS_VERSION}, ${TERMS_DATE}`];
  TERMS.forEach((s, si) => {
    out.push(`${si + 1}. ${s.title}`);
    s.clauses.forEach((c, ci) => out.push(`${si + 1}.${ci + 1} ${c}`));
    if (s.table) {
      out.push(s.table.head.join(" | "));
      s.table.rows.forEach((r) => out.push(r.join(" | ")));
    }
  });
  return out.join("\n");
}

export function clauseLabel(sectionIndex: number, clauseIndex: number): string {
  return `${sectionIndex + 1}.${clauseIndex + 1}`;
}
