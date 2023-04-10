import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Drawer from '@mui/material/Drawer';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import MailIcon from '@mui/icons-material/Mail';
import Menu from '@mui/material/Menu';
import IconButton from '@mui/material/IconButton'
import MenuItem from '@mui/material/MenuItem';
import Link from '@mui/material/Link';
import LanguageIcon from '@mui/icons-material/Language';
import { useSelector, useDispatch } from 'react-redux';
import { open } from '@/features/collapseSlice';
// import {useTranslations} from 'next-intl';
import style from '@/components/sidebar.module.scss';

const drawerWidth = 240;

const DrawerComponent = () => {
  // const t = useTranslations('Header');
  const settings = [{key: 'zh', label: ''},{key: 'hk', label: ''}];
  const openstatus = useSelector((state: any) => state.collapse.open);
  const dispatch = useDispatch();
  const list = [{
    path: '/chat',
    icon: <ChatBubbleOutlineIcon/>,
    title: 'Q&A'
  }]
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const handleCloseUserMenu = (event: React.MouseEvent<HTMLElement>, key: string) => {
    setAnchorElUser(null);
    console.log(key);
    
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const toggleDrawer = () => {
    dispatch(open());
  }
  const BoxList = () => (
    <Box sx={{ overflow: 'auto' }}>
      <List>
        {list.map((text, index) => (
          <ListItem className={style.list_item} key={text.title} disablePadding>
            <Link href={text.path} underline="none" className={style.link}>
              <ListItemButton selected>
                <ListItemIcon>
                  {text.icon}
                </ListItemIcon>
                <ListItemText className={style.item_text} primary={text.title} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  )
  return (
    <ThemeProvider
    theme={createTheme({
      components: {
        MuiListItemButton: {
          defaultProps: {
            disableTouchRipple: true,
          },
        },
      },
      palette: {
        mode: 'dark',
        primary: { main: 'rgb(102, 157, 246)' },
        background: { paper: 'rgb(5, 30, 52)' },
      },
      })}>
        {openstatus}
        <SwipeableDrawer
          sx={{
            display: {xs: 'block', sm: 'none'}
          }}
          anchor="left"
          open={openstatus}
          onClose={() => toggleDrawer()}
          onOpen={() =>toggleDrawer()}
        >
          <Toolbar />
          {BoxList()}
        </SwipeableDrawer>
        <Drawer 
          className={style.drawer}
          sx={{
            width: drawerWidth,
            display: { xs: 'none', sm: 'block' },
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
          }}
          variant="persistent"
          open={true}>
            <Toolbar />
            {BoxList()}
        </Drawer>
      </ThemeProvider>
  );
};

export default DrawerComponent;