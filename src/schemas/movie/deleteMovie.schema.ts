import { z } from 'zod';

export const deleteMovieParamsSchema = z.object({
  id: z.string().uuid(),
});
