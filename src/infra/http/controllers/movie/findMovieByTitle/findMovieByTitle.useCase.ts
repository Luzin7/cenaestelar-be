import { findMovieByTitleUseCase } from '@infra/implementations/movies';
import { statusCodeMapper } from '@infra/statusCode/statusCodeMapper';
import { FindMoviesByTitlePresenter } from '@modules/movies/presenters/findMoviesByTitle.presenter';
import { Controller } from '@shared/core/modules/Controller';
import { ErrorPresenter } from '@shared/presenters/Error';
import { Request, Response } from 'express';
import { findMovieByIdQuerySchema } from 'src/schemas/movie/findMovieByTitle.schema';

export class FindMovieByTitle extends Controller {
  async handle(req: Request, res: Response): Promise<Response> {
    const { title } = findMovieByIdQuerySchema.parse(req.query);
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
