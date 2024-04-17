import { MovieNotFoundError } from '@modules/movies/errors/movieNotFound.error';
import { Either } from '@shared/core/errors/Either';

export type InputDeleteMovieDto = {
  id: string;
};

export type OutputDeleteMovieDto = Either<MovieNotFoundError, null>;
