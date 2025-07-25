// styles/layoutStyles.ts
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const Wrapper = styled(Box)({
  height: '100vh',
  width: '100vw',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#f3f6f8',
  fontFamily: "'Inter', sans-serif",
});

export const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  width: '90%',
  maxWidth: 1200,
  height: 600,
  borderRadius: theme.spacing(3),
  boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
  overflow: 'hidden',
  backgroundColor: '#fff',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    height: 'auto',
  },
}));
