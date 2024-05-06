import { OutputMovieDto } from '../dtos/movie.dto';

export class FindBestMoviesSeenPresenter {
  static toHttp(movies: OutputMovieDto[]) {
    return {
      movies: movies.map((movie) => ({
        id: movie.id,
        rating: movie.rating,
        poster: movie.poster,
      })),
    };
  }
}
