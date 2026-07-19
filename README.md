# ExamManager Landing

**Deprecated portfolio / waitlist demo.** This is not an active product — signup is disabled and the page is kept only as a public showcase of past ExamManager work.

## Stack

- Next.js (Pages Router) and React
- TypeScript and Tailwind CSS
- Resend (historically used for waitlist contacts; API is disabled)
- PostHog (analytics)
- Framer Motion
- Yarn

## Local development

```bash
yarn install
cp .env.example .env
yarn dev
```

Open [http://localhost:3000](http://localhost:3000).

Signup and `/api/resend` remain disabled in this demo; you do not need Resend keys for a local run.

## Environment

| Variable | Description |
| --- | --- |
| `NEXT_PUBLIC_POSTHOG_KEY` | PostHog project API key |
| `NEXT_PUBLIC_POSTHOG_HOST` | PostHog host (e.g. `https://app.posthog.com`) |
| `RESEND_API_KEY` | Unused — signup / Resend API is disabled |
| `RESEND_AUDIENCE_ID` | Unused — signup / Resend API is disabled |

## Commands

| Command | Purpose |
| --- | --- |
| `yarn dev` | Development server |
| `yarn build` | Production build |
| `yarn start` | Serve production build |
| `yarn lint` | ESLint |

## Related repositories

| Repo | Role |
| --- | --- |
| [exams-app-v1](https://github.com/ExamManager/exams-app-v1) | Vue 3 exam timer |
| [exams-app-v2](https://github.com/ExamManager/exams-app-v2) | Next.js + Prisma exam manager |
| [exams-app-v3](https://github.com/ExamManager/exams-app-v3) | T3 / Drizzle SaaS rewrite |

## License

MIT — see [LICENSE](./LICENSE).
