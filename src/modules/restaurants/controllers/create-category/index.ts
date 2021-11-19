import { Request, Response } from "express";
import bodyValidator from "./body-validate";
import CreateCategoryService from "@modules/restaurants/services/create-category";
import GetRestaurantByClient from "@modules/restaurants/services/get-restaurant-by-client";

class CreateCategoryController {
  public async execute(req: Request, res: Response) {
    const model = bodyValidator(req.body)

    const getRestaurantByClient = new GetRestaurantByClient()
    const restaurant = await getRestaurantByClient.execute({
      client_id: req.user.id
    })

    const createCategoryService = new CreateCategoryService()
    const category =  await createCategoryService.execute({
      name: model.name,
      restaurant_id: restaurant.id,
    })

    return res.status(201).json(category)
  }
}

export default CreateCategoryController;