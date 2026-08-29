# Copilot Instructions — Supabase AI Starter

## Always
- Keep setup to < 10 minutes — every step must be tested
- Include seed data so the app works on first run
- Comment every env var in `.env.example`
- RLS on every user-data table

## Never
- Add optional steps that block the happy path
- Leave tables without RLS
- Require manual DB setup beyond `supabase db push && supabase db seed`
