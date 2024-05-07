import { right } from '@shared/core/errors/Either';
import { UseCase } from '@shared/core/modules/UseCase';
import {
  InputCreateMovieDto,
  OutputCreateMovieDto,
} from '../../dtos/createMovie.dto';
import { Movie } from '../../entities/Movie';
import { MoviesRepository } from '../../repositories/contracts/Movies.repository';

/**
 * The `CreateMovie` class represents a use case for creating a new movie.
 * It extends the `UseCase` class and implements the logic to handle the creation of a movie entity.
 * Upon receiving input data in the form of an `InputCreateMovieDto`, it validates the data and creates a new `Movie` entity.
 * The created movie is then stored in the repository via the injected `moviesRepository`.
 * If the operation is successful, it returns an `OutputCreateMovieDto` containing the created movie.
 * If an error occurs during the creation process, it returns an error using the `right` function from the `Either` module.
 */
export class CreateMovie extends UseCase<
  InputCreateMovieDto,
  OutputCreateMovieDto
> {
  constructor(private readonly moviesRepository: MoviesRepository) {
    super();
  }

  async execute({
    banner,
    cast,
    description,
    directors,
    genres,
    media,
    poster,
    rating,
    globalRating,
    releaseDate,
    shortDescription,
    title,
  }: InputCreateMovieDto): Promise<OutputCreateMovieDto> {
    const movie = Movie.create({
      title,
      poster,
      media,
      banner,
      rating: (Number(rating) / 2).toString(),
      globalRating,
      shortDescription,
      description,
      releaseDate,
      genres,
      cast,
      directors,
    });

    await this.moviesRepository.create(movie);

    return right({
      movie,
    });
  }
}
