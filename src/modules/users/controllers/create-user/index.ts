import { Request, Response } from "express";
import CreateUserService from "../../services/create-user";
import bodyValidator from "./body-validate";

class CreateUserControler {
  public async execute(req: Request, res: Response) {
    const {
      name,
      username,
      password
    } = bodyValidator(req.body)

    const createUserService = new CreateUserService()

    const user = await createUserService.execute({
      name,
      username,
      password
    })
  
    return res.status(200).json(user)
  }
}

export default CreateUserControler;