// src/types/database.types.ts
import { PaymentDataTypes } from '../PaymentDataTypes/PaymentDataTypes.types';

export interface Database {
  payments: PaymentDataTypes;
  // add other tables here if needed
}
