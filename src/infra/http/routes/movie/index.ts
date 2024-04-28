import { DeleteMovieById } from '@infra/http/controllers/movie/deleteMovie/deleteMovie.controller';
import { FindMoviesByRating } from '@infra/http/controllers/movie/findMoviesByRating/findMovieByTitle.useCase';
import { Request, Response, Router } from 'express';
import { CreateMovie } from '../../controllers/movie/createMovie/createMovie.controller';
import { FindAllMovies } from '../../controllers/movie/findAllMovies/findAll.useCase';
import { FindMovieById } from '../../controllers/movie/findMovieById/findMovieById.useCase';
import { FindMovieByTitle } from '../../controllers/movie/findMovieByTitle/findMovieByTitle.useCase';

const createMovieController = new CreateMovie();
const findAllMoviesController = new FindAllMovies();
const findMovieByIdController = new FindMovieById();
const findMovieByTitleController = new FindMovieByTitle();
const deleteMovieByIdController = new DeleteMovieById();
const findMovieByRatingController = new FindMoviesByRating();

export const movieRoutes = Router();

movieRoutes.get('/movies', (req: Request, res: Response) => {
  const { title } = req.query;
  if (title !== undefined) {
    return findMovieByTitleController.handle(req, res);
  }

  return findAllMoviesController.handle(req, res);
});

movieRoutes.get('/movie/:id', findMovieByIdController.handle);
movieRoutes.post('/movies', createMovieController.handle);
movieRoutes.delete('/movie/:id', deleteMovieByIdController.handle);
movieRoutes.get('/movies/rating', findMovieByRatingController.handle);
