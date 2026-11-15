import type { Metadata } from 'next';
import { TERMS, TERMS_DATE, TERMS_VERSION, NOTICE_EMAIL } from './terms';

export const metadata: Metadata = {
  title: 'Affiliate Program Terms — Knoxified',
  description: 'The terms that govern the Knoxified affiliate program: referrals, commission, payouts, promotion rules and more.',
  alternates: { canonical: 'https://knoxified.org/legal/affiliate-terms' },
};

function Clause({ label, text }: { label: string; text: string }) {
  const [lead, ...bullets] = text.split('\n- ');
  return (
    <div className="mt-4">
      <p>
        <strong className="text-slate-100">{label}</strong> {lead}
      </p>
      {bullets.length > 0 && (
        <ul className="list-disc pl-6 space-y-2 mt-3">
          {bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function AffiliateTermsPage() {
  return (
    <div className="container mx-auto px-4 py-24 max-w-4xl">
      <h1 className="text-4xl md:text-5xl font-bold text-slate-50 mb-4 tracking-tight">Affiliate Program Terms</h1>
      <p className="text-slate-500 text-sm mb-2 italic">
        Version {TERMS_VERSION} · {TERMS_DATE}
      </p>
      <p className="text-slate-400 mb-8">
        These Terms apply to everyone in the Knoxified affiliate program. When you join, a copy of these Terms is part of the
        agreement you sign, and the signed copy is the one that applies to you. Questions: {NOTICE_EMAIL}.
      </p>

      <nav className="mb-10 rounded-xl border border-slate-700/50 bg-slate-900/60 p-5">
        <p className="text-sm font-semibold text-slate-200 mb-3">Contents</p>
        <ol className="grid gap-1 text-sm text-slate-400 sm:grid-cols-2">
          {TERMS.map((s, i) => (
            <li key={s.id}>
              <a href={`#${s.id}`} className="hover:text-cyan-400 transition-colors">
                {i + 1}. {s.title}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <div className="prose prose-invert prose-lg text-slate-300 max-w-none">
        {TERMS.map((s, si) => (
          <section key={s.id} id={s.id} className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-50 mt-12 mb-4">
              {si + 1}. {s.title}
            </h2>
            {s.clauses.map((c, ci) => (
              <Clause key={ci} label={`${si + 1}.${ci + 1}`} text={c} />
            ))}
            {s.table && (
              <div className="mt-6 overflow-x-auto rounded-xl border border-slate-700/50">
                <table className="w-full text-left text-sm">
                  <thead className="bg-slate-900 text-slate-300">
                    <tr>
                      {s.table.head.map((h) => (
                        <th key={h} className="px-4 py-3 font-semibold">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800">
                    {s.table.rows.map((r, ri) => (
                      <tr key={ri}>
                        {r.map((cell, ci) => (
                          <td key={ci} className="px-4 py-3">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </section>
        ))}
      </div>
    </div>
  );
}
