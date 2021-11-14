import { NotFoundError } from "@shared/errors"
import { getCustomRepository } from "typeorm"
import RestaurantRepository from "../typeorm/repositories/restaurant-repository"

interface IRequest {
  client_id: string
}

interface IDependencies {
  restaurantRepository: RestaurantRepository
}

class GetRestaurantByClient {
  private restaurantRepository: RestaurantRepository
  constructor(deps?: IDependencies) {
    this.restaurantRepository = deps?.restaurantRepository ?? getCustomRepository(RestaurantRepository)
  }

  public async execute(model: IRequest) {
    const restaurant = await this.restaurantRepository.getByClientId(model.client_id)

    if(!restaurant) {
      console.warn({
        message: "client does not have restaurant",
        model
      })

      throw new NotFoundError("client does not have restaurant")
    }

    return restaurant;
  }
}

export default GetRestaurantByClient;