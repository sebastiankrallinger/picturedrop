import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('SubmissionItems')
export class SubmissionItem {
  @PrimaryGeneratedColumn({ name: 'Id' })
  id: number;

  @Column({ name: 'SubmissionId' })
  submissionId: string;

  @Column({ name: 'FileId' })
  fileId: string;

  @Column({ name: 'CreatedOn' })
  createdOn: Date;
}
