import React, { useEffect, useState, useRef } from 'react';

import { useScrollTrigger, Slide, Zoom, Box } from '@mui/material';

import _ from 'lodash';

export const scrollToTargetAdjusted = (
  element,
  offSet = 0,
  headerHeight = 0
) => {
  if (element.nodeName === 'BODY') offSet = headerHeight;

  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - offSet;

  const promise = new Promise((resolve, reject) => {
    const failed = setTimeout(() => {
      reject('Animation not done!');
      window.removeEventListener('scroll', scrollHandler);
    }, 1000);

    const scrollHandler = () => {
      // console.log(window.pageYOffset, offsetPosition);
      if (
        window.pageYOffset === Math.round(offsetPosition + offSet) ||
        window.pageYOffset === Math.round(offsetPosition)
      ) {
        clearTimeout(failed);
        resolve();
        window.removeEventListener('scroll', scrollHandler);
      }
    };

    if (
      window.pageYOffset === Math.round(offsetPosition + offSet) ||
      window.pageYOffset === Math.round(offsetPosition)
    ) {
      clearTimeout(failed);
      resolve();
    } else {
      scrollHandler();
      window.addEventListener('scroll', scrollHandler);
    }
  });

  setTimeout(function () {
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }, 100);

  return promise;
};

export function ElevationScroll(props) {
  const { children, setElevation } = props;
  useEffect(() => {
    window.onscroll = () =>
      window.pageYOffset === 0 ? setElevation(0) : setElevation(4);
  }, [setElevation]);

  return <>{children}</>;
}

export function useHorizontalScroll() {
  const elRef = useRef();
  useEffect(() => {
    const el = elRef.current;
    if (el) {
      const onWheel = (e) => {
        if (e.deltaY === 0) return;
        if (
          !(el.scrollLeft === 0 && e.deltaY < 0) &&
          !(
            el.scrollWidth - el.clientWidth - Math.round(el.scrollLeft) === 0 &&
            e.deltaY > 0
          )
        ) {
          e.preventDefault();
        }
        el.scrollTo({
          left: el.scrollLeft + e.deltaY,
          behavior: 'smooth'
        });
      };
      el.addEventListener('wheel', onWheel);
      return () => el.removeEventListener('wheel', onWheel);
    }
  }, []);
  return elRef;
}

export const useScrollDirection = (clicked) => {
  const [scrollDirection, setScrollDirection] = useState('up');
  const [prevOffset, setPrevOffset] = useState(0);
  const toggleScrollDirection = () => {
    let scrollY = window.scrollY;
    if (scrollY === 0) {
      setScrollDirection(null);
    }
    if (scrollY > prevOffset || clicked) {
      setScrollDirection('down');
    } else if (scrollY < prevOffset) {
      setScrollDirection('up');
    }

    setPrevOffset(scrollY);
  };
  useEffect(() => {
    window.addEventListener('scroll', toggleScrollDirection);
    return () => {
      window.removeEventListener('scroll', toggleScrollDirection);
    };
  });
  return scrollDirection;
};

export const HideOnScroll = (props) => {
  const { children, clicked } = props;
  const scrollDirection = useScrollDirection(clicked);
  return (
    <Slide
      appear={false}
      direction="down"
      in={scrollDirection === 'up' && !clicked}
    >
      {children}
    </Slide>
  );
};

export const ScrollTop = (props) => {
  const { children, topRef } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true
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
