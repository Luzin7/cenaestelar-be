import { Either } from '@shared/core/errors/Either';
import { MovieNotFoundError } from '../../errors/movieNotFound.error';
import { OutputMovieDto } from '../../repositories/contracts/movie.dto';

export type InputFindMovieByIdDto = {
  id: string;
};

export type OutputFindMovieByIdDto = Either<
  MovieNotFoundError,
  {
    movie: OutputMovieDto;
  }
>;
