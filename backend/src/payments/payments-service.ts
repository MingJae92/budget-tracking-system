// src/payments/payments.service.ts
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { PaymentDataTypes } from '../types/PaymentDataTypes/PaymentDataTypes.types';
import { Database } from 'src/types/DataBaseTypes/DataBaseTypes.types';

@Injectable()
export class PaymentsService {
  [x: string]: any;
  private supabase: SupabaseClient<Database>;

  constructor(private readonly configService: ConfigService) {
    const url = this.configService.get<string>('SUPABASE_URL');
    const key = this.configService.get<string>('SUPABASE_SERVICE_ROLE_KEY');

    if (!url || !key) {
      throw new Error('Missing Supabase credentials.');
    }

    this.supabase = createClient<Database>(url, key);
  }

  async findAll(): Promise<PaymentDataTypes[]> {
    const { data, error } = await this.supabase
      .from('payments')
      .select('*')
      .order('timestamp', { ascending: false });

    if (error) throw new Error(error.message);
    return data ?? [];
  }

  async create(paymentData: PaymentDataTypes): Promise<PaymentDataTypes[]> {
    const { data, error } = await this.supabase
      .from('payments')
      .insert([paymentData])
      .select();

    if (error) throw new Error(error.message);
    return data ?? [];
  }

  // ✅ NEW: Update payment status
  async updateStatus(id: string, status: string): Promise<PaymentDataTypes | null> {
    const { data, error } = await this.supabase
      .from('payments')
      .update({ status })
      .eq('id', id)
      .select()
      .single(); // Expect a single result

    if (error) throw new Error(error.message);
    return data;
  }
}
