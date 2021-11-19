import { Request, Response } from "express";
import ListCategoryService from "@modules/restaurants/services/list-categories-by-restaurant";
import GetRestaurantByClient from "@modules/restaurants/services/get-restaurant-by-client";

class ListCategoryController {
  public async execute(req: Request, res: Response) {
    const getRestaurantByClient = new GetRestaurantByClient()
    const restaurant = await getRestaurantByClient.execute({
      client_id: req.user.id
    })

    const listCategoryService = new ListCategoryService()
    const categories = await listCategoryService.execute({  
      restaurant_id: restaurant.id
    })

    return res
      .status(200)
      .json(categories)
  }
}

export default ListCategoryController;