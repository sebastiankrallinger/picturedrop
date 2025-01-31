import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('Submissions')
export class Submission {
  @PrimaryGeneratedColumn({ name: 'Id' })
  id: number;

  @Column({ name: 'Code' })
  code: string;

  @Column({ name: 'FirstName' })
  firstname: string;

  @Column({ name: 'LastName' })
  lastname: string;
}
