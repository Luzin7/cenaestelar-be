import { createMovieUseCase } from '@infra/implementations/movies';
import { statusCodeMapper } from '@infra/statusCode/statusCodeMapper';
import { Controller } from '@shared/core/modules/Controller';
import { ErrorPresenter } from '@shared/presenters/Error';
import { Request, Response } from 'express';
import { createMovieBodySchema } from 'src/schemas/movie/createMovie.schema';

export class CreateMovie implements Controller {
  async handle(req: Request, res: Response): Promise<Response> {
    const requisitionContent = createMovieBodySchema.parse(req.body);

    const response = await createMovieUseCase.execute(requisitionContent);

    if (response.isLeft()) {
      const error = response.value;

      return ErrorPresenter.hadleError(req, res, error);
    }

    return res.status(statusCodeMapper.Created).end();
  }
}
