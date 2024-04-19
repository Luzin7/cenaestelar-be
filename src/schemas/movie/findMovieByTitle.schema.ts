import { z } from 'zod';

export const findMovieByTitleQuerySchema = z.object({
  title: z.string(),
});
