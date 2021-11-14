import { EntityRepository, Repository } from "typeorm";
import Restaurant from "../entities/restaurant";

@EntityRepository(Restaurant)
class RestaurantRepository extends Repository<Restaurant> {
  public async getByClientId(client_id: string): Promise<Restaurant | undefined> {
    const restaurant = await this.findOne({
      where: { client_id }
    })

    return restaurant;
  }
}

export default RestaurantRepository;