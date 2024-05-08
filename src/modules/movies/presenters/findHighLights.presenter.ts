import { OutputMovieDto } from '../dtos/movie.dto';

export class FindHighLightsPresenter {
  static toHttp(movies: OutputMovieDto[]) {
    return {
      movies: movies.map((movie) => ({
        id: movie.id,
        title: movie.title,
        shortDescription: movie.shortDescription,
        banner: movie.banner,
      })),
    };
  }
}
