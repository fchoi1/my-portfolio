import React, { useEffect } from 'react';
import { useScrollTrigger, Slide, Zoom, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';

export const HideOnScroll = (props) => {
  const { children, window, setOpenMenu } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined
  });

  const theme = useTheme();
  const isBig = useMediaQuery(theme.breakpoints.up('sm'));
  useEffect(() => {
    if (!isBig && trigger) {
      setOpenMenu(false);
    } else if (isBig) {
      setOpenMenu(true);
    }
  }, [trigger, setOpenMenu, isBig]);

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

export const ScrollTop = (props) => {
  const { children, window, topRef } = props;

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100
  });

  const handleClick = (e) => {
    if (topRef.current) {
      topRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }
  };

  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Zoom>
  );
};
