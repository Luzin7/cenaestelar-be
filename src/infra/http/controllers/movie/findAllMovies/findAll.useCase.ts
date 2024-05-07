import { findALlMoviesUseCase } from '@infra/implementations/movies';
import { statusCodeMapper } from '@infra/statusCode/statusCodeMapper';
import { FindMoviesPresenter } from '@modules/movies/presenters/findAllMovies.presenter';
import { Controller } from '@shared/core/modules/Controller';
import { ErrorPresenter } from '@shared/presenters/Error';
import { Request, Response } from 'express';

/**
 * The `FindAllMovies` class is responsible for handling requests to retrieve all movies.
 * Upon receiving an HTTP request, it utilizes the `findALlMoviesUseCase` to execute the retrieval of all movies.
 * If the operation is successful, it returns an HTTP status 200 along with the list of movies in the response body.
 * In case of an error during the retrieval process, it employs the `ErrorPresenter` to present the error to the client.
 *
 * Response Body:
 *   - @Field {Movie[]} movies - An array containing all movies retrieved.
 */

export class FindAllMovies extends Controller {
  async handle(req: Request, res: Response): Promise<Response> {
    const response = await findALlMoviesUseCase.execute();

    if (response.isLeft()) {
      const error = response.value;

      return ErrorPresenter.hadleError(req, res, error);
    }

    const { movies } = response.value;

    return res
      .status(statusCodeMapper.OK)
      .json(FindMoviesPresenter.toHttp(movies));
  }
}
