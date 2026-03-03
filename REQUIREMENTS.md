## Requirements (what you need installed)

- **Node.js**: \(>= 18.17.0\)
- **npm**: comes with Node.js (recommended)
- **OS**: macOS, Windows, or Linux

## Environment variables

Create `.env.local`. If you run `npm run easy-start`, it will auto-create `.env.local` by copying `.env.example`.

From `.env.example`:

- **NEXT_PUBLIC_SITE_URL**: Public site URL (used in metadata / links)
- **NEXT_PUBLIC_GA_ID**: Google Analytics ID (optional; only if implemented)
- **CONTACT_TO_EMAIL**: Inbox that receives website contact submissions
- **CONTACT_FROM_EMAIL**: Sender address used by SMTP transport
- **SMTP_HOST**: SMTP host for outbound email
- **SMTP_PORT**: SMTP port (for example `587` or `465`)
- **SMTP_SECURE**: `true` for implicit TLS (typically port `465`), otherwise `false`
- **SMTP_USER**: SMTP username
- **SMTP_PASS**: SMTP password
- **RATE_LIMIT_REQUESTS_PER_HOUR**: Contact form rate limit per IP (default `20`)
- **SENTRY_DSN**: Sentry DSN (optional; only if implemented)

## Packages (npm dependencies)

### Runtime dependencies

- **next**: `14.1.0`
- **react**: `^18.2.0`
- **react-dom**: `^18.2.0`
- **nodemailer**: SMTP delivery for contact form submissions

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
