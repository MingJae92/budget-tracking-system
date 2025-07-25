// src/pages/CreatePaymentPage.tsx
import { Box, Typography, TextField, Button, Stack } from '@mui/material';

const CreatePaymentPage = () => {
  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Create New Payment
      </Typography>
      <Stack spacing={2} maxWidth={400} mt={2}>
        <TextField label="Payee" variant="outlined" fullWidth />
        <TextField label="Amount" variant="outlined" type="number" fullWidth />
        <TextField label="Date" variant="outlined" type="date" InputLabelProps={{ shrink: true }} fullWidth />
        <Button variant="contained" color="primary">
          Submit Payment
        </Button>
      </Stack>
    </Box>
  );
};

export default CreatePaymentPage;
