import { OutputMovieDto } from '../repositories/contracts/movie.dto';

export class FindMoviesByTitlePresenter {
  static toHttp(movies: OutputMovieDto[]) {
    return {
      movies: movies.map((movie) => ({
        id: movie.id,
        title: movie.title,
        poster: movie.poster,
        media: movie.media,
        banner: movie.banner,
        rating: movie.rating,
        shortDescription: movie.shortDescription,
        description: movie.description,
        releaseDate: movie.releaseDate,
        genres: movie.genres,
        cast: movie.cast,
        directors: movie.directors,
      })),
    };
  }
}
