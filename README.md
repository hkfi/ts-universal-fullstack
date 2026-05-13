# ts-universal-fullstack

A reusable full-stack TypeScript starter for projects that need:

- Next.js App Router for web
- Expo Router for mobile
- Shared React Native Web UI in `packages/ui`
- Shared product screens in `packages/app`
- tRPC in `packages/api`
- Drizzle/Postgres in `packages/db`
- Typed environment parsing in `packages/env`
- Portless local URLs
- Corepack-pinned pnpm
- Turborepo task orchestration

## Start

Use Node 22.17+; `.nvmrc` pins the template's minimum supported Node version.
The package manager is pinned in `package.json`, and the setup script uses
Corepack when available.
If a generated project commits `pnpm-lock.yaml`, setup and CI use frozen
installs.

```bash
./scripts/setup.sh
cp .env.example .env
pnpm dev
```

The default web URL is:

```txt
https://starter.localhost
```

Run the underlying dev server without Portless:

```bash
pnpm --filter @starter/web dev:app
```

Run native:

```bash
pnpm native
```

## Portless

Each app keeps the real dev command in `dev:app` and exposes Portless as `dev`:

```json
{
  "scripts": {
    "dev": "portless",
    "dev:app": "next dev"
  },
  "portless": {
    "name": "starter",
    "script": "dev:app"
  }
}
```

Before first use on a new machine:

```bash
pnpm exec portless trust
pnpm exec portless service install
```

The service step is optional, but it keeps the proxy ready after reboot.

## Structure

```txt
apps/
  web/       Next.js App Router shell
  mobile/    Expo Router shell
packages/
  app/       shared product screens and feature logic
  ui/        universal React Native Web primitives
  api/       tRPC router and context
  db/        Drizzle schema and lazy DB client
  env/       typed env parsing
  scripts/   small repo utilities
supabase/    local Supabase config
```

## Rename

This template uses the placeholder scope `@starter/*` and the Portless host
`starter.localhost`. Rename both when creating a real app.

## Common Commands

```bash
pnpm dev          # web through Portless
pnpm dev:all      # every workspace dev script
pnpm native       # Expo through Portless
pnpm web:direct   # Next dev without Portless
pnpm typecheck
pnpm lint
pnpm test
pnpm build
pnpm doctor
```
