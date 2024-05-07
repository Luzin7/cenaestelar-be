import { left, right } from '@shared/core/errors/Either';
import { UseCase } from '@shared/core/modules/UseCase';
import {
  InputFindMovieByIdDto,
  OutputFindMovieByIdDto,
} from '../../dtos/findMovieById.dto';
import { MovieNotFoundError } from '../../errors/movieNotFound.error';
import { MoviesRepository } from '../../repositories/contracts/Movies.repository';

/**
 * The `FindMovieById` class represents a use case for retrieving a movie by its ID.
 * It extends the `UseCase` class and implements the logic to fetch a movie from the repository based on its ID.
 * Upon execution, it utilizes the injected `moviesRepository` to retrieve the movie.
 * If the movie is found, it returns an `OutputFindMovieByIdDto` containing the movie details.
 * If the movie is not found, it returns a `MovieNotFoundError`.
 */
export class FindMovieById extends UseCase<
  InputFindMovieByIdDto,
  OutputFindMovieByIdDto
> {
  constructor(private readonly moviesRepository: MoviesRepository) {
    super();
  }

  async execute({
    id,
  }: InputFindMovieByIdDto): Promise<OutputFindMovieByIdDto> {
    const movie = await this.moviesRepository.findById(id);

    if (!movie) {
      return left(new MovieNotFoundError());
    }

    return right({
      movie,
    });
  }
}
