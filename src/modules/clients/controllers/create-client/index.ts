import { Request, Response } from "express";
import CreateClientService from "../../services/create-client";
import bodyValidator from "./body-validate";

class CreateClientController {
  public async execute(req: Request, res: Response) {
    
    const model = bodyValidator(req.body)
    
    const createClientService = new CreateClientService()
  
    console.log({
      user: req.user
    })

    const response = await createClientService.execute({
      created_by: req.user.id,
      email: model.email,
      name: model.name,
      password: model.password
    })
  
    return res.status(200).json(response);
  }
}

export default CreateClientController;