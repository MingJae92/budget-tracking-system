import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';

export const StyledTextField = styled('div')(({ theme }) => ({
  marginBottom: theme.spacing(3),
  width: '100%',
  '& input': {
    width: '100%',
    borderRadius: 10,
    backgroundColor: '#fff',               // White background for clarity
    padding: '14px 20px',
    border: '2px solid #64748b',           // Thicker, darker border
    transition: 'border-color 0.3s, box-shadow 0.3s',
    fontSize: '1rem',
    '&::placeholder': {
      color: '#9ca3af',                    // Subtle placeholder color
    },
  },
  '& input:focus': {
    borderColor: theme.palette.primary.main,
    outline: 'none',
    backgroundColor: '#fff',
    boxShadow: `0 0 0 3px ${theme.palette.primary.light}`, // Subtle focus glow
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
  marginBottom: theme.spacing(2),  // <-- Add this line for spacing
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
