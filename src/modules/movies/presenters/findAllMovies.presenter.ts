import { OutputMovieDto } from '../dtos/movie.dto';

/**
 * The `FindMoviesPresenter`class is responsible for presenting movies in a format suitable for HTTP responses.
 */
export class FindMoviesPresenter {
  /**
   * Converts an array of `OutputMovieDto` objects into an HTTP-friendly format.
   * @param movies An array of `OutputMovieDto` objects representing movies.
   * @returns An object containing movies in an HTTP-friendly format.
   */
  static toHttp(movies: OutputMovieDto[]) {
    return {
      movies: movies.map((movie) => ({
        id: movie.id,
        title: movie.title,
        shortDescription: movie.shortDescription,
        poster: movie.poster,
        banner: movie.banner,
      })),
    };
  }
}
