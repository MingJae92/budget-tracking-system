import React from 'react';
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
  CircularProgress,
  Alert
} from '@mui/material';
import { usePayments } from '../../hooks/UsePayments/usePayments';

const ViewPayments = () => {
  const { error, loading, payments } = usePayments();

  return (
    <Box sx={{ maxWidth: 1200, mx: 'auto', p: 3 }}>
      <Typography variant="h5" gutterBottom>
        View Payments
      </Typography>

      {loading && (
        <Box display="flex" justifyContent="center" my={2}>
          <CircularProgress />
        </Box>
      )}

      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          { 'Failed to load payments'}
        </Alert>
      )}

      {!loading && !error && (
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
              {payments.length > 0 ? (
                payments.map((payment: any, index: number) => (
                  <TableRow key={index}>
                    <TableCell>{payment.user_id}</TableCell>
                    <TableCell>{payment.amount.toFixed(2)}</TableCell>
                    <TableCell>{payment.recipient_name}</TableCell>
                    <TableCell>{payment.recipient_bank_name}</TableCell>
                    <TableCell>{payment.recipient_account_number}</TableCell>
                    <TableCell>{payment.notes || '-'}</TableCell>
                    <TableCell>{payment.status}</TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={7} align="center">
                    No payments found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
};

export default ViewPayments;

// user_id: number;
//   accountId: string;
//   amount: number;
//   recipientName: string;
//   recipientBankName: string;
//   recipientAccountNumber: string;
//   notes?: string;
//   status: 'Pending' | 'Approved' | 'Rejected'; // extend as needed
//   timestamp: string;