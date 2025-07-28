// src/pages/AccountsPage.tsx
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
  Container,
} from "@mui/material";
import { useState } from "react";
import { useAccounts } from "../../hooks/UseAccounts/useAccounts";
import type Accounts from "../../types/AccountsTypes/AccountsTypes.types";

function ViewAccounts() {
  const { error, loading, accounts } = useAccounts();

  const [open, setOpen] = useState(false);
  const [editIndex, setEditIndex] = useState<number | null>(null);

  const [formData, setFormData] = useState<Accounts>({
    id: 0,
    name: "",
    address: "",
    phone_number: "",
    bank_account: "",
    bank_account_number: null,
    last_updated: "",
  });

  const handleEditClick = (index: number) => {
    const account = accounts[index];
    setEditIndex(index);
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

  const handleSave = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Account Overview!
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        View and edit all your linked accounts here.
      </Typography>

      {/* 🔄 Loading State */}
      {loading && (
        <Box sx={{ textAlign: "center", mt: 4 }}>
          <CircularProgress />
          <Typography sx={{ mt: 2 }}>Loading accounts...</Typography>
        </Box>
      )}

      {/* ❌ Error State */}
      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {"Failed to load accounts."}
        </Alert>
      )}

      {/* ✅ Table UI */}
      {!loading && !error && (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><strong>Name</strong></TableCell>
                <TableCell><strong>Address</strong></TableCell>
                <TableCell><strong>Phone</strong></TableCell>
                <TableCell><strong>Bank Account #</strong></TableCell>
                <TableCell><strong>Last Updated</strong></TableCell>
                <TableCell><strong>Actions</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {accounts.map((account, idx) => (
                <TableRow key={account.id || idx}>
                  <TableCell>{account.name}</TableCell>
                  <TableCell>{account.address}</TableCell>
                  <TableCell>{account.phone_number}</TableCell>
                  <TableCell>{account.bank_account_number || "—"}</TableCell>
                  <TableCell>{account.last_updated}</TableCell>
                  <TableCell>
                    <Button onClick={() => handleEditClick(idx)}>✏️ Edit</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      {/* ✏️ Edit Modal */}
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
    </Box>
  );
}

export default ViewAccounts;
