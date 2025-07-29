// src/App.tsx

import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Accounts from "./pages/AccountsPage/AccountsPage";
import Payments from "./pages/PaymentsPage/PaymentsPage";
import CreateAccount from "./pages/CreateAccountPage/CreateAccountPage";
import CreatePayment from "./pages/CreatePaymentPage/CreatePaymentPage";

const App = () => {
  return (
    <Routes>
      {/* Protected routes under /dashboard */}
      <Route path="/" element={<Dashboard/>}>
       
        <Route path="accounts" element={<Accounts />} />
        <Route path="payments" element={<Payments />} />
        <Route path="create-account" element={<CreateAccount />} />
        <Route path="create-payment" element={<CreatePayment />} />
      </Route>

      {/* Optional: Add login/logout, 404 fallback etc. */}
    </Routes>
  );
};

export default App;

// import { ThemeProvider } from '@mui/material/styles';
// import CssBaseline from '@mui/material/CssBaseline';
// import LoginPage from './pages/LoginPage';
// import { theme } from './theme/theme';
// import Dashboard from './pages/Dashboard/Dashboard';

// const App = () => {
//   return (
//     // <ThemeProvider theme={theme}>
//     //   <CssBaseline />
//     //   {/* <LoginPage /> */}
//     //   <Dashboard/>
//     // </ThemeProvider>
//     <Dashboard/>
//   );
// };

// export default App;
