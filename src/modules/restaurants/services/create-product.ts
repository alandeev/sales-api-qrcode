import { getCustomRepository } from "typeorm"
import ProductRepository from "@modules/restaurants/typeorm/repositories/product-repository"

interface IDependencies {
  productRepository?: ProductRepository
}

interface ICreateProduct {
  restaurant_id: string
  name: string
  description: string
  price: number
}

class CreateProductService {
  private productRepository: ProductRepository

  constructor(deps?: IDependencies) { 
    this.productRepository = deps?.productRepository ?? getCustomRepository(ProductRepository)
  }

  public async execute(model: ICreateProduct) {
    const product = this.productRepository.create({
      restaurant_id: model.restaurant_id,
      name: model.name,
      description: model.description,
      price: model.price
    })

    await this.productRepository.save(product)

    return product;
  }
}

export default CreateProductService;