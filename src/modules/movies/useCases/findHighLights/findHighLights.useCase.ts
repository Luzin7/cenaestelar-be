import { OutputFindBestMoviesDto } from '@modules/movies/dtos/findBestMoviesSeen.dto';
import { right } from '@shared/core/errors/Either';
import { UseCase } from '@shared/core/modules/UseCase';
import { MoviesRepository } from '../../repositories/contracts/Movies.repository';

export class FindHighLights extends UseCase<null, OutputFindBestMoviesDto> {
  constructor(private readonly moviesRepository: MoviesRepository) {
    super();
  }

  async execute(): Promise<OutputFindBestMoviesDto> {
    const movies = await this.moviesRepository.findHighLights();

    return right({
      movies,
    });
  }
}
