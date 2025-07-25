// src/components/Sidebar.tsx

import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import { SidebarRoutes } from '../SidebarRoutes/SidebarRoutes'

interface SidebarProps {
  selected: string;
  setSelected: (value: string) => void;
}

const drawerWidth = 240;

const Sidebar = ({ selected, setSelected }: SidebarProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: 'border-box',
          backgroundColor: '#1E1E2F',
          color: '#fff',
        },
      }}
    >
      <List>
        {SidebarRoutes.map((item) => (
          <ListItemButton
            key={item.label}
            selected={location.pathname === item.path}
            onClick={() => {
              setSelected(item.label);
              navigate(item.path);
            }}
            sx={{
              '&.Mui-selected': {
                backgroundColor: '#3F3F57',
              },
              '&:hover': {
                backgroundColor: '#2E2E47',
              },
              color: '#fff',
            }}
          >
            <ListItemIcon sx={{ color: '#fff' }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
