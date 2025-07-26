// src/pages/Dashboard.tsx
import {
  Box,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../../component/Sidebar/Sidebar";
import { useState } from "react";

const accountsData = [
  {
    name: "Jane Doe",
    address: "123 Main St, London",
    phone: "01234567890",
    bankAccount: "12345678",
    updated: "Jul 26",
  },
  {
    name: "John Smith",
    address: "456 Queen’s Ave, Manchester",
    phone: "07987654321",
    bankAccount: "",
    updated: "Jul 25",
  },
];

const Dashboard = () => {
  const [selected, setSelected] = useState("Accounts");
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
                  {accountsData.map((account, idx) => (
                    <TableRow key={idx}>
                      <TableCell>{account.name}</TableCell>
                      <TableCell>{account.address}</TableCell>
                      <TableCell>{account.phone}</TableCell>
                      <TableCell>{account.bankAccount || "N/A"}</TableCell>
                      <TableCell>{account.updated}</TableCell>{" "}
                      {/* Updated here */}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </>
        ) : (
          <Outlet />
        )}
      </Box>
    </Box>
  );
};

export default Dashboard;
