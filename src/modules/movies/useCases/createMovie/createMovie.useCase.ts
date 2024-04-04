import { left, right } from '@shared/core/errors/Either';
import { UseCase } from '@shared/core/modules/UseCase';
import { ErrorPresenter } from '@shared/presenters/Error';
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

  async execute(req: InputCreateMovieDto): Promise<OutputCreateMovieDto> {
    if (Object.values(req).some((value) => value === '')) {
      return left(new ErrorPresenter());
    }

    const movie = Movie.create({
      title: req.title,
      poster: req.poster,
      media: req.media,
      banner: req.banner,
      rating: req.rating,
      shortDescription: req.shortDescription,
      description: req.description,
      releaseDate: req.releaseDate,
      genres: req.genres,
      cast: req.cast,
      directors: req.directors,
    });

    await this.moviesRepository.create(movie);

    return right({
      movie,
    });
  }
}
