// src/pages/Dashboard.tsx
import { Box, Typography, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from '../../component/Sidebar/Sidebar';
import { useState } from 'react';

const accountsData = [
  { name: 'Barclays', type: 'Checking', balance: 1245.0, updated: 'Jul 26' },
  { name: 'Monzo Savings', type: 'Savings', balance: 3000.0, updated: 'Jul 25' },
  { name: 'HSBC Credit Card', type: 'Credit', balance: -320.0, updated: 'Jul 25' },
];

const Dashboard = () => {
  const [selected, setSelected] = useState('Accounts');
  const location = useLocation();

  return (
    <Box sx={{ display: 'flex', height: '100vh', width: '100vw' }}>
      <Sidebar selected={selected} setSelected={setSelected} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          backgroundColor: '#F4F6F8',
          overflow: 'auto',
          padding: '2rem',
          boxSizing: 'border-box',
        }}
      >
        {/* Only show the default accounts table if at root of /dashboard */}
        {location.pathname === '/' ? (
          <>
            <Typography variant="h4" gutterBottom>
              Your Accounts
            </Typography>
            <Button variant="contained" sx={{ mb: 2 }}>
              + Create New Account
            </Button>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell><strong>Account Name</strong></TableCell>
                    <TableCell><strong>Type</strong></TableCell>
                    <TableCell><strong>Balance</strong></TableCell>
                    <TableCell><strong>Last Updated</strong></TableCell>
                    <TableCell><strong>Actions</strong></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {accountsData.map((account, idx) => (
                    <TableRow key={idx}>
                      <TableCell>{account.name}</TableCell>
                      <TableCell>{account.type}</TableCell>
                      <TableCell>
                        {account.balance < 0 ? (
                          <span style={{ color: 'red' }}>-£{Math.abs(account.balance).toFixed(2)}</span>
                        ) : (
                          `£${account.balance.toFixed(2)}`
                        )}
                      </TableCell>
                      <TableCell>{account.updated}</TableCell>
                      <TableCell>🔍 View</TableCell>
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
