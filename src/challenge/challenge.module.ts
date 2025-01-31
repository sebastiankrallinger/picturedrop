import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChallengeService } from '../challenge/challenge.service';
import { ChallengeController } from '../challenge/challenge.controller';
import { Challenge } from '../challenge/challenge.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Challenge])],
  providers: [ChallengeService],
  controllers: [ChallengeController],
})
export class ChallengeModule {}
