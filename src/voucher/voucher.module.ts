import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VoucherService } from './voucher.service';
import { VoucherController } from './voucher.controller';
import { Voucher } from './voucher.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Voucher])],
  providers: [VoucherService],
  controllers: [VoucherController],
})
export class VoucherModule {}
