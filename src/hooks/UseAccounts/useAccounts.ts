import { useEffect, useState } from 'react';
import axios from 'axios';
import type Account from '../../types/AccountsTypes/AccountsTypes.types';

export const useAccounts = () => {
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        const response = await axios.get<Account[]>('http://localhost:3000/accounts');
        console.log(response.data);
        setAccounts(response.data);
        setError(null); // reset error if successful
      } catch (error: any) {
        setError(error.message || 'An unknown error occurred');
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchAccounts();
  }, []);

  return { accounts, loading, error };
};
