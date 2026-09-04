import "server-only";
import { createClient } from "@supabase/supabase-js";

// Service-role client -- bypasses RLS. Only import this from server-side
// code (API routes), never from client components. Requires
// SUPABASE_SERVICE_ROLE_KEY (NOT the anon key) to be set.
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

export const supabaseAdmin = (() => {
  if (!supabaseUrl || !supabaseServiceRoleKey) {
    console.warn("SUPABASE_SERVICE_ROLE_KEY missing -- admin operations will fail.");
    return createClient("https://placeholder.supabase.co", "placeholder-key");
  }
  return createClient(supabaseUrl, supabaseServiceRoleKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });
})();
