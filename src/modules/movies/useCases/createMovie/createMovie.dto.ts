import { Either } from '@shared/core/errors/Either';
import { OutputMovieDto } from '../../repositories/contracts/movie.dto';

export type InputCreateMovieDto = {
  title: string;
  poster: string | boolean | null;
  media: string | boolean | null;
  banner: string | boolean | null;
  rating: string;
  shortDescription: string;
  description: string;
  releaseDate: string;
  genres: { id: number; name: string }[];
  cast: string[];
  directors: string[];
};

export type OutputCreateMovieDto = Either<
  null,
  {
    movie: OutputMovieDto;
  }
>;
