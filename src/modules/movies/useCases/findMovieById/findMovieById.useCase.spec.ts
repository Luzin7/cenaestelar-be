import { InMemoryMoviesRepository } from '@test/modules/movies/repositories/InMemoryMovies.repository';
import { describe, expect, it } from 'vitest';
import { InputFindMovieByIdDto } from '../../dtos/findMovieById.dto';
import { Movie } from '../../entities/Movie';
import { FindMovieById } from './findMovieById.useCase';

describe('Find Movie By Id', () => {
  const moviesRepository = new InMemoryMoviesRepository();
  const sut = new FindMovieById(moviesRepository);
  it('should find movie by id', async () => {
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

    const movieId: InputFindMovieByIdDto = {
      id: moviesRepository.movies[0].id,
    };

    const response = await sut.execute({ id: movieId.id });

    expect(response.isRight()).toBeTruthy();
    expect(response.isLeft()).toBeFalsy();
  });
});
