# Artha Frontend

Production-oriented frontend workspace for Artha, a financial operating system for Indian SMB merchants.

## Tech Stack

- React 19 + TypeScript (strict)
- Vite 7
- React Router
- TanStack Query
- Zustand
- Axios
- Tailwind CSS v3 + PostCSS
- ESLint + Prettier + EditorConfig

## Quick Start

```bash
cd artha-frontend
npm install
npm run dev
```

If PowerShell blocks `npm.ps1`, use:

```powershell
npm.cmd run dev
```

App runs at `http://localhost:5173` by default.

## Scripts

- `npm run dev` - start Vite dev server
- `npm run build` - type-check project references and build for production
- `npm run preview` - preview production build
- `npm run typecheck` - strict TypeScript check (`tsconfig.app.json`)
- `npm run lint` - ESLint with `--max-warnings 0`
- `npm run format` - Prettier write
- `npm run format:check` - Prettier check

## Environment

`.env`:

```env
VITE_API_BASE_URL=http://localhost:8000
VITE_ENV=development
```

Typed in `src/vite-env.d.ts`, consumed through `src/core/config/env.ts`.

## Routing

Defined in `src/app/router.tsx`:

- `/` -> `MarketingLayout` + `LandingPage`
- `/login` -> `LoginPage` (standalone auth layout)
- `/signup` -> `SignupPage` (standalone auth layout)
- `/dashboard` -> `AppLayout` + `DashboardPage` scaffold

## Architecture

```text
src/
|-- app/                    # app shell, providers, router
|-- core/                   # env, feature flags, state, auth/rbac placeholders
|-- layouts/                # MarketingLayout + AppLayout
|-- modules/                # feature modules (auth, dashboard)
|-- public-pages/           # marketing/public pages
|-- shared/                 # hooks, services, ui/components placeholders
|-- styles/                 # global Tailwind entry
`-- main.tsx                # bootstrap
```

### Key Contracts

- Absolute imports: `@/*` -> `src/*`
- React Query provider: `src/app/providers.tsx`
- Feature flags:
  - provider scaffold: `src/core/feature-flags/FeatureProvider.tsx`
  - hook: `src/core/feature-flags/useFeature.ts`
- Global app store (Zustand): `src/core/state/app.store.ts`
  - `user`
  - `role`
  - `enabledFeatures`
- API client (single Axios instance): `src/shared/services/api.ts`
  - base URL from `env.apiBaseUrl`
  - request/response interceptor stubs
  - shared error normalization in `src/shared/services/normalize-error.ts`
- Reveal motion hook (IntersectionObserver + reduced motion support):
  - `src/shared/hooks/useRevealOnScroll.ts`

## UI Surfaces

### Marketing Layout

- Header with brand and auth actions (`Login`, `Sign Up`)
- Renders nested marketing routes through `<Outlet />`

### Landing Page (`/`)

Composed in `src/public-pages/landing/LandingPage.tsx` with section components:

1. Hero
2. Trust strip
3. Core pillars (interactive flip cards)
4. Data-driven section
5. Security and compliance
6. Implementation and onboarding
7. Final CTA
8. Modular pricing preview (interactive billing tabs)
9. Footer

### Auth Pages

- `src/modules/auth/LoginPage.tsx`
- `src/modules/auth/SignupPage.tsx`

Current status:

- UI-only forms
- client-side state only
- no backend/auth integration yet
- accessibility baseline included (`label/htmlFor`, `required`, `aria-describedby`, `aria-live`)

## Styling and Motion

- Tailwind utility classes only
- Global style entry: `src/styles/index.css`
- Design tone: industrial, enterprise-grade slate palette
- Motion system is subtle and performance-safe:
  - CSS transitions only
  - IntersectionObserver-based reveal
  - reduced-motion respected

## Code Quality Setup

- Strict TypeScript (`strict: true`, no unused locals/params)
- ESLint with React Hooks + TypeScript rules + Prettier conflict disabling
- Prettier config in `.prettierrc`
- Editor formatting baseline in `.editorconfig`

## Notes

- `public/` is currently empty.
- Several folders intentionally contain placeholder barrels (`export {}`) for future growth.
