// src/pages/Dashboard.tsx

import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';
import Sidebar from '../../component/Sidebar/Sidebar';

const Dashboard = () => {
  const [selected, setSelected] = useState('Accounts');

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <Sidebar selected={selected} setSelected={setSelected} />

      <Box component="main" sx={{ flexGrow: 1, bgcolor: '#F4F6F8', p: 3 }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default Dashboard;
