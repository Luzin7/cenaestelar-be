import { CreateMovie } from '@infra/http/controllers/movie/createMovie/createMovie.controller';
import { DeleteMovieById } from '@infra/http/controllers/movie/deleteMovie/deleteMovie.controller';
import { FindAllMovies } from '@infra/http/controllers/movie/findAllMovies/findAll.useCase';
import { FindBestMoviesSeen } from '@infra/http/controllers/movie/findBestMoviesSeen/findBestMoviesSeen.controller';
import { FindMovieById } from '@infra/http/controllers/movie/findMovieById/findMovieById.useCase';
import { FindMovieByTitle } from '@infra/http/controllers/movie/findMovieByTitle/findMovieByTitle.useCase';
import { FindMoviesByRating } from '@infra/http/controllers/movie/findMoviesByRating/findMovieByTitle.useCase';
import { UpdateMovie } from '@infra/http/controllers/movie/updateMovie/updateMovie.controller';
import { Request, Response, Router } from 'express';

const createMovieController = new CreateMovie();
const updateMovieController = new UpdateMovie();
const findAllMoviesController = new FindAllMovies();
const findBestMoviesSeen = new FindBestMoviesSeen();
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
movieRoutes.get('/movies/top', findBestMoviesSeen.handle);
movieRoutes.post('/movies', createMovieController.handle);
movieRoutes.put('/movie/:id', updateMovieController.handle);
movieRoutes.delete('/movie/:id', deleteMovieByIdController.handle);
movieRoutes.get('/movies/rating', findMovieByRatingController.handle);
