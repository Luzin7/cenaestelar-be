import { Movie } from '@modules/movies/entities/Movie';
import { MoviesRepository } from '@modules/movies/repositories/contracts/Movies.repository';
import { OutputMovieDto } from '@modules/movies/repositories/contracts/movie.dto';

export class InMemoryMoviesRepository extends MoviesRepository {
  movies: Movie[] = [];

  async create(movie: Movie): Promise<void> {
    this.movies.push(movie);
  }

  async findAll(): Promise<OutputMovieDto[]> {
    return this.movies;
  }

  async findById(id: string): Promise<OutputMovieDto | null> {
    const movie = this.movies.find((movie) => movie.id === id);

    console.log({ movie });

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

  async findByRating(rating: string): Promise<OutputMovieDto[]> {
    throw new Error('Method not implemented.');
  }

  async update(movie: Movie): Promise<void> {
    throw new Error('Method not implemented.');
  }

  async delete(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
