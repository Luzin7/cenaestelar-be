import { Movie } from '../../entities/Movie';
import { OutputMovieDto } from './movie.dto';

export abstract class MoviesRepository {
  abstract create(movie: Movie): Promise<void>;
  abstract findAll(): Promise<OutputMovieDto[]>;
  abstract findById(id: string): Promise<OutputMovieDto | null>;
  abstract findByGenre(genres: string[]): Promise<OutputMovieDto[]>;
  abstract findByTitle(title: string): Promise<OutputMovieDto[] | null>;
  abstract findByReleaseDate(releaseDate: string): Promise<OutputMovieDto[]>;
  abstract findByRating(rating: string): Promise<OutputMovieDto[] | null>;
  abstract update(movie: Movie): Promise<void>;
  abstract delete(id: string): Promise<void>;
}
