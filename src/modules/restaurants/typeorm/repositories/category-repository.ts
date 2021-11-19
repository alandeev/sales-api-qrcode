import { EntityRepository, Repository } from "typeorm";
import Category from "../entities/category";

interface IGetByRestaurantAndName {
  name: string
  restaurant_id: string
}

@EntityRepository(Category)
class CategoryRepository extends Repository<Category> {
  public async getByRestaurantAndName (model: IGetByRestaurantAndName) {
    const category = await this.findOne({
      where: { 
        name: model.name,
        restaurant_id: model.restaurant_id
       }
    })

    return category;
  }

  public async listCategoryByRestaurant(restaurant_id: string) {
    const categories = await this.find({
      where: { restaurant_id }
    })

    return categories;
  }
}

export default CategoryRepository