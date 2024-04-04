import { z } from 'zod';

export const findMovieByIdQuerySchema = z.object({
  title: z.string(),
});
