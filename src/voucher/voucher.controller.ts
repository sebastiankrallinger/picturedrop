import { Controller, Get } from '@nestjs/common';
import { VoucherService } from './voucher.service';
import { Voucher } from './voucher.entity';

@Controller('vouchers')
export class VoucherController {
  constructor(private readonly voucherService: VoucherService) {}

  //alle Gutscheine
  @Get()
  async findAll(): Promise<Voucher[]> {
    return this.voucherService.findAll();
  }

  //Gesamtanzahl Gutscheine
  @Get('/count')
  async getTotalUploads(): Promise<number> {
    const count = await this.voucherService.findAll();
    return count.length;
  }

  //Gesamtanzahl verfügbare Gutscheine
  @Get('/available')
  async getActiveWorkspaces(): Promise<number> {
    const vouchers = await this.voucherService.findAll();
    const availableVouchers = vouchers.filter(
      (v) => v.validatedOn > new Date(),
    );
    return availableVouchers.length;
  }

  //Gesamteinzahl eingelöste Gutscheine
  @Get('/cashed')
  async getInactiveWorkspaces(): Promise<number> {
    const vouchers = await this.voucherService.findAll();
    const availableVouchers = vouchers.filter(
      (v) => v.validatedOn < new Date(),
    );
    return availableVouchers.length;
  }
}
