import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('WorkspaceUsers')
export class WorkplaceUser {
  @PrimaryGeneratedColumn({ name: 'Id' })
  id: number;

  @Column({ name: 'UserId' })
  userId: number;

  @Column({ name: 'WorkspaceId' })
  workspaceId: number;

  @Column({ name: 'WorkspaceRole' })
  workspaceRole: string;
}
