import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryColumn, OneToOne } from 'typeorm';
import Restaurant from './restaurant';

@Entity('employees')
class Employee {
  @PrimaryColumn('uuid')
  id: string

  @Column()
  @OneToOne(type => Restaurant)
  restaurant_id: string

  @Column()
  name: string
  
  @Column()
  username: string

  @Column()
  password: string

  @Column("json")
  permissions: string[]

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}

export default Employee;