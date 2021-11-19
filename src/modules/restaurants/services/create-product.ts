import { getCustomRepository } from "typeorm"
import ProductRepository from "@modules/restaurants/typeorm/repositories/product-repository"
import { randomUUID } from "crypto"
import CategoryRepository from "@modules/restaurants/typeorm/repositories/category-repository"
import { ValidationError } from "@shared/errors"

interface IDependencies {
  productRepository?: ProductRepository
  categoryRepository?: CategoryRepository
}

interface ICreateProduct {
  restaurant_id: string
  name: string
  description: string
  price: number
  category_id?: string
}

class CreateProductService {
  private productRepository: ProductRepository
  private categoryRepository: CategoryRepository

  constructor(deps?: IDependencies) { 
    this.productRepository = deps?.productRepository ?? getCustomRepository(ProductRepository)
    this.categoryRepository = deps?.categoryRepository ?? getCustomRepository(CategoryRepository)
  }

  public async execute(model: ICreateProduct) {
    if(model.category_id) {
      const category = await this.categoryRepository.findOne(model.category_id)

      const isOwnerCategory = category?.restaurant_id === model.restaurant_id
      if(!isOwnerCategory) {
        delete model.category_id
      }
    }

    const product = this.productRepository.create({
      id: randomUUID(),
      category_id: model.category_id,
      restaurant_id: model.restaurant_id,
      description: model.description,
      price: model.price,
      name: model.name
    })

    await this.productRepository.save(product)

    return product;
  }
}

export default CreateProductService;