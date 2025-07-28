import {
  IsUUID,
  IsInt,
  IsString,
  IsNumber,
  IsOptional,
  IsDateString,
  IsIn,
} from 'class-validator';

export class CreatePaymentDto {
  @IsUUID()
  id: string;

  @IsInt()
  user_id: number;

  @IsNumber()
  amount: number;

  @IsString()
  recipient_name: string;

  @IsString()
  recipient_bank_name: string;

  @IsString()
  recipient_account_number: string;

  @IsOptional()
  @IsString()
  notes?: string;

  @IsString()
  @IsIn(['Pending', 'Approved', 'Rejected'])
  status: string;

  @IsDateString()
  timestamp: string;
}
