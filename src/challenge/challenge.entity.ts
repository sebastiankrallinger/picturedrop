import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('Challenges')
export class Challenge {
  @PrimaryGeneratedColumn({ name: 'Id' })
  id: number;

  @Column({ name: 'Title' })
  title: string;

  @Column({ name: 'TitleEn' })
  titleEn: string;
}
