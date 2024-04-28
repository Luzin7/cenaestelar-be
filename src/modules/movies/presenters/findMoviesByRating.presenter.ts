import { OutputMovieDto } from '../dtos/movie.dto';

export class FindMoviesByRatingPresenter {
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
