const checks = [
  ['Node.js', process.version],
  ['Package manager', process.env.npm_config_user_agent ?? 'unknown'],
  ['Portless URL', process.env.PORTLESS_URL ?? 'not running through portless'],
]

for (const [label, value] of checks) {
  console.log(`${label}: ${value}`)
}
