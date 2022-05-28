import React from 'react';
import './timelinedivider.css';
import { useBreakPoint } from 'contexts/MuiThemeProvider';

function TimeLineDivider(props) {
  const { item } = props;
  const breakpoint = useBreakPoint();

  return (
    <div
      className={`timeline-divider-wrapper ${
        ['md', 'sm', 'xs'].includes(breakpoint) ? 'tl-item-divder-wrapper' : ''
      }`}
    >
      <div className="timeline-divider">
        <span>{item.startDate}</span>
      </div>
    </div>
  );
}

export default TimeLineDivider;
