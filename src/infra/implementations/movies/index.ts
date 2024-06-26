import { MoviesRepositoryImplementations } from '@infra/database/movie/Movie.repository';
import { CreateMovie } from '@modules/movies/useCases/createMovie/createMovie.useCase';
import { DeleteMovie } from '@modules/movies/useCases/deleteMovie/deleteMovie.useCase';
import { FindAllMovies } from '@modules/movies/useCases/findAllMovies/findAll.useCase';
import { FindBestMoviesSeen } from '@modules/movies/useCases/findBestMoviesSeen/findBestMoviesSeen.useCase';
import { FindHighLights } from '@modules/movies/useCases/findHighLights/findHighLights.useCase';
import { FindMovieById } from '@modules/movies/useCases/findMovieById/findMovieById.useCase';
import { FindMovieByTitle } from '@modules/movies/useCases/findMovieByTitle/findMovieByTitle.useCase';
import { FindMoviesByRating } from '@modules/movies/useCases/findMoviesByRating/findMoviesByRating.useCase';
import { UpdateMovie } from '@modules/movies/useCases/updateMovie/updateMovie.useCase';

export const createMovieUseCase = new CreateMovie(
  new MoviesRepositoryImplementations(),
);
export const findBestMoviesSeenUseCase = new FindBestMoviesSeen(
  new MoviesRepositoryImplementations(),
);
export const findHighLightsUseCase = new FindHighLights(
  new MoviesRepositoryImplementations(),
);
export const updateMovieUseCase = new UpdateMovie(
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
export const deleteMovieByIdUseCase = new DeleteMovie(
  new MoviesRepositoryImplementations(),
);
export const findMoviesByRatingUseCase = new FindMoviesByRating(
  new MoviesRepositoryImplementations(),
);
