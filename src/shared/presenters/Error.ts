import { statusCodeMapper } from '@infra/statusCode/statusCodeMapper';
import { Request, Response } from 'express';
import { ErrorUseCase } from '../core/errors/Error.useCase';

export class ErrorPresenter {
  static hadleError(req: Request, res: Response, error: ErrorUseCase | null) {
    return res.status(error?.statusCode ?? statusCodeMapper.BadRequest).json({
      message: error?.message ?? 'Bad request',
      statusCode: error?.statusCode ?? statusCodeMapper.BadRequest,
    });
  }
}
