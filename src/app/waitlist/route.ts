import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "invalid_body" },
      { status: 400 }
    );
  }

  const raw = body as { email?: unknown; source?: unknown };
  const email = typeof raw?.email === "string" ? raw.email.trim().toLowerCase() : "";
  const source =
    typeof raw?.source === "string" && raw.source.trim()
      ? raw.source.trim().slice(0, 50)
      : "landing";

  if (!EMAIL_RE.test(email) || email.length > 320) {
    return NextResponse.json(
      { ok: false, error: "invalid_email" },
      { status: 400 }
    );
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!supabaseUrl || !serviceRoleKey) {
    return NextResponse.json(
      { ok: false, error: "server_not_configured" },
      { status: 500 }
    );
  }

  const supabase = createClient(supabaseUrl, serviceRoleKey, {
    auth: { persistSession: false },
  });

  const { error } = await supabase.from("waitlist").insert({ email, source });

  if (error) {
    // Postgres unique violation: email already on the list.
    if (error.code === "23505") {
      return NextResponse.json({ ok: true, duplicate: true });
    }
    return NextResponse.json(
      { ok: false, error: "insert_failed" },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}
