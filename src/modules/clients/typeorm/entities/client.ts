import User from '@modules/users/typeorm/entities/user';
import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryColumn, OneToOne } from 'typeorm';

@Entity('clients')
class Client {
  @PrimaryColumn('uuid')
  id: string;

  @Column('uuid')
  @OneToOne(type => User)
  created_by: string

  @Column()
  name: string

  @Column()
  email: string

  @Column()
  password: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}

export default Client