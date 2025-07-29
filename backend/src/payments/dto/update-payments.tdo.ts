import { IsOptional, IsEnum } from 'class-validator';

export enum PaymentStatus {
  Pending = 'Pending',
  Approved = 'Approved',
}

export class UpdatePaymentDto {
  @IsOptional()
  @IsEnum(PaymentStatus)
  status?: PaymentStatus;
}
