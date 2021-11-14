import ForbiddenError from '@shared/errors/forbidden-error';
import { NextFunction, Request, Response } from 'express';

export default function hasPermissions(...permissions: string[]) {
  return function (request: Request, response: Response, next: NextFunction) {
    const userPermissions = request.user.permissions
    for(let permission of permissions) {
      if(!userPermissions.includes(permission)) {
        console.warn({
          message: "User does not has permission to this feature",
          user_permissions: userPermissions,
          required_permissions: permissions
        })

        throw new ForbiddenError("User does not has permission")
      }
    }

    next()
  }
}