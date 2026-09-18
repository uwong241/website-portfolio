# Developer Portfolio

Modern, high-performance developer portfolio built with React, TypeScript, Vite, and Tailwind CSS.

## Features

- **Constellation Canvas Animation**: Interactive celestial particle background reacting to cursor physics and dark/light modes.
- **Custom Cursor System**: Dual-layer low-latency responsive cursor (with automatic fallback on touch devices).
- **Theme Switcher**: Smooth Dark/Light mode toggle with persistence via `localStorage`.
- **Engineering-Oriented Content**:
  - Homelab Topology Showcase
  - Technical Journey & Milestones
  - Interactive Project Showcase with tech stack filters
  - Accessible Semantic HTML & WCAG compliant contrast
- **SEO & Performance Ready**:
  - OpenGraph & Twitter Card metadata
  - `robots.txt` & `sitemap.xml`
  - Gzip & Brotli asset caching ready

## Tech Stack

- **Framework**: React 18 + TypeScript
- **Bundler**: Vite
- **Styling**: Tailwind CSS + PostCSS
- **Routing**: React Router DOM

## Quick Start

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

## Cloudflare Pages Deployment

1. Connect this repository to **Cloudflare Pages**.
2. Set Framework preset to **Vite**.
3. Build command: `npm run build`
4. Build output directory: `dist`
