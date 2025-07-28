// src/hooks/usePayments.ts
import { useEffect, useState } from "react";
import axios from "axios";

import type Payment from "../../types/PaymentsTypes/PaymentsTypes.types";

export const usePayments = () => {
  const [payments, setPayments] = useState<Payment[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const response = await axios.get<Payment[]>(
          "http://localhost:3000/payments"
        );
        // console.log(response.data)
        setPayments(response.data);
      } catch (error: any) {
        setError(error.message || "An error occurred while fetching payments.");
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPayments();
  }, []);

  return { payments, loading, error };
};
