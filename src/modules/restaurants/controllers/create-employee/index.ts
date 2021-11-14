import bodyValidator from "./body-validate";
import { Request, Response } from "express";
import CreateEmployeeService from "@modules/restaurants/services/create-employee";
import GetRestaurantByClient from "@modules/restaurants/services/get-restaurant-by-client";

class CreateRestaurantController {
  public async execute(req: Request, res: Response) {
    const model = bodyValidator(req.body)


    const getRestaurantByClient = new GetRestaurantByClient()
    const restaurant = await getRestaurantByClient.execute({
      client_id: req.user.id
    })

    const createEmployeeService = new CreateEmployeeService()
    const employee =  await createEmployeeService.execute({
      restaurant_id: restaurant.id,
      name: model.name,
      username: model.username,
      password: model.password,
      permissions: model.permissions,
    })

    return res.status(200).json(employee)
  }
}

export default CreateRestaurantController;