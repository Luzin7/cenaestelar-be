import { MovieNotFoundError } from '@modules/movies/errors/movieNotFound.error';
import { MoviesRepository } from '@modules/movies/repositories/contracts/Movies.repository';
import { left, right } from '@shared/core/errors/Either';
import { UseCase } from '@shared/core/modules/UseCase';
import {
  InputDeleteMovieDto,
  OutputDeleteMovieDto,
} from '../../dtos/deleteMovie.useCase.dto';

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
