import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';

function log(msg) {
  // keep output readable for non-technical users
  process.stdout.write(`${msg}\n`);
}

function fail(msg, code = 1) {
  process.stderr.write(`${msg}\n`);
  process.exit(code);
}

function parseNodeMajorMinorPatch(version) {
  // version like "v20.11.0"
  const m = /^v?(\d+)\.(\d+)\.(\d+)/.exec(version ?? '');
  if (!m) return null;
  return { major: Number(m[1]), minor: Number(m[2]), patch: Number(m[3]) };
}

function nodeAtLeast(current, required) {
  if (!current) return false;
  if (current.major !== required.major) return current.major > required.major;
  if (current.minor !== required.minor) return current.minor > required.minor;
  return current.patch >= required.patch;
}

const projectRoot = process.cwd();
const packageJsonPath = path.join(projectRoot, 'package.json');
if (!fs.existsSync(packageJsonPath)) {
  fail(
    'Could not find package.json. Please run this from the project folder (the one that contains package.json).'
  );
}

// Next.js 14 requires Node >= 18.17
const currentNode = parseNodeMajorMinorPatch(process.version);
const requiredNode = { major: 18, minor: 17, patch: 0 };
if (!nodeAtLeast(currentNode, requiredNode)) {
  fail(
    `Node.js ${requiredNode.major}.${requiredNode.minor}.${requiredNode.patch}+ is required. You are running ${process.version}.`
  );
}

const envExamplePath = path.join(projectRoot, '.env.example');
const envLocalPath = path.join(projectRoot, '.env.local');

if (!fs.existsSync(envLocalPath) && fs.existsSync(envExamplePath)) {
  fs.copyFileSync(envExamplePath, envLocalPath);
  log('Created .env.local from .env.example (you can edit it later).');
}

const nodeModulesPath = path.join(projectRoot, 'node_modules');
const hasNodeModules = fs.existsSync(nodeModulesPath);

const npmCmd = process.platform === 'win32' ? 'npm.cmd' : 'npm';
const run = (args, friendlyName, envOverrides = {}) => {
  log(`\n==> ${friendlyName}`);
  const res = spawnSync(npmCmd, args, {
    cwd: projectRoot,
    stdio: 'inherit',
    shell: false,
    env: { ...process.env, ...envOverrides },
  });
  if (res.error) {
    fail(`Failed to run "${npmCmd} ${args.join(' ')}": ${res.error.message}`);
  }
  if (res.status !== 0) {
    process.exit(res.status ?? 1);
  }
};

if (!hasNodeModules) {
  run(['install'], 'Installing required packages (one-time setup)');
}

// macOS can hit "EMFILE: too many open files" with file watching.
// Polling avoids exhausting file descriptors and is more reliable for non-technical users.
run(['run', 'dev'], 'Starting the app (development server)', {
  NEXT_TELEMETRY_DISABLED: '1',
  WATCHPACK_POLLING: 'true',
  WATCHPACK_POLLING_INTERVAL: '1000',
});
