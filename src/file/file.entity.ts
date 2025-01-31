import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('Files')
export class File {
  @PrimaryGeneratedColumn({ name: 'Id' })
  id: number;

  @Column({ name: 'FileName' })
  fileName: string;

  @Column({ name: 'FileExtension' })
  fileExtension: string;

  @Column({ name: 'ContentType' })
  contentType: string;

  @Column({ name: 'Url' })
  url: string;
}
