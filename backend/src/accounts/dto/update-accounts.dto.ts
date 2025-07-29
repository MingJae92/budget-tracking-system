import { IsString, IsOptional, IsPhoneNumber } from 'class-validator';

export class UpdateAccountsDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  address?: string;

  @IsOptional()
  @IsPhoneNumber('GB')
  phone_number?: string;

  @IsOptional()
  @IsString()
  bank_account_number?: string;
}
