// Generates one real audio sample per /systems/<industry> page, from the
// CURRENT text prop on that page (so audio and on-screen caption always
// match), using the same Cartesia voice engine the live product uses --
// not browser speechSynthesis, not a stale pre-generated file.
//
// Usage:
//   CARTESIA_API_KEY=sk_... node generate-voice-samples.js
//   CARTESIA_API_KEY=sk_... node generate-voice-samples.js home-care   (single industry)
//
// Optional: CARTESIA_VOICE_ID env var to override the default voice
// (defaults to the same voice id used as the platform's default in
// user_voice_settings.preferred_voice_id).

const fs = require('fs');
const path = require('path');

const API_KEY = process.env.CARTESIA_API_KEY;
const VOICE_ID = process.env.CARTESIA_VOICE_ID || 'e07c00bc-4134-4eae-9ea4-1a55fb45746b';

if (!API_KEY) {
  console.error('Missing CARTESIA_API_KEY. Set it and re-run.');
  process.exit(1);
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
    .replace(/&amp;/g, '&');
}

async function generate(industry, text) {
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
      voice: { mode: 'id', id: VOICE_ID },
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

    process.stdout.write(`Generating ${industry}... `);
    try {
      await generate(industry, text);
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
