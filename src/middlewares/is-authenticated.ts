import UnauthorizedError from '@errors/unauthorized-error';
import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

export default function isAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
): void {
  const { authorization } = request.headers;

  if (!authorization) {
    throw new UnauthorizedError('No token provided');
  }

  const tokenSplited = authorization.split(' ');

  if (tokenSplited.length !== 2) {
    throw new UnauthorizedError('Token malformated');
  }

  const [schema, token] = tokenSplited;

  if (schema !== 'Bearer') {
    throw new UnauthorizedError('Token malformated');
  }

  const privateKey = process.env.SECRET_JWT_KEY

  return jwt.verify(token, privateKey, (error, decoded: any) => {
    if (error) {
      throw new UnauthorizedError('Token invalid or expired');
    }

    request.user = decoded;

    return next();
  });
}