import { createClient } from "@supabase/supabase-js";
import { supabaseAdmin } from "@/src/lib/supabase-admin";

/**
 * POST /api/register-device
 * Body: { fingerprint: string }
 * Header: Authorization: Bearer <user's access token>
 *
 * Called once per new account (from the onboarding page, where a valid
 * session is guaranteed regardless of whether email confirmation was
 * required). Records this account's signup IP + device fingerprint, and if
 * either matches an existing different account, flags this account's
 * credits_locked so it can view/navigate the dashboard but can't spend
 * minutes or credits until they upgrade to a paid plan.
 *
 * The access token is verified server-side (not trusted from the request
 * body) so this can't be used to lock an arbitrary victim account.
 */
export async function POST(request) {
  const authHeader = request.headers.get("authorization") || "";
  const token = authHeader.replace(/^Bearer\s+/i, "");
  if (!token) {
    return Response.json({ error: "Not authenticated" }, { status: 401 });
  }

  const anonClient = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );
  const {
    data: { user },
    error: authError,
  } = await anonClient.auth.getUser(token);

  if (authError || !user) {
    return Response.json({ error: "Not authenticated" }, { status: 401 });
  }

  let fingerprint = "";
  try {
    const body = await request.json();
    fingerprint = typeof body.fingerprint === "string" ? body.fingerprint.slice(0, 200) : "";
  } catch {
    // fingerprint is best-effort -- proceed with IP-only matching if missing
  }

  // Cloudflare sets cf-connecting-ip; fall back to the standard proxy header.
  const ip =
    request.headers.get("cf-connecting-ip") ||
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    null;

  // Already processed (e.g. onboarding re-visited) -- don't re-check or
  // overwrite an existing lock/unlock decision.
  const { data: existingRow } = await supabaseAdmin
    .from("users")
    .select("signup_ip, device_fingerprint")
    .eq("id", user.id)
    .maybeSingle();

  if (existingRow?.signup_ip || existingRow?.device_fingerprint) {
    return Response.json({ ok: true, alreadyProcessed: true });
  }

  let matchReason = null;
  if (ip || fingerprint) {
    const orFilters = [];
    if (ip) orFilters.push(`signup_ip.eq.${ip}`);
    if (fingerprint) orFilters.push(`device_fingerprint.eq.${fingerprint}`);

    const { data: matches } = await supabaseAdmin
      .from("users")
      .select("id, signup_ip, device_fingerprint")
      .neq("id", user.id)
      .or(orFilters.join(","))
      .limit(1);

    if (matches && matches.length > 0) {
      const match = matches[0];
      const ipMatch = ip && match.signup_ip === ip;
      const fpMatch = fingerprint && match.device_fingerprint === fingerprint;
      matchReason = ipMatch && fpMatch ? "duplicate_ip_and_device" : ipMatch ? "duplicate_ip" : "duplicate_device";
    }
  }

  const updatePayload = {
    signup_ip: ip,
    device_fingerprint: fingerprint || null,
  };
  if (matchReason) {
    updatePayload.credits_locked = true;
    updatePayload.credits_locked_reason = matchReason;
    updatePayload.credits_locked_at = new Date().toISOString();
  }

  const { error: updateError } = await supabaseAdmin
    .from("users")
    .update(updatePayload)
    .eq("id", user.id);

  if (updateError) {
    console.error("[register-device] failed to update user:", updateError.message);
    return Response.json({ error: "internal_error" }, { status: 500 });
  }

  return Response.json({ ok: true, locked: Boolean(matchReason) });
}
