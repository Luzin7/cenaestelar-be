import { deleteMovieByIdUseCase } from '@infra/implementations/movies';
import { statusCodeMapper } from '@infra/statusCode/statusCodeMapper';
import { Controller } from '@shared/core/modules/Controller';
import { ErrorPresenter } from '@shared/presenters/Error';
import { Request, Response } from 'express';
import { deleteMovieParamsSchema } from 'src/schemas/movie/deleteMovie.schema';

/**
 * The `DeleteMovieById` class is responsible for handling requests to delete a movie by its ID.
 * Upon receiving an HTTP request, it validates the movie ID parameter according to the schema defined in `deleteMovieParamsSchema`.
 *
 * Request Params:
 *   - @Param {string} id - The ID of the movie to be deleted.
 *
 * Once validated, it utilizes the `deleteMovieByIdUseCase` to execute the deletion of the movie with the provided ID.
 * If the operation is successful, it returns an HTTP status 204 indicating that the movie was deleted successfully.
 * In case of an error during the deletion process, it employs the `ErrorPresenter` to present the error to the client.
 */

export class DeleteMovieById implements Controller {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = deleteMovieParamsSchema.parse(req.params);

    const response = await deleteMovieByIdUseCase.execute({ id });

    if (response.isLeft()) {
      const error = response.value;

      return ErrorPresenter.hadleError(req, res, error);
    }

    return res.status(statusCodeMapper.NoContent).end();
  }
}
