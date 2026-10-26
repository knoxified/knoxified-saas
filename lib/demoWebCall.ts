'use client';

/**
 * Unauthenticated demo webcall for the marketing site.
 * Starts a live voice call to Knox's demo agent using a selected industry persona.
 * No Supabase auth required — the voice agent handles demo routing internally.
 */

const VOICE_HOST = 'https://voice.knoxified.org';

// ── µ-law codec (G.711) ───────────────────────────────────────────────────────

function encodeMulaw(pcm: Int16Array): Uint8Array {
  const out = new Uint8Array(pcm.length);
  for (let i = 0; i < pcm.length; i++) {
    let s = pcm[i];
    const sign = s < 0 ? 0x80 : 0;
    if (s < 0) s = -s;
    s = Math.min(s + 33, 32767);
    let exp = 7;
    for (let e = 0x4000; exp > 0 && (s & e) === 0; e >>= 1, exp--);
    const mant = (s >> (exp + 3)) & 0x0f;
    out[i] = ~(sign | (exp << 4) | mant) & 0xff;
  }
  return out;
}

function decodeMulaw(bytes: Uint8Array): Int16Array {
  const out = new Int16Array(bytes.length);
  for (let i = 0; i < bytes.length; i++) {
    let b = ~bytes[i];
    const sign = b & 0x80;
    const exp  = (b >> 4) & 0x07;
    const mant = b & 0x0f;
    let s = ((mant << 3) + 0x84) << exp;
    s -= 0x84;
    out[i] = sign ? -s : s;
  }
  return out;
}

function base64ToBytes(b64: string): Uint8Array {
  const raw = atob(b64);
  const out = new Uint8Array(raw.length);
  for (let i = 0; i < raw.length; i++) out[i] = raw.charCodeAt(i);
  return out;
}

function bytesToBase64(bytes: Uint8Array): string {
  let s = '';
  for (let i = 0; i < bytes.length; i++) s += String.fromCharCode(bytes[i]);
  return btoa(s);
}

// ── Audio playback queue ──────────────────────────────────────────────────────

let audioCtx: AudioContext | null = null;
let playbackQueue: AudioBuffer[] = [];
let isPlaying = false;
let stopPlaybackFn: (() => void) | null = null;

function getAudioCtx() {
  if (!audioCtx || audioCtx.state === 'closed') audioCtx = new AudioContext({ sampleRate: 8000 });
  return audioCtx;
}

function playNextChunk() {
  if (!playbackQueue.length) { isPlaying = false; return; }
  isPlaying = true;
  const ctx = getAudioCtx();
  const buf = playbackQueue.shift()!;
  const src = ctx.createBufferSource();
  src.buffer = buf;
  src.connect(ctx.destination);
  src.onended = playNextChunk;
  src.start();
  stopPlaybackFn = () => { try { src.stop(); } catch {} };
}

function stopPlayback() {
  playbackQueue = [];
  stopPlaybackFn?.();
  stopPlaybackFn = null;
  isPlaying = false;
}

async function playMulaw(b64: string) {
  const ctx = getAudioCtx();
  const bytes = base64ToBytes(b64);
  const pcm = decodeMulaw(bytes);
  const buf = ctx.createBuffer(1, pcm.length, 8000);
  buf.copyToChannel(new Float32Array(pcm).map(v => v / 32768), 0);
  playbackQueue.push(buf);
  if (!isPlaying) playNextChunk();
}

// ── Public API ────────────────────────────────────────────────────────────────

export interface DemoCall {
  stop: () => void;
}

export interface DemoCallOptions {
  industry: string;
  onClosed: () => void;
  onError: (msg: string) => void;
  onTranscript?: (role: 'user' | 'agent', text: string) => void;
}

export async function startDemoCall(opts: DemoCallOptions): Promise<DemoCall> {
  // 1. Request microphone
  const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

  // 2. Get a demo call token from the voice agent
  const startRes = await fetch(`${VOICE_HOST}/voice/demo/start`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ industry: opts.industry }),
  });
  if (!startRes.ok) {
    stream.getTracks().forEach(t => t.stop());
    throw new Error(`Demo start failed: ${startRes.status}`);
  }
  const { direct } = await startRes.json();
  if (!direct?.callId || !direct?.token) {
    stream.getTracks().forEach(t => t.stop());
    throw new Error('Invalid demo start response');
  }

  // 3. Open WebSocket
  const wsUrl = `${VOICE_HOST.replace('https://', 'wss://')}/voice/stream/${direct.callId}?provider=browser&token=${encodeURIComponent(direct.token)}`;
  const ws = new WebSocket(wsUrl);

  ws.onmessage = (event) => {
    try {
      const msg = JSON.parse(event.data as string);
      if (msg.event === 'media' && msg.media?.payload) playMulaw(msg.media.payload);
      else if (msg.event === 'clear') stopPlayback();
      else if (msg.event === 'transcript' && opts.onTranscript) {
        opts.onTranscript(msg.role as 'user' | 'agent', msg.text as string);
      }
    } catch { /* ignore non-JSON */ }
  };

  ws.onclose = () => { cleanup(); opts.onClosed(); };
  ws.onerror = () => opts.onError('Connection error. Please try again.');

  await new Promise<void>((resolve, reject) => {
    ws.addEventListener('open', () => resolve(), { once: true });
    ws.addEventListener('error', () => reject(new Error('WebSocket failed')), { once: true });
  });

  // 4. Stream microphone → WebSocket (PCM 16kHz → mulaw 8kHz)
  const ctx = new AudioContext({ sampleRate: 16000 });
  const source = ctx.createMediaStreamSource(stream);
  await ctx.audioWorklet.addModule('/demo-processor.js').catch(() => {});

  // Fallback: ScriptProcessor for browsers without AudioWorklet
  const bufSize = 512;
  const proc = ctx.createScriptProcessor(bufSize, 1, 1);
  source.connect(proc);
  proc.connect(ctx.destination);

  proc.onaudioprocess = (e) => {
    if (ws.readyState !== WebSocket.OPEN) return;
    const input = e.inputBuffer.getChannelData(0);
    // Downsample 16kHz → 8kHz (take every other sample) then encode µ-law
    const pcm16 = new Int16Array(Math.floor(input.length / 2));
    for (let i = 0; i < pcm16.length; i++) {
      pcm16[i] = Math.max(-32768, Math.min(32767, Math.round(input[i * 2] * 32767)));
    }
    const mulaw = encodeMulaw(pcm16);
    ws.send(JSON.stringify({
      event: 'media',
      streamSid: direct.callId,
      media: { payload: bytesToBase64(mulaw) },
    }));
  };

  function cleanup() {
    try { proc.disconnect(); source.disconnect(); ctx.close(); } catch {}
    stream.getTracks().forEach(t => t.stop());
    stopPlayback();
    if (ws.readyState === WebSocket.OPEN || ws.readyState === WebSocket.CONNECTING) ws.close();
  }

  // Send start event
  ws.send(JSON.stringify({
    event: 'start',
    start: { streamSid: direct.callId, callSid: direct.callId },
  }));

  return { stop: cleanup };
}
