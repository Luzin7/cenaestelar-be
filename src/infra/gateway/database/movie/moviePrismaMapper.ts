import { Movie } from '@modules/movies/entities/Movie';
import { Movies as MoviePrisma, Prisma } from '@prisma/client';

export class MoviesPrismaMapper {
  static toEntity(raw: MoviePrisma): Movie {
    return Movie.create(
      {
        title: raw.title,
        banner: raw.banner,
        cast: raw.cast,
        directors: raw.directors,
        genres: raw.genres as string[],
        media: raw.media as string,
        description: raw.description,
        poster: raw.poster,
        rating: raw.rating,
        releaseDate: raw.releaseDate,
        shortDescription: raw.shortDescription,
      },
      raw.id,
    );
  }

  static toPrisma(movie: Movie): Prisma.MoviesUncheckedCreateInput {
    return {
      title: movie.title,
      banner: movie.banner,
      cast: movie.cast,
      directors: movie.directors,
      genres: movie.genres,
      media: movie.media,
      description: movie.description,
      poster: movie.poster,
      rating: movie.rating,
      releaseDate: movie.releaseDate,
      shortDescription: movie.shortDescription,
      id: movie.id.toString(),
    };
  }
}
