// src/constants/navItems.tsx

import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import PaymentIcon from "@mui/icons-material/Payment";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import AddCardIcon from "@mui/icons-material/AddCard";
import GridViewIcon from "@mui/icons-material/GridView";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import { patch } from "@mui/material";

export const SidebarRoutes = [
  { label: "Accounts", icon: <AccountBalanceIcon />, path: "/accounts" },
  { label: "Dashboard", icon: <GridViewIcon />, path: "/" },
  { label: "Payments", icon: <PaymentIcon />, path: "/payments" },
  {
    label: "Create Account",
    icon: <PersonAddAltIcon />,
    path: "/create-account",
  },
  { label: "Create Payment", icon: <AddCardIcon />, path: "/create-payment" },
];
