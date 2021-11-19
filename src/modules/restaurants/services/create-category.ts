import { NotFoundError } from "@shared/errors";
import { randomUUID } from "crypto";
import { getCustomRepository } from "typeorm";
import CategoryRepository from "../typeorm/repositories/category-repository";

interface IDependencies {
  categoryRepository: CategoryRepository
}

interface IRequest {
  name: string
  restaurant_id: string
}

class CreateCategoryService {
  private categoryRepository: CategoryRepository
  constructor(deps?: IDependencies) {
    this.categoryRepository = deps?.categoryRepository ?? getCustomRepository(CategoryRepository)
  }

  public async execute(model: IRequest) {
    const categoryAlreadyExist = await this.categoryRepository.getByRestaurantAndName({
      name: model.name,
      restaurant_id: model.restaurant_id
    })

    if(categoryAlreadyExist) {
      console.warn({
        message: "category already exist",
        model
      })

      throw new NotFoundError("category already exist")
    }
 
    const category = this.categoryRepository.create({
      id: randomUUID(),
      name: model.name,
      restaurant_id: model.restaurant_id
    })

    await this.categoryRepository.save(category)

    return category
  }
}

export default CreateCategoryService;