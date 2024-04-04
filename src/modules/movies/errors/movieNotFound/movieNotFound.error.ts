import { statusCodeMapper } from '@infra/statusCode/statusCodeMapper';
import { ErrorUseCase } from '@shared/core/errors/Error.useCase';

export class MovieNotFoundError extends Error implements ErrorUseCase {
  statusCode: number = statusCodeMapper.NotFound;

  constructor() {
    super('Movie not found');
  }
}
