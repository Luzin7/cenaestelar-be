import { OutputMovieDto } from '../dtos/movie.dto';

/**
 * The `FindBestMoviesSeenPresenter` class is responsible for presenting the best seen movies in a format suitable for HTTP responses.
 */
export class FindBestMoviesSeenPresenter {
  /**
   * Converts an array of `OutputMovieDto` objects into an HTTP-friendly format, containing only essential information about the movies.
   * @param movies An array of `OutputMovieDto` objects representing best seen movies.
   * @returns An object containing best seen movies in an HTTP-friendly format.
   */
  static toHttp(movies: OutputMovieDto[]) {
    return {
      movies: movies.map((movie) => ({
        id: movie.id,
        title: movie.title,
        rating: movie.rating,
        poster: movie.poster,
      })),
    };
  }
}
