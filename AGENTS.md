# Supabase AI Starter — Agent Doctrine

## What this repo is
Quickstart template: Supabase + AI in <10 minutes. Auth, pgvector, Edge Functions, and streaming chat.
By Cherry Shanaley (Chan), AI Solutions Engineer.

## Tech stack
- Next.js 15, Supabase (Auth + pgvector + Edge Functions), Vercel AI SDK, TypeScript strict

## Coding rules
- Same as supabase-showcase: RLS on every user table, typed DB client, SSR session verification
- This is a quickstart — setup must complete in < 10 minutes with clear steps
- All setup steps in README numbered and verified to work
- Single `.env.example` with all required vars and inline comments explaining each
- `supabase/seed.sql` provides demo data so the app works on first run

## Commands
```bash
npm install
cp .env.example .env.local
supabase start
supabase db push
supabase db seed
npm run dev
```
