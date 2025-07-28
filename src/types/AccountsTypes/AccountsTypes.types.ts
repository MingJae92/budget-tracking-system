export default interface Account {
  id: number;
  name: string;
  address: string;
  phone_number: string;
  bank_account_number?: string | null;
  // Add more fields if needed
}