# Project Management Tool

Fully customizable & themable Project Management platform.

**Hierarchy:** Workspace → Team / Sub-team → Project → Epic → Sprint → Story → Task → Subtask  
**Features:** Custom roles & granular permissions, fully themable Kanban, Calendar, Comments + Chat  
**Deploy:** Local (Docker), Vercel + Supabase, or custom server

## Status (Session 1–2 complete)

- Full Prisma schema + CASL permissions
- Next.js 15 + tRPC + Auth.js
- Workspace / Project / Work Item CRUD
- Ready for Supabase Postgres + Vercel

See roadmap in previous session notes. Next: Kanban (Session 3).

## Quick Start (local)

```bash
cp .env.example .env
# set DATABASE_URL (local Docker or Supabase)
npm install
npx prisma db push
npx prisma db seed
npm run dev
```

Demo: `demo@example.com` / `demo1234`

## Supabase setup

1. Create project at https://supabase.com/dashboard
2. Copy connection strings into `.env` / Vercel env vars (`DATABASE_URL` + `DIRECT_URL`)
3. Run `npx prisma db push` (and seed if desired)
4. Deploy to Vercel linked to this repo
