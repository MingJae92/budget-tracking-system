import { IsString, IsNotEmpty, IsPhoneNumber, IsOptional } from "class-validator";

export class CreateAccountsDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  address: string;

  @IsPhoneNumber('GB')
  phoneNumber: string;

  @IsOptional()
  @IsString()
  bankAccountNumber?: string;
}
