import { left, right } from '@shared/core/errors/Either';
import { UseCase } from '@shared/core/modules/UseCase';
import { MovieNotFoundError } from '../../errors/movieNotFound/movieNotFound.error';
import { MoviesRepository } from '../../repositories/contracts/Movies.repository';
import {
  InputFindMovieByIdDto,
  OutputFindMovieByIdDto,
} from './findMovieById.dto';

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
