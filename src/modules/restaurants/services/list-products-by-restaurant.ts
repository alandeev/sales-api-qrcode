import { getCustomRepository } from "typeorm"
import ProductRepository from "@modules/restaurants/typeorm/repositories/product-repository"

interface IDependencies {
  productRepository?: ProductRepository
}

interface ICreateProduct {
  restaurant_id: string
}

class ListProductsByRestaurant {
  private productRepository: ProductRepository

  constructor(deps?: IDependencies) { 
    this.productRepository = deps?.productRepository ?? getCustomRepository(ProductRepository)
  }

  public async execute(model: ICreateProduct) {
    const products = await this.productRepository.listProductsByRestaurant(model.restaurant_id)

    return products
  }
}

export default ListProductsByRestaurant;