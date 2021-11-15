import Client from '@modules/clients/typeorm/entities/client';
import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryColumn, OneToOne, OneToMany } from 'typeorm';
import Product from './product';

@Entity('restaurants')
class Restaurant {
  @PrimaryColumn('uuid')
  id: string;

  @Column('uuid')
  @OneToOne(type => Client)
  client_id: string;

  @Column()
  name: string;
  
  @Column()
  status: boolean;

  @OneToMany(type => Product, product => product.restaurant_id)
  products: Product[]
  
  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Restaurant;