import { OutputMovieDto } from '../dtos/movie.dto';

/**
 * The `FindMoviesByRatingPresenter` class is responsible for presenting a list of movies filtered by rating in a format suitable for HTTP responses.
 */
export class FindMoviesByRatingPresenter {
  /**
   * Converts an array of `OutputMovieDto` objects into an HTTP-friendly format, containing basic information about each movie.
   * @param movies An array of `OutputMovieDto` objects representing the movies to be presented.
   * @returns An object containing basic information about each movie in an HTTP-friendly format.
   */
  static toHttp(movies: OutputMovieDto[]) {
    return {
      movies: movies.map((movie) => ({
        id: movie.id,
        title: movie.title,
        poster: movie.poster,
        rating: movie.rating,
      })),
    };
  }
}
