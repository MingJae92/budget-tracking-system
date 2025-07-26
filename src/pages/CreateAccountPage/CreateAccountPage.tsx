// src/pages/CreateAccountPage.tsx
import { Box, Typography, TextField, Button, Stack } from '@mui/material';
import CreateAccountForm from '../../component/CreateAccountForm/CreateAccountForm';

const CreateAccountPage = () => {
  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Create New Account
      </Typography>
      <Stack spacing={2} maxWidth={400} mt={2}>
        {/* <TextField label="Account Name" variant="outlined" fullWidth />
        <TextField label="Initial Balance" variant="outlined" type="number" fullWidth /> */}
        <CreateAccountForm/> 
        <Button variant="contained" color="primary">
          Create Account
        </Button>
      </Stack>
    </Box>
  );
};

export default CreateAccountPage;
