import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const travel = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/travel' }),
  schema: z.object({
    title: z.string(), description: z.string(), publishedAt: z.coerce.date(),
    city: z.string(), country: z.string(),
    latitude: z.number().min(-90).max(90), longitude: z.number().min(-180).max(180),
    draft: z.boolean().default(false),
  }),
});
export const collections = { blog, travel };
