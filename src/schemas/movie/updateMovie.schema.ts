import { z } from 'zod';

export const updateMovieParamsSchema = z.object({
  id: z.string(),
});

export const updateMovieBodySchema = z.object({
  title: z.string(),
  releaseDate: z.string(),
  rating: z.string(),
  globalRating: z.string(),
  genres: z.array(
    z.object({
      id: z.number(),
      name: z.string(),
    }),
  ),
  directors: z.array(z.string()),
  cast: z.array(z.string()),
  poster: z.string(),
  media: z.string().or(z.boolean()),
  banner: z.string().or(z.null()),
  shortDescription: z.string(),
  description: z.string(),
});
