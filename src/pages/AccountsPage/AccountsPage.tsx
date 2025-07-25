// src/pages/AccountsPage.tsx
import { Box, Typography } from '@mui/material';

const AccountsPage = () => {
  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Account Overview
      </Typography>
      <Typography variant="body1">
        View all your linked accounts and balances here.
      </Typography>
    </Box>
  );
};

export default AccountsPage;
