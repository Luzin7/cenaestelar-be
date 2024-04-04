import { z } from 'zod';

export const findMovieByIdBodySchema = z.object({
  id: z.string().uuid(),
});
