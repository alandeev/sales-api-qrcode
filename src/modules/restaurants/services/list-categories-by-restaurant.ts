import { getCustomRepository } from "typeorm";
import CategoryRepository from "../typeorm/repositories/category-repository";

interface IDependencies {
  categoryRepository: CategoryRepository
}

interface IRequest {
  restaurant_id: string
}

class ListCategoryService {
  private categoryRepository: CategoryRepository
  constructor(deps?: IDependencies) {
    this.categoryRepository = deps?.categoryRepository ?? getCustomRepository(CategoryRepository)
  }

  public async execute(model: IRequest) {
    const categoryAlreadyExist = await this.categoryRepository.listCategoryByRestaurant(model.restaurant_id)

    return categoryAlreadyExist
  }
}

export default ListCategoryService;