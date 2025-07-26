import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import { SidebarRoutes } from '../SidebarRoutes/SidebarRoutes';
import {
  drawerStyles,
  drawerWidth,
  listItemButtonStyles,
  listItemIconStyles,
} from '../../styles/SidebarStyles/SidebarStyles.styles';

interface SidebarProps {
  selected: string;
  setSelected: (value: string) => void;
}

const Sidebar = ({ setSelected }: SidebarProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Drawer variant="permanent" anchor="left" sx={drawerStyles}>
      <List>
        {SidebarRoutes.map((item) => (
          <ListItemButton
            key={item.label}
            selected={location.pathname === item.path}
            onClick={() => {
              setSelected(item.label);
              navigate(item.path);
            }}
            sx={listItemButtonStyles}
          >
            <ListItemIcon sx={listItemIconStyles}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
