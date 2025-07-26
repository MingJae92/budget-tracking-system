// src/pages/CreatePaymentPage.tsx
import { Box, Typography, TextField, Button, Stack } from "@mui/material";
import CreatePaymentForm from "../../component/CreatePaymentForm/CreatePaymentForm";

const CreatePaymentPage = () => {
  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Create New Payment
      </Typography>
      <CreatePaymentForm />
    </Box>
  );
};

export default CreatePaymentPage;
