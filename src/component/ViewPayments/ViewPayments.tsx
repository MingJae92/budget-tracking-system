import React, { useState, useEffect } from "react";
import axios from "axios";
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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Snackbar,
} from "@mui/material";
import { usePayments } from "../../hooks/UsePayments/usePayments";

const ViewPayments = () => {
  const { error, loading, payments } = usePayments();

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const [openModal, setOpenModal] = useState(false);
  const [selectedPaymentIndex, setSelectedPaymentIndex] = useState<
    number | null
  >(null);

  const [localPayments, setLocalPayments] = useState<any[]>([]);

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  useEffect(() => {
    if (!loading && payments.length) {
      setLocalPayments([...payments]);
    }
  }, [payments, loading]);

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const startIndex = page * rowsPerPage;

  const handleOpenModal = (index: number) => {
    setSelectedPaymentIndex(startIndex + index); // global index in localPayments
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setSelectedPaymentIndex(null);
    setOpenModal(false);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleApprove = async () => {
    if (selectedPaymentIndex === null) return;

    const paymentToUpdate = localPayments[selectedPaymentIndex];
    const paymentId = paymentToUpdate.id;

    try {
      const { data: updatedPayment } = await axios.put(
        `http://localhost:3000/payments/${paymentId}/status`,
        {
          status: "Approved",
        }
      );

      const updatedPayments = [...localPayments];
      updatedPayments[selectedPaymentIndex] = updatedPayment;
      setLocalPayments(updatedPayments);

      setSnackbarMessage("Status updated!");
      setSnackbarOpen(true);

      handleCloseModal();
    } catch (error) {
      console.error(error);
      setSnackbarMessage("Error updating status. Please try again.");
      setSnackbarOpen(true);
      handleCloseModal();
    }
  };

  const paginatedPayments = localPayments.slice(
    startIndex,
    startIndex + rowsPerPage
  );

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
          Failed to load payments
        </Alert>
      )}

      {!loading && !error && (
        <Paper>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <strong>AccountID</strong>
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
                  paginatedPayments.map((payment, index) => (
                    <TableRow key={payment.id}>
                      <TableCell>{payment.id}</TableCell>
                      <TableCell>{payment.amount.toFixed(2)}</TableCell>
                      <TableCell>{payment.recipient_name}</TableCell>
                      <TableCell>{payment.recipient_bank_name}</TableCell>
                      <TableCell>{payment.recipient_account_number}</TableCell>
                      <TableCell>{payment.notes || "-"}</TableCell>
                      <TableCell>
                        {payment.status === "Pending" ? (
                          <Button
                            variant="outlined"
                            size="small"
                            onClick={() => handleOpenModal(index)}
                          >
                            {payment.status}
                          </Button>
                        ) : (
                          payment.status
                        )}
                      </TableCell>
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

          {localPayments.length > 0 && (
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, 50]}
              component="div"
              count={localPayments.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          )}
        </Paper>
      )}

      <Dialog open={openModal} onClose={handleCloseModal}>
        <DialogTitle>Confirm Status Update</DialogTitle>
        <DialogContent>
          Are you sure you want to mark this payment as{" "}
          <strong>Approved</strong>?
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleApprove} variant="contained" color="primary">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={4000}
        onClose={handleSnackbarClose}
        message={snackbarMessage}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      />
    </Box>
  );
};

export default ViewPayments;
