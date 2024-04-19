import { Movie } from '@modules/movies/entities/Movie';
import { MoviesRepository } from '@modules/movies/repositories/contracts/Movies.repository';
import { OutputMovieDto } from '@modules/movies/repositories/contracts/movie.dto';

export class InMemoryMoviesRepository extends MoviesRepository {
  movies: OutputMovieDto[] = [];

  async create(movie: OutputMovieDto): Promise<void> {
    this.movies.push(movie);
  }

  async findAll(): Promise<OutputMovieDto[]> {
    return this.movies;
  }

  async findById(id: string): Promise<OutputMovieDto | null> {
    const movie = this.movies.find((movie) => movie.id === id);

    if (!movie) {
      return null;
    }

    return movie;
  }

  async findByGenre(genres: string[]): Promise<OutputMovieDto[]> {
    throw new Error('Method not implemented.');
  }

  async findByDirector(directors: string[]): Promise<OutputMovieDto[]> {
    throw new Error('Method not implemented.');
  }

  async findByTitle(title: string): Promise<OutputMovieDto[] | null> {
    const movie = this.movies.find((movie) => movie.title.includes(title));

    if (!movie) {
      return null;
    }

    return [movie];
  }

  async findByReleaseDate(releaseDate: string): Promise<OutputMovieDto[]> {
    throw new Error('Method not implemented.');
  }

  async findByRating(rating: string): Promise<OutputMovieDto[] | null> {
    const movies = this.movies.filter((movie) => movie.rating >= rating);

    if (movies.length === 0) {
      return null;
    }

    return movies;
  }

  async update(movie: Movie): Promise<void> {
    throw new Error('Method not implemented.');
  }

  async delete(id: string): Promise<void> {
    const movieIndex = this.movies.findIndex((movie) => movie.id === id);

    if (movieIndex === -1) {
      return;
    }

    this.movies.splice(movieIndex, 1);
  }
}
