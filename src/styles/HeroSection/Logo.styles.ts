import { styled } from '@mui/material/styles';
import { Box, Typography, IconButton } from '@mui/material';

export const LeftSection = styled(Box)(({ theme }) => ({
  flex: 1,
  background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6)), url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iYSIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVHJhbnNmb3JtPSJyb3RhdGUoNDUpIj48cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iNDAiIGZpbGw9InJnYmEoMzQsIDQ2LCA0MywgMC4xKSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNhKSIvPjwvc3ZnPg==")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  color: 'white',
  padding: `${theme.spacing(4)}px`,
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

export const HeroContent = styled(Box)(({ theme }) => ({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  paddingBottom: `${theme.spacing(8)}px`,
}));

export const BackButton = styled(IconButton)(({ theme }) => ({
  color: 'rgba(79, 172, 181, 0.9)',
  backgroundColor: 'rgba(79, 172, 181, 0.2)',
  width: 60,
  height: 60,
  marginBottom: `${theme.spacing(4)}px`,
  alignSelf: 'flex-start',
  '&:hover': {
    backgroundColor: 'rgba(79, 172, 181, 0.3)',
  },
}));

export const HeroTitle = styled(Typography)(() => ({
  fontWeight: 400,
  fontSize: '3.5rem',
  lineHeight: 1.2,
  maxWidth: '80%',
}));

export const HeroImage = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '20%',
  right: '10%',
  width: '40%',
  height: '60%',
  background: 'linear-gradient(45deg, rgba(34, 46, 43, 0.8), rgba(34, 46, 43, 0.6))',
  borderRadius: `${theme.spacing(2)}px`,
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '60%',
    height: '40%',
    background: 'rgba(255, 255, 255, 0.1)',
    borderRadius: `${theme.spacing(1)}px`,
  },
}));