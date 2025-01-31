import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkplaceUserService } from '../workplaceUser/workplaceUser.service';
import { WorkplaceUserController } from '../workplaceUser/workplaceUser.controller';
import { WorkplaceUser } from '../workplaceUser/workplaceUser.entity';

@Module({
  imports: [TypeOrmModule.forFeature([WorkplaceUser])],
  providers: [WorkplaceUserService],
  controllers: [WorkplaceUserController],
})
export class WorkplaceUserModule {}
