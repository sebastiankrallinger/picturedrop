import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubmissionService } from './submission.service';
import { SubmissionController } from './submission.controller';
import { Submission } from '../submission/submission.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Submission])],
  providers: [SubmissionService],
  controllers: [SubmissionController],
})
export class SubmissionModule {}
