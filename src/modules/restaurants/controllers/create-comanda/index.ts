import { Request, Response } from "express";
import bodyValidator from "./body-validate";
import CreateComandaService from "@modules/restaurants/services/create-comanda";
import GetEmployeeService from "@modules/restaurants/services/get-employee";

class CreateComandaController {
  public async execute(req: Request, res: Response) {
    const model = bodyValidator(req.body)

    const getEmployee = new GetEmployeeService()
    const employee = await getEmployee.execute({
      employee_id: req.user.id
    })

    const createComandaService = new CreateComandaService()
    const comanda =  await createComandaService.execute({
      employee_id: employee.id,
      restaurant_id: employee.restaurant_id,
      device_type: model.device_type,
      device_id: model.device_id,
    })

    return res.status(201).json(comanda)
  }
}

export default CreateComandaController;