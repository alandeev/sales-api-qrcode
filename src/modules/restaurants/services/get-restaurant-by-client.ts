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
      throw new NotFoundError("Client does not have restaurant")
    }

    return restaurant;
  }
}

export default GetRestaurantByClient;