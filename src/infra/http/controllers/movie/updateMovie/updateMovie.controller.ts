import { statusCodeMapper } from '@infra/statusCode/statusCodeMapper';
import { Controller } from '@shared/core/modules/Controller';
import { ErrorPresenter } from '@shared/presenters/Error';
import { Request, Response } from 'express';
import {
  updateMovieBodySchema,
  updateMovieParamsSchema,
} from 'src/schemas/movie/updateMovie.schema';
import { updateMovieUseCase } from './../../../../implementations/movies/index';

export class UpdateMovie implements Controller {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = updateMovieParamsSchema.parse(req.params);
    const {
      banner,
      cast,
      description,
      directors,
      genres,
      media,
      poster,
      rating,
      releaseDate,
      shortDescription,
      title,
      globalRating,
    } = updateMovieBodySchema.parse(req.body);

    const response = await updateMovieUseCase.execute({
      id,
      banner,
      cast,
      description,
      directors,
      genres,
      media,
      poster,
      rating,
      globalRating,
      releaseDate,
      shortDescription,
      title,
    });

    if (response.isLeft()) {
      const error = response.value;

      return ErrorPresenter.hadleError(req, res, error);
    }

    return res.status(statusCodeMapper.NoContent).end();
  }
}
