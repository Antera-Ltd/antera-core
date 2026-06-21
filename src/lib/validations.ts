import { z } from 'zod';

export const postSchema = z.object({
  title: z.string().min(3).max(100),
  slug: z.string().min(3).max(100),
  content: z.string().min(10),
  excerpt: z.string().max(250).optional(),
  status: z.enum(['draft', 'published']),
  featured_image: z.string().url().optional().or(z.literal('')),
  category_id: z.string().uuid().optional(),
  author_id: z.string().uuid().optional(),
});

export const subscriberSchema = z.object({
  email: z.string().email(),
});
