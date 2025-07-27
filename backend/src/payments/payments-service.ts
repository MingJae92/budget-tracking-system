// src/payments/payments.service.ts
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable()
export class PaymentsService {
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
    const { data, error } = await this.supabase.from('payments').select('*');
    if (error) throw new Error(error.message);
    return data;
  }
}
