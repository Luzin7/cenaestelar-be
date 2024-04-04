import { left, right } from '@shared/core/errors/Either';
import { UseCase } from '@shared/core/modules/UseCase';
import { MovieNotFoundError } from '../../errors/movieNotFound/movieNotFound.error';
import { MoviesRepository } from '../../repositories/contracts/Movies.repository';
import {
  InputFindMovieByTitleDto,
  OutputFindMovieByTitleDto,
} from './findMovieByTitle.dto';

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

    if (!movies) {
      return left(new MovieNotFoundError());
    }

    return right({
      movies,
    });
  }
}
