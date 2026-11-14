-- APOC landing waitlist table
-- Paste into Supabase SQL Editor and run once.

create table if not exists public.waitlist (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  source text not null default 'landing',
  created_at timestamptz not null default now()
);

-- RLS stays on: the /waitlist route writes with the service role key,
-- which bypasses RLS, so no public policies are needed.
alter table public.waitlist enable row level security;
