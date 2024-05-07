import { findMoviesByRatingUseCase } from '@infra/implementations/movies';
import { statusCodeMapper } from '@infra/statusCode/statusCodeMapper';
import { FindMoviesByRatingPresenter } from '@modules/movies/presenters/findMoviesByRating.presenter';
import { Controller } from '@shared/core/modules/Controller';
import { ErrorPresenter } from '@shared/presenters/Error';
import { Request, Response } from 'express';
import { findMoviesByRatingBodySchema } from 'src/schemas/movie/findMoviesByRating.schema';

/**
 * The `FindMoviesByRating` class is responsible for handling requests to retrieve movies by their rating.
 * Upon receiving an HTTP request, it validates the movie rating provided in the request body according to the schema defined in `findMoviesByRatingBodySchema`.
 *
 * Request Body:
 *   - @Field {string} rating - The rating of the movies to be retrieved.
 *
 * Once validated, it utilizes the `findMoviesByRatingUseCase` to execute the retrieval of movies with the provided rating.
 * If the operation is successful, it returns an HTTP status 200 along with the list of movies matching the rating in the response body.
 * In case of an error during the retrieval process, it employs the `ErrorPresenter` to present the error to the client.
 *
 * Response Body:
 *   - @Field {Movie[]} movies - An array containing movies matching the provided rating.
 */

export class FindMoviesByRating extends Controller {
  async handle(req: Request, res: Response): Promise<Response> {
    const { rating } = findMoviesByRatingBodySchema.parse(req.body);
    const response = await findMoviesByRatingUseCase.execute({ rating });

    if (response.isLeft()) {
      const error = response.value;

      return ErrorPresenter.hadleError(req, res, error);
    }

    const { movies } = response.value;

    return res
      .status(statusCodeMapper.OK)
      .json(FindMoviesByRatingPresenter.toHttp(movies));
  }
}
