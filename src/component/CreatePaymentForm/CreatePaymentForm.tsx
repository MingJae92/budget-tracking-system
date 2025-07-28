import React, { useState } from 'react';
import axios from 'axios';
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
  Typography,
  Snackbar,
  Alert,
  type SelectChangeEvent,
} from '@mui/material';

const CreatePaymentForm = () => {
  const [formData, setFormData] = useState({
    user_id: '', // if this is a number, better default 0 or '' and parse later
    amount: '',
    recipient_name: '',
    recipient_bank_name: '',
    recipient_account_number: '',
    notes: '',
    status: 'Pending',
  });

  const [showConfirm, setShowConfirm] = useState(false);
  const [submitAfterConfirm, setSubmitAfterConfirm] = useState(false);

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error',
  });

  // Controlled inputs update state
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Controlled select update
  const handleSelectChange = (e: SelectChangeEvent) => {
    const { name, value } = e.target;

    if (name === 'status' && value === 'Approved') {
      setShowConfirm(true);
    }

    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.status === 'Approved' && !submitAfterConfirm) {
      setShowConfirm(true);
      return;
    }

    await submitToServer();
    setSubmitAfterConfirm(false);
  };

  const confirmApproval = async () => {
    setShowConfirm(false);
    setSubmitAfterConfirm(true);
    await submitToServer();
    setSubmitAfterConfirm(false);
  };

  // Convert amount to number & user_id to number before submit
  const submitToServer = async () => {
    try {
      // Validate and transform data
      const payload = {
        ...formData,
        amount: Number(formData.amount),
        user_id: Number(formData.user_id),
      };

      // Optional: you can add client-side validation here to check NaN

      const response = await axios.post('http://localhost:3000/payments', payload);
      setSnackbar({
        open: true,
        message: '✅ Payment successfully submitted!',
        severity: 'success',
      });
      console.log('Submitted:', response.data);
    } catch (error) {
      setSnackbar({
        open: true,
        message: '❌ Failed to submit payment. Please try again.',
        severity: 'error',
      });
      console.error('Submit error:', error);
    }
  };

  return (
    <>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ maxWidth: 500, mx: 'auto', display: 'flex', flexDirection: 'column', gap: 2 }}
      >
        <Typography variant="h5" align="center" gutterBottom>
          Create Payment
        </Typography>

        <FormControl fullWidth>
          <InputLabel id="user_id-label">User ID</InputLabel>
          <Select
            labelId="user_id-label"
            name="user_id" // must match state key
            value={formData.user_id}
            onChange={handleSelectChange}
            label="User ID"
          >
            <MenuItem value={1}>User 1</MenuItem>
            <MenuItem value={2}>User 2</MenuItem>
            {/* Add actual user options here */}
          </Select>
        </FormControl>

        <TextField
          label="Amount"
          name="amount" // matches state key
          type="number" // enforce numeric input
          value={formData.amount}
          onChange={handleInputChange}
          fullWidth
          inputProps={{ min: 0, step: 0.01 }}
          required
        />
        <TextField
          label="Recipient's Name"
          name="recipient_name" // match key!
          value={formData.recipient_name}
          onChange={handleInputChange}
          fullWidth
          required
        />
        <TextField
          label="Recipient's Bank Name"
          name="recipient_bank_name" // match key
          value={formData.recipient_bank_name}
          onChange={handleInputChange}
          fullWidth
          required
        />
        <TextField
          label="Recipient's Account Number"
          name="recipient_account_number" // match key
          value={formData.recipient_account_number}
          onChange={handleInputChange}
          fullWidth
          required
        />
        <TextField
          label="Notes (optional)"
          name="notes"
          value={formData.notes}
          onChange={handleInputChange}
          fullWidth
          multiline
          rows={2}
        />

        <FormControl fullWidth>
          <InputLabel id="status-label">Status</InputLabel>
          <Select
            labelId="status-label"
            name="status"
            value={formData.status}
            onChange={handleSelectChange}
            label="Status"
            required
          >
            <MenuItem value="Pending">Pending</MenuItem>
            <MenuItem value="Approved">Approved</MenuItem>
          </Select>
        </FormControl>

        <Button variant="contained" type="submit">
          Submit Payment
        </Button>
      </Box>

      {/* Confirm Dialog */}
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

      {/* Snackbar Alert */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={() => setSnackbar(prev => ({ ...prev, open: false }))}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={() => setSnackbar(prev => ({ ...prev, open: false }))}
          severity={snackbar.severity}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default CreatePaymentForm;
