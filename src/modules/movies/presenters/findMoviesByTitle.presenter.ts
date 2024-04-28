import { OutputMovieDto } from '../dtos/movie.dto';

export class FindMoviesByTitlePresenter {
  static toHttp(movies: OutputMovieDto[]) {
    return {
      movies: movies.map((movie) => ({
        id: movie.id,
        title: movie.title,
        poster: movie.poster,
      })),
    };
  }
}
