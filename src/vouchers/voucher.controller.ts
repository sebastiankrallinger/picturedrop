import { Controller, Get } from '@nestjs/common';
import { VoucherService } from '../vouchers/voucher.service';
import { Voucher } from '../vouchers/voucher.entity';

@Controller('vouchers')
export class VoucherController {
  constructor(private readonly voucherService: VoucherService) {}

  @Get()
  async findAll(): Promise<Voucher[]> {
    return this.voucherService.findAll();
  }
}
