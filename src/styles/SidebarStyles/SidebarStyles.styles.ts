// src/components/sidebarStyles.ts

// src/components/sidebarStyles.ts
import type { SxProps, Theme } from '@mui/material';

export const drawerWidth = 240;

export const drawerStyles: SxProps<Theme> = {
  width: drawerWidth,
  flexShrink: 0,
  [`& .MuiDrawer-paper`]: {
    width: drawerWidth,
    boxSizing: 'border-box',
    backgroundColor: '#1E1E2F',
    color: '#fff',
  },
};

export const listItemButtonStyles: SxProps<Theme> = {
  '&.Mui-selected': {
    backgroundColor: '#3F3F57',
  },
  '&:hover': {
    backgroundColor: '#2E2E47',
  },
  color: '#fff',
};

export const listItemIconStyles: SxProps<Theme> = {
  color: '#fff',
};
