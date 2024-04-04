import { InMemoryMoviesRepository } from '@test/modules/movies/repositories/InMemoryMovies.repository';
import { describe, expect, it } from 'vitest';
import { InputCreateMovieDto } from './createMovie.dto';
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
      shortDescription: 'shortDescription',
      description: 'description',
      releaseDate: 'releaseDate',
      genres: ['genres'],
      cast: ['cast'],
      directors: ['directors'],
    };

    const response = await sut.execute(movie);

    expect(response.isRight()).toBe(true);
    expect(moviesRepository.movies[0]).toHaveProperty('title', movie.title);
    expect(moviesRepository.movies[0].id).toBeTypeOf('string');
  });

  it('should not create a new movie', async () => {
    const movie: InputCreateMovieDto = {
      title: '',
      poster: 'poster',
      media: 'media',
      banner: 'banner',
      rating: 'rating',
      shortDescription: 'shortDescription',
      description: 'description',
      releaseDate: 'releaseDate',
      genres: ['genres'],
      cast: ['cast'],
      directors: ['directors'],
    };

    const response = await sut.execute(movie);

    expect(response.isLeft()).toBe(true);
    expect(response.isRight()).toBe(false);
  });
});
