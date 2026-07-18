# ExamManager Landing

Waitlist / marketing landing page for [ExamManager](https://github.com/ExamManager) — the next-generation exam coordination platform for educators.

Collects email signups via Resend, with optional PostHog analytics.

## Stack

- [Next.js](https://nextjs.org/) (Pages Router)
- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Resend](https://resend.com/) (waitlist contacts)
- [PostHog](https://posthog.com/) (analytics)
- [Framer Motion](https://www.framer.com/motion/)

## Getting started

1. Install dependencies:

```sh
pnpm install
# or: yarn install / npm install
```

2. Copy the example env and fill in your keys:

```sh
cp .env.example .env
```

3. Start the dev server:

```sh
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment

| Variable | Description |
| --- | --- |
| `NEXT_PUBLIC_POSTHOG_KEY` | PostHog project API key |
| `NEXT_PUBLIC_POSTHOG_HOST` | PostHog host (e.g. `REDACTED`) |
| `RESEND_API_KEY` | Resend API key for waitlist signups |
| `RESEND_AUDIENCE_ID` | Resend audience ID for contacts |

## Related repos

- [exams-app-v1](https://github.com/ExamManager/exams-app-v1) — first ExamManager app
- [exams-app-v2](https://github.com/ExamManager/exams-app-v2) — Taxonomy-era Next.js + Prisma exam manager
- [exams-app-v3](https://github.com/ExamManager/exams-app-v3) — latest ExamManager app
- [exams-landing](https://github.com/ExamManager/exams-landing) — this waitlist / landing page

## License

Licensed under the [MIT License](./LICENSE).
