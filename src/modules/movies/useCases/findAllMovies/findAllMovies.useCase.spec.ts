import { InMemoryMoviesRepository } from '@test/modules/movies/repositories/InMemoryMovies.repository';
import { describe, expect, it } from 'vitest';
import { FindAllMovies } from './findAll.useCase';

describe('Find All Movies', () => {
  const moviesRepository = new InMemoryMoviesRepository();
  const sut = new FindAllMovies(moviesRepository);
  it('should find all movies', async () => {
    const response = await sut.execute();

    expect(response.isRight()).toBe(true);
  });
});
