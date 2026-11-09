import { MetadataRoute } from 'next';

const BASE = 'https://knoxified.org';
const UPDATED = new Date('2026-11-09');

const core = ['', '/systems', '/automations', '/pricing', '/about', '/contact', '/blog'];
const systems = ["automotive","construction","corporate","dental","ecommerce","fitness","healthcare","home-care","hotel","hvac","insurance","legal","logistics","med-spa","plumbing","property","real-estate","recruitment","restaurant","retail","roofing","solar"];
const automations = ["adpilot","appointmate","carepulse","cartrevive","casesync","caterbot","claimbot","docuflow","estimate","eventstream","fraudshield","invoiceai","leadreach","leasesync","mailcraft","maintainbot","memomind","omnipulse","onboardiq","proofpulse","pulsepay","reminderbot","returnbot","routemaster","screensync","signsync","statusync","stocksentinel","taskgen","waitlistbot"];
const posts = ["featured","1","2","3","4","5","6"];
const legal = ['privacy', 'terms', 'refunds', 'acceptable-use', 'compliance', 'ai-calling-guide', 'dpa'];

export default function sitemap(): MetadataRoute.Sitemap {
  const entry = (path: string, priority: number) => ({ url: `${BASE}${path}`, lastModified: UPDATED, priority });
  return [
    ...core.map((p) => entry(p, p === '' ? 1 : 0.8)),
    ...systems.map((s) => entry(`/systems/${s}`, 0.8)),
    ...automations.map((a) => entry(`/automations/${a}`, 0.6)),
    ...posts.map((p) => entry(`/blog/${p}`, 0.5)),
    ...legal.map((l) => entry(`/legal/${l}`, 0.2)),
  ];
}
