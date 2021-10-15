import { Request, Response } from 'express'
import User from "@models/User";

const main = async (request: Request, response: Response) => {
  const user = await User.findById(request.user.id)

  return response.json(user)
}

export default main;