import CreateRestaurantService from "@modules/restaurants/services/create-restaurant";
import bodyValidator from "./body-validate";
import { Request, Response } from "express";

class CreateRestaurantController {
  public async execute(req: Request, res: Response) {
    const model = bodyValidator(req.body)

    const createRestaurantService = new CreateRestaurantService()
  
    const restaurant = await createRestaurantService.execute({
      client_id: req.user.id,
      name: model.name,
      status: false
    })

    return res
      .status(201)
      .json(restaurant)
  }
}

export default CreateRestaurantController;