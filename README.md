# ryanlyu.com

Ryan Lyu's personal website and blog. Built with Astro and deployed as a static site on Cloudflare Workers.

## Local development

```bash
npm install
npm run dev
```

## Write a new post

Create a Markdown file in `src/content/blog/`:

```md
---
title: "Post title"
description: "A one-line summary"
publishedAt: 2026-09-24
tags: ["Notes"]
draft: false
---

Start writing here.
```

Posts with `draft: true` are excluded from the website and RSS feed.

## Update personal information

## Add travel notes

Create a Markdown file in `src/content/travel/` with the following frontmatter, then write your article below it. Published notes automatically appear in the archive and add a red pixel marker at the city's coordinates. Each city links to its latest note. Drafts are excluded.

```yaml
---
title: "A weekend in Singapore"
description: "A short introduction."
publishedAt: 2026-09-25
city: "Singapore"
country: "Singapore"
latitude: 1.3521
longitude: 103.8198
draft: true
---
```

Map geometry: Natural Earth public-domain 1:110m land dataset, https://github.com/nvkelso/natural-earth-vector/blob/master/geojson/ne_110m_land.geojson. Rendered as a local pixel grid; no external map service is required.

Name, bio, email, and social links live in `src/data/site.ts`.

## Deploy to Cloudflare Workers

- Build command: `npm run build`
- Build output directory: `dist`
- Deploy command: `npx wrangler deploy`
- Node.js version: 22 or newer

The production Worker is connected to the `main` branch and serves `ryanlyu.com`.
