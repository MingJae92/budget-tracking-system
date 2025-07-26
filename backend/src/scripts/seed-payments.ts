import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import * as fs from 'fs';
import * as path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../../config/.env') });

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

// Load payment data
const payments = JSON.parse(
  fs.readFileSync(
    path.resolve(__dirname, '../data/payments_data.json'),
    'utf8',
  ),
);

async function seedPayments() {
  for (const payment of payments) {
    console.log('Inserting:', {
      user_id: payment.user_id,
      amount: payment.amount,
      recipient_name: payment.recipientName,
      recipient_bank_name: payment.recipientBankName,
      recipient_account_number: payment.recipientAccountNumber,
      notes: payment.notes,
      status: payment.status,
      timestamp: payment.timestamp,
    });

    const { error } = await supabase.from('payments').insert({
      user_id: payment.user_id,
      amount: payment.amount,
      recipient_name: payment.recipientName, // match your DB column
      recipient_bank_name: payment.recipientBankName, // match your DB column
      recipient_account_number: payment.recipientAccountNumber, // match your DB column
      notes: payment.notes,
      status: payment.status,
      timestamp: payment.timestamp,
    });

    if (error) {
      console.error('❌ Insert error:', error.message);
    }
  }

  console.log('✅ Payments seeding complete');
}

seedPayments();
