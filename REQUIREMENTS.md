## Requirements (what you need installed)

- **Node.js**: \(>= 18.17.0\)
- **npm**: comes with Node.js (recommended)
- **OS**: macOS, Windows, or Linux

## Environment variables

Create `.env.local`. If you run `npm run easy-start`, it will auto-create `.env.local` by copying `.env.example`.

From `.env.example`:

- **NEXT_PUBLIC_SITE_URL**: Public site URL (used in metadata / links)
- **NEXT_PUBLIC_GA_ID**: Google Analytics ID (optional; only if implemented)
- **CONTACT_FORM_ENDPOINT**: Contact form endpoint (optional; only if implemented)
- **RATE_LIMIT_REQUESTS_PER_HOUR**: Rate limit value (optional; only if implemented)
- **SENTRY_DSN**: Sentry DSN (optional; only if implemented)

## Packages (npm dependencies)

### Runtime dependencies

- **next**: `14.1.0`
- **react**: `^18.2.0`
- **react-dom**: `^18.2.0`

### Dev dependencies

- **typescript**: `^5.3.3`
- **tailwindcss**: `^3.4.1`
- **postcss**: `^8.4.33`
- **autoprefixer**: `^10.4.17`
- **@types/node**: `^20.11.5`
- **@types/react**: `^18.2.48`
- **@types/react-dom**: `^18.2.18`

## One-command start (non-technical)

From the project folder, run:

```bash
npm run easy-start
```

What it does:

- Creates `.env.local` from `.env.example` if needed
- Installs packages if `node_modules/` is missing
- Starts the dev server at `http://localhost:3000`

