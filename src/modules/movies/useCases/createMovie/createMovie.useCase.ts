import { right } from '@shared/core/errors/Either';
import { UseCase } from '@shared/core/modules/UseCase';
import { Movie } from '../../entities/Movie';
import { MoviesRepository } from '../../repositories/contracts/Movies.repository';
import { InputCreateMovieDto, OutputCreateMovieDto } from './createMovie.dto';

export class CreateMovie extends UseCase<
  InputCreateMovieDto,
  OutputCreateMovieDto
> {
  constructor(private readonly moviesRepository: MoviesRepository) {
    super();
  }

  async execute({
    banner,
    cast,
    description,
    directors,
    genres,
    media,
    poster,
    rating,
    releaseDate,
    shortDescription,
    title,
  }: InputCreateMovieDto): Promise<OutputCreateMovieDto> {
    const movie = Movie.create({
      title,
      poster,
      media,
      banner,
      rating,
      shortDescription,
      description,
      releaseDate,
      genres,
      cast,
      directors,
    });

    await this.moviesRepository.create(movie);

    return right({
      movie,
    });
  }
}
