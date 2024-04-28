import { OutputMovieDto } from '../dtos/movie.dto';

export class FindMovieByIdPresenter {
  static toHttp(movie: OutputMovieDto) {
    return {
      movie: {
        id: movie.id,
        title: movie.title,
        poster: movie.poster,
        media: movie.media,
        banner: movie.banner,
        rating: movie.rating,
        globalRating: movie.globalRating,
        shortDescription: movie.shortDescription,
        description: movie.description,
        releaseDate: movie.releaseDate,
        genres: movie.genres,
        cast: movie.cast,
        directors: movie.directors,
      },
    };
  }
}
