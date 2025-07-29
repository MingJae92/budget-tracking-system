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
  TablePagination,
} from "@mui/material";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../../component/Sidebar/Sidebar";
import { useState } from "react";
import { useAccounts } from "../../hooks/UseAccounts/useAccounts";

const Dashboard = () => {
  const [selected, setSelected] = useState("Accounts");
  
  // Pagination state
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  
  const { error, loading, accounts } = useAccounts();
  const location = useLocation();

  // Handle page change
  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  // Handle rows per page change
  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Get paginated data
  const startIndex = page * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const paginatedAccounts = accounts.slice(startIndex, endIndex);

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
              <Paper>
                <TableContainer>
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
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {paginatedAccounts.map((account, idx) => (
                        <TableRow key={startIndex + idx}>
                          <TableCell>{account.name}</TableCell>
                          <TableCell>{account.address}</TableCell>
                          <TableCell>{account.phone_number}</TableCell>
                          <TableCell>{account.bank_account_number || "N/A"}</TableCell>
                          <TableCell>{account.last_updated}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
                
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25, 50]}
                  component="div"
                  count={accounts.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              </Paper>
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