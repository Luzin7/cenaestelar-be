import { OutputFindBestMoviesDto } from '@modules/movies/dtos/findBestMoviesSeen.dto';
import { right } from '@shared/core/errors/Either';
import { UseCase } from '@shared/core/modules/UseCase';
import { MoviesRepository } from '../../repositories/contracts/Movies.repository';

/**
 * The `FindBestMoviesSeen` class represents a use case for retrieving the best seen movies.
 * It extends the `UseCase` class and implements the logic to fetch the best seen movies from the repository.
 * Upon execution, it utilizes the injected `moviesRepository` to retrieve the best seen movies.
 * If the operation is successful, it returns an `OutputFindBestMoviesDto` containing the list of best seen movies.
 */
export class FindBestMoviesSeen extends UseCase<null, OutputFindBestMoviesDto> {
  constructor(private readonly moviesRepository: MoviesRepository) {
    super();
  }

  async execute(): Promise<OutputFindBestMoviesDto> {
    const movies = await this.moviesRepository.findBestMoviesSeen();

    return right({
      movies,
    });
  }
}
