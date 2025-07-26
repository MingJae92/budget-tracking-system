// src/pages/AccountsPage.tsx
import { Typography } from '@mui/material';
// import AccountForm from '../../component/CreateAccountForm/CreateAccountForm';

const AccountsPage = () => {
  return (
    <>
      <Typography variant="h5" gutterBottom>
        Account Overview!
      </Typography>
      <Typography variant="body1">
        View all your linked accounts and balances here.
      </Typography>
      {/* <AccountForm/> */}
    </>
  );
};

export default AccountsPage;
