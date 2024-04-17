import { z } from 'zod';

const envSchema = z.object({
  PORT: z.string().min(4, 'Invalid port number'),
  DATABASE_URL: z
    .string()
    .url()
    .default('postgresql://pg:pg@localhost:5432/cenaestelar?schema=public'),
  NODE_ENV: z.string().default('development'),
});

export const env = envSchema.parse(process.env);
