// src/constants/navItems.tsx

import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PaymentIcon from '@mui/icons-material/Payment';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import AddCardIcon from '@mui/icons-material/AddCard';
import LogoutIcon from '@mui/icons-material/Logout';

export const SidebarRoutes = [
  { label: 'Accounts', icon: <AccountBalanceIcon />, path: '/accounts' },
  { label: 'Payments', icon: <PaymentIcon />, path: '/payments' },
  { label: 'Create Account', icon: <PersonAddAltIcon />, path: '/create-account' },
  { label: 'Create Payment', icon: <AddCardIcon />, path: '/create-payment' },
//   { label: 'Logout', icon: <LogoutIcon />, path: '/logout' }, 
];
