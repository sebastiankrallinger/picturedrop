import { Entity, PrimaryGeneratedColumn, Column, Timestamp } from 'typeorm';

@Entity('Users')
export class User {
  @PrimaryGeneratedColumn({ name: 'Id' })
  id: number;

  @Column({ name: 'Username' })
  username: string;

  @Column({ name: 'FirstName' })
  firstName: string;

  @Column({ name: 'LastName' })
  lastName: string;

  @Column({ name: 'Email' })
  email: string;

  @Column({ name: 'StripeCustomerId' })
  stripeCustomerId: string;
}
