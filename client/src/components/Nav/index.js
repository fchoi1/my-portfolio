import React, { useEffect, useRef, useState } from 'react';

//Material UI
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Fab,
  Button,
  Grid,
  Collapse,
  ClickAwayListener
} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import { useTheme, styled } from '@mui/material/styles';

import { useBreakPoint } from 'contexts/MuiThemeProvider';

import {
  ScrollTop,
  HideOnScroll,
  ElevationScroll,
  scrollToTargetAdjusted
} from '../Scroll';

import { HashLink } from 'react-router-hash-link';
import { useLocation } from 'react-router-dom';

import './nav.css';

function NavBar(props) {
  const [openMenu, setOpenMenu] = useState(true);
  const [clicked, setClicked] = useState(false);

  const [elevation, setElevation] = useState(0);
  const [currPage, setCurrPage] = useState('');
  const [headerHeight, setHeaderHeight] = useState(0);

  const breakpoint = useBreakPoint();

  let location = useLocation();
  const topRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    setCurrPage(location.hash.replace('#', ''));
  }, [location]);

  useEffect(() => {
    setHeaderHeight(headerRef.current.clientHeight * -1);
  }, [headerRef, setHeaderHeight]);

  useEffect(() => {
    ['md', 'lg', 'xl'].includes(breakpoint)
      ? setOpenMenu(true)
      : setOpenMenu(false);
  }, [breakpoint]);

  useEffect(() => {
    window.addEventListener('scroll', handleClickAway);
    return () => {
      window.removeEventListener('scroll', handleClickAway);
    };
  });

  const pages = [
    { name: 'About', link: 'About' },
    { name: 'My Journey', link: 'Journey' },
    { name: 'Projects', link: 'Projects' },
    { name: 'Contact', link: 'Contact' }
  ];

  // for mobile
  const handleOpenMenu = () => setOpenMenu((value) => !value);

  const handleClickAway = (el) => {
    if (!['md', 'lg', 'xl'].includes(breakpoint)) setOpenMenu(false);
  };

  const handleLinkClick = () => {
    if (!['md', 'lg', 'xl'].includes(breakpoint)) setOpenMenu(false);
    setClicked(true);
  };

  const NavButton = styled(Button)(({ theme }) => ({
    '&.MuiButton-root': {
      borderRadius: '10px'
    },
    '&:hover, &.Mui-focusVisible': {
      color: theme.palette.senary.main
    }
  }));

  return (
    <>
      <ElevationScroll setElevation={setElevation}>
        <HideOnScroll clicked={clicked}>
          <AppBar color="primary" elevation={elevation}>
            <ClickAwayListener onClickAway={handleClickAway}>
              <Toolbar
                disableGutters
                sx={{ px: { xs: 2, sm: 0 } }}
                ref={headerRef}
              >
                <Grid container spacing={0}>
                  <Grid item>
                    <Box>
                      <IconButton
                        aria-label="menu"
                        size="large"
                        color="inherit"
                        onClick={handleOpenMenu}
                        sx={{ display: { xs: 'flex', sm: 'none' } }}
                      >
                        <MenuIcon />
                      </IconButton>
                    </Box>
                  </Grid>

                  <Grid item sm="auto">
                    <Typography
                      variant="h5"
                      noWrap
                      component="div"
                      sx={{ ml: { sm: 2 }, py: 1 }}
                      color="secondary"
                    >
                      <HashLink
                        to={`/#`}
                        scroll={async (el) =>
                          await scrollToTargetAdjusted(el, 0, -headerHeight)
                        }
                        onClick={handleClickAway}
                      >
                        <Box
                          sx={{
                            ' &:hover': {
                              textShadow:
                                '4px 3px 0px #000, 5px 4px 1px rgba(255,255,255,0.15)'
                            },
                            fontSize: {
                              md: '50px'
                            },
                            textShadow:
                              '3px 2px 1px var(--quinary), 5px 4px 1px rgba(255,255,255,0.15)'
                          }}
                        >
                          Fabio C.
                        </Box>
                      </HashLink>
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: { xs: 'flex-start', sm: 'flex-end' },
                      marginLeft: 'auto'
                    }}
                    xs={12}
                    sm="auto"
                  >
                    <Collapse
                      in={openMenu}
                      orientation="vertical"
                      sx={{ width: { xs: '100%', sm: 'auto' } }}
                    >
                      <Grid container>
                        {pages &&
                          pages.map((page) => (
                            <Grid item key={page.name} xs={12} sm="auto">
                              <HashLink
                                to={`/#${page.link}`}
                                scroll={async (el) => {
                                  try {
                                    await scrollToTargetAdjusted(el, 0, 0);
                                    setClicked(false);
                                  } catch (err) {
                                    setClicked(false);
                                  }
                                }}
                                onClick={handleLinkClick}
                              >
                                <NavButton
                                  sx={{
                                    ' &:hover': {
                                      textShadow: '3px 3px 0px #03045eFF'
                                    },
                                    minHeight: '10px',
                                    fontSize: { md: '20px', sm: '15px' },
                                    textShadow: '3px 3px 0px #00000080'
                                  }}
                                  variant="text"
                                  focusRipple
                                  color={
                                    currPage === page.link
                                      ? 'tertiary'
                                      : 'secondary'
                                  }
                                >
                                  {page.name}
                                </NavButton>
                              </HashLink>
                            </Grid>
                          ))}
                      </Grid>
                    </Collapse>
                  </Grid>
                </Grid>
              </Toolbar>
            </ClickAwayListener>
          </AppBar>
        </HideOnScroll>
      </ElevationScroll>

      <Box sx={{ py: { xs: 1, sm: 2, md: 1 } }} ref={topRef}>
        <Typography variant="h5" component="div">
          <Box sx={{ fontSize: { md: '50px', color: 'red', opacity: 0 } }}>
            Blah
          </Box>
        </Typography>
      </Box>

      <ScrollTop topRef={topRef}>
        <Fab color="darkSkyBlue" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </>
  );
}

export default NavBar;
