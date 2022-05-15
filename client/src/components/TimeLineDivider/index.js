import React from 'react';
import './timelinedivider.css';

function TimeLineDivider(props) {
  const { item } = props;

  return (
    <div className="timeline-divider-wrapper">
      <div className="timeline-divider">
        <span>{item.startDate}</span>
      </div>
    </div>
  );
}

export default TimeLineDivider;
