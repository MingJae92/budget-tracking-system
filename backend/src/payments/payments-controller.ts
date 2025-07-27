// src/payments/payments.controller.ts
import { Controller, Get, Post, Body } from '@nestjs/common';
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
}
