import { MovieNotFoundError } from '@modules/movies/errors/movieNotFound.error';
import { left, right } from '@shared/core/errors/Either';
import { UseCase } from '@shared/core/modules/UseCase';
import {
  InputFindMovieByTitleDto,
  OutputFindMovieByTitleDto,
} from '../../dtos/findMovieByTitle.dto';
import { MoviesRepository } from '../../repositories/contracts/Movies.repository';

/**
 * The `FindMovieByTitle` class represents a use case for retrieving movies by their title.
 * It extends the `UseCase` class and implements the logic to fetch movies from the repository based on their title.
 * Upon execution, it utilizes the injected `moviesRepository` to retrieve the movies.
 * If movies matching the title are found, it returns an `OutputFindMovieByTitleDto` containing the movie details.
 * If no movies are found, it returns a `MovieNotFoundError`.
 */
export class FindMovieByTitle extends UseCase<
  InputFindMovieByTitleDto,
  OutputFindMovieByTitleDto
> {
  constructor(private readonly moviesRepository: MoviesRepository) {
    super();
  }

  async execute({
    title,
  }: InputFindMovieByTitleDto): Promise<OutputFindMovieByTitleDto> {
    const movies = await this.moviesRepository.findByTitle(title);

    if (movies === null) {
      return left(new MovieNotFoundError());
    }

    return right({
      movies,
    });
  }
}
