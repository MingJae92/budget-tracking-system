import { Controller, Get, Post, Patch, Param, Body } from '@nestjs/common';
import { AccountsService } from './accounts-service';
import { CreateAccountsDto } from './dto/create-accounts.dto';
import { UpdateAccountsDto } from './dto/update-accounts.dto';

@Controller('accounts')
export class AccountsController {
  constructor(private readonly accountsService: AccountsService) {}

  @Get()
  findAll() {
    return this.accountsService.findAll();
  }

  @Post()
  create(@Body() createAccountDto: CreateAccountsDto) {
    return this.accountsService.createAccount(createAccountDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAccountDto: UpdateAccountsDto) {
    return this.accountsService.updateAccount(id, updateAccountDto);
  }
}
