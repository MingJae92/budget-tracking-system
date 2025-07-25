// styles/formStyles.ts
import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';

export const StyledTextField = styled('div')(({ theme }) => ({
  marginBottom: theme.spacing(3),
  width: '100%', // Ensures same width for all fields
  '& input': {
    width: '100%',
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
