import { findMovieByIdUseCase } from '@infra/implementations/movies';
import { statusCodeMapper } from '@infra/statusCode/statusCodeMapper';
import { FindMovieByIdPresenter } from '@modules/movies/presenters/findMovieById.presenter';
import { Controller } from '@shared/core/modules/Controller';
import { ErrorPresenter } from '@shared/presenters/Error';
import { Request, Response } from 'express';
import { findMovieByIdBodySchema } from 'src/schemas/movie/findMovieById.schema';

/**
 * The `FindMovieById` class is responsible for handling requests to retrieve a movie by its ID.
 * Upon receiving an HTTP request, it validates the movie ID parameter according to the schema defined in `findMovieByIdBodySchema`.
 *
 * Request Params:
 *   - @Param {string} id - The ID of the movie to be retrieved.
 *
 * Once validated, it utilizes the `findMovieByIdUseCase` to execute the retrieval of the movie with the provided ID.
 * If the operation is successful, it returns an HTTP status 200 along with the movie details in the response body.
 * In case of an error during the retrieval process, it employs the `ErrorPresenter` to present the error to the client.
 *
 * Response Body:
 *   - @Field {Movie} movie - The movie retrieved based on the provided ID.
 *
 * If the request parameters are invalid, it returns an HTTP status 400 with an error message indicating a bad request.
 */

export class FindMovieById extends Controller {
  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = findMovieByIdBodySchema.parse(req.params);

      const response = await findMovieByIdUseCase.execute({ id });

      if (response.isLeft()) {
        const error = response.value;
        return ErrorPresenter.hadleError(req, res, error);
      }

      const { movie } = response.value;

      return res
        .status(statusCodeMapper.OK)
        .json(FindMovieByIdPresenter.toHttp(movie));
    } catch (error) {
      return ErrorPresenter.hadleError(req, res, {
        message: 'Bad request',
        statusCode: statusCodeMapper.BadRequest,
      });
    }
  }
}
