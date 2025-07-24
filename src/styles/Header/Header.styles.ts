import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';

export const LoginIcon = styled('div')(({ theme }) => ({
  fontSize: '4rem',
  color: '#9e9e9e',
  marginBottom: `${theme.spacing(2)}px`,
  display: 'flex',
  justifyContent: 'center',
  '& svg': {
    fontSize: '4rem',
  },
}));

export const LoginTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 400,
  color: '#333',
  fontSize: '2rem',
  textAlign: 'center',
  marginBottom: `${theme.spacing(4)}px`,
}));