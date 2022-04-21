import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DOM from 'react-dom';
import { Motion, spring, presets } from 'react-motion';

export default class ScrollHorizontal extends Component {
  constructor(props) {
    super(props);

    this.state = { animValues: 0, start: true, end: false, max: 0 };

    this.onScrollStart = this.onScrollStart.bind(this);
    this.resetMin = this.resetMin.bind(this);
    this.resetMax = this.resetMax.bind(this);
  }

  componentDidMount() {
    // Place the 'lock__' class on the HTML element - if toggled
    if (this.props.pageLock) {
      const orig = document.firstElementChild.className;
      document.firstElementChild.className =
        orig + (orig ? ' ' : '') + 'locked__';
    }

    DOM.findDOMNode(this.hScrollParent).addEventListener(
      'wheel',
      this.onScrollStart,
      { passive: false }
    );
  }

  componentWillUnmount() {
    if (this.props.pageLock) {
      document.firstElementChild.className =
        document.firstElementChild.className.replace(/ ?locked__/, '');
    }

    DOM.findDOMNode(this.hScrollParent).removeEventListener(
      'wheel',
      this.onScrollStart
    );
  }

  componentDidUpdate = (prevProps) => {
    if (prevProps.animValues !== this.props.animValues) {
      this.setState({ animValues: this.props.animValues }, this.calculate());
    } else {
      this.calculate();
    }
  };

  onScrollStart(e) {
    e.preventDefault();
    // If scrolling on x axis, change to y axis. Otherwise, just get the y deltas.
    // (Basically, this for Apple mice that allow horizontal scrolling by default)

    // this.props.enableScrollDown;
    // this.props.enableScrollUp;

    const rawData = e.deltaY ? e.deltaY : e.deltaX;
    const mouseY = Math.floor(rawData);

    // Bring in the existing animation values
    const animationValue = this.state.animValues;
    const newAnimationValue = this.props.reverseScroll
      ? animationValue + mouseY
      : animationValue - mouseY;

    // console.log(newAnimationValue);

    if (!this.caniscroll()) {
      return;
    }

    // if (this.state.start && newAnimationValue > 0) {
    //   window.scrollBy(0, -100);
    //   return;
    // }

    // if (this.state.end && newAnimationValue < this.state.max) {
    //   window.scrollBy(0, 100);

    //   return;
    // }

    const scrolling = () => {
      this.setState({ animValues: newAnimationValue });
    };
    console.log(this.state);
    // Begin Scrolling Animation
    window.requestAnimationFrame(scrolling);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (
      true &&
      // Ensure component has been loaded
      this.calculate.timer !== void 0 &&
      this.props.children === nextProps.children &&
      this.state.animValues === nextState.animValues &&
      this.props.animValues === nextProps.animValues
    ) {
      return false;
    }

    if (
      true &&
      this.props.children === nextProps.children &&
      this.caniscroll() === false
    ) {
      return false;
    }

    return true;
  }

  caniscroll() {
    let el = DOM.findDOMNode(this.hScrollParent);
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
  }

  calculate() {
    // Cancel the previous calculate
    clearTimeout(this.calculate.timer);

    // Lazy to calculate, prevent max recurse call
    this.calculate.timer = setTimeout(() => {
      // Calculate the bounds of the scroll area
      try {
        let el = DOM.findDOMNode(this.hScrollParent);
        let rect;

        let max;
        let win;

        if (el) {
          rect = el.getBoundingClientRect();
          max = el.lastElementChild.scrollWidth;
          win = el.offsetWidth;
        }

        // Get the new animation values
        const curr = this.state.animValues;

        // Establish the bounds. We do this every time b/c it might change.
        const bounds = -(max - win);
        this.setState({ max: bounds });

        // Logic to hold everything in place
        if (curr >= 0) {
          this.resetMin();
          this.setState({ start: true, end: false });
        } else if (curr <= bounds) {
          this.setState({ start: false, end: true });
          if (max >= rect.width) {
            const x = bounds;
            this.resetMax(x);
          } else {
            this.resetMax(0);
          }
        } else {
          this.setState({ start: false, end: false });
        }
      } catch (error) {
        console.log(
          'ERROR FROM REACT-SCROLL-HORIZONTAL ON getBoundingClientRect()',
          error
        );
      }
    });
  }

  resetMin() {
    this.setState({ animValues: 0, start: true, end: false });
  }

  resetMax(x) {
    this.setState({ animValues: x, start: false, end: true });
  }

  render() {
    const { config, style, children } = this.props;
    const { width, height } = style;
    const springConfig = config || presets.noWobble;

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
        ref={(r) => {
          this.hScrollParent = r;
        }}
        style={styles}
        className={`scroll-horizontal ${this.props.className || ''}`}
      >
        <Motion style={{ z: spring(this.state.animValues, springConfig) }}>
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
}

ScrollHorizontal.propTypes = {
  reverseScroll: PropTypes.bool,
  pageLock: PropTypes.bool,
  config: PropTypes.object,
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.array.isRequired,
  animValues: PropTypes.number,
  resetAnimValues: PropTypes.bool,
  enableScrollUp: PropTypes.bool,
  enableScrollDown: PropTypes.bool
};

ScrollHorizontal.defaultProps = {
  reverseScroll: false,
  pageLock: false,
  config: null,
  style: { width: `100%`, height: `100%` },
  className: null,
  animValues: null,
  resetAnimValues: true,
  enableScrollUp: false,
  enableScrollDown: false
};
