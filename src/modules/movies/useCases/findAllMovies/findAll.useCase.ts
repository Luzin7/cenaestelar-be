import { right } from '@shared/core/errors/Either';
import { UseCase } from '@shared/core/modules/UseCase';
import { MoviesRepository } from '../../repositories/contracts/Movies.repository';
import { OutputFindAllMoviesDto } from './findAll.dto';

export class FindAllMovies extends UseCase<null, OutputFindAllMoviesDto> {
  constructor(private readonly moviesRepository: MoviesRepository) {
    super();
  }

  async execute(): Promise<OutputFindAllMoviesDto> {
    const movies = await this.moviesRepository.findAll();

    return right({
      movies,
    });
  }
}
