import UnauthorizedError from '@errors/unauthorized-error';
import User from '@models/User';
import { Request, Response } from 'express'
import bodyValidator from './body-validation';
import bcrypt from 'bcryptjs'
import createAccessToken from '@use-cases/create-access-token';

const LoginController = async (request: Request, response: Response) => {
  const {
    username,
    password
  } = await bodyValidator(request.body)

  const foundUser = await User.findByUsername(username)
  if(!foundUser) {
    console.warn({
      message: "User not found",
      username
    })

    throw new UnauthorizedError("User not found")
  }

  const isSamePassword = await bcrypt.compare(password, foundUser.password)
  if(!isSamePassword) {
    console.warn({
      message: "Password is invalid",
      username
    })

    throw new UnauthorizedError("Password is invalid");
  }


  const token = createAccessToken({
    id: foundUser.id,
    groups: foundUser.groups
  })

  return response.json({
    success: true,
    token
  })
}

export default LoginController;
