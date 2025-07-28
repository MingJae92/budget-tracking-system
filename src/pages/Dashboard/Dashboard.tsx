// src/pages/Dashboard.tsx
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  CircularProgress,
  Alert,
} from "@mui/material";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../../component/Sidebar/Sidebar";
import { useState } from "react";
import { useAccounts } from "../../hooks/UseAccounts/useAccounts";

const Dashboard = () => {
  const [selected, setSelected] = useState("Accounts");
  const { error, loading, accounts } = useAccounts();

  const location = useLocation();

  return (
    <Box sx={{ display: "flex", height: "100vh", width: "100vw" }}>
      <Sidebar selected={selected} setSelected={setSelected} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          backgroundColor: "#F4F6F8",
          overflow: "auto",
          padding: "2rem",
          boxSizing: "border-box",
        }}
      >
        {location.pathname === "/" ? (
          <>
            <Typography variant="h4" gutterBottom>
              Your Accounts
            </Typography>

            {loading && (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  mt: 4,
                }}
              >
                <CircularProgress />
              </Box>
            )}

            {error && (
              <Alert severity="error" sx={{ my: 2 }}>
                Error loading accounts: {error}
              </Alert>
            )}

            {!loading && !error && accounts.length === 0 && (
              <Typography>No accounts found.</Typography>
            )}

            {!loading && !error && accounts.length > 0 && (
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>
                        <strong>Name</strong>
                      </TableCell>
                      <TableCell>
                        <strong>Address</strong>
                      </TableCell>
                      <TableCell>
                        <strong>Phone Number</strong>
                      </TableCell>
                      <TableCell>
                        <strong>Bank Account #</strong>
                      </TableCell>
                      <TableCell>
                        <strong>Last Updated</strong>
                      </TableCell>{" "}
                      {/* Updated here */}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {accounts.map((account, idx) => (
                      <TableRow key={idx}>
                        <TableCell>{account.name}</TableCell>
                        <TableCell>{account.address}</TableCell>
                        <TableCell>{account.phone_number}</TableCell>
                        <TableCell>{account.bank_account || "N/A"}</TableCell>
                        <TableCell>{account.last_updated}</TableCell>{" "}
                        {/* Updated here */}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            )}
          </>
        ) : (
          <Outlet />
        )}
      </Box>
    </Box>
  );
};

export default Dashboard;
