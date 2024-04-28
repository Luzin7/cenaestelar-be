import { MovieNotFoundError } from '@modules/movies/errors/movieNotFound.error';
import { left, right } from '@shared/core/errors/Either';
import { UseCase } from '@shared/core/modules/UseCase';
import {
  InputFindMovieByTitleDto,
  OutputFindMovieByTitleDto,
} from '../../dtos/findMovieByTitle.dto';
import { MoviesRepository } from '../../repositories/contracts/Movies.repository';

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

    console.log(movies);

    if (movies === null) {
      console.log('No movies found');
      return left(new MovieNotFoundError());
    }

    return right({
      movies,
    });
  }
}
