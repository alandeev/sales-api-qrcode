import { ValidationError } from "@shared/errors";
import { randomUUID } from "crypto";
import { getCustomRepository } from "typeorm";
import RestaurantRepository from "../typeorm/repositories/restaurant-repository";

interface IDependencies {
  restaurantRepository?: RestaurantRepository
}

interface ICreateRestaurant {
  name: string;
  client_id: string;
  status: boolean;
}

class CreateRestaurantService {
  restaurantRepository: RestaurantRepository
  constructor(deps?: IDependencies) {
    this.restaurantRepository = deps?.restaurantRepository ?? getCustomRepository(RestaurantRepository)
  }

  public async execute(model: ICreateRestaurant) {
    const clientHasRestaurant = await this.restaurantRepository.getByClientId(model.client_id);
    if(clientHasRestaurant) {
      throw new ValidationError("client already has restaurant")
    }

    const restaurant = this.restaurantRepository.create({
      id: randomUUID(),
      client_id: model.client_id,
      name: model.name,
      status: true, // modify after
    })

    await this.restaurantRepository.save(restaurant)
  
    return restaurant;
  }
}

export default CreateRestaurantService;