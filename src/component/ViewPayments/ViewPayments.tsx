import React, { useState } from 'react';
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Select,
  MenuItem,
  FormControl,
} from '@mui/material';

interface Payment {
  account: string;
  amount: number;
  recipientName: string;
  recipientBank: string;
  recipientAccount: string;
  notes?: string;
  status: 'Pending' | 'Approved';
}

const initialPayments: Payment[] = [
  {
    account: 'Account 1',
    amount: 150,
    recipientName: 'John Doe',
    recipientBank: 'Bank A',
    recipientAccount: '12345678',
    notes: 'Invoice 123',
    status: 'Pending',
  },
  {
    account: 'Account 2',
    amount: 300,
    recipientName: 'Jane Smith',
    recipientBank: 'Bank B',
    recipientAccount: '87654321',
    notes: '',
    status: 'Approved',
  },
];

const accounts = ['Account 1', 'Account 2', 'Account 3'];

const ViewPayments = () => {
  const [payments] = useState<Payment[]>(initialPayments);
  const [selectedAccount, setSelectedAccount] = useState('');

  const filteredPayments = selectedAccount
    ? payments.filter((p) => p.account === selectedAccount)
    : payments;

  return (
    <Box sx={{ maxWidth: 900, mx: 'auto', p: 3 }}>
      <Typography variant="h5" gutterBottom>
        View Payments
      </Typography>

      <FormControl fullWidth sx={{ mb: 2 }}>
        <Select
          value={selectedAccount}
          displayEmpty
          onChange={(e) => setSelectedAccount(e.target.value)}
        >
          <MenuItem value="">
            <em>All Accounts</em>
          </MenuItem>
          {accounts.map((acc) => (
            <MenuItem key={acc} value={acc}>
              {acc}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Account</strong></TableCell>
              <TableCell><strong>Amount (£)</strong></TableCell>
              <TableCell><strong>Recipient's Name</strong></TableCell>
              <TableCell><strong>Recipient's Bank Name</strong></TableCell>
              <TableCell><strong>Recipient's Account Number</strong></TableCell>
              <TableCell><strong>Notes</strong></TableCell>
              <TableCell><strong>Status</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredPayments.map((payment, index) => (
              <TableRow key={index}>
                <TableCell>{payment.account}</TableCell>
                <TableCell>{payment.amount.toFixed(2)}</TableCell>
                <TableCell>{payment.recipientName}</TableCell>
                <TableCell>{payment.recipientBank}</TableCell>
                <TableCell>{payment.recipientAccount}</TableCell>
                <TableCell>{payment.notes || '-'}</TableCell>
                <TableCell>{payment.status}</TableCell>
              </TableRow>
            ))}
            {filteredPayments.length === 0 && (
              <TableRow>
                <TableCell colSpan={7} align="center">
                  No payments found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ViewPayments;
