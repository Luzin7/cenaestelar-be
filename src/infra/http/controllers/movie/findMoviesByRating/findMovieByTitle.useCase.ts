import { Request, Response } from 'express';
import { findMoviesByRatingUseCase } from '@infra/implementations/movies';
import { statusCodeMapper } from '@infra/statusCode/statusCodeMapper';
import { FindMoviesByRatingPresenter } from '@modules/movies/presenters/findMoviesByRating.presenter';
import { Controller } from '@shared/core/modules/Controller';
import { ErrorPresenter } from '@shared/presenters/Error';
import { findMoviesByRatingBodySchema } from 'src/schemas/movie/findMoviesByRating.schema';

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
