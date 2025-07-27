import { Controller, Get, Post, Patch, Param, Body } from '@nestjs/common';
import { AccountsService } from './accounts-service';
import { CreateAccountsDto } from './dto/create-accounts.dto';
import { UpdateAccountsDto } from './dto/update-accounts.dto';

@Controller('accounts')
export class AccountsController {
  constructor(private readonly accountsService: AccountsService) {}

  // GET /accounts
  @Get()
  findAll() {
    return this.accountsService.findAll();
  }

  // POST /accounts
  @Post()
  create(@Body() createAccountDto: CreateAccountsDto) {
    return this.accountsService.createAccount(createAccountDto);
  }

  // PATCH /accounts/:id
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAccountDto: UpdateAccountsDto) {
    return this.accountsService.updateAccount(id, updateAccountDto);
  }
}
