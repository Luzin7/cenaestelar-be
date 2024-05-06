import { Either } from '@shared/core/errors/Either';
import { OutputMovieDto } from './movie.dto';

export type OutputFindBestMoviesDto = Either<
  null,
  {
    movies: OutputMovieDto[];
  }
>;
