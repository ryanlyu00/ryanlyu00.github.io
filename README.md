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

Name, bio, email, and social links live in `src/data/site.ts`.

## Deploy to Cloudflare Workers

- Build command: `npm run build`
- Build output directory: `dist`
- Deploy command: `npx wrangler deploy`
- Node.js version: 22 or newer

The production Worker is connected to the `main` branch and serves `ryanlyu.com`.
