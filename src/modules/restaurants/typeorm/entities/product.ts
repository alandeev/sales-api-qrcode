import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryColumn } from 'typeorm';

@Entity('products')
class Product {
  @PrimaryColumn('uuid')
  id: string;

  @Column()
  restaurant_id: string

  @Column()
  category_id?: string

  @Column()
  name: string;

  @Column()
  description: string;
  
  @Column()
  price: number;
  
  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Product;