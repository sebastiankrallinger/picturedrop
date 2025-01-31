import { Controller, Get } from '@nestjs/common';
import { WorkplaceUserService } from '../workplaceUser/workplaceUser.service';
import { WorkplaceUser } from '../workplaceUser/workplaceUser.entity';

@Controller('workplaceUsers')
export class WorkplaceUserController {
  constructor(private readonly workplaceUserService: WorkplaceUserService) {}

  @Get()
  async findAll(): Promise<WorkplaceUser[]> {
    return this.workplaceUserService.findAll();
  }
}
