import { createMovieUseCase } from '@infra/implementations/movies';
import { statusCodeMapper } from '@infra/statusCode/statusCodeMapper';
import { Controller } from '@shared/core/modules/Controller';
import { ErrorPresenter } from '@shared/presenters/Error';
import { Request, Response } from 'express';
import { createMovieBodySchema } from 'src/schemas/movie/createMovie.schema';

/**
 * The `CreateMovie` class is responsible for handling requests to create a new movie.
 * Upon receiving an HTTP request, it validates the movie data according to the schema defined in `createMovieBodySchema`,
 * extracting the following information:
 *
 * Request Body:
 *   - @Param {string} banner - The URL of the movie's banner.
 *   - @Param {string[]} cast - An array of cast members starring in the movie.
 *   - @Param {string} description - The detailed description of the movie.
 *   - @Param {string[]} directors - An array of directors involved in the movie production.
 *   - @Param {Genre[]} genres - An array of genres associated with the movie.
 *   - @Param {string | boolean} media - The URL of media (Youtube trailer or others) in which the movie is available.
 *   - @Param {string} poster - The URL of the movie's poster.
 *   - @Param {string} rating - The rating of the movie (0-10 that will be coverted to 0-5).
 *   - @Param {string} releaseDate - The release date of the movie.
 *   - @Param {string} shortDescription - A brief summary or tagline of the movie.
 *   - @Param {string} title - The title of the movie.
 *   - @Param {string} globalRating - The global rating score of the movie.
 *
 * Once validated, it utilizes the `createMovieUseCase` to execute the creation of the movie with the provided data.
 * If the operation is successful, it returns an HTTP status 201 indicating that the movie was created successfully.
 * In case of an error during the creation process, it employs the `ErrorPresenter` to present the error to the client.
 */

export class CreateMovie implements Controller {
  async handle(req: Request, res: Response): Promise<Response> {
    const {
      banner,
      cast,
      description,
      directors,
      genres,
      media,
      poster,
      rating,
      releaseDate,
      shortDescription,
      title,
      globalRating,
    } = createMovieBodySchema.parse(req.body);

    const response = await createMovieUseCase.execute({
      banner,
      cast,
      description,
      directors,
      genres,
      media,
      poster,
      rating,
      globalRating,
      releaseDate,
      shortDescription,
      title,
    });

    if (response.isLeft()) {
      const error = response.value;

      return ErrorPresenter.hadleError(req, res, error);
    }

    return res.status(statusCodeMapper.Created).end();
  }
}
