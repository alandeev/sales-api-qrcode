import { randomUUID } from 'crypto';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, Generated, PrimaryColumn } from 'typeorm';



@Entity('users')
class User {
  @PrimaryColumn('uuid', {
    default: randomUUID()
  })
  id: string;

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

export default User;