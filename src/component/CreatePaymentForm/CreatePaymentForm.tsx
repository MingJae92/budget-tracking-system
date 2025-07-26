import React, { useState } from 'react';
import {
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Button,
  Box,
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

  // Handler for TextField inputs
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handler for Select components
  const handleSelectChange = (e: SelectChangeEvent) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitted payment:', formData);
  };

  return (
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
  );
};

export default CreatePaymentForm;
