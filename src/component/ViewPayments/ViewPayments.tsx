import React, { useState } from "react";
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
  Alert,
  TablePagination,
} from "@mui/material";
import { usePayments } from "../../hooks/UsePayments/usePayments";

const ViewPayments = () => {
  const { error, loading, payments } = usePayments();

  // Pagination state
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  // Handle page change
  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  // Handle rows per page change
  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Get paginated data
  const startIndex = page * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const paginatedPayments = payments.slice(startIndex, endIndex);

  return (
    <Box sx={{ maxWidth: 1200, mx: "auto", p: 3 }}>
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
          {"Failed to load payments"}
        </Alert>
      )}

      {!loading && !error && (
        <Paper>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <strong>Account</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Amount (£)</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Recipient's Name</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Recipient's Bank Name</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Recipient's Account Number</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Notes</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Status</strong>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {paginatedPayments.length > 0 ? (
                  paginatedPayments.map((payment: any, index: number) => (
                    <TableRow key={startIndex + index}>
                      <TableCell>{payment.user_id}</TableCell>
                      <TableCell>{payment.amount.toFixed(2)}</TableCell>
                      <TableCell>{payment.recipient_name}</TableCell>
                      <TableCell>{payment.recipient_bank_name}</TableCell>
                      <TableCell>{payment.recipient_account_number}</TableCell>
                      <TableCell>{payment.notes || "-"}</TableCell>
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

          {payments.length > 0 && (
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, 50]}
              component="div"
              count={payments.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          )}
        </Paper>
      )}
    </Box>
  );
};

export default ViewPayments;
