import type { ReactNode } from "react";

export default interface Account {
  bank_account: string;
  last_updated: ReactNode;
  id: number;
  name: string;
  address: string;
  phone_number: string;
  bank_account_number: string | null;
  // Add more fields if needed
}