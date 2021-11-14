import BaseError from '@shared/errors/base-error';
import ValidationError from '@shared/errors/validation-error';
import { NextFunction, Request, Response } from 'express';

const errorHandler = (
  error: Error,
  request: Request,
  response: Response,
  next: NextFunction
) => {
  if(error instanceof ValidationError) {
    return response.status(error.status).json({
      status: 'error',
      message: error.message,
      details: error.details
    });
  }

  if (error instanceof BaseError) {
    return response.status(error.status).json({
      status: 'error',
      message: error.message
    });
  }

  console.log(error);

  return response.status(400).json({
    status: 'error',
    message: 'Internal error server',
  })
}

export default errorHandler;