'use client';

import { useCallback, useEffect, useState } from 'react';

type Json = Record<string, any>;
type Tab = 'funnel' | 'pages' | 'chats' | 'leads' | 'cleanup';

async function api(op: string, extra: Json = {}): Promise<{ status: number; data: Json }> {
  const res = await fetch('/api/desk', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ op, ...extra }),
  });
  const data = await res.json().catch(() => ({}));
  return { status: res.status, data };
}

const when = (iso: string) => new Date(iso).toLocaleString([], { dateStyle: 'medium', timeStyle: 'short' });
const card = 'rounded-xl border border-slate-700 bg-slate-900/70 p-4';
const btn = 'rounded-lg px-3 py-1.5 text-sm font-medium transition-colors';
const btnPrimary = `${btn} bg-cyan-500 text-slate-950 hover:bg-cyan-400 disabled:bg-slate-700 disabled:text-slate-400`;
const btnGhost = `${btn} border border-slate-600 text-slate-200 hover:bg-slate-800`;
const btnDanger = `${btn} border border-red-500/50 text-red-300 hover:bg-red-500/10`;

export default function DeskPage() {
  const [authed, setAuthed] = useState<boolean | null>(null);
  const [tab, setTab] = useState<Tab>('funnel');

  useEffect(() => {
    api('ping').then((r) => setAuthed(r.status === 200));
  }, []);

  if (authed === null) return <main className="min-h-screen bg-slate-950" />;
  if (!authed) return <Login onDone={() => setAuthed(true)} />;

  const tabs: [Tab, string][] = [['funnel', 'Funnel'], ['pages', 'Pages'], ['chats', 'Chats'], ['leads', 'Leads'], ['cleanup', 'Cleanup']];
  return (
    <main className="min-h-screen bg-slate-950 text-slate-200">
      <div className="mx-auto max-w-4xl px-4 py-6">
        <div className="mb-5 flex items-center justify-between gap-3">
          <div className="flex gap-1 overflow-x-auto">
            {tabs.map(([k, label]) => (
              <button key={k} onClick={() => setTab(k)}
                className={`${btn} ${tab === k ? 'bg-slate-800 text-white' : 'text-slate-400 hover:text-slate-200'}`}>{label}</button>
            ))}
          </div>
          <button className={btnGhost} onClick={async () => { await api('logout'); setAuthed(false); }}>Log out</button>
        </div>
        {tab === 'funnel' && <Funnel />}
        {tab === 'pages' && <Pages />}
        {tab === 'chats' && <Chats />}
        {tab === 'leads' && <Leads />}
        {tab === 'cleanup' && <Cleanup />}
      </div>
    </main>
  );
}

function Login({ onDone }: { onDone: () => void }) {
  const [pw, setPw] = useState('');
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState(false);

  const submit = async () => {
    if (!pw || busy) return;
    setBusy(true); setErr(false);
    const { status } = await api('login', { password: pw });
    if (status === 200) {
      // Marks this browser as "internal" so your own visits never count in the funnel.
      document.cookie = 'kx_internal=1; max-age=31536000; path=/; domain=.knoxified.org; SameSite=Lax; Secure';
      onDone();
    } else { setErr(true); setBusy(false); }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-4">
      <div className={`${card} w-full max-w-sm space-y-3`}>
        <input type="password" value={pw} autoFocus autoComplete="current-password" placeholder="Password"
          onChange={(e) => setPw(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && submit()}
          className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-slate-200 focus:border-cyan-500/60 focus:outline-none" />
        {err && <div className="text-sm text-red-400">Wrong password.</div>}
        <button className={`${btnPrimary} w-full`} onClick={submit} disabled={busy || !pw}>{busy ? 'Checking' : 'Enter'}</button>
      </div>
    </main>
  );
}

function Bars({ rows, total }: { rows: { label: string; count: number }[]; total?: number }) {
  if (!rows.length) return <div className="text-sm text-slate-500">No data yet.</div>;
  const max = total || Math.max(...rows.map((r) => r.count), 1);
  return (
    <div className="space-y-1.5">
      {rows.map((r) => (
        <div key={r.label} className="text-sm">
          <div className="flex justify-between gap-3"><span className="truncate">{r.label}</span><span className="text-slate-400">{r.count}</span></div>
          <div className="h-1.5 rounded bg-slate-800"><div className="h-1.5 rounded bg-cyan-500/70" style={{ width: `${Math.max(2, (r.count / max) * 100)}%` }} /></div>
        </div>
      ))}
    </div>
  );
}

function Funnel() {
  const [days, setDays] = useState(7);
  const [d, setD] = useState<Json | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    api('funnel', { days }).then((r) => { setD(r.data.ok ? r.data : null); setLoading(false); });
  }, [days]);

  const stages: { label: string; visitors: number }[] = d?.stages ?? [];
  const base = stages[0]?.visitors || 0;
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        {[1, 7, 30].map((n) => (
          <button key={n} onClick={() => setDays(n)} className={`${btn} ${days === n ? 'bg-slate-800 text-white' : 'text-slate-400 hover:text-slate-200'}`}>
            {n === 1 ? '24 hours' : `${n} days`}
          </button>
        ))}
      </div>
      {loading && <div className="text-sm text-slate-500">Loading</div>}
      {!loading && !d && <div className="text-sm text-red-400">Could not load. Check that the site_events table exists.</div>}
      {d && (
        <>
          <div className={card}>
            <div className="mb-1 text-sm text-slate-400">Real visitors who ran the site (bots excluded)</div>
            <div className="text-3xl font-semibold text-white">{d.totalVisitors}</div>
            {d.capped && <div className="mt-1 text-xs text-amber-400">Very high volume: only the first 30,000 events were counted.</div>}
          </div>
          <div className={card}>
            <div className="mb-3 font-medium text-white">Where people stop</div>
            <div className="space-y-2">
              {stages.map((s, i) => {
                const prev = i === 0 ? s.visitors : stages[i - 1].visitors;
                const pct = base ? Math.round((s.visitors / base) * 100) : 0;
                const step = i > 0 && prev ? Math.round((s.visitors / prev) * 100) : null;
                return (
                  <div key={s.label} className="text-sm">
                    <div className="flex justify-between gap-3">
                      <span>{s.label}</span>
                      <span className="shrink-0 text-slate-400">{s.visitors} <span className="text-slate-500">({pct}%{step !== null ? `, ${step}% of previous` : ''})</span></span>
                    </div>
                    <div className="h-1.5 rounded bg-slate-800"><div className="h-1.5 rounded bg-cyan-500/70" style={{ width: `${Math.max(1, pct)}%` }} /></div>
                  </div>
                );
              })}
            </div>
            <div className="mt-3 text-xs text-slate-500">Each line counts distinct visitors who did that step. Steps can be skipped, so a line can exceed the one above it.</div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className={card}><div className="mb-2 font-medium text-white">Signup errors</div><Bars rows={d.signupErrors} /></div>
            <div className={card}><div className="mb-2 font-medium text-white">Password rules that blocked people</div><Bars rows={d.passwordProblems} /></div>
            <div className={card}><div className="mb-2 font-medium text-white">Onboarding steps reached</div><Bars rows={d.onboardingSteps} />
              <div className="mt-2 text-xs text-slate-500">Bounced to dashboard login with no session: {d.noSession}</div></div>
            <div className={card}><div className="mb-2 font-medium text-white">Landing pages</div><Bars rows={d.landing} /></div>
            <div className={card}><div className="mb-2 font-medium text-white">Traffic sources</div><Bars rows={d.sources} /></div>
            <div className={card}><div className="mb-2 font-medium text-white">Devices</div><Bars rows={d.devices} />
              <div className="mb-2 mt-4 font-medium text-white">Countries</div><Bars rows={d.countries} /></div>
          </div>
        </>
      )}
    </div>
  );
}

function Range({ days, setDays }: { days: number; setDays: (n: number) => void }) {
  return (
    <div className="flex items-center gap-2">
      {[1, 7, 30].map((n) => (
        <button key={n} onClick={() => setDays(n)} className={`${btn} ${days === n ? 'bg-slate-800 text-white' : 'text-slate-400 hover:text-slate-200'}`}>
          {n === 1 ? '24 hours' : `${n} days`}
        </button>
      ))}
    </div>
  );
}

const fmtSecs = (s: number) => (s >= 60 ? `${Math.floor(s / 60)}m ${s % 60}s` : `${s}s`);

function Pages() {
  const [days, setDays] = useState(7);
  const [d, setD] = useState<Json | null>(null);
  const [loading, setLoading] = useState(true);
  const [sel, setSel] = useState<string | null>(null);
  const [detail, setDetail] = useState<Json | null>(null);

  useEffect(() => {
    setLoading(true);
    api('pages', { days }).then((r) => { setD(r.data.ok ? r.data : null); setLoading(false); });
  }, [days]);

  useEffect(() => {
    if (!sel) { setDetail(null); return; }
    setDetail(null);
    api('page_detail', { days, path: sel }).then((r) => setDetail(r.data.ok ? r.data : { viewers: 0, depths: [], sections: [] }));
  }, [sel, days]);

  if (sel) {
    return (
      <div className="space-y-4">
        <button className={btnGhost} onClick={() => setSel(null)}>Back to pages</button>
        <div className="text-lg font-medium text-white">{sel}</div>
        {!detail && <div className="text-sm text-slate-500">Loading</div>}
        {detail && (
          <>
            <div className="text-sm text-slate-400">{detail.viewers} visitor(s) viewed this page in the selected period. Percentages are of those visitors.</div>
            <div className={card}>
              <div className="mb-2 font-medium text-white">How far down they scrolled</div>
              <Bars rows={detail.depths.map((x: Json) => ({ label: `${x.label} (${x.pct}%)`, count: x.count }))} total={detail.viewers || undefined} />
            </div>
            <div className={card}>
              <div className="mb-2 font-medium text-white">Sections reached, top to bottom</div>
              {detail.sections.length === 0
                ? <div className="text-sm text-slate-500">No headings tracked on this page yet.</div>
                : <Bars rows={detail.sections.map((x: Json) => ({ label: `${x.label} (${x.pct}%)`, count: x.count }))} total={detail.viewers || undefined} />}
              <div className="mt-2 text-xs text-slate-500">A section counts as reached when its heading scrolls into view. The biggest fall between two neighbors is where people give up.</div>
            </div>
          </>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <Range days={days} setDays={setDays} />
      {loading && <div className="text-sm text-slate-500">Loading</div>}
      {!loading && !d && <div className="text-sm text-red-400">Could not load.</div>}
      {d && (
        <>
          <div className={card}>
            <div className="text-sm text-slate-400">Visits (sessions)</div>
            <div className="text-3xl font-semibold text-white">{d.sessions}</div>
            <div className="mt-1 text-sm text-slate-400">{d.bounceRate}% looked at one page and left</div>
            {d.capped && <div className="mt-1 text-xs text-amber-400">Very high volume: only the first 30,000 events were counted.</div>}
          </div>
          <div className="space-y-2">
            {d.pages.length === 0 && <div className="text-sm text-slate-500">No page views yet.</div>}
            {d.pages.map((p: Json) => (
              <button key={p.path} onClick={() => setSel(p.path)} className={`${card} block w-full text-left hover:border-slate-500`}>
                <div className="truncate text-sm font-medium text-white">{p.path}</div>
                <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-400">
                  <span>{p.views} views</span><span>{p.visitors} visitors</span>
                  <span>{p.medianSeconds ? `${fmtSecs(p.medianSeconds)} typical time` : 'time n/a'}</span>
                  <span>{p.entries} landed here</span><span>{p.exitRate}% left from here</span>
                </div>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function Chats() {
  const [list, setList] = useState<Json[] | null>(null);
  const [open, setOpen] = useState<Json | null>(null);
  const [msgs, setMsgs] = useState<Json[]>([]);

  const load = useCallback(() => api('sessions').then((r) => setList(r.data.ok ? r.data.sessions : [])), []);
  useEffect(() => { load(); }, [load]);

  const show = async (s: Json) => {
    setOpen(s); setMsgs([]);
    const r = await api('messages', { sessionId: s.id });
    setMsgs(r.data.messages ?? []);
  };
  const del = async (s: Json) => {
    if (!confirm('Delete this conversation? Leads and unanswered questions from it are kept.')) return;
    await api('delete_session', { sessionId: s.id });
    setOpen(null); load();
  };

  if (open) {
    return (
      <div className="space-y-3">
        <div className="flex items-center justify-between gap-2">
          <button className={btnGhost} onClick={() => setOpen(null)}>Back</button>
          <button className={btnDanger} onClick={() => del(open)}>Delete conversation</button>
        </div>
        <div className="text-sm text-slate-400">
          {when(open.started_at)} · {open.country ?? '?'} · {open.first_page ?? '/'}{open.visitor_name ? ` · ${open.visitor_name}` : ''}{open.email ? ` · ${open.email}` : ''}
        </div>
        <div className="space-y-2">
          {msgs.map((m, i) => (
            <div key={i} className={`max-w-[85%] whitespace-pre-wrap rounded-2xl px-3 py-2 text-sm ${m.role === 'user' ? 'ml-auto bg-cyan-500/15 text-cyan-50' : 'bg-slate-800 text-slate-200'}`}>{m.content}</div>
          ))}
        </div>
      </div>
    );
  }

  if (!list) return <div className="text-sm text-slate-500">Loading</div>;
  if (!list.length) return <div className="text-sm text-slate-500">No conversations yet.</div>;
  return (
    <div className="space-y-2">
      {list.map((s) => (
        <button key={s.id} onClick={() => show(s)} className={`${card} block w-full text-left hover:border-slate-500`}>
          <div className="flex justify-between gap-3 text-xs text-slate-400">
            <span>{when(s.started_at)} · {s.country ?? '?'} · {s.first_page ?? '/'}</span>
            <span>{s.message_count} msgs</span>
          </div>
          <div className="mt-1 truncate text-sm text-slate-200">{s.visitor_name ? `${s.visitor_name}: ` : ''}{s.preview || '(no message)'}</div>
          {s.email && <div className="mt-1 text-xs text-cyan-400">{s.email}</div>}
        </button>
      ))}
    </div>
  );
}

function Leads() {
  const [status, setStatus] = useState<'new' | 'handled' | 'all'>('new');
  const [list, setList] = useState<Json[] | null>(null);

  const load = useCallback(() => {
    setList(null);
    api('leads', { status: status === 'all' ? null : status }).then((r) => setList(r.data.ok ? r.data.leads : []));
  }, [status]);
  useEffect(() => { load(); }, [load]);

  return (
    <div className="space-y-3">
      <div className="flex gap-2">
        {(['new', 'handled', 'all'] as const).map((s) => (
          <button key={s} onClick={() => setStatus(s)} className={`${btn} ${status === s ? 'bg-slate-800 text-white' : 'text-slate-400 hover:text-slate-200'}`}>{s}</button>
        ))}
      </div>
      {!list && <div className="text-sm text-slate-500">Loading</div>}
      {list && !list.length && <div className="text-sm text-slate-500">Nothing here.</div>}
      {list?.map((l) => (
        <div key={l.id} className={card}>
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400">
            <span className="rounded-full bg-slate-800 px-2 py-0.5">{l.kind === 'email' ? 'Email left' : 'Unanswered question'}</span>
            <span>{when(l.created_at)}{l.chat_sessions?.country ? ` · ${l.chat_sessions.country}` : ''}{l.chat_sessions?.first_page ? ` · ${l.chat_sessions.first_page}` : ''}</span>
          </div>
          {l.chat_sessions?.visitor_name && <div className="mt-2 text-sm text-slate-200">{l.chat_sessions.visitor_name}</div>}
          {l.email && <a className="mt-1 block text-sm text-cyan-400 underline" href={`mailto:${l.email}`}>{l.email}</a>}
          {l.question && <div className="mt-1 text-sm text-slate-300">{l.question}</div>}
          <div className="mt-3 flex gap-2">
            <button className={btnGhost} onClick={async () => { await api('lead_status', { id: l.id, status: l.status === 'new' ? 'handled' : 'new' }); load(); }}>
              {l.status === 'new' ? 'Mark handled' : 'Mark new'}
            </button>
            <button className={btnDanger} onClick={async () => { if (confirm('Delete this item?')) { await api('delete_lead', { id: l.id }); load(); } }}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

function Cleanup() {
  const [days, setDays] = useState(90);
  const [evDays, setEvDays] = useState(30);
  const [msg, setMsg] = useState('');
  const [evMsg, setEvMsg] = useState('');
  return (
    <div className="space-y-4">
      <div className={`${card} space-y-3`}>
        <div className="font-medium text-white">Delete old tracking data</div>
        <p className="text-sm text-slate-400">Removes funnel, page, scroll and section events older than this many days. This also runs automatically once the nightly job is set up.</p>
        <div className="flex items-center gap-2">
          <input type="number" min={1} value={evDays} onChange={(e) => setEvDays(Number(e.target.value))}
            className="w-24 rounded-lg border border-slate-700 bg-slate-950 px-3 py-1.5 text-sm" />
          <span className="text-sm text-slate-400">days</span>
          <button className={btnDanger} onClick={async () => {
            if (!confirm(`Delete all tracking data older than ${evDays} days?`)) return;
            const r = await api('purge_events', { days: evDays });
            setEvMsg(r.data.ok ? `Deleted ${r.data.deleted} event(s).` : 'Could not delete.');
          }}>Delete</button>
        </div>
        {evMsg && <div className="text-sm text-cyan-400">{evMsg}</div>}
      </div>
      <div className={`${card} space-y-3`}>
        <div className="font-medium text-white">Delete old chat conversations</div>
        <p className="text-sm text-slate-400">Removes conversations with no activity for this many days, along with their messages. Emails and unanswered questions in Leads are kept.</p>
        <div className="flex items-center gap-2">
          <input type="number" min={1} value={days} onChange={(e) => setDays(Number(e.target.value))}
            className="w-24 rounded-lg border border-slate-700 bg-slate-950 px-3 py-1.5 text-sm" />
          <span className="text-sm text-slate-400">days</span>
          <button className={btnDanger} onClick={async () => {
            if (!confirm(`Delete all conversations older than ${days} days?`)) return;
            const r = await api('purge', { days });
            setMsg(r.data.ok ? `Deleted ${r.data.deleted} conversation(s).` : 'Could not delete.');
          }}>Delete</button>
        </div>
        {msg && <div className="text-sm text-cyan-400">{msg}</div>}
      </div>
    </div>
  );
}
