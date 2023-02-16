import { defineCollection, z } from 'astro:content';

const pagesCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    href: z.string(),
    icon: z.string(),
    color: z.string(),
  }),
});

const socialsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    href: z.string(),
    icon: z.string(),
    external: z.boolean(),
  }),
});

export const collections = {
  pages: pagesCollection,
  socials: socialsCollection,
};
