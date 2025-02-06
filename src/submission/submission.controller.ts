import { Controller, Get } from '@nestjs/common';
import { SubmissionService } from '../submission/submission.service';
import { Submission } from '../submission/submission.entity';
import { SubmissionItem } from './submissionItem.entity';

@Controller('submissions')
export class SubmissionController {
  constructor(private readonly submissionService: SubmissionService) {}

  @Get()
  async findAll(): Promise<Submission[]> {
    return this.submissionService.findAllSubmissions();
  }

  @Get('/allItems')
  async findAllItems(): Promise<SubmissionItem[]> {
    return this.submissionService.findAllSubmissionItems();
  }

  @Get('/statistics')
  async getUploadsPerMonth(): Promise<number[]> {
    const uploads = await this.submissionService.findAllSubmissionItems();
    const uploadsPerMonth: number[] = new Array<number>(12).fill(0);
    uploads.forEach((u) => {
      if (u.createdOn instanceof Date) {
        const month = u.createdOn.getMonth();
        uploadsPerMonth[month] += 1;
      }
    });
    return uploadsPerMonth;
  }
}
