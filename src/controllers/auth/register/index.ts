import { Request, Response } from 'express'

import createUser from '@use-cases/create-user';
import bodyValidator from './body-validation';

const RegisterController = async (request: Request, response: Response) => {  
  const {
    name,
    username,
    password
  } = await bodyValidator(request.body)

  const user = await createUser({
    name,
    username,
    password
  })

  return response.status(201).json(user)
}

export default RegisterController