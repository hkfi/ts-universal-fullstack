#!/usr/bin/env sh
set -eu

repo_root=$(cd "$(dirname "$0")/.." && pwd)
cd "$repo_root"

expected_pnpm="pnpm"
if command -v node >/dev/null 2>&1; then
  expected_pnpm=$(node -p "require('./package.json').packageManager || 'pnpm'")
fi

run_pnpm() {
  if [ "$pnpm_runner" = "corepack" ]; then
    corepack pnpm "$@"
  else
    pnpm "$@"
  fi
}

if command -v corepack >/dev/null 2>&1; then
  pnpm_runner="corepack"
  pnpm_command="corepack pnpm"
  corepack enable pnpm
elif command -v pnpm >/dev/null 2>&1; then
  pnpm_runner="pnpm"
  pnpm_command="pnpm"
else
  cat >&2 <<'EOF'
Could not find Corepack or pnpm on PATH.

Install/enable Corepack once, then re-run this script:

  npm install -g corepack@latest
  corepack enable pnpm
  ./scripts/setup.sh

If you intentionally manage pnpm another way, make sure pnpm is on PATH and run:

  pnpm install

Use pnpm install --frozen-lockfile instead when your generated project commits
pnpm-lock.yaml.
EOF
  exit 1
fi

printf 'Using %s for %s\n' "$pnpm_runner" "$expected_pnpm"

if [ -f pnpm-lock.yaml ]; then
  run_pnpm install --frozen-lockfile
else
  run_pnpm install
fi

cat <<'EOF'

Setup complete.

Useful next commands:
EOF

printf '  %s dev\n' "$pnpm_command"
printf '  %s native\n' "$pnpm_command"
printf '  %s typecheck\n' "$pnpm_command"
