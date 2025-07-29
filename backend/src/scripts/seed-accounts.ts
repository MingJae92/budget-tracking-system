import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import * as fs from 'fs';
import * as path from 'path';


dotenv.config({ path: path.resolve(__dirname, '../../config/.env') });


console.log('✅ Loaded .env from:', path.resolve(__dirname, '../config/.env'));
console.log('SUPABASE_URL:', process.env.SUPABASE_URL);
console.log('SUPABASE_SERVICE_ROLE_KEY:', process.env.SUPABASE_SERVICE_ROLE_KEY ? 'Loaded ✅' : '❌ MISSING');


const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);


const accounts = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '../data/account_data.json'), 'utf8')
);


async function seedAccounts() {
  for (const account of accounts) {
    const { error } = await supabase.from('accounts').insert({
      name: account.Name,
      address: account.Address,
      phone_number: account['Phone Number'],
      bank_account: account['Bank Account #'],
      last_updated: account['Last Updated'],
    });

    if (error) {
      console.error('Insert error:', error.message);
    }
  }

  console.log('Seeding complete');
}

seedAccounts();
