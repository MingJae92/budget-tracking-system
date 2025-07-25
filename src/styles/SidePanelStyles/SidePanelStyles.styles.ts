// styles/sidePanelStyles.ts
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

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
