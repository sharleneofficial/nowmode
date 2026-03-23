# NOW MODE

A Next.js landing page and interactive demo for the NOW MODE concept app — a minimal watch/phone app that shows "NOW" by default and reveals the time only on tap.

## Stack

- **Framework**: Next.js 16 (App Router) with TypeScript
- **Styling**: Tailwind CSS v4
- **Fonts**: Space Mono (brand) + Inter (body) via next/font/google
- **Package manager**: npm
- **Runtime**: Node.js 20

## Project structure

```
app/
  layout.tsx       — root layout, metadata, viewport, fonts
  globals.css      — global styles + CSS animations (holographic, shimmer, fade)
  page.tsx         — main landing page (hero, product, problem, CTA, footer)
  demo/
    page.tsx       — interactive demo: watch + phone mockups with color switcher
public/
  *.svg            — static assets
next.config.ts     — Next.js config (images.unoptimized for Replit compat)
```

## Pages

- `/` — NOW MODE marketing/landing page
- `/demo` — Interactive demo with watch and smartphone mockups

## Demo features

- Two interactive device mockups: rectangular digital watch + portrait smartphone
- Tap any screen to toggle between "NOW" and the live current time (updates every second)
- 5 color themes: SOLAR (#FFD400), PULSE (#FF2D87), DRIFT (#00E5D4), VOID (#B44FFF), FLUX (#00FF8C)
- Watch bezel uses animated holographic gradient (CSS `@keyframes holographic` + shimmer sweep)
- Space Mono font throughout, matching the brand hero section

## Dev server

```
npm run dev    # port 5000, 0.0.0.0
npm run build
npm run start  # port 5000, 0.0.0.0
```

## Deployment

Configured for Replit autoscale:
- Build: `npm run build`
- Run: `npm run start`
