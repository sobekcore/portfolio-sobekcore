import { z, defineCollection } from 'astro:content';

const pagesCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    href: z.string(),
    icon: z.string(),
    color: z.string(),
  }),
});

export const collections = {
  pages: pagesCollection,
};
