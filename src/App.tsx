// src/App.tsx

import { Routes, Route, } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Accounts from "./pages/AccountsPage/AccountsPage";
import Payments from "./pages/PaymentsPage/PaymentsPage";
import CreateAccount from "./pages/CreateAccountPage/CreateAccountPage";
import CreatePayment from "./pages/CreatePaymentPage/CreatePaymentPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="accounts" element={<Accounts />} />
        <Route path="payments" element={<Payments />} />
        <Route path="create-account" element={<CreateAccount />} />
        <Route path="create-payment" element={<CreatePayment />} />
      </Route>
    </Routes>
  );
};

export default App;

