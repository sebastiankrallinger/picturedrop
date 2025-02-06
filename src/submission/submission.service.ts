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

  //Submission-Daten aus DB abrufen
  async findAllSubmissions(): Promise<Submission[]> {
    return this.submissionRepository.find();
  }

  //SubmissionItem-Daten aus DB abrufen
  async findAllSubmissionItems(): Promise<SubmissionItem[]> {
    return this.submissionItemRepository.find();
  }
}
