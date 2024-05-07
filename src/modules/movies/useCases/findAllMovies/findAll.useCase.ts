import { right } from '@shared/core/errors/Either';
import { UseCase } from '@shared/core/modules/UseCase';
import { OutputFindAllMoviesDto } from '../../dtos/findAll.dto';
import { MoviesRepository } from '../../repositories/contracts/Movies.repository';

/**
 * The `FindAllMovies` class represents a use case for retrieving all movies.
 * It extends the `UseCase` class and implements the logic to fetch all movies from the repository.
 * Upon execution, it utilizes the injected `moviesRepository` to retrieve all movies.
 * If the operation is successful, it returns an `OutputFindAllMoviesDto` containing the list of retrieved movies.
 */
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
