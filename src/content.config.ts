import { defineCollection } from 'astro:content';
import { file } from 'astro/loaders';
import { z } from 'astro/zod';

const text = z.object({ en: z.string(), ko: z.string() });
const name = z.object({ en: z.string(), ko: z.string().optional() });

const research = defineCollection({
  loader: file('src/data/research.yaml'),
  schema: z.object({
    order: z.number(),
    title: z.string(),
    summary: z.string(),
    summaryKo: z.string(),
    demos: z.array(z.object({ media: z.string(), caption: z.string() })),
  }),
});

const news = defineCollection({
  loader: file('src/data/news.yaml'),
  schema: z.object({
    date: z.coerce.date(),
    tag: z.enum(['Achievement', 'Visit', 'New', 'Birth', 'Start']),
    title: z.string(),
    titleKo: z.string().optional(),
  }),
});

const members = defineCollection({
  loader: file('src/data/members.yaml'),
  schema: z.object({
    order: z.number(),
    role: z.enum(['pi', 'phd', 'ms', 'undergrad', 'alumni']),
    name,
    course: text,
    topics: z.array(z.string()),
    email: z.string().email().optional(),
    photo: z.string().optional(),
    photoPos: z.string().default('center 15%'),
    note: z.string().optional(),
  }),
});

const publications = defineCollection({
  loader: file('src/data/publications.yaml'),
  schema: z.object({
    order: z.number(),
    group: z.enum(['international', 'domestic', 'ip']),
    kind: z.enum(['journal', 'conference', 'patent', 'transfer']),
    year: z.number(),
    authors: z.string(),
    title: z.string(),
    venue: z.string(),
    details: z.string().optional(),
    status: z.string().optional(),
    jcr: z.string().optional(),
    q1: z.boolean().default(false),
    award: z.string().optional(),
  }),
});

const talks = defineCollection({
  loader: file('src/data/talks.yaml'),
  schema: z.object({
    order: z.number(),
    year: z.number(),
    host: z.string(),
    hostKo: z.string().optional(),
    title: z.string(),
    titleKo: z.string().optional(),
  }),
});

const awards = defineCollection({
  loader: file('src/data/awards.yaml'),
  schema: z.object({
    order: z.number(),
    year: z.number(),
    title: z.string(),
    titleKo: z.string().optional(),
    image: z.string().optional(),
    imagePos: z.string().default('center'),
  }),
});

const projects = defineCollection({
  loader: file('src/data/projects.yaml'),
  schema: z.object({
    order: z.number(),
    period: z.string(),
    title: z.string(),
    titleKo: z.string(),
    agency: z.string(),
    agencyKo: z.string(),
    budget: z.string(),
  }),
});

const cv = defineCollection({
  loader: file('src/data/cv.yaml'),
  schema: z.object({
    order: z.number(),
    title: z.string(),
    groups: z.array(
      z.object({
        title: z.string(),
        period: z.string().optional(),
        columns: z.boolean().default(false),
        lines: z.array(z.union([z.string(), z.object({ text: z.string(), icon: z.string() })])),
        media: z
          .array(
            z.object({
              kind: z.enum(['image', 'video', 'youtube']),
              src: z.string(),
              alt: z.string(),
              size: z.enum(['tiny', 'logo', 'small', 'wide']).default('small'),
            }),
          )
          .default([]),
      }),
    ),
  }),
});

const history = defineCollection({
  loader: file('src/data/history.yaml'),
  schema: z.object({
    order: z.number(),
    title: z.string(),
    period: z.string(),
    institute: z.string(),
    overview: z.string(),
    image: z.string(),
  }),
});

export const collections = { research, news, members, publications, talks, awards, projects, history, cv };
