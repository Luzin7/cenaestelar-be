import { deleteMovieByIdUseCase } from '@infra/implementations/movies';
import { statusCodeMapper } from '@infra/statusCode/statusCodeMapper';
import { Controller } from '@shared/core/modules/Controller';
import { ErrorPresenter } from '@shared/presenters/Error';
import { Request, Response } from 'express';
import { deleteMovieParamsSchema } from 'src/schemas/movie/deleteMovie.schema';

export class DeleteMovieById implements Controller {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = deleteMovieParamsSchema.parse(req.params);

    const response = await deleteMovieByIdUseCase.execute({ id });

    if (response.isLeft()) {
      const error = response.value;

      return ErrorPresenter.hadleError(req, res, error);
    }

    return res.status(statusCodeMapper.NoContent).end();
  }
}
