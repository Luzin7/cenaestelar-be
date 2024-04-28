import { Either } from '@shared/core/errors/Either';
import { MovieNotFoundError } from '../errors/movieNotFound.error';
import { OutputMovieDto } from './movie.dto';

export type InputFindMovieByTitleDto = {
  title: string;
};

export type OutputFindMovieByTitleDto = Either<
  MovieNotFoundError,
  {
    movies: OutputMovieDto[];
  }
>;
