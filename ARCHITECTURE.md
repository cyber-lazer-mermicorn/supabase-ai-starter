# Architecture

## What's included
- Supabase Auth (email/password + magic link)
- pgvector for semantic search
- Edge Function for AI chat (streaming)
- Next.js App Router with Supabase SSR
- Seed data for immediate demo

## Setup flow
1. `npm install` → 2. fill `.env.local` → 3. `supabase start` → 4. `supabase db push && supabase db seed` → 5. `npm run dev` → working app at `localhost:3000`.

## Database
`profiles` (RLS), `documents` (pgvector, RLS), `chat_sessions` (RLS). All tables have `user_id` FK to `auth.users`.
