import { Router } from 'express';
import { movieRoutes } from './movie';

export const routes = Router();

routes.use(movieRoutes);
