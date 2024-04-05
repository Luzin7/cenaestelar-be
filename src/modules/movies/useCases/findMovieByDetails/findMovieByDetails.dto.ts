import { Either } from '@shared/core/errors/Either';
import { MovieNotFoundError } from '../../errors/movieNotFound.error';
import { OutputMovieDto } from '../../repositories/contracts/movie.dto';

export type InputFindMovieByDetailsDto = {
  [key: string]: string;
};

export type OutputFindMovieByDetailsDto = Either<
  MovieNotFoundError,
  {
    movies: OutputMovieDto[];
  }
>;
