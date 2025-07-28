export default interface Payment {
  user_id: number;
  accountId: string;
  amount: number;
  recipient_name: string;
  recipient_bank_name: string;
  recipient_account_number: string;
  notes?: string;
  status: 'Pending' | 'Approved' | 'Rejected'; // extend as needed
  timestamp: string;
}
