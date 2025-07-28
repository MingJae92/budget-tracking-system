import React, { useState } from "react";
import axios from "axios";
import {
  TextField,
  Button,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Typography,
  Snackbar,
  Alert,
} from "@mui/material";

const CreatePaymentForm = () => {
  const [formData, setFormData] = useState({
    user_id: "",
    amount: "",
    recipient_name: "",
    recipient_bank_name: "",
    recipient_account_number: "",
    notes: "",
    status: "Pending",
  });

  const [showConfirm, setShowConfirm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success" as "success" | "error",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submitToServer();
  };

  const submitToServer = async () => {
    if (isSubmitting) return;
    setIsSubmitting(true);

    try {
      const payload = {
        ...formData,
        amount: Number(formData.amount),
        user_id: Number(formData.user_id),
      };

      if (isNaN(payload.amount) || isNaN(payload.user_id)) {
        throw new Error("Amount and user ID must be valid numbers.");
      }

      const response = await axios.post(
        "http://localhost:3000/payments",
        payload
      );
      setSnackbar({
        open: true,
        message: "✅ Payment successfully submitted!",
        severity: "success",
      });

      setFormData({
        user_id: "",
        amount: "",
        recipient_name: "",
        recipient_bank_name: "",
        recipient_account_number: "",
        notes: "",
        status: "Pending",
      });
    } catch (error) {
      setSnackbar({
        open: true,
        message: "❌ Failed to submit payment. Please try again.",
        severity: "error",
      });
      console.error("Submit error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          maxWidth: 500,
          mx: "auto",
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Typography variant="h5" align="center" gutterBottom>
          Create Payment
        </Typography>

        <TextField
          label="Amount"
          name="amount"
          type="number"
          value={formData.amount}
          onChange={handleInputChange}
          fullWidth
          inputProps={{ min: 0, step: 0.01 }}
          required
        />

        <TextField
          label="Recipient's Name"
          name="recipient_name"
          value={formData.recipient_name}
          onChange={handleInputChange}
          fullWidth
          required
        />

        <TextField
          label="Recipient's Bank Name"
          name="recipient_bank_name"
          value={formData.recipient_bank_name}
          onChange={handleInputChange}
          fullWidth
          required
        />

        <TextField
          label="Recipient's Account Number"
          name="recipient_account_number"
          value={formData.recipient_account_number}
          onChange={handleInputChange}
          fullWidth
          required
        />

        <TextField
          label="Notes (optional)"
          name="notes"
          value={formData.notes}
          onChange={handleInputChange}
          fullWidth
          multiline
          rows={2}
        />

        <TextField
          label="Status"
          name="status"
          value={formData.status}
          InputProps={{ readOnly: true }}
          fullWidth
          required
        />

        <Button variant="contained" type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit Payment"}
        </Button>
      </Box>

      {/* Snackbar Alert */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={() => setSnackbar((prev) => ({ ...prev, open: false }))}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setSnackbar((prev) => ({ ...prev, open: false }))}
          severity={snackbar.severity}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default CreatePaymentForm;
