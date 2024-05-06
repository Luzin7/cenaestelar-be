import { findBestMoviesSeenUseCase } from '@infra/implementations/movies';
import { statusCodeMapper } from '@infra/statusCode/statusCodeMapper';
import { FindBestMoviesSeenPresenter } from '@modules/movies/presenters/findBestMoviesSeen.presenter';
import { Controller } from '@shared/core/modules/Controller';
import { ErrorPresenter } from '@shared/presenters/Error';
import { Request, Response } from 'express';

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
