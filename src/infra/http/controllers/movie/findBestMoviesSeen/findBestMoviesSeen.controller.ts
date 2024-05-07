import { findBestMoviesSeenUseCase } from '@infra/implementations/movies';
import { statusCodeMapper } from '@infra/statusCode/statusCodeMapper';
import { FindBestMoviesSeenPresenter } from '@modules/movies/presenters/findBestMoviesSeen.presenter';
import { Controller } from '@shared/core/modules/Controller';
import { ErrorPresenter } from '@shared/presenters/Error';
import { Request, Response } from 'express';

/**
 * The `FindBestMoviesSeen` class is responsible for handling requests to retrieve the best seen movies.
 * Upon receiving an HTTP request, it utilizes the `findBestMoviesSeenUseCase` to execute the retrieval of the best seen movies.
 * If the operation is successful, it returns an HTTP status 200 along with the list of best seen movies in the response body.
 * In case of an error during the retrieval process, it employs the `ErrorPresenter` to present the error to the client.
 *
 * Response Body:
 *   - @Field {Movie[]} movies - An array containing the best seen movies retrieved.
 */

export class FindBestMoviesSeen extends Controller {
  async handle(req: Request, res: Response): Promise<Response> {
    const response = await findBestMoviesSeenUseCase.execute();

    if (response.isLeft()) {
      const error = response.value;

      return ErrorPresenter.hadleError(req, res, error);
    }

    const { movies } = response.value;

    return res
      .status(statusCodeMapper.OK)
      .json(FindBestMoviesSeenPresenter.toHttp(movies));
  }
}
