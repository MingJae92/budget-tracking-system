// src/accounts/accounts.service.ts
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable()
export class AccountsService {
  private supabase: SupabaseClient;

  constructor(private readonly configService: ConfigService) {
    const supabaseUrl = this.configService.get<string>('SUPABASE_URL');
    const supabaseKey = this.configService.get<string>('SUPABASE_SERVICE_ROLE_KEY');

    if (!supabaseUrl || !supabaseKey) {
      throw new Error('SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY must be set in the environment variables.');
    }

    this.supabase = createClient(supabaseUrl, supabaseKey);
  }

  async findAll() {
    const { data, error } = await this.supabase
      .from('accounts')
      .select('*');

    if (error) {
      throw new Error(error.message);
    }

    return data;
  }
}
