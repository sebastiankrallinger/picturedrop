import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Workplace } from '../workplace/workplace.entity';

@Injectable()
export class WorkplaceService {
  constructor(
    @InjectRepository(Workplace)
    private workplaceRepository: Repository<Workplace>,
  ) {}

  //Workplaces aus DB abrufen
  async findAll(): Promise<Workplace[]> {
    return this.workplaceRepository.find();
  }
}
