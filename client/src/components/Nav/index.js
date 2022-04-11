import React, { useEffect, useRef, useState } from 'react';

//Material UI
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Fab,
  MenuItem,
  Grid,
  Collapse,
  ClickAwayListener,
  useMediaQuery
} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import { useTheme } from '@mui/material/styles';

import { ScrollTop, HideOnScroll } from '../Scroll';

import { NavHashLink, HashLink } from 'react-router-hash-link';
import { useSearchParams } from 'react-router-dom';

import './nav.css';

function NavBar() {
  const [openMenu, setOpenMenu] = useState(true);
  const topRef = useRef(null);

  const theme = useTheme();
  const isBig = useMediaQuery(theme.breakpoints.up('sm'));
  useEffect(() => {
    if (isBig) {
      setOpenMenu(true);
    } else {
      setOpenMenu(false);
    }
  }, [isBig]);

  console.log(theme);

  let [searchParams, setSearchParams] = useSearchParams();

  console.log(searchParams, searchParams.getAll(''));

  const pages = ['About', 'History', 'Projects', 'Contact'];

  // for mobile
  const handleOpenMenu = () => setOpenMenu((value) => !value);

  const handleClickAway = () => {
    if (!isBig) setOpenMenu(false);
  };

  const scrollWithOffset = (el) => {
    let yOffset = 0;

    if (el.nodeName === 'BODY' && !isBig) {
      yOffset = -48;
    } else if (el.nodeName === 'BODY') {
      yOffset = -64;
    }
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
  };

  return (
    <>
      <HideOnScroll setOpenMenu={setOpenMenu}>
        <AppBar color="yaleBlue">
          <ClickAwayListener onClickAway={handleClickAway}>
            <Toolbar disableGutters sx={{ px: { xs: 2, sm: 0 } }}>
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
                <Grid item sm={4}>
                  <Typography
                    variant="h5"
                    noWrap
                    component="div"
                    sx={{ ml: { sm: 2 }, py: 1 }}
                  >
                    <NavHashLink
                      smooth
                      to={`/#`}
                      className={({ isActive }) => {
                        return `${isActive ? 'isActive ' : ''}`;
                      }}
                 
                      scroll={(el) => scrollWithOffset(el)}
                      onClick={handleClickAway}
                    >
                      Fabio's Portfolio
                    </NavHashLink>
                  </Typography>
                </Grid>
                <Grid
                  item
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: { xs: 'flex-start', sm: 'flex-end' }
                  }}
                  xs={12}
                  sm={8}
                >
                  <Collapse
                    in={openMenu}
                    orientation="vertical"
                    sx={{ width: { xs: '100%', sm: 'auto' } }}
                  >
                    <Grid container>
                      {pages &&
                        pages.map((page) => (
                          <Grid item key={page} xs={12} sm="auto">
                            <HashLink
                              smooth
                              to={`/#${page}`}
                              scroll={(el) => scrollWithOffset(el)}
                              onClick={handleClickAway}
                              className="hashLink"
                            >
                              <MenuItem sx={{ minHeight: '10px' }}>
                                {page}
                              </MenuItem>
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
      <Box sx={{ mt: { xs: 6, sm: 8 } }} ref={topRef}></Box>

      <ScrollTop topRef={topRef}>
        <Fab color="darkSkyBlue" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </>
  );
}

export default NavBar;
