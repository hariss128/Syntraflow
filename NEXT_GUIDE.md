# Next.js Starter Guide (for React developers)

## Folder structure

```text
next-frontend/
  public/                    # static files (images, icons)
  src/
    app/                     # routes + layouts (App Router)
      (auth)/                # route group (does not affect URL)
      (dashboard)/           # route group (does not affect URL)
      api/                   # backend route handlers (optional)
      layout.tsx             # root layout (like app shell)
      page.tsx               # home page route (/)
      globals.css            # global styles
    components/              # reusable UI components
      ui/                    # primitive design-system components
    features/                # feature modules (auth, profile, etc.)
    hooks/                   # custom React hooks
    services/                # API clients / data fetching logic
    store/                   # state management (Redux/Zustand/context)
    lib/                     # shared helpers (formatters, clients)
    utils/                   # utility functions
    constants/               # app constants/enums
    types/                   # TypeScript shared types/interfaces
  next.config.ts             # Next.js config
  tsconfig.json              # TypeScript config
  eslint.config.mjs          # lint rules
```

## React vs Next.js (quick mapping)

- React: you build SPA routing manually (React Router).
- Next: file-based routing in `src/app` (`page.tsx`, `layout.tsx`).

- React: mostly client rendering.
- Next: server rendering by default, then hydrate on client.

- React: API/server is separate project.
- Next: can include API routes in `src/app/api`.

- React: performance tuning is mostly manual.
- Next: built-in optimizations (code-splitting, image/font optimization).

## Rules you should remember

1. Components are **Server Components** by default in `app/`.
2. Add `"use client"` at top when you need hooks (`useState`, `useEffect`) or browser APIs.
3. Keep route-specific UI near its route; move reusable UI to `components/`.
4. Keep data access in `services/` or `lib/`, not scattered in components.

## Recommended next steps

1. Run `npm run dev`.
2. Build 2-3 pages first:
   - `src/app/login/page.tsx`
   - `src/app/dashboard/page.tsx`
   - `src/app/profile/page.tsx`
3. Create reusable UI in `src/components/ui`.
4. Add feature folders in `src/features` (for example `features/auth`).
5. Start with a minimal homepage in `src/app/page.tsx`, then add sections one by one.
