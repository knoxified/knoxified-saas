import type { NextRequest } from "next/server";

// Password gate for the private logs desk. One secret: ADMIN_PASSWORD (wrangler secret).
// The session cookie is "<expiry>.<HMAC(expiry)>" keyed with the password itself, so there
// is nothing else to configure and changing the password logs every session out.

export { DESK_PATH } from "./desk-auth-path";
const COOKIE = "kx_desk";
const TTL_SECONDS = 60 * 60 * 12;
const enc = new TextEncoder();

const toHex = (buf: ArrayBuffer) =>
  [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, "0")).join("");

async function hmac(key: string, msg: string) {
  const k = await crypto.subtle.importKey("raw", enc.encode(key), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  return toHex(await crypto.subtle.sign("HMAC", k, enc.encode(msg)));
}

function safeEqual(a: string, b: string) {
  if (a.length !== b.length) return false;
  let r = 0;
  for (let i = 0; i < a.length; i++) r |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return r === 0;
}

export async function checkPassword(input: string) {
  const pw = process.env.ADMIN_PASSWORD;
  if (!pw || !input) return false;
  // Compare fixed-length digests so neither length nor content leaks through timing.
  const [a, b] = await Promise.all([hmac("kx-desk-compare", input), hmac("kx-desk-compare", pw)]);
  return safeEqual(a, b);
}

export async function sessionCookie() {
  const pw = process.env.ADMIN_PASSWORD as string;
  const exp = Math.floor(Date.now() / 1000) + TTL_SECONDS;
  const sig = await hmac(pw, `desk.${exp}`);
  return `${COOKIE}=${exp}.${sig}; Max-Age=${TTL_SECONDS}; Path=/api/desk; HttpOnly; Secure; SameSite=Strict`;
}

export const clearedCookie = `${COOKIE}=; Max-Age=0; Path=/api/desk; HttpOnly; Secure; SameSite=Strict`;

export async function hasValidSession(req: NextRequest) {
  const pw = process.env.ADMIN_PASSWORD;
  const value = req.cookies.get(COOKIE)?.value;
  if (!pw || !value) return false;
  const [exp, sig] = value.split(".");
  if (!exp || !sig || Number(exp) < Math.floor(Date.now() / 1000)) return false;
  return safeEqual(sig, await hmac(pw, `desk.${exp}`));
}
