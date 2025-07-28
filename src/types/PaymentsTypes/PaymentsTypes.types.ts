export default interface Payment {
  user_id: number;
  accountId: string;
  amount: number;
  recipientName: string;
  recipientBankName: string;
  recipientAccountNumber: string;
  notes?: string;
  status: 'Pending' | 'Approved' | 'Rejected'; // extend as needed
  timestamp: string;
}
