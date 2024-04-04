import { findMovieByIdUseCase } from '@infra/implementations/movies';
import { statusCodeMapper } from '@infra/statusCode/statusCodeMapper';
import { FindMovieByIdPresenter } from '@modules/movies/presenters/findMovieById.presenter';
import { Controller } from '@shared/core/modules/Controller';
import { ErrorPresenter } from '@shared/presenters/Error';
import { Request, Response } from 'express';
import { findMovieByIdBodySchema } from 'src/schemas/movie/findMovieById.schema';

export class FindMovieById extends Controller {
  async handle(req: Request, res: Response): Promise<Response> {
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
  }
}
