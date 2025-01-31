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
}
