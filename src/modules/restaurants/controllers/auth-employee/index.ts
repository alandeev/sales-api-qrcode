import { Request, Response } from "express";
import CreateAccessEmployee from "../../services/create-access-employee";
import bodyValidator from "./body-validate";

class AuthEmployeeController {
  public async execute(req: Request, res: Response) {
    const model = bodyValidator(req.body)
    
    const createAccessEmployee = new CreateAccessEmployee()
  
    const response = await createAccessEmployee.execute(model)
  
    return res.status(200).json(response);
  }
}

export default AuthEmployeeController;