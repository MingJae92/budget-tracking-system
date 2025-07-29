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
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  CircularProgress,
  Alert,
  TablePagination,
  Snackbar,
} from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { useAccounts } from "../../hooks/UseAccounts/useAccounts";
import type Accounts from "../../types/AccountsTypes/AccountsTypes.types";

function ViewAccounts() {
  const { error, loading, accounts } = useAccounts();

  const [open, setOpen] = useState(false);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const [formData, setFormData] = useState<Accounts>({
    id: 0,
    name: "",
    address: "",
    phone_number: "",
    bank_account: "",
    bank_account_number: null,
    last_updated: "",
  });

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleEditClick = (index: number) => {
    const actualIndex = page * rowsPerPage + index;
    const account = accounts[actualIndex];
    setEditIndex(actualIndex);
    setFormData(account);
    setOpen(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    try {
      await axios.patch(
        `http://localhost:3000/accounts/${formData.id}`,
        formData
      ); // adjust as needed
      setSnackbarMessage("Account updated successfully!");
      setSnackbarOpen(true);
      setOpen(false);
      window.location.reload(); // or refresh local state via a refetch
    } catch (error) {
      console.error("Error updating account:", error);
      setSnackbarMessage("Failed to update account.");
      setSnackbarOpen(true);
    }
  };

  const handleChangePage = (_: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Account Overview!
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        View and edit all your linked accounts here.
      </Typography>

      {loading && (
        <Box sx={{ textAlign: "center", mt: 4 }}>
          <CircularProgress />
          <Typography sx={{ mt: 2 }}>Loading accounts...</Typography>
        </Box>
      )}

      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          Failed to load accounts.
        </Alert>
      )}

      {!loading && !error && (
        <>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <strong>Name</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Address</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Phone</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Bank Account #</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Last Updated</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Actions</strong>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {accounts
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((account, idx) => (
                    <TableRow key={account.id || idx}>
                      <TableCell>{account.name}</TableCell>
                      <TableCell>{account.address}</TableCell>
                      <TableCell>{account.phone_number}</TableCell>
                      <TableCell>
                        {account.bank_account_number || "—"}
                      </TableCell>
                      <TableCell>{account.last_updated}</TableCell>
                      <TableCell>
                        <Button onClick={() => handleEditClick(idx)}>
                          ✏️ Edit
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>

          <TablePagination
            component="div"
            count={accounts.length}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            rowsPerPageOptions={[5, 10, 25]}
          />
        </>
      )}

      <Dialog open={open} onClose={() => setOpen(false)} fullWidth>
        <DialogTitle>Edit Account</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            margin="dense"
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="dense"
            label="Address"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="dense"
            label="Phone Number"
            name="phone_number"
            value={formData.phone_number}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="dense"
            label="Bank Account Number (optional)"
            name="bank_account_number"
            value={formData.bank_account_number || ""}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button variant="contained" onClick={handleSave}>
            Save
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
        message={snackbarMessage}
      />
    </Box>
  );
}

export default ViewAccounts;
