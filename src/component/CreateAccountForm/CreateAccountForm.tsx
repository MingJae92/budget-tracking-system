import React, { useState, type ChangeEvent, type FormEvent } from 'react';
import { Box, TextField, Typography, Button } from '@mui/material';

const CreateAccountForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
    bankAccount: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Account Created:', formData);
    // Add your submit logic here
  };

  return (
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
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          fullWidth
          required
          margin="normal"
        />
        <TextField
          label="Bank Account Number (optional)"
          name="bankAccount"
          value={formData.bankAccount}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          <Button variant="contained" type="submit">
            Create Account
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default CreateAccountForm;
