import { statusCodeMapper } from '@infra/statusCode/statusCodeMapper';
import { Controller } from '@shared/core/modules/Controller';
import { ErrorPresenter } from '@shared/presenters/Error';
import { Request, Response } from 'express';
import {
  updateMovieBodySchema,
  updateMovieParamsSchema,
} from 'src/schemas/movie/updateMovie.schema';
import { updateMovieUseCase } from './../../../../implementations/movies/index';

/**
 * The `UpdateMovie` class is responsible for handling requests to update a movie by its ID.
 * Upon receiving an HTTP request, it validates the movie ID parameter according to the schema defined in `updateMovieParamsSchema`,
 * and the request body according to the schema defined in `updateMovieBodySchema`.
 *
 * Request Params:
 *   - @Param {string} id - The ID of the movie to be updated.
 *
 * Request Body:
 *   - @Field {string} banner - The updated URL of the movie's banner.
 *   - @Field {string[]} cast - An updated array of cast members starring in the movie.
 *   - @Field {string} description - The updated detailed description of the movie.
 *   - @Field {string[]} directors - An updated array of directors involved in the movie production.
 *   - @Field {Genre[]} genres - An updated array of genres associated with the movie.
 *   - @Field {string | boolean} media - The updated URL of media (Youtube trailer or other) in which the movie is available.
 *   - @Field {string} poster - The updated URL of the movie's poster.
 *   - @Field {string} rating - The updated rating of the movie (0-10 that will be converted to 0-5).
 *   - @Field {string} releaseDate - The updated release date of the movie.
 *   - @Field {string} shortDescription - The updated brief summary or tagline of the movie.
 *   - @Field {string} title - The updated title of the movie.
 *   - @Field {string} globalRating - The updated global rating score of the movie.
 *
 * Once validated, it utilizes the `updateMovieUseCase` to execute the update operation with the provided data.
 * If the operation is successful, it returns an HTTP status 204 indicating that the movie was updated successfully.
 * In case of an error during the update process, it employs the `ErrorPresenter` to present the error to the client.
 */

export class UpdateMovie implements Controller {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = updateMovieParamsSchema.parse(req.params);
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
    } = updateMovieBodySchema.parse(req.body);

    const response = await updateMovieUseCase.execute({
      id,
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

    return res.status(statusCodeMapper.NoContent).end();
  }
}
