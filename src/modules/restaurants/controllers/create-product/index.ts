import bodyValidator from "./body-validate";
import { Request, Response } from "express";
import GetRestaurantByClient from "@modules/restaurants/services/get-restaurant-by-client";
import CreateProductService from "@modules/restaurants/services/create-product";

class CreateProductController {
  public async execute(req: Request, res: Response) {
    const model = bodyValidator(req.body)

    const getRestaurantByClient = new GetRestaurantByClient()
    const restaurant = await getRestaurantByClient.execute({
      client_id: req.user.id
    })

    const createProductService = new CreateProductService()

    const product = await createProductService.execute({
      restaurant_id: restaurant.id,
      name: model.name,
      description: model.description,
      price: model.price
    })

    return res.status(201).json(product)
  }
}

export default CreateProductController;