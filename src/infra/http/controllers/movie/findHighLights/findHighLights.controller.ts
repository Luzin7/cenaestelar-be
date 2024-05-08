import { findHighLightsUseCase } from '@infra/implementations/movies';
import { statusCodeMapper } from '@infra/statusCode/statusCodeMapper';
import { FindHighLightsPresenter } from '@modules/movies/presenters/findHighLights.presenter';
import { Controller } from '@shared/core/modules/Controller';
import { ErrorPresenter } from '@shared/presenters/Error';
import { Request, Response } from 'express';

export class FindHighLights extends Controller {
  async handle(req: Request, res: Response): Promise<Response> {
    const response = await findHighLightsUseCase.execute();

    if (response.isLeft()) {
      const error = response.value;

      return ErrorPresenter.hadleError(req, res, error);
    }

    const { movies } = response.value;

    return res
      .status(statusCodeMapper.OK)
      .json(FindHighLightsPresenter.toHttp(movies));
  }
}
