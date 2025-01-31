import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { WorkplaceUser } from '../workplaceUser/workplaceUser.entity';

@Injectable()
export class WorkplaceUserService {
  constructor(
    @InjectRepository(WorkplaceUser)
    private workplaceUserRepository: Repository<WorkplaceUser>,
  ) {}

  async findAll(): Promise<WorkplaceUser[]> {
    return this.workplaceUserRepository.find();
  }
}
