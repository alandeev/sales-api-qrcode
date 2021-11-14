import { Request, Response } from "express";
import CreateAccessClient from "../../services/create-access-client";
import bodyValidator from "./body-validate";

class AuthClientController {
  public async execute(req: Request, res: Response) {
    
    const model = bodyValidator(req.body)
    
    const createAccessClient = new CreateAccessClient()
  
    const response = await createAccessClient.execute(model)
  
    return res.status(200).json(response);
  }
}

export default AuthClientController;