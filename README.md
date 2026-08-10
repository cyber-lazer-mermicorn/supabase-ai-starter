# Supabase AI Starter Kit
## Solves: "How do I add AI to my Supabase app?"

The #1 bottleneck for Supabase users: **adding AI features is hard**. This kit makes it easy.

**Live:** https://supabase-ai-starter.vercel.app

---

## The Problem

Supabase users want to add AI but struggle with:
- Setting up pgvector correctly
- Building RAG pipelines
- Real-time AI streaming
- Multi-tenant AI security

## The Solution

One repo. Everything you need. Copy-paste AI into any Supabase app.

---

## What's Included

### 1. pgvector Setup (5 minutes)
```sql
-- One command to enable AI search
CREATE EXTENSION IF NOT EXISTS vector;
```

### 2. RAG Pipeline (10 minutes)
```typescript
// Drop-in RAG for any Supabase app
const answer = await ragQuery('your question', documents);
```

### 3. Real-time AI Streaming (15 minutes)
```typescript
// Live AI responses to your frontend
subscribeToAgentEvents((event) => updateUI(event));
```

### 4. Multi-tenant Security (5 minutes)
```sql
-- Isolate AI per user automatically
CREATE POLICY "Users see only their data" ON documents
  FOR ALL USING (auth.uid() = user_id);
```

---

## Getting Started

```bash
# Clone the repo
git clone https://github.com/cyber-lazer-mermicorn/supabase-ai-starter.git

# Install dependencies
npm install

# Set up Supabase
npx supabase init
npx supabase start

# Run
npm run dev
```

---

## Why This Matters for Supabase

**The bottleneck:** Users love Supabase but don't know how to add AI.

**The fix:** This kit is a copy-paste solution. Users can add AI in minutes, not weeks.

**The result:** More Supabase adoption, happier users, less support tickets.

---

## Features

| Feature | Time to Add | Complexity |
|---------|-------------|------------|
| pgvector search | 5 min | Easy |
| RAG pipeline | 10 min | Medium |
| Real-time AI | 15 min | Medium |
| Multi-tenant RLS | 5 min | Easy |
| Edge Functions | 10 min | Medium |

---

## Use Cases

1. **E-commerce** — AI product recommendations
2. **SaaS** — AI-powered search
3. **Healthcare** — Patient data AI
4. **Finance** — Document analysis
5. **Education** — AI tutoring

---

## Contact

**Cherry Shanaley (Chan)** — cyber.lazer.mermicorn@gmail.com

*Built this to solve the #1 Supabase AI bottleneck*