import { OutputMovieDto } from '../../dtos/movie.dto';
import { Movie } from '../../entities/Movie';

/**
 * The `MoviesRepository` class defines the interface for interacting with a repository of movies.
 * It provides methods to perform CRUD operations and search functionalities related to movies.
 */
export abstract class MoviesRepository {
  abstract create(movie: Movie): Promise<void>;
  abstract findAll(): Promise<OutputMovieDto[]>;
  abstract findBestMoviesSeen(): Promise<OutputMovieDto[]>;
  abstract findHighLights(): Promise<OutputMovieDto[]>;
  abstract findById(id: string): Promise<OutputMovieDto | null>;
  abstract findByGenre(genres: string[]): Promise<OutputMovieDto[]>;
  abstract findByTitle(title: string): Promise<OutputMovieDto[] | null>;
  abstract findByReleaseDate(releaseDate: string): Promise<OutputMovieDto[]>;
  abstract findByRating(rating: string): Promise<OutputMovieDto[] | null>;
  abstract update(id: string, movie: Movie): Promise<void>;
  abstract delete(id: string): Promise<void>;
}
