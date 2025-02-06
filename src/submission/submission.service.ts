import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Submission } from '../submission/submission.entity';
import { SubmissionItem } from './submissionItem.entity';

@Injectable()
export class SubmissionService {
  constructor(
    @InjectRepository(Submission)
    private submissionRepository: Repository<Submission>,
    @InjectRepository(SubmissionItem)
    private submissionItemRepository: Repository<SubmissionItem>,
  ) {}

  async findAllSubmissions(): Promise<Submission[]> {
    return this.submissionRepository.find();
  }

  async findAllSubmissionItems(): Promise<SubmissionItem[]> {
    return this.submissionItemRepository.find();
  }
}
