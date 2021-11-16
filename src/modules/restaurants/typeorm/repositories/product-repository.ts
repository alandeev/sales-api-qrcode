import { EntityRepository, Repository } from "typeorm";
import Product from "../entities/product";

@EntityRepository(Product)
class ProductRepository extends Repository<Product> {
  public async listProductsByRestaurant(restaurant_id: string, ): Promise<Product[]> {
    const products = await this.find({
      where: { restaurant_id }
    })

    return products
  }
}

export default ProductRepository;