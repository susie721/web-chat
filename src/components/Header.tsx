import * as React from 'react';
import Image from 'next/image'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import IconButton from '@mui/material/IconButton'
import MenuItem from '@mui/material/MenuItem';
import LanguageIcon from '@mui/icons-material/Language';
// import {useTranslations} from 'next-intl';
import MenuIcon from '@mui/icons-material/Menu';
import style from '@/components/header.module.scss';
import { useDispatch } from 'react-redux';
import { open } from '@/features/collapseSlice';

const Header = () => {
  const dispatch = useDispatch()
  // const t = useTranslations('Header');

  const settings = [{key: 'zh', label: '中文'},{key: 'en', label: '英文'}];
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const handleCloseUserMenu = (event: React.MouseEvent<HTMLElement>, key: string) => {
    setAnchorElUser(null);
    console.log(key);
    
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleDrawerOpen = () => {
    dispatch(open());
  }
  return (
      <AppBar className={style.header} sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }} position="fixed" color="inherit">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/chat"
            aria-label="AI智能生活工具"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'red',
              textDecoration: 'none',
            }}
          >
          <Box
            component="img"
            alt="logo"
            src="/images/logo.png"
            sx={{
              width: {xs: 36, md: 44},
              height: {xs: 36, md: 44},
              borderRadius: '50%',
            }}
          />
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'flex', md: 'flex' } }}>
            <IconButton size="large" onClick={handleOpenUserMenu} aria-label="切换语言">
              <LanguageIcon />
            </IconButton>
            <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting.key} onClick={(event) => handleCloseUserMenu(event, setting.key)}>
                    <Typography textAlign="center">{setting.label}</Typography>
                  </MenuItem>
                ))}
              </Menu>
          </Box>
          <Box sx={{display: { xs: 'block', sm: 'none' }}}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ ...{ display: 'flex' } }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
  );
};

export default Header;