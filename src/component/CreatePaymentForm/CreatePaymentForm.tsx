import React, { useState } from 'react';
import {
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Button,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  type SelectChangeEvent,
} from '@mui/material';

const CreatePaymentForm = () => {
  const [formData, setFormData] = useState({
    account: '',
    amount: '',
    recipientName: '',
    recipientBank: '',
    recipientAccount: '',
    notes: '',
    status: 'Pending',
  });

  const [showConfirm, setShowConfirm] = useState(false);
  const [submitAfterConfirm, setSubmitAfterConfirm] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (e: SelectChangeEvent) => {
    const { name, value } = e.target;

    if (name === 'status' && value === 'Approved') {
      setShowConfirm(true); // Show modal
    }

    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.status === 'Approved' && !submitAfterConfirm) {
      setShowConfirm(true);
      return;
    }

    console.log('Submitted payment:', formData);
    // Proceed with form submission logic here
    setSubmitAfterConfirm(false); // reset
  };

  const confirmApproval = () => {
    setShowConfirm(false);
    setSubmitAfterConfirm(true);
    // Submit the form again now that it's confirmed
    setTimeout(() => {
      const fakeSubmitEvent = new Event('submit', { bubbles: true });
      document.querySelector('form')?.dispatchEvent(fakeSubmitEvent);
    }, 0);
  };

  return (
    <>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ maxWidth: 400, mx: 'auto', display: 'flex', flexDirection: 'column', gap: 2 }}
      >
        <FormControl fullWidth>
          <InputLabel id="account-label">Account</InputLabel>
          <Select
            labelId="account-label"
            name="account"
            value={formData.account}
            onChange={handleSelectChange}
            label="Account"
          >
            <MenuItem value="account1">Account 1</MenuItem>
            <MenuItem value="account2">Account 2</MenuItem>
          </Select>
        </FormControl>

        <TextField
          label="Amount"
          name="amount"
          value={formData.amount}
          onChange={handleInputChange}
          fullWidth
        />
        <TextField
          label="Recipient's Name"
          name="recipientName"
          value={formData.recipientName}
          onChange={handleInputChange}
          fullWidth
        />
        <TextField
          label="Recipient's Bank Name"
          name="recipientBank"
          value={formData.recipientBank}
          onChange={handleInputChange}
          fullWidth
        />
        <TextField
          label="Recipient's Account Number"
          name="recipientAccount"
          value={formData.recipientAccount}
          onChange={handleInputChange}
          fullWidth
        />
        <TextField
          label="Notes (optional)"
          name="notes"
          value={formData.notes}
          onChange={handleInputChange}
          fullWidth
        />

        <FormControl fullWidth>
          <InputLabel id="status-label">Status</InputLabel>
          <Select
            labelId="status-label"
            name="status"
            value={formData.status}
            onChange={handleSelectChange}
            label="Status"
          >
            <MenuItem value="Pending">Pending</MenuItem>
            <MenuItem value="Approved">Approved</MenuItem>
          </Select>
        </FormControl>

        <Button variant="contained" type="submit">
          Submit Payment
        </Button>
      </Box>

      <Dialog open={showConfirm} onClose={() => setShowConfirm(false)}>
        <DialogTitle>Confirm Approval</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to mark this payment as <strong>Approved</strong>?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowConfirm(false)} color="inherit">
            Cancel
          </Button>
          <Button onClick={confirmApproval} color="primary" autoFocus>
            Yes, Approve
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default CreatePaymentForm;
