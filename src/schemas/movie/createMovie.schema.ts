import { z } from 'zod';

export const createMovieBodySchema = z.object({
  title: z.string(),
  releaseDate: z.string(),
  rating: z.string(),
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
  banner: z.string(),
  shortDescription: z.string(),
  description: z.string(),
});
