import { InMemoryMoviesRepository } from '@test/modules/movies/repositories/InMemoryMovies.repository';
import { describe, expect, it } from 'vitest';
import { InputCreateMovieDto } from '../../dtos/createMovie.dto';
import { CreateMovie } from './createMovie.useCase';

describe('Create movie', () => {
  const moviesRepository = new InMemoryMoviesRepository();
  const sut = new CreateMovie(moviesRepository);
  it('should create a new movie', async () => {
    const movie: InputCreateMovieDto = {
      title: 'title',
      poster: 'poster',
      media: 'media',
      banner: 'banner',
      rating: 'rating',
      globalRating: 'globalRating',
      shortDescription: 'shortDescription',
      description: 'description',
      releaseDate: 'releaseDate',
      genres: [{ id: 1, name: 'genre' }],
      cast: ['cast'],
      directors: ['directors'],
    };

    const response = await sut.execute(movie);

    expect(response.isRight()).toBe(true);
    expect(moviesRepository.movies[0]).toHaveProperty('title', movie.title);
    expect(moviesRepository.movies[0].id).toBeTypeOf('string');
  });
});
