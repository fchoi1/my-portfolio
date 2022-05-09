import React, { useEffect, useState, useRef, useCallback, memo } from 'react';
import PropTypes from 'prop-types';
import { Motion, spring, presets } from 'react-motion';
import { useScrollContext } from 'contexts/ScrollProvider';
import {
  UPDATE_SCROLL,
  UPDATE_SCROLLMAX,
  UPDATE_STARTEND
} from 'contexts/actions';

function ScrollHorizontalTest(props) {
  const {
    reverseScroll = false,
    config = null,
    style = { width: `100%`, height: `100%` },
    className = null,
    resetAnimValue = true, // may use in future
    enableScrollUp = false,
    enableScrollDown = false,
    children
  } = props;

  const { width, height } = style;
  const springConfig = config || presets.noWobble;

  const hScrollParent = useRef(null);

  const [scrollContextState, setScrollContextState] = useScrollContext();

  console.log('scroll context in HS', scrollContextState);

  useEffect(() => {
    let hscroll;
    if (hScrollParent.current) {
      hscroll = hScrollParent.current;

      hscroll.addEventListener('wheel', onScrollStart, {
        passive: false
      });
    }
    // unmount
    return () => {
      if (hscroll) hscroll.removeEventListener('wheel', onScrollStart);
    };
  });

  useEffect(() => {
    if (hScrollParent.current) {
      let el = hScrollParent.current;
      const max = el.lastElementChild.scrollWidth;
      const win = el.offsetWidth;

      // Establish the bounds. We do this every time b/c it might change.
      const bounds = -(max - win);

      setScrollContextState({
        max: bounds,
        type: UPDATE_SCROLLMAX
      });
    }
  }, [hScrollParent, setScrollContextState]);

  const inBounds = (curr) => {
    if (hScrollParent.current) {
      // Establish the bounds. We do this every time b/c it might change.
      // Logic to hold everything in place

      if (curr >= scrollContextState.min) {
        resetMin();
        return false;
      } else if (curr <= scrollContextState.max) {
        resetMax();
        return false;
        //}
      }

      setScrollContextState({
        start: false,
        end: false,
        type: UPDATE_STARTEND
      });
      return true;
    }
  };

  const onScrollStart = (e) => {
    e.preventDefault();
    // If scrolling on x axis, change to y axis. Otherwise, just get the y deltas.
    // (Basically, this for Apple mice that allow horizontal scrolling by default)

    const rawData = e.deltaY ? e.deltaY : e.deltaX;
    const mouseY = Math.floor(rawData);

    // Bring in the existing animation values
    const animationValue = scrollContextState.animValue;
    const newAnimationValue = reverseScroll
      ? animationValue + mouseY
      : animationValue - mouseY;

    if (!caniscroll()) return;

    if ((scrollContextState.start && newAnimationValue > 0, enableScrollUp))
      return window.scrollBy(0, -100);

    if (
      (scrollContextState.end && newAnimationValue < scrollContextState.max,
      enableScrollDown)
    )
      return window.scrollBy(0, 100);

    if (inBounds(newAnimationValue))
      return setScrollContextState({
        animValue: newAnimationValue,
        type: UPDATE_SCROLL
      });
  };

  const caniscroll = () => {
    let el = hScrollParent.current;
    let rect;
    let scroller;

    if (el) {
      rect = el.getBoundingClientRect();
      scroller = el.firstElementChild;
    }

    return (
      scroller.offsetLeft < rect.left ||
      scroller.offsetLeft + scroller.offsetWidth > rect.width
    );
  };

  const resetMin = () => {
    setScrollContextState({ animValue: 0, type: UPDATE_SCROLL });
    setScrollContextState({ start: true, end: false, type: UPDATE_STARTEND });
  };

  const resetMax = () => {
    setScrollContextState({
      animValue: scrollContextState.max,
      type: UPDATE_SCROLL
    });

    setScrollContextState({ start: false, end: true, type: UPDATE_STARTEND });
  };

  // Styles
  const styles = {
    height: height || `100%`,
    width: width || `100%`,
    overflow: `hidden`,
    position: `relative`,
    ...style
  };

  return (
    <div
      ref={hScrollParent}
      style={styles}
      className={`scroll-horizontal ${className || ''}`}
    >
      <Motion style={{ z: spring(scrollContextState.animValue, springConfig) }}>
        {({ z }) => {
          const scrollingElementStyles = {
            transform: `translate3d(${z}px, 0,0)`,
            display: `inline-flex`,
            height: `100%`,
            position: `absolute`,
            willChange: `transform`
          };

          return (
            <div style={scrollingElementStyles} id="horizontal-scroll">
              {children}
            </div>
          );
        }}
      </Motion>
    </div>
  );
}

ScrollHorizontalTest.propTypes = {
  reverseScroll: PropTypes.bool,
  config: PropTypes.object,
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.array.isRequired,
  resetanimValue: PropTypes.bool,
  enableScrollUp: PropTypes.bool,
  enableScrollDown: PropTypes.bool
};

ScrollHorizontalTest.defaultProps = {
  reverseScroll: false,
  config: null,
  style: { width: `100%`, height: `100%` },
  className: null,
  resetanimValue: true,
  enableScrollUp: false,
  enableScrollDown: false
};

export default ScrollHorizontalTest;
