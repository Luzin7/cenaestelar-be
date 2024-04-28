import { Either } from '@shared/core/errors/Either';
import { OutputMovieDto } from './movie.dto';

export type OutputFindAllMoviesDto = Either<
  null,
  {
    movies: OutputMovieDto[];
  }
>;
