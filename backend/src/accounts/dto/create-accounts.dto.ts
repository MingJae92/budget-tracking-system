import { IsString, IsPhoneNumber, IsOptional } from 'class-validator';

export class CreateAccountsDto {
  @IsString()
  name: string;

  @IsString()
  address: string;

  // Change null to undefined so it’s type-safe
  @IsPhoneNumber(undefined)
  phoneNumber: string;

  @IsOptional()
  @IsString()
  bankAccountNumber?: string;
}
