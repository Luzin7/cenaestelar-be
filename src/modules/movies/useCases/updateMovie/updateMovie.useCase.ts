import {
  InputUpdateMovieDto,
  OutputUpdateMovieDto,
} from '@modules/movies/dtos/updateMovie.dto';
import { right } from '@shared/core/errors/Either';
import { UseCase } from '@shared/core/modules/UseCase';
import { Movie } from '../../entities/Movie';
import { MoviesRepository } from '../../repositories/contracts/Movies.repository';

export class UpdateMovie extends UseCase<
  InputUpdateMovieDto,
  OutputUpdateMovieDto
> {
  constructor(private readonly moviesRepository: MoviesRepository) {
    super();
  }

  async execute({
    id,
    banner,
    cast,
    description,
    directors,
    genres,
    media,
    poster,
    rating,
    globalRating,
    releaseDate,
    shortDescription,
    title,
  }: InputUpdateMovieDto): Promise<OutputUpdateMovieDto> {
    const movie = Movie.create({
      title,
      poster,
      media,
      banner,
      rating: (Number(rating) / 2).toString(),
      globalRating,
      shortDescription,
      description,
      releaseDate,
      genres,
      cast,
      directors,
    });

    await this.moviesRepository.update(id, movie);

    return right({
      movie,
    });
  }
}
