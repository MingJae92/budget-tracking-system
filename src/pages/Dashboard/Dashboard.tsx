// src/pages/Dashboard.tsx
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../component/Sidebar/Sidebar';
import { useState } from 'react';

const Dashboard = () => {
  const [selected, setSelected] = useState('Accounts');

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
        <Outlet />
      </Box>
    </Box>
  );
};

export default Dashboard;
