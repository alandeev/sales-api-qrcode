import BaseError from '@shared/errors/base-error';
import { InternalServerError } from '@shared/errors';
import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

export default function isAuthenticated (SECRET_KEY: string) {
  if(!SECRET_KEY) {
    console.error({
      message: "Not found SECRET_KEY to validate token",
      secret_key: SECRET_KEY
    })
    
    throw new InternalServerError()
  }

  return function (request: Request, response: Response, next: NextFunction) {
    const { authorization } = request.headers;

    if (!authorization) {
      throw new BaseError(401, 'No token provided');
    }

    const tokenSplited = authorization.split(' ');

    if (tokenSplited.length !== 2) {
      throw new BaseError(401, 'Token malformated');
    }

    const [schema, token] = tokenSplited;

    if (schema !== 'Bearer') {
      throw new BaseError(401, 'Token malformated');
    }
    
    return jwt.verify(token, SECRET_KEY, async (error, decoded: any) => {
      if (error) {
        throw new BaseError(401, 'Token invalid or expired');
      }

      request.user = decoded;
      return next();
    });
  }
}