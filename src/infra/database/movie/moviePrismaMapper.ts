import { Movie } from '@modules/movies/entities/Movie';
import { Movies as MoviePrisma, Prisma } from '@prisma/client';

export class MoviesPrismaMapper {
  static toEntity(raw: MoviePrisma): Movie {
    return Movie.create(
      {
        title: raw.title,
        banner: (raw.banner as string) ?? null,
        cast: raw.cast,
        directors: raw.directors,
        genres: raw.genres as { id: number; name: string }[],
        media: raw.media as string,
        description: raw.description,
        poster: raw.poster as string,
        rating: raw.rating,
        globalRating: raw.globaRating,
        releaseDate: raw.releaseDate,
        shortDescription: raw.shortDescription,
      },
      raw.id,
    );
  }

  static toPrisma(movie: Movie): Prisma.MoviesUncheckedCreateInput {
    return {
      title: movie.title,
      banner: (movie.banner as string) ?? null,
      cast: movie.cast,
      directors: movie.directors,
      genres: movie.genres,
      media: (movie.media as string) ?? null,
      description: movie.description,
      poster: (movie.poster as string) ?? null,
      rating: movie.rating,
      globaRating: movie.globalRating,
      releaseDate: movie.releaseDate,
      shortDescription: movie.shortDescription,
      id: movie.id.toString(),
    };
  }
}
