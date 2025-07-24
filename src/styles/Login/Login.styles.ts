import type { SxProps, Theme } from '@mui/material/styles';

export const rootSx: SxProps<Theme> = {
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',  // centers container horizontally
  alignItems: 'center',      // centers container vertically
  bgcolor: '#f5f5f5',
  px: 2,
  boxSizing: 'border-box',
};

export const containerSx: SxProps<Theme> = {
  display: 'flex',
  // Removed width: '100%' so container only takes necessary width
  maxWidth: 900,
  boxShadow: 3,
  borderRadius: 3,
  overflow: 'hidden',
  bgcolor: 'background.paper',
};

export const leftHeroSx: SxProps<Theme> = {
  flex: 1,
  position: 'relative',
  background: 'linear-gradient(135deg, #506050, #304030)',
  color: '#fff',
  px: 6,
  py: 8,
  display: { xs: 'none', md: 'flex' }, // hide on small screens
  flexDirection: 'column',
  justifyContent: 'space-between',
  overflow: 'hidden',
};

export const heroLogoSx: SxProps<Theme> = {
  width: 64,
  height: 64,
  borderRadius: '50%',
  bgcolor: 'rgba(79,172,181,0.9)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  mr: 2,
  fontWeight: 'bold',
  fontSize: 28,
  userSelect: 'none',
};

export const rightFormSx: SxProps<Theme> = {
  flex: 1,
  bgcolor: 'background.default',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  px: 6,
  py: 8,
  maxWidth: { xs: '100%', md: 480 },
};

export const backButtonSx: SxProps<Theme> = {
  bgcolor: 'rgba(79,172,181,0.2)',
  color: 'rgba(79,172,181,0.9)',
  width: 60,
  height: 60,
  mb: 4,
  '&:hover': { bgcolor: 'rgba(79,172,181,0.3)' },
};

export const blurBoxSx: SxProps<Theme> = {
  position: 'absolute',
  bottom: 24,
  right: 24,
  width: '40%',
  height: '50%',
  bgcolor: 'rgba(79,172,181,0.3)',
  borderRadius: 3,
  filter: 'blur(60px)',
  pointerEvents: 'none',
};
