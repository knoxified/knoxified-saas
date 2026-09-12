// Generates one real audio sample per /systems/<industry> page, from the
// CURRENT text prop on that page (so audio and on-screen caption always
// match), using the same Cartesia voice engine the live product uses --
// not browser speechSynthesis, not a stale pre-generated file.
//
// Usage (PowerShell):
//   $env:CARTESIA_API_KEY="sk_..."; node generate-voice-samples.js
//   $env:CARTESIA_API_KEY="sk_..."; node generate-voice-samples.js home-care   (single industry)
//
// Usage (bash/mac/linux):
//   CARTESIA_API_KEY=sk_... node generate-voice-samples.js
//   CARTESIA_API_KEY=sk_... node generate-voice-samples.js home-care
//
// VOICES: fill in VOICE_POOL below with real voice IDs from your own
// Cartesia account (Dashboard -> Voice Library -> pick a voice -> copy its
// ID). Mix genders/styles freely -- there's no reason every industry has to
// sound the same. Each industry gets a consistent voice across reruns (so
// re-generating "dental" alone doesn't change its voice), assigned by
// hashing the industry name against the pool, unless you explicitly pin an
// industry in VOICE_OVERRIDES below.

const fs = require('fs');
const path = require('path');

const API_KEY = process.env.CARTESIA_API_KEY;

// TODO: replace with real IDs from your Cartesia dashboard. Keep at least
// one of each gender/style you want represented -- the more you add, the
// more varied the site sounds. These three are placeholders and will fail
// if they're not real, valid voice IDs on your account.
const VOICE_POOL = [
  'db6b0ed5-d5d3-463d-ae85-518a07d3c2b4', // Skylar
  '9626c31c-bec5-4cca-baa8-f8ba9e84c8bc', // Jacqueline
  'ef191366-f52f-447a-a398-ed8c0f2943a1', // Archie
  '30894953-bcce-41fe-892c-15ce19c843ff', // Parker
  '47c38ca4-5f35-497b-b1a3-415245fb35e1', // Daniel
  'f6ff7c0c-e396-40a9-a70b-f7607edb6937', // Emma
  'a5136bf9-224c-4d76-b823-52bd5efcffcc', // Jameson
];

// Optional: force a specific industry to a specific voice regardless of the
// hash assignment, e.g. if you want home-care to always be a particular
// warm voice: { 'home-care': 'REPLACE_WITH_REAL_VOICE_ID' }
const VOICE_OVERRIDES = {};

if (!API_KEY) {
  console.error('Missing CARTESIA_API_KEY. Set it and re-run.');
  process.exit(1);
}
if (VOICE_POOL.length === 0) {
  console.error('VOICE_POOL is empty. Add at least one real Cartesia voice ID.');
  process.exit(1);
}

function pickVoiceFor(industry) {
  if (VOICE_OVERRIDES[industry]) return VOICE_OVERRIDES[industry];
  if (process.env.CARTESIA_VOICE_ID) return process.env.CARTESIA_VOICE_ID; // manual override for a single run
  let hash = 0;
  for (let i = 0; i < industry.length; i++) {
    hash = (hash * 31 + industry.charCodeAt(i)) | 0;
  }
  return VOICE_POOL[Math.abs(hash) % VOICE_POOL.length];
}

const systemsDir = path.join(__dirname, 'app', 'systems');
const outDir = path.join(__dirname, 'public', 'audio');
fs.mkdirSync(outDir, { recursive: true });

const onlyIndustry = process.argv[2]; // optional single-industry filter

function extractText(pagePath) {
  const content = fs.readFileSync(pagePath, 'utf8');
  const match = content.match(/<AIVoiceSample[\s\S]*?text="([\s\S]*?)"\s*\/>/);
  if (!match) return null;
  return match[1]
    .replace(/&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&mdash;/g, '-')
    .replace(/&amp;/g, '&');
}

async function generate(industry, text, voiceId) {
  const res = await fetch('https://api.cartesia.ai/tts/bytes', {
    method: 'POST',
    headers: {
      'X-API-Key': API_KEY,
      'Cartesia-Version': '2024-11-13',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model_id: 'sonic-3',
      transcript: text,
      voice: { mode: 'id', id: voiceId },
      output_format: { container: 'mp3', bit_rate: 128000, sample_rate: 44100 },
    }),
  });

  if (!res.ok) {
    const body = await res.text().catch(() => '');
    throw new Error(`Cartesia ${res.status}: ${body.slice(0, 300)}`);
  }

  const buf = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(path.join(outDir, `${industry}.mp3`), buf);
}

(async () => {
  const industries = fs.readdirSync(systemsDir)
    .filter(f => fs.statSync(path.join(systemsDir, f)).isDirectory())
    .filter(f => f !== '[niche]')
    .filter(f => !onlyIndustry || f === onlyIndustry);

  const results = { ok: [], skipped: [], failed: [] };

  for (const industry of industries) {
    const pagePath = path.join(systemsDir, industry, 'page.tsx');
    if (!fs.existsSync(pagePath)) { results.skipped.push(industry); continue; }
    const text = extractText(pagePath);
    if (!text) { results.skipped.push(industry); continue; }
    const voiceId = pickVoiceFor(industry);

    process.stdout.write(`Generating ${industry} (voice ${voiceId.slice(0, 8)}...)... `);
    try {
      await generate(industry, text, voiceId);
      console.log('done');
      results.ok.push(industry);
    } catch (err) {
      console.log('FAILED');
      console.error(`  ${err.message}`);
      results.failed.push(industry);
    }
  }

  console.log('\n--- Summary ---');
  console.log('Generated:', results.ok.length, results.ok);
  if (results.skipped.length) console.log('Skipped (no AIVoiceSample text found):', results.skipped);
  if (results.failed.length) console.log('Failed:', results.failed);
})();
