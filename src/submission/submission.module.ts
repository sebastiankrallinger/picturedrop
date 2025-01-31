import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubmissionService } from './submission.service';
import { SubmissionController } from './submission.controller';
import { Submission } from '../submission/submission.entity';
import { SubmissionItem } from '../submission/submissionItem.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Submission, SubmissionItem])],
  providers: [SubmissionService],
  controllers: [SubmissionController],
  exports: [SubmissionService],
})
export class SubmissionModule {}
