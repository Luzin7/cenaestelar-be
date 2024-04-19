import { left, right } from '@shared/core/errors/Either';
import { MoviesRepository } from '@modules/movies/repositories/contracts/Movies.repository';
import { MovieNotFoundError } from '@modules/movies/errors/movieNotFound.error';
import { UseCase } from '@shared/core/modules/UseCase';
import {
  InputFindMovieByRatingDto,
  OutputFindMovieByRatingDto,
} from './findMoviesByRating.dto';

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
