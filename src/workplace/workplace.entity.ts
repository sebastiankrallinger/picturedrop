import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('Workspaces')
export class Workplace {
  @PrimaryGeneratedColumn({ name: 'Id' })
  id: number;

  @Column({ name: 'Name' })
  name: string;

  @Column({ name: 'NameEn' })
  nameEn: string;

  @Column({ name: 'Description' })
  description: string;

  @Column({ name: 'DescriptionEn' })
  descriptionEn: string;

  @Column({ name: 'TrialStartOn' })
  trialStartDate: Date;
  @Column({ name: 'TrialEndsOn' })
  trialEndDate: Date;
}
