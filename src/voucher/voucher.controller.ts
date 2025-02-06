import { Controller, Get } from '@nestjs/common';
import { VoucherService } from './voucher.service';
import { Voucher } from './voucher.entity';

@Controller('vouchers')
export class VoucherController {
  constructor(private readonly voucherService: VoucherService) {}

  @Get()
  async findAll(): Promise<Voucher[]> {
    return this.voucherService.findAll();
  }

  @Get('/count')
  async getTotalUploads(): Promise<number> {
    const count = await this.voucherService.findAll();
    return count.length;
  }

  @Get('/available')
  async getActiveWorkspaces(): Promise<number> {
    const vouchers = await this.voucherService.findAll();
    const availableVouchers = vouchers.filter(
      (v) => v.validatedOn > new Date(),
    );
    return availableVouchers.length;
  }

  @Get('/cashed')
  async getInactiveWorkspaces(): Promise<number> {
    const vouchers = await this.voucherService.findAll();
    const availableVouchers = vouchers.filter(
      (v) => v.validatedOn < new Date(),
    );
    return availableVouchers.length;
  }
}
