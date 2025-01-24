import { Controller, Get } from '@nestjs/common';
import { WorkplaceService } from '../workplace/workplace.service';
import { Workplace } from '../workplace/workplace.entity';

@Controller('workplaces')
export class WorkplaceController {
  constructor(private readonly workplaceService: WorkplaceService) {}

  @Get()
  async findAll(): Promise<Workplace[]> {
    return this.workplaceService.findAll();
  }
}
