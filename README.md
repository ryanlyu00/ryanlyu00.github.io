# ryanlyu.com

Ryan Lyu 的个人网站与博客，使用 Astro 构建，输出为纯静态文件，适合部署到 Cloudflare Pages。

## 本地开发

```bash
npm install
npm run dev
```

## 写一篇新文章

在 `src/content/blog/` 新建 Markdown 文件：

```md
---
title: "文章标题"
description: "一句话摘要"
publishedAt: 2026-09-24
tags: ["随笔"]
draft: false
---

正文从这里开始。
```

`draft: true` 的文章不会出现在网站或 RSS 中。

## 修改个人信息

姓名、简介、邮箱和社交链接集中在 `src/data/site.ts`。

## 部署到 Cloudflare Pages

- Build command: `npm run build`
- Build output directory: `dist`
- Node.js version: 22 或更新版本

部署完成后，在 Cloudflare Pages 项目的 Custom domains 中添加 `ryanlyu.com`。
