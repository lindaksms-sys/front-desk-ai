# Front Desk AI

Healthcare front-desk product landing site, built by Linda Kisimisi.

## Problem and implemented scope

The site explains a proposed clinic front-desk service and routes visitors to a demo or booking link. This repository implements the marketing interface and four solution pages.

**Repository boundary:** the current GitHub code and matching Lovable project contain a React landing site. They do not contain a working patient portal, appointment database, voice-agent backend, reminders service or clinic administration application. Marketing copy and screenshots illustrate the wider product concept.

[Published landing-site preview](https://id-preview--4ff7a835-7ae5-43b4-b1f7-3fdae2e19001.lovable.app)

A separate Lovable project, [Frontdesk Demo](https://id-preview--777ec3de-7668-4ddf-a58a-a71fdd046c49.lovable.app), has a Vapi-tools implementation. Its backend must not be attributed to this repository.

## Architecture and stack

React 18, TypeScript, Vite, React Router, Tailwind CSS and shadcn/ui. `src/pages/Index.tsx` composes landing sections; `src/App.tsx` registers the home and solution routes. SEO page metadata uses React Helmet Async. CTAs link to external scheduling/demo destinations.

There is no AI execution workflow in this repository. A recruiter should assess it as product presentation and frontend work rather than backend conversational-AI evidence.

## Setup

```bash
npm ci
npm run dev
npm run build
npm run test
npm run lint
```

No Supabase or provider environment configuration is required by the inspected implementation. The example test is a scaffold. Commands are package scripts, not a claim that they were run during this documentation review.

## Security and deployment

No backend credentials were found in the inspected source. Keep local environment files out of version control and do not add provider secrets to browser code. A static host needs SPA fallback routing for the solution URLs. Existing marketing claims should be reviewed separately before presenting the page as proof of a deployed service.

## Source evidence

- [Routes](src/App.tsx)
- [Landing composition](src/pages/Index.tsx)
- [External booking CTA](src/components/landing/FinalCTASection.tsx)

The corresponding Lovable project and a separate Frontdesk Demo implementation were inspected before setting this boundary.
