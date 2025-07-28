import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { PaymentDataTypes } from '../types/PaymentDataTypes/PaymentDataTypes.types';
import { Database } from 'src/types/DataBaseTypes/DataBaseTypes.types';

@Injectable()
export class PaymentsService {
  private supabase: SupabaseClient<Database>;

  constructor(private readonly configService: ConfigService) {
    const url = this.configService.get<string>('SUPABASE_URL');
    const key = this.configService.get<string>('SUPABASE_SERVICE_ROLE_KEY');

    if (!url || !key) {
      throw new Error('Missing Supabase credentials.');
    }

    this.supabase = createClient<Database>(url, key);
  }

  // Get all payments ordered by timestamp descending (newest first)
  async findAll(): Promise<PaymentDataTypes[]> {
    const { data, error } = await this.supabase
      .from('payments')
      .select('*')
      .order('timestamp', { ascending: false }); // <-- sort by newest

    if (error) throw new Error(error.message);
    return data ?? [];
  }

  // Insert new payment and return the inserted row
  async create(paymentData: PaymentDataTypes): Promise<PaymentDataTypes[]> {
    const { data, error } = await this.supabase
      .from('payments')
      .insert([paymentData])
      .select(); // select returns inserted rows

    if (error) throw new Error(error.message);
    return data ?? [];
  }
}
