import { Either } from '@shared/core/errors/Either';
import { MovieNotFoundError } from '@modules/movies/errors/movieNotFound.error';
import { OutputMovieDto } from '@modules/movies/repositories/contracts/movie.dto';

export type InputFindMovieByRatingDto = {
  rating: string;
};

export type OutputFindMovieByRatingDto = Either<
  MovieNotFoundError,
  {
    movies: OutputMovieDto[];
  }
>;
