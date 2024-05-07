import {
  InputUpdateMovieDto,
  OutputUpdateMovieDto,
} from '@modules/movies/dtos/updateMovie.dto';
import { right } from '@shared/core/errors/Either';
import { UseCase } from '@shared/core/modules/UseCase';
import { Movie } from '../../entities/Movie';
import { MoviesRepository } from '../../repositories/contracts/Movies.repository';

/**
 * The `UpdateMovie` class represents a use case for updating movie information.
 * It extends the `UseCase` class and implements the logic to update movie details in the repository.
 * Upon execution, it utilizes the injected `moviesRepository` to update the movie information based on the provided ID.
 * If the movie with the specified ID exists, its details are updated with the provided data.
 * If no movie with the ID is found, a new movie entry is created.
 * The updated or newly created movie is returned in an `OutputUpdateMovieDto`.
 */
export class UpdateMovie extends UseCase<
  InputUpdateMovieDto,
  OutputUpdateMovieDto
> {
  constructor(private readonly moviesRepository: MoviesRepository) {
    super();
  }

  async execute({
    id,
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
  }: InputUpdateMovieDto): Promise<OutputUpdateMovieDto> {
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

    await this.moviesRepository.update(id, movie);

    return right({
      movie,
    });
  }
}
