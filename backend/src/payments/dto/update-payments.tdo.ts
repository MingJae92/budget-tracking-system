import { IsOptional, IsEnum } from 'class-validator';

export enum PaymentStatus {
  Pending = 'Pending',
  Approved = 'Approved',
  // add other statuses if any
}

export class UpdatePaymentDto {
  @IsOptional()
  @IsEnum(PaymentStatus)
  status?: PaymentStatus;
  
  // Add other fields you want to allow updating if needed
}
