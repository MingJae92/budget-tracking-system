import { styled } from '@mui/material/styles';
import { Box, TextField, Button } from '@mui/material';

export const RightSection = styled(Box)(({ theme }) => ({
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#f8f9fa',
  padding: `${theme.spacing(4)}px`,
}));

export const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    backgroundColor: '#e8e8e8',
    borderRadius: `${theme.spacing(1)}px`,
    '& fieldset': {
      border: 'none',
    },
    '&:hover fieldset': {
      border: 'none',
    },
    '&.Mui-focused fieldset': {
      border: '2px solid rgba(79, 172, 181, 0.8)',
    },
  },
  '& .MuiInputBase-input': {
    padding: `${theme.spacing(2)}px`,
    fontSize: '1rem',
    '&::placeholder': {
      color: '#999',
      opacity: 1,
    },
  },
}));

export const LoginButton = styled(Button)(({ theme }) => ({
  backgroundColor: 'rgba(79, 172, 181, 0.9)',
  color: 'white',
  padding: `${theme.spacing(2)}px`,
  borderRadius: `${theme.spacing(1)}px`,
  fontSize: '1rem',
  fontWeight: 600,
  textTransform: 'uppercase',
  marginTop: `${theme.spacing(2)}px`,
  '&:hover': {
    backgroundColor: 'rgba(79, 172, 181, 1)',
  },
}));