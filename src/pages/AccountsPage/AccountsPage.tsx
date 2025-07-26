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
  DialogActions
} from '@mui/material';
import { useState } from 'react';

type Account = {
  name: string;
  address: string;
  phone: string;
  bankAccountNumber?: string;
  updated: string;
};

const initialAccountsData: Account[] = [
  {
    name: 'John Doe',
    address: '123 Main St, London',
    phone: '07123 456789',
    bankAccountNumber: '12345678',
    updated: 'Jul 26'
  },
  {
    name: 'Jane Smith',
    address: '456 Side St, Manchester',
    phone: '07987 654321',
    updated: 'Jul 25'
  }
];

const AccountsPage = () => {
  const [accounts, setAccounts] = useState<Account[]>(initialAccountsData);
  const [open, setOpen] = useState(false);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [formData, setFormData] = useState<Account>({
    name: '',
    address: '',
    phone: '',
    bankAccountNumber: '',
    updated: ''
  });

  const handleEditClick = (index: number) => {
    const account = accounts[index];
    setEditIndex(index);
    setFormData(account);
    setOpen(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = () => {
    if (editIndex !== null) {
      const updated = [...accounts];
      updated[editIndex] = {
        ...formData,
        updated: new Date().toLocaleDateString('en-GB', { month: 'short', day: 'numeric' })
      };
      setAccounts(updated);
      setOpen(false);
    }
  };

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Account Overview!
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        View and edit all your linked accounts here.
      </Typography>

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
              <TableRow key={idx}>
                <TableCell>{account.name}</TableCell>
                <TableCell>{account.address}</TableCell>
                <TableCell>{account.phone}</TableCell>
                <TableCell>{account.bankAccountNumber || '—'}</TableCell>
                <TableCell>{account.updated}</TableCell>
                <TableCell>
                  <Button onClick={() => handleEditClick(idx)}>✏️ Edit</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Edit Modal */}
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
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="dense"
            label="Bank Account Number (optional)"
            name="bankAccountNumber"
            value={formData.bankAccountNumber || ''}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button variant="contained" onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default AccountsPage;
