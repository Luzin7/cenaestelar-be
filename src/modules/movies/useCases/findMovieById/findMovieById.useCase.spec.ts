import { InMemoryMoviesRepository } from '@test/modules/movies/repositories/InMemoryMovies.repository';
import { describe, expect, it } from 'vitest';
import { Movie } from '../../entities/Movie';
import { InputFindMovieByIdDto } from './findMovieById.dto';
import { FindMovieById } from './findMovieById.useCase';

describe('Find Movie By Id', () => {
  const moviesRepository = new InMemoryMoviesRepository();
  const sut = new FindMovieById(moviesRepository);
  it('should find movie by id', () => {
    setTimeout(async () => {
      const movieId: InputFindMovieByIdDto = {
        id: moviesRepository.movies[0].id.toString(),
      };

      const response = await sut.execute({ id: movieId.id });

      expect(response.isRight()).toBe(true);
      expect(response.value).toBeInstanceOf(Movie);
    }, 5000);
  });
});
