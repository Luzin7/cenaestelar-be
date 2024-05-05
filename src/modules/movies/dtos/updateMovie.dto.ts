import { Either } from '@shared/core/errors/Either';
import { OutputMovieDto } from './movie.dto';

export interface InputUpdateMovieDto {
  id: string;
  title: string;
  poster: string | boolean | null;
  media: string | boolean | null;
  banner: string | boolean | null;
  rating: string;
  globalRating: string;
  shortDescription: string;
  description: string;
  releaseDate: string;
  genres: { id: number; name: string }[];
  cast: string[];
  directors: string[];
}

export type OutputUpdateMovieDto = Either<
  null,
  {
    movie: OutputMovieDto;
  }
>;
