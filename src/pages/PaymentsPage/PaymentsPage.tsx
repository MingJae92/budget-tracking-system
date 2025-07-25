// src/pages/PaymentsPage.tsx
import { Box, Typography } from '@mui/material';

const PaymentsPage = () => {
  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Payments
      </Typography>
      <Typography variant="body1">
        View and manage recent payments and scheduled transfers.
      </Typography>
    </Box>
  );
};

export default PaymentsPage;
