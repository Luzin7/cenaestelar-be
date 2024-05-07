import { OutputMovieDto } from '../dtos/movie.dto';

/**
 * The `FindMovieByIdPresenter` class is responsible for presenting a single movie by its ID in a format suitable for HTTP responses.
 */
export class FindMovieByIdPresenter {
  /**
   * Converts an `OutputMovieDto` object into an HTTP-friendly format, containing detailed information about the movie.
   * @param movie An `OutputMovieDto` object representing the movie to be presented.
   * @returns An object containing detailed information about the movie in an HTTP-friendly format.
   */
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
