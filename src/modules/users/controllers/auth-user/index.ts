import { Request, Response } from "express";
import CreateUserAccess from "../../services/create-access-user";
import bodyValidator from "./body-validate";

class AuthUserControler {
   async execute(req: Request, res: Response) {
    const {
      username,
      password
    } = bodyValidator(req.body)

    const createUserAccess = new CreateUserAccess()

    const response = await createUserAccess.execute({
      username,
      password
    })
  
    return res.status(200).json(response)
  }
}

export default AuthUserControler;