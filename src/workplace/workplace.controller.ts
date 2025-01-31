import { Controller, Get } from '@nestjs/common';
import { WorkplaceService } from '../workplace/workplace.service';
import { Workplace } from '../workplace/workplace.entity';
import { SubmissionService } from '../submission/submission.service';

@Controller('workplaces')
export class WorkplaceController {
  constructor(
    private readonly workplaceService: WorkplaceService,
    private readonly submissionService: SubmissionService,
  ) {}

  @Get()
  async findAll(): Promise<Workplace[]> {
    return this.workplaceService.findAll();
  }

  @Get('/uploads')
  async getTotalUploads(): Promise<number> {
    const uploads = await this.submissionService.findAllSubmissionItems();
    return uploads.length;
  }

  @Get('/active')
  async getActiveWorkspaces(): Promise<number> {
    const workspaces = await this.workplaceService.findAll();
    const activeWorkspaces = workspaces.filter(
      (w) => w.trialStartDate < new Date() && w.trialEndDate > new Date(),
    );
    return activeWorkspaces.length;
  }

  @Get('/inactive')
  async getInactiveWorkspaces(): Promise<number> {
    const workspaces = await this.workplaceService.findAll();
    const inactiveWorkspaces = workspaces.filter(
      (w) => w.trialEndDate < new Date() || w.trialStartDate > new Date(),
    );
    return inactiveWorkspaces.length;
  }
}
