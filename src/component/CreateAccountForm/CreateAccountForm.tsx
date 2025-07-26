import React, { useState, type ChangeEvent, type FormEvent } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';

interface AccountFormData {
  name: string;
  address: string;
  phone: string;
  bankAccount?: string;
}

function CreateAccountForm() {
  const [formData, setFormData] = useState<AccountFormData>({
    name: '',
    address: '',
    phone: '',
    bankAccount: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Account Created:', formData);
  };

  return (
    <Box sx={{ maxWidth: 600, mx: 'auto', p: 3 }}>
      <Typography variant="h5" gutterBottom>
        Create New Account
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          required
          margin="normal"
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          required
          margin="normal"
          label="Address"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          required
          margin="normal"
          label="Phone Number"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Bank Account Number (optional)"
          name="bankAccount"
          value={formData.bankAccount}
          onChange={handleChange}
        />
        <Button type="submit" variant="contained" sx={{ mt: 2 }}>
          Create Account
        </Button>
      </form>
    </Box>
  );
}

export default CreateAccountForm;
