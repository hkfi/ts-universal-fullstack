#!/usr/bin/env sh
set -eu

repo_root=$(cd "$(dirname "$0")/.." && pwd)
cd "$repo_root"

if ! command -v corepack >/dev/null 2>&1; then
  cat >&2 <<'EOF'
Corepack was not found on PATH.

Install a recent Node.js release, then run:

  corepack enable
  pnpm install
EOF
  exit 1
fi

corepack enable pnpm
corepack pnpm install

cat <<'EOF'

Setup complete.

Useful next commands:
  pnpm dev
  pnpm native
  pnpm typecheck
EOF
