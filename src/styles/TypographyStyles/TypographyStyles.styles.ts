// styles/typographyStyles.ts
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';

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
