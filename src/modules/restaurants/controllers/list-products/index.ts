import ListProductsByRestaurant from "@modules/restaurants/services/list-products-by-restaurant";
import GetRestaurantByClient from "@modules/restaurants/services/get-restaurant-by-client";
import { Request, Response } from "express";

class ListProductsController {
  public async execute(req: Request, res: Response) {
    const getRestaurantByClient = new GetRestaurantByClient()
    const restaurant = await getRestaurantByClient.execute({
      client_id: req.user.id
    })

    const listProductsByRestaurant = new ListProductsByRestaurant()
  
    const products = await listProductsByRestaurant.execute({
      restaurant_id: restaurant.id
    })

    return res.status(201).json(products)
  }
}

export default ListProductsController;