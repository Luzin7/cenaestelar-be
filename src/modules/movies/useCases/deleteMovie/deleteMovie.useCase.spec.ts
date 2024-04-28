import { Movie } from '@modules/movies/entities/Movie';
import { InMemoryMoviesRepository } from '@test/modules/movies/repositories/InMemoryMovies.repository';
import { describe, expect, it } from 'vitest';
import { InputDeleteMovieDto } from '../../dtos/deleteMovie.useCase.dto';
import { DeleteMovie } from './deleteMovie.useCase';

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
      globalRating: 'global rating',
      shortDescription: 'test short description',
      description: 'test description',
      releaseDate: 'test release date',
      genres: [{ id: 1, name: 'test' }],
      cast: ['test cast'],
      directors: ['test'],
    });

    await moviesRepository.create(newMovie);
    const movieId: InputDeleteMovieDto = { id: moviesRepository.movies[0].id };
    const response = await sut.execute(movieId);

    expect(response.isRight()).toBe(true);
  });
});
