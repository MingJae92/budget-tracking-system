import { styled } from '@mui/material/styles';
import { Box, Button } from '@mui/material';

export const SocialButtonsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: `${theme.spacing(2)}px`,
}));

export const SocialButton = styled(Button)(({ theme }) => ({
  padding: `${theme.spacing(1.5)}px`,
  borderRadius: `${theme.spacing(1)}px`,
  textTransform: 'none',
  fontSize: '1rem',
  fontWeight: 500,
  borderColor: '#ddd',
  color: '#333',
  backgroundColor: 'white',
  '&:hover': {
    backgroundColor: '#f5f5f5',
    borderColor: '#bbb',
  },
}));