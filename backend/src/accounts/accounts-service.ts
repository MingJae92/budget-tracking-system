import { Injectable, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { CreateAccountsDto } from './dto/create-accounts.dto';
import { UpdateAccountsDto } from './dto/update-accounts.dto';

@Injectable()
export class AccountsService {
  private supabase: SupabaseClient;

  constructor(private readonly configService: ConfigService) {
    const url = this.configService.get<string>('SUPABASE_URL');
    const key = this.configService.get<string>('SUPABASE_SERVICE_ROLE_KEY');

    if (!url || !key) {
      throw new Error('Missing Supabase credentials.');
    }

    this.supabase = createClient(url, key);
  }

  async findAll() {
    const { data, error } = await this.supabase
      .from('accounts')
      .select('*')
      .order('last_updated', { ascending: false });

    if (error) throw new Error(error.message);
    return data;
  }

  async createAccount(dto: CreateAccountsDto) {
    const { data, error } = await this.supabase
      .from('accounts')
      .insert([
        {
          name: dto.name,
          address: dto.address,
          phone_number: dto.phone_number,
          bank_account_number: dto.bank_account_number || null,
          last_updated: new Date().toISOString(), // <-- Add this line
        },
      ])
      .select();

    if (error) throw new Error(error.message);
    return data;
  }

  async updateAccount(id: string, dto: UpdateAccountsDto) {
    const { data, error } = await this.supabase
      .from('accounts')
      .update({
        name: dto.name,
        address: dto.address,
        phone_number: dto.phone_number,
        bank_account_number: dto.bank_account_number,
      })
      .eq('id', id)
      .select()
      .single();

    if (error || !data) {
      throw new NotFoundException(`Account with ID ${id} not found`);
    }

    return data;
  }
}
