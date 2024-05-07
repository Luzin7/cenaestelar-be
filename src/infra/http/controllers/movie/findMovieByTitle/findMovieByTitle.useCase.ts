import { findMovieByTitleUseCase } from '@infra/implementations/movies';
import { statusCodeMapper } from '@infra/statusCode/statusCodeMapper';
import { FindMoviesByTitlePresenter } from '@modules/movies/presenters/findMoviesByTitle.presenter';
import { Controller } from '@shared/core/modules/Controller';
import { ErrorPresenter } from '@shared/presenters/Error';
import { Request, Response } from 'express';
import { findMovieByTitleQuerySchema } from 'src/schemas/movie/findMovieByTitle.schema';

/**
 * The `FindMovieByTitle` class is responsible for handling requests to retrieve movies by their title.
 * Upon receiving an HTTP request, it validates the movie title query parameter according to the schema defined in `findMovieByTitleQuerySchema`.
 *
 * Request Query:
 *   - @Query {string} title - The title of the movie to be retrieved.
 *
 * Once validated, it utilizes the `findMovieByTitleUseCase` to execute the retrieval of movies with the provided title.
 * If the operation is successful, it returns an HTTP status 200 along with the list of movies matching the title in the response body.
 * In case of an error during the retrieval process, it employs the `ErrorPresenter` to present the error to the client.
 *
 * Response Body:
 *   - @Field {Movie[]} movies - An array containing movies matching the provided title.
 */

export class FindMovieByTitle extends Controller {
  async handle(req: Request, res: Response): Promise<Response> {
    const { title } = findMovieByTitleQuerySchema.parse(req.query);
    const response = await findMovieByTitleUseCase.execute({ title });

    if (response.isLeft()) {
      const error = response.value;

      return ErrorPresenter.hadleError(req, res, error);
    }

    const { movies } = response.value;

    return res
      .status(statusCodeMapper.OK)
      .json(FindMoviesByTitlePresenter.toHttp(movies));
  }
}
