import { env } from '@env/index';
import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient({
  errorFormat: 'pretty',
  log: env.NODE_ENV === 'development' ? ['query'] : [],
});

prisma
  .$connect()
  .then(() => console.log('database connection established'))
  .catch((error) => console.error(error));
