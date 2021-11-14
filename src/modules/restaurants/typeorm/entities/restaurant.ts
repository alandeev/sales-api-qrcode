import Client from '@modules/clients/typeorm/entities/client';
import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryColumn, OneToOne } from 'typeorm';

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
  
  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Restaurant;