import { IsString, IsNotEmpty, IsPhoneNumber, IsOptional } from "class-validator";

export class CreateAccountsDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  address: string;

  @IsPhoneNumber('GB')
  phone_number: string;

  @IsOptional()
  @IsString()
  bank_account_number?: string;
}
