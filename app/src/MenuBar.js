import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import MoreIcon from '@material-ui/icons/MoreVert';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import mymlogoUrl from './img/mym_logo.png';
import facebooklogoUrl from './img/facebook_logo.png';
import githublogoUrl from './img/github_logo.png';
import linkedinlogoUrl from './img/linkedin_logo.png';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  list: {
    width: 200,
  },
  tab: {
    textTransform: 'none',
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default function MenuAppBar() {
  const classes = useStyles();

  const [drawerState, setState] = React.useState({
    left: false,
  });

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...drawerState, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={classes.list}
      role='presentation'
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['About', 'Skills', 'Blog', 'Contact'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem
        component='a'
        href='https://www.facebook.com/kohei.mayama'
        target='_blank'
      >
        <IconButton aria-label='facebook' color='inherit'>
          <img src={facebooklogoUrl} width='auto' height='30vmin' alt='' />
        </IconButton>
        <p>Facebook</p>
      </MenuItem>

      <MenuItem
        component='a'
        href='https://github.com/mym-kingbob'
        target='_blank'
      >
        <IconButton aria-label='github' color='inherit'>
          <img src={githublogoUrl} width='auto' height='30vmin' alt='' />
        </IconButton>
        <p>GitHub</p>
      </MenuItem>
      <MenuItem
        component='a'
        href='https://www.linkedin.com/in/kohei-mayama'
        target='_blank'
      >
        <IconButton aria-label='linkedin' color='inherit'>
          <img src={linkedinlogoUrl} width='auto' height='30vmin' alt='' />
        </IconButton>
        <p>Linkedin</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar color='default'>
        <Toolbar position='sticky'>
          <div className={classes.sectionMobile}>
            <IconButton
              edge='start'
              className={classes.menuButton}
              color='inherit'
              aria-label='open drawer'
            >
              <div>
                {['left'].map((anchor) => (
                  <React.Fragment key={anchor}>
                    <MenuIcon onClick={toggleDrawer(anchor, true)} />
                    <SwipeableDrawer
                      anchor={anchor}
                      open={drawerState[anchor]}
                      onClose={toggleDrawer(anchor, false)}
                      onOpen={toggleDrawer(anchor, true)}
                    >
                      {list(anchor)}
                    </SwipeableDrawer>
                  </React.Fragment>
                ))}
              </div>
            </IconButton>
          </div>
          <a href='https://mym.works'>
            <img src={mymlogoUrl} width='auto' height='40vmin' alt='' />
          </a>
          <div className={classes.sectionDesktop}>
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor='primary'
              textColor='primary'
              position='sticky'
            >
              <Tab label='About' className={classes.tab} />
              <Tab label='Skills' className={classes.tab} />
              <Tab label='Blog' className={classes.tab} />
              <Tab label='Contact' className={classes.tab} />
            </Tabs>
          </div>

          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton aria-label='facebook' color='inherit'>
              <a href='https://www.facebook.com/kohei.mayama'>
                <img
                  src={facebooklogoUrl}
                  width='auto'
                  height='30vmin'
                  alt=''
                />
              </a>
            </IconButton>
            <IconButton aria-label='github' color='inherit'>
              <a href='https://github.com/mym-kingbob'>
                <img src={githublogoUrl} width='auto' height='30vmin' alt='' />
              </a>
            </IconButton>
            <IconButton aria-label='linkedin' color='inherit'>
              <a href='https://www.linkedin.com/in/kohei-mayama'>
                <img
                  src={linkedinlogoUrl}
                  width='auto'
                  height='30vmin'
                  alt=''
                />
              </a>
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label='show more'
              aria-controls={mobileMenuId}
              aria-haspopup='true'
              onClick={handleMobileMenuOpen}
              color='inherit'
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </div>
  );
}
