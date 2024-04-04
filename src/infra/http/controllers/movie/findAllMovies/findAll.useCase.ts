import { findALlMoviesUseCase } from '@infra/implementations/movies';
import { statusCodeMapper } from '@infra/statusCode/statusCodeMapper';
import { FindMoviesPresenter } from '@modules/movies/presenters/findAllMovies.presenter';
import { Controller } from '@shared/core/modules/Controller';
import { ErrorPresenter } from '@shared/presenters/Error';
import { Request, Response } from 'express';

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
