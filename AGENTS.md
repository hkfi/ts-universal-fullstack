# AGENTS.md

This file is the repo entrypoint for agents. Keep it short and treat the README as the human-facing source of truth.

## Runtime Entry Point

- Use Node 22.17+; `.nvmrc` matches the minimum in `package.json`.
- Package manager is pinned by the root `package.json`: `pnpm@11.1.1`.
- First run in a fresh clone or worktree: `pnpm setup` or `./scripts/setup.sh`.
- If `pnpm` is missing but Corepack is available, use `corepack pnpm ...`; the setup script does this automatically.
- Do not switch generated projects to npm or yarn unless the template owner explicitly asks.

## Standard Checks

- `pnpm typecheck`
- `pnpm lint`
- `pnpm test`
- `pnpm doctor`
