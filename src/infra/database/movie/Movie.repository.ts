import { OutputMovieDto } from '@modules/movies/dtos/movie.dto';
import { Movie } from '@modules/movies/entities/Movie';
import { MoviesRepository } from '@modules/movies/repositories/contracts/Movies.repository';
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

  // TODO: teste
  async findBestMoviesSeen(): Promise<OutputMovieDto[]> {
    const movies = await prisma.movies.findMany({
      where: {
        rating: {
          lte: '5',
        },
      },
      take: 7,
    });

    return movies.map(MoviesPrismaMapper.toEntity);
  }

  // TODO: Criar controlador, rota e teste
  findHighLights(): Promise<OutputMovieDto[]> {
    throw new Error('Method not implemented.');
  }

  async findById(id: string): Promise<OutputMovieDto | null> {
    const movie = await prisma.movies.findUnique({
      where: {
        id,
      },
    });

    if (movie === null) {
      return null;
    }

    return MoviesPrismaMapper.toEntity(movie);
  }

  // TODO: Criar controlador, rota e teste
  async findByGenre(genre: string[]): Promise<OutputMovieDto[]> {
    const movies = await prisma.movies.findMany({
      where: {
        genres: {
          hasSome: genre,
        },
      },
    });

    return movies.map(MoviesPrismaMapper.toEntity);
  }

  // TODO: Criar teste e melhorar sistema de busca
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

    if (movies.length === 0) {
      return null;
    }

    return movies.map(MoviesPrismaMapper.toEntity);
  }

  // TODO: Criar controlador, rota e teste
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
        rating: {
          gte: rating,
        },
      },
      orderBy: {
        genres: 'desc',
      },
    });

    return movies.map(MoviesPrismaMapper.toEntity);
  }

  async update(id: string, movie: Movie): Promise<void> {
    await prisma.movies.update({
      where: {
        id,
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
