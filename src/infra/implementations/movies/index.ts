import { MoviesRepositoryImplementations } from '@infra/gateway/database/movie/Movie.repository';
import { CreateMovie } from '@modules/movies/useCases/createMovie/createMovie.useCase';
import { FindAllMovies } from '@modules/movies/useCases/findAllMovies/findAll.useCase';
import { FindMovieById } from '@modules/movies/useCases/findMovieById/findMovieById.useCase';
import { FindMovieByTitle } from '@modules/movies/useCases/findMovieByTitle/findMovieByTitle.useCase';

export const createMovieUseCase = new CreateMovie(
  new MoviesRepositoryImplementations(),
);
export const findALlMoviesUseCase = new FindAllMovies(
  new MoviesRepositoryImplementations(),
);
export const findMovieByIdUseCase = new FindMovieById(
  new MoviesRepositoryImplementations(),
);
export const findMovieByTitleUseCase = new FindMovieByTitle(
  new MoviesRepositoryImplementations(),
);
