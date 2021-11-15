import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryColumn, ManyToOne } from 'typeorm';
import Restaurant from './restaurant';

@Entity('products')
class Product {
  @PrimaryColumn('uuid')
  id: string;

  @Column()
  @ManyToOne(type => Restaurant)
  restaurant_id: string

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