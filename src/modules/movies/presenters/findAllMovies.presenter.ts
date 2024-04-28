import { OutputMovieDto } from '../dtos/movie.dto';

export class FindMoviesPresenter {
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
