import { randomUUID } from 'crypto';
import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryColumn, OneToOne } from 'typeorm';
import Restaurant from './restaurant';



@Entity('employees')
class Employee {
  @PrimaryColumn('uuid', {
    default: randomUUID()
  })
  id: string;

  @OneToOne(type => Restaurant)
  restaurant_id: string;

  @Column()
  name: string;
  
  @Column()
  username: string;

  @Column()
  password: string;

  @Column('simple-array')
  permissions: string[]

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Employee;