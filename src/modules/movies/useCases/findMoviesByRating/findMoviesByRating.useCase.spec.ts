import { InMemoryMoviesRepository } from '@test/modules/movies/repositories/InMemoryMovies.repository';
import { describe, expect, it } from 'vitest';
import { FindMoviesByRating } from './findMoviesByRating.useCase';

describe('Find Movie By Rating', () => {
  const moviesRepository = new InMemoryMoviesRepository();
  const sut = new FindMoviesByRating(moviesRepository);

  it('should find movie by rating', async () => {
    await moviesRepository.create({
      id: '1',
      title: 'test title',
      poster: 'test poster',
      media: 'test media',
      banner: 'test banner',
      rating: '5',
      shortDescription: 'test short description',
      description: 'test description',
      releaseDate: 'test release date',
      genres: ['test genres'],
      cast: ['test cast'],
      directors: ['test'],
    });

    const response = await sut.execute({ rating: '5' });

    expect(response.isRight()).toBeTruthy();
    expect(response.isLeft()).toBeFalsy();
  });
});
