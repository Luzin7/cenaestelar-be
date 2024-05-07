import { MovieNotFoundError } from '@modules/movies/errors/movieNotFound.error';
import { MoviesRepository } from '@modules/movies/repositories/contracts/Movies.repository';
import { left, right } from '@shared/core/errors/Either';
import { UseCase } from '@shared/core/modules/UseCase';
import {
  InputDeleteMovieDto,
  OutputDeleteMovieDto,
} from '../../dtos/deleteMovie.useCase.dto';

/**
 * The `DeleteMovie` class represents a use case for deleting a movie by its ID.
 * It extends the `UseCase` class and implements the logic to handle the deletion of a movie entity.
 * Upon receiving input data in the form of an `InputDeleteMovieDto`, it retrieves the movie from the repository using its ID.
 * If the movie is found, it proceeds to delete it from the repository via the injected `moviesRepository`.
 * If the movie is not found, it returns a `MovieNotFoundError`.
 * If the operation is successful, it returns an `OutputDeleteMovieDto` indicating successful deletion.
 */
export class DeleteMovie extends UseCase<
  InputDeleteMovieDto,
  OutputDeleteMovieDto
> {
  constructor(private readonly moviesRepository: MoviesRepository) {
    super();
  }

  async execute({ id }: InputDeleteMovieDto): Promise<OutputDeleteMovieDto> {
    const movie = await this.moviesRepository.findById(id);

    if (!movie) {
      left(new MovieNotFoundError());
    }

    await this.moviesRepository.delete(id);

    return right(null);
  }
}
