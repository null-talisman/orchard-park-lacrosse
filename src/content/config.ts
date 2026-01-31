import { defineCollection, z } from 'astro:content';

const announcements = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    priority: z.enum(['high', 'normal']).default('normal'),
    excerpt: z.string(),
    author: z.string().optional(),
  }),
});

// Event schema for individual events in the array
const eventSchema = z.object({
  title: z.string(),
  date: z.string(),
  time: z.string(),
  endTime: z.string().optional(),
  location: z.string(),
  type: z.enum(['game', 'practice', 'tournament', 'meeting', 'camp']),
  description: z.string().optional(),
  program: z.string().optional(),
});

const events = defineCollection({
  type: 'data',
  schema: z.array(eventSchema),
});

const programs = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    season: z.string(),
    icon: z.string(),
    ages: z.string(),
    order: z.number(),
    registrationOpen: z.boolean().default(false),
    registrationDeadline: z.date().optional(),
    cost: z.string().optional(),
  }),
});

export const collections = {
  announcements,
  events,
  programs,
};
