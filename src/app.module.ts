import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './user/user.module';
import { WorkplaceModule } from './workplace/workplace.module';
import { VoucherModule } from './voucher/voucher.module';
import { ChallengeModule } from './challenge/challenge.module';
import { FileModule } from './file/file.module';
import { SubmissionModule } from './submission/submission.module';
import { WorkplaceUserModule } from './workplaceUser/workplaceUser.module';
import { User } from './user/user.entity';
import { Workplace } from './workplace/workplace.entity';
import { Voucher } from './voucher/voucher.entity';
import { Challenge } from './challenge/challenge.entity';
import { File } from './file/file.entity';
import { Submission } from './submission/submission.entity';
import { SubmissionItem } from './submission/submissionItem.entity';
import { WorkplaceUser } from './workplaceUser/workplaceUser.entity';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'myuser',
      password: 'mypassword',
      database: 'mydb',
      entities: [
        User,
        Workplace,
        Voucher,
        Challenge,
        File,
        Submission,
        SubmissionItem,
        WorkplaceUser,
      ],
      synchronize: false,
    }),
    UsersModule,
    WorkplaceModule,
    VoucherModule,
    ChallengeModule,
    FileModule,
    SubmissionModule,
    WorkplaceUserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
