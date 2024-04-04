import { Either } from '@shared/core/errors/Either';
import { ErrorPresenter } from '@shared/presenters/Error';
import { OutputMovieDto } from '../../repositories/contracts/movie.dto';

export type InputCreateMovieDto = {
  title: string;
  poster: string;
  media: string;
  banner: string;
  rating: string;
  shortDescription: string;
  description: string;
  releaseDate: string;
  genres: string[];
  cast: string[];
  directors: string[];
};

export type OutputCreateMovieDto = Either<
  ErrorPresenter,
  {
    movie: OutputMovieDto;
  }
>;
