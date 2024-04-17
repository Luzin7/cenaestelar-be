import { Movie } from '@modules/movies/entities/Movie';
import { MoviesRepository } from '@modules/movies/repositories/contracts/Movies.repository';
import { OutputMovieDto } from '@modules/movies/repositories/contracts/movie.dto';
import { prisma } from '../connection';
import { MoviesPrismaMapper } from './moviePrismaMapper';

export class MoviesRepositoryImplementations implements MoviesRepository {
  async findAll(): Promise<OutputMovieDto[]> {
    const movies = await prisma.movies.findMany({
      orderBy: {
        releaseDate: 'desc',
      },
    });

    return movies.map(MoviesPrismaMapper.toEntity);
  }

  async findById(id: string): Promise<OutputMovieDto | null> {
    const movie = await prisma.movies.findUnique({
      where: {
        id,
      },
    });

    if (!movie) {
      return null;
    }

    return MoviesPrismaMapper.toEntity(movie);
  }

  async findByGenre(genre: string[]): Promise<OutputMovieDto[]> {
    const movies = await prisma.movies.findMany({
      where: {
        genres: {
          hasSome: genre,
        },
      },
      orderBy: {
        genres: 'desc',
      },
    });

    return movies.map(MoviesPrismaMapper.toEntity);
  }

  async findByTitle(title: string): Promise<OutputMovieDto[] | null> {
    const movies = await prisma.movies.findMany({
      where: {
        title: {
          contains: title,
        },
      },
      orderBy: {
        genres: 'desc',
      },
    });

    return movies.map(MoviesPrismaMapper.toEntity);
  }

  async findByReleaseDate(releaseDate: string): Promise<OutputMovieDto[]> {
    const movies = await prisma.movies.findMany({
      where: {
        releaseDate,
      },
      orderBy: {
        genres: 'desc',
      },
    });

    return movies.map(MoviesPrismaMapper.toEntity);
  }

  async findByRating(rating: string): Promise<OutputMovieDto[]> {
    const movies = await prisma.movies.findMany({
      where: {
        rating,
      },
      orderBy: {
        genres: 'desc',
      },
    });

    return movies.map(MoviesPrismaMapper.toEntity);
  }

  async update(movie: Movie): Promise<void> {
    await prisma.movies.update({
      where: {
        id: movie.id,
      },
      data: MoviesPrismaMapper.toPrisma(movie),
    });
  }

  async delete(id: string): Promise<void> {
    await prisma.movies.delete({
      where: {
        id,
      },
    });
  }

  async create(movie: Movie): Promise<void> {
    await prisma.movies.create({
      data: MoviesPrismaMapper.toPrisma(movie),
    });
  }
}
