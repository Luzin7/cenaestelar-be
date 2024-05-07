import { MovieNotFoundError } from '@modules/movies/errors/movieNotFound.error';
import { MoviesRepository } from '@modules/movies/repositories/contracts/Movies.repository';
import { left, right } from '@shared/core/errors/Either';
import { UseCase } from '@shared/core/modules/UseCase';
import {
  InputFindMovieByRatingDto,
  OutputFindMovieByRatingDto,
} from '../../dtos/findMoviesByRating.dto';

/**
 * The `FindMoviesByRating` class represents a use case for retrieving movies by their rating.
 * It extends the `UseCase` class and implements the logic to fetch movies from the repository based on their rating.
 * Upon execution, it utilizes the injected `moviesRepository` to retrieve the movies.
 * If movies matching the rating are found, it returns an `OutputFindMovieByRatingDto` containing the movie details.
 * If no movies are found, it returns a `MovieNotFoundError`.
 */
export class FindMoviesByRating extends UseCase<
  InputFindMovieByRatingDto,
  OutputFindMovieByRatingDto
> {
  constructor(private readonly moviesRepository: MoviesRepository) {
    super();
  }

  async execute({
    rating,
  }: InputFindMovieByRatingDto): Promise<OutputFindMovieByRatingDto> {
    const movies = await this.moviesRepository.findByRating(rating);

    if (!movies) {
      return left(new MovieNotFoundError());
    }

    return right({
      movies,
    });
  }
}
