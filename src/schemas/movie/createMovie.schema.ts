import { z } from 'zod';

export const createMovieBodySchema = z.object({
  title: z.string(),
  releaseDate: z.string(),
  rating: z.string(),
  genres: z.array(z.string()),
  directors: z.array(z.string()),
  cast: z.array(z.string()),
  poster: z.string().url(),
  media: z.string().url(),
  banner: z.string().url(),
  shortDescription: z.string(),
  description: z.string(),
});
