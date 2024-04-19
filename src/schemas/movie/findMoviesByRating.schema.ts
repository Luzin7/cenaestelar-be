import { z } from 'zod';

export const findMoviesByRatingBodySchema = z.object({
  rating: z.string(),
});
