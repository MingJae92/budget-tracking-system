import { Controller, Get, Post, Body, Put, Param } from '@nestjs/common';
import { PaymentsService } from './payments-service';

@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Get()
  findAll() {
    return this.paymentsService.findAll();
  }

  @Post()
  create(@Body() paymentData: any) {
    return this.paymentsService.create(paymentData);
  }

  @Put(':id/status')
  updateStatus(@Param('id') id: string, @Body('status') status: string) {
    return this.paymentsService.updateStatus(id, status);
  }
}
