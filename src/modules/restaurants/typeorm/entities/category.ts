import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryColumn } from 'typeorm';

@Entity('categories')
class Category {
  @PrimaryColumn('uuid')
  id: string

  @Column()
  name: string

  @Column()
  restaurant_id: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}

export default Category;