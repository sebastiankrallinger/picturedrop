import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './user/user.module';
import { WorkplaceModule } from './workplace/workplace.module';
import { VoucherModule } from './vouchers/voucher.module';
import { User } from './user/user.entity';
import { Workplace } from './workplace/workplace.entity';
import { Voucher } from './vouchers/voucher.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'myuser',
      password: 'mypassword',
      database: 'mydb',
      entities: [User, Workplace, Voucher],
      synchronize: false,
    }),
    UsersModule,
    WorkplaceModule,
    VoucherModule,
  ],
})
export class AppModule {}
