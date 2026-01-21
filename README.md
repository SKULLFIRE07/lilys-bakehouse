# Lily's Bakehouse

Single-page marketing and ordering experience for Lily's Bakehouse, built with Next.js 14 (App Router). It highlights the menu, ordering rules, and a lightweight cart so visitors can plan orders before messaging on Instagram.

## Features
- Animated hero carousel with smooth scroll CTAs to the menu and Instagram ordering.
- Signature menu browser with tabbed categories, rich product cards, and price variants.
- Cart drawer with quantity controls, floating cart shortcut, and localStorage persistence.
- Ordering policy section to set expectations on lead time, payments, and delivery.
- Static export configuration tuned for GitHub Pages (`basePath`/`assetPrefix` set to `/lilys-bakehouse`).

## Tech Stack
- Next.js 14 (App Router, static export)
- React 18
- Framer Motion for micro-interactions
- Lenis for smooth scrolling
- CSS Modules for styling

## Getting Started
Prereq: Node 18+ and npm.

```bash
npm install
npm run dev
# app runs on http://localhost:3000
```

### Build
Static assets are emitted to `out/` (suitable for GitHub Pages or any static host):

```bash
npm run build
```

### Lint
```bash
npm run lint
```

## Deployment Notes
- The project uses `output: 'export'` with `basePath` and `assetPrefix` set to `/lilys-bakehouse` for GitHub Pages. If you deploy under a different repo/path, update `next.config.mjs` and `getBasePath` accordingly.
- After `npm run build`, publish the `out/` directory to your static hosting provider.

## Project Structure
- `src/app` — App Router entry, global styles, layout.
- `src/components` — UI sections (Hero, Menu, Order, Footer), cart drawer, marquee, smooth scroll.
- `src/context/CartContext.js` — Cart state, persistence, and helpers.
- `public/images` — Product imagery used across the menu and hero.
