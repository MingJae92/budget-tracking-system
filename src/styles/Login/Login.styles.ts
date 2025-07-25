import { styled } from '@mui/material/styles';
import { Box, Typography, Button } from '@mui/material';

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

export const LeftSide = styled(Box)(({ theme }) => ({
  flex: '0 0 60%',
  position: 'relative',
  backgroundImage:
    'linear-gradient(to bottom right, rgba(27, 48, 71, 0.7), rgba(9, 19, 34, 0.9)), url(https://images.unsplash.com/photo-1560347876-aeef00ee58a1?auto=format&fit=crop&w=1471&q=80)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  [theme.breakpoints.down('md')]: {
    flex: 'none',
    height: 300,
  },
}));

export const LeftContent = styled(Box)({
  position: 'absolute',
  bottom: 40,
  left: 40,
  color: '#fff',
});

export const RightSide = styled(Box)(({ theme }) => ({
  flex: '0 0 40%',
  padding: theme.spacing(8),
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  [theme.breakpoints.down('md')]: {
    flex: 'none',
    padding: theme.spacing(4),
  },
}));

export const Heading = styled(Typography)({
  fontWeight: 800,
  fontSize: '2.8rem',
  marginBottom: 8,
  color: '#1b3047',
});

export const Subheading = styled(Typography)({
  color: '#64748b',
  marginBottom: 32,
});

export const StyledTextField = styled('div')(({ theme }) => ({
  marginBottom: theme.spacing(3),
  '& input': {
    borderRadius: 10,
    backgroundColor: '#f8fafc',
    padding: '14px 20px',
    border: '1.5px solid #d1d5db',
    transition: 'border-color 0.3s',
    fontSize: '1rem',
  },
  '& input:focus': {
    borderColor: theme.palette.primary.main,
    outline: 'none',
  },
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: 12,
  padding: '14px 0',
  fontWeight: 700,
  fontSize: '1.1rem',
  textTransform: 'none',
  boxShadow: 'none',
  backgroundColor: theme.palette.primary.main,
  color: '#fff',
  transition: 'background-color 0.3s ease',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
    boxShadow: 'none',
  },
}));

export const SocialButton = styled(Button)(({ theme }) => ({
  borderRadius: 12,
  padding: '12px 0',
  fontWeight: 700,
  fontSize: '1rem',
  textTransform: 'none',
  borderColor: '#d1d5db',
  color: '#475569',
  backgroundColor: '#f8fafc',
  marginBottom: theme.spacing(2),
  '&:hover': {
    backgroundColor: '#e2e8f0',
    borderColor: '#94a3b8',
  },
}));
