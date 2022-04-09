import React, { useEffect, useRef, useState } from 'react';
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

  console.log(theme.palette.yaleBlue.dark);
  console.log(isBig);

  const pages = ['About', 'History', 'Projects', 'Contact'];

  // for mobile
  const handleOpenMenu = () => {
    setOpenMenu((value) => !value);
  };

  const handleClickAway = () => {
    if (!isBig) setOpenMenu(false);
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
                    Fabio's Portfolio
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
                  <Collapse in={openMenu} orientation="vertical">
                    <Grid container>
                      {pages &&
                        pages.map((page) => (
                          <Grid item key={page} xs={12} sm="auto">
                            <MenuItem sx={{ minHeight: '10px' }}>
                              {page}
                            </MenuItem>
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
      <Box sx={{ mt: 8 }} ref={topRef}></Box>

      <ScrollTop topRef={topRef}>
        <Fab color="darkSkyBlue" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </>
  );
}

export default NavBar;
