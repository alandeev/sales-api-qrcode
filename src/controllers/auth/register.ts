import { Request, Response } from 'express'

import createUser from '@use-cases/create-user';

const RegisterController = async (request: Request, response: Response) => {  
  const user = await createUser({
    name: request.body.name,
    username: request.body.username,
    password: request.body.password
  })

  return response.json(user)
}

export default RegisterController