import { Movie } from '@modules/movies/entities/Movie';
import { InMemoryMoviesRepository } from '@test/modules/movies/repositories/InMemoryMovies.repository';
import { describe, expect, it } from 'vitest';
import { DeleteMovie } from './deleteMovie.useCase';
import { InputDeleteMovieDto } from './deleteMovie.useCase.dto';

describe('Delete movie by id', () => {
  const moviesRepository = new InMemoryMoviesRepository();
  const sut = new DeleteMovie(moviesRepository);
  it('should delete the movie by id', async () => {
    const newMovie = Movie.create({
      title: 'test title',
      poster: 'test poster',
      media: 'test media',
      banner: 'test banner',
      rating: 'test rating',
      shortDescription: 'test short description',
      description: 'test description',
      releaseDate: 'test release date',
      genres: ['test genres'],
      cast: ['test cast'],
      directors: ['test'],
    });

    await moviesRepository.create(newMovie);
    const movieId: InputDeleteMovieDto = { id: moviesRepository.movies[0].id };
    const response = await sut.execute(movieId);

    expect(response.isRight()).toBe(true);
  });
});
