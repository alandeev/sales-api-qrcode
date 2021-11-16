import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryColumn } from 'typeorm';

export type Devices = "nfc" | "qrcode"

@Entity('comandas')
class Comanda {
  @PrimaryColumn('uuid')
  id: string

  @Column()
  restaurant_id: string

  @Column()
  employee_id: string

  @Column()
  device_id: string

  @Column()
  device_type: Devices

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}

export default Comanda;