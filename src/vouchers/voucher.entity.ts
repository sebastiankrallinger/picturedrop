import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('Vouchers')
export class Voucher {
  @PrimaryGeneratedColumn({ name: 'Id' })
  id: number;

  @Column({ name: 'VoucherCode' })
  voucherCode: string;

  @Column({ name: 'ValidatedOn', type: 'timestamp' })
  validatedOn: Date;
}
