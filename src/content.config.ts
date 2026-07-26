import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const journal = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/data/content/journal' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    published: z.coerce.date(),
    category: z.string(),
    image: z.string().default('/images/placeholder-grain.svg'),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    affiliateDisclosure: z.boolean().default(false)
  })
});

export const collections = { journal };
