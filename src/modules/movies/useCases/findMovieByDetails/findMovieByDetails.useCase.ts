import { UseCase } from '@/shared/core/modules/UseCase';
import { MoviesRepository } from '../../repositories/contracts/Movies.repository';
import {
  InputFindMovieByDetailsDto,
  OutputFindMovieByDetailsDto,
} from './findMovieByDetails.dto';

export class FindMovieByDetails extends UseCase<
  InputFindMovieByDetailsDto,
  OutputFindMovieByDetailsDto
> {
  constructor(private readonly moviesRepository: MoviesRepository) {
    super();
  }

  async execute(
    props: InputFindMovieByDetailsDto,
  ): Promise<OutputFindMovieByDetailsDto> {
    // const movies = await this.moviesRepository.findByRating(title);
    // if (!movies) {
    //   return left(new MovieNotFoundError());
    // }
    // return right({
    //   movies,
    // });
  }
}
