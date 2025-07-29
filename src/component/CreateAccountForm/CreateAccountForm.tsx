import React, { useState, type ChangeEvent, type FormEvent } from 'react';
import axios from 'axios';
import {
  Box,
  TextField,
  Typography,
  Button,
  Snackbar,
  Alert,
} from '@mui/material';

const CreateAccountForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone_number: '',
    bank_account: '',
    last_updated: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);

    try {
      // Optionally: validate fields here before sending

      // POST to your backend (adjust URL as needed)
      await axios.post('http://localhost:3000/accounts', formData);

      setSnackbar({
        open: true,
        message: '✅ Account successfully created!',
        severity: 'success',
      });

      // Reset form
      setFormData({
        name: '',
        address: '',
        phone_number: '',
        bank_account: '',
        last_updated: '',
      });
    } catch (error) {
      setSnackbar({
        open: true,
        message: '❌ Failed to create account. Please try again.',
        severity: 'error',
      });
      console.error('Submit error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Box sx={{ maxWidth: 600, mx: 'auto', p: 3 }}>
        <Typography variant="h5" align="center" gutterBottom>
          Create New Account
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
          />
          <TextField
            label="Address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
          />
          <TextField
            label="Phone Number"
            name="phone_number"
            value={formData.phone_number}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
          />
          <TextField
            label="Bank Account Number (optional)"
            name="bank_account"
            value={formData.bank_account}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
            <Button variant="contained" type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Create Account'}
            </Button>
          </Box>
        </form>
      </Box>

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

export default CreateAccountForm;
