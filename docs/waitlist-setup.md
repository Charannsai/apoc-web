# Waitlist setup

The landing form (hero) and the waitlist modal POST to `/waitlist`, which inserts
into the `waitlist` table in Supabase.

## One-time setup

1. Run `supabase/waitlist.sql` once in the Supabase SQL editor.
2. Set these environment variables (Vercel project settings, or `.env.local` locally):
   - `NEXT_PUBLIC_SUPABASE_URL` - Supabase Project URL (Project Settings -> API)
   - `SUPABASE_SERVICE_ROLE_KEY` - service_role key from the same page.
     Server-only secret: the `/waitlist` route runs server-side, so this key is
     never shipped to the browser. Do not expose it anywhere client-side.

The table has RLS enabled with no public policies; the route writes with the
service role key, which bypasses RLS.

## Known limitation

The `/waitlist` endpoint has no rate limiting or bot protection. Duplicates are
harmless (unique email constraint returns success), but a spammer could fill the
table with junk rows. If that becomes a problem, add a captcha (e.g. Cloudflare
Turnstile) or edge rate limiting in front of the route.
