import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';

export const DividerContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  margin: `${theme.spacing(3)}px 0`,
}));

export const DividerLine = styled(Box)(() => ({
  flex: 1,
  height: 1,
  backgroundColor: '#ddd',
}));

export const DividerText = styled(Typography)(({ theme }) => ({
  margin: `0 ${theme.spacing(2)}px`,
  color: '#999',
  fontSize: '0.9rem',
}));