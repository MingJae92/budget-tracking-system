// src/pages/LogoutPage.tsx
import { Box, Typography, Button } from '@mui/material';

const LogoutPage = () => {
  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Are you sure you want to log out?
      </Typography>
      <Button variant="contained" color="error" sx={{ mt: 2 }}>
        Confirm Logout
      </Button>
    </Box>
  );
};

export default LogoutPage;
