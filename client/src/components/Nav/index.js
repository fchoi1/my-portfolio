import React, { useEffect, useRef, useState, forwardRef } from 'react';

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
  ClickAwayListener,
  useMediaQuery
} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import { useTheme, styled } from '@mui/material/styles';

import { ScrollTop, HideOnScroll, ElevationScroll } from '../Scroll';

import { HashLink } from 'react-router-hash-link';
import { useLocation } from 'react-router-dom';

import './nav.css';

function NavBar(props) {
  const [openMenu, setOpenMenu] = useState(true);
  const [elevation, setElevation] = useState(0);
  const [currPage, setCurrPage] = useState('');
  const [headerHeight, setHeaderHeight] = useState(0);

  let location = useLocation();
  const topRef = useRef(null);
  const headerRef = useRef(null);

  const theme = useTheme();

  useEffect(() => {
    setCurrPage(location.hash.replace('#', ''));
  }, [location]);

  useEffect(() => {
    setHeaderHeight(headerRef.current.clientHeight * -1);
  }, [headerRef, setHeaderHeight]);

  const isBig = useMediaQuery(theme.breakpoints.up('sm'));
  useEffect(() => {
    isBig ? setOpenMenu(true) : setOpenMenu(false);
  }, [isBig]);

  const pages = [
    { name: 'About', link: 'About' },
    { name: 'My Journey', link: 'Journey' },
    { name: 'Projects', link: 'Projects' },
    { name: 'Contact', link: 'Contact' }
  ];

  // for mobile
  const handleOpenMenu = () => setOpenMenu((value) => !value);

  const handleClickAway = (el) => {
    if (!isBig) setOpenMenu(false);
  };

  const scrollWithOffset = (el) => {
    let yOffset = 0;

    if (el.nodeName === 'BODY') yOffset = headerHeight;

    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
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
        <HideOnScroll setOpenMenu={setOpenMenu}>
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
                        scroll={(el) => scrollWithOffset(el)}
                        onClick={handleClickAway}
                      >
                        <Box sx={{ fontSize: { md: '50px' } }}>Fabio C.</Box>
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
                                scroll={(el) => scrollWithOffset(el)}
                                onClick={handleClickAway}
                              >
                                <NavButton
                                  sx={{
                                    minHeight: '10px',
                                    fontSize: { md: '20px', sm: '15px' }
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
