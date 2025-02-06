import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubmissionModule } from '../submission/submission.module';
import { WorkplaceService } from '../workplace/workplace.service';
import { WorkplaceController } from '../workplace/workplace.controller';
import { Workplace } from '../workplace/workplace.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Workplace]), SubmissionModule],
  providers: [WorkplaceService],
  controllers: [WorkplaceController],
})
export class WorkplaceModule {}
