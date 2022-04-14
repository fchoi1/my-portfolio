import React from 'react';
import { useTheme } from '@mui/material/styles';

import './timelineitem.css';

function TimelineItem(props) {
  const { job, num } = props;

  const theme = useTheme();

  // theme.palette.mediumChampagne.light

  return (
    <div
      className={`timeline-item-wrapper `}
      style={{
        backgroundColor:
          num % 2 === 0
            ? theme.palette.mediumChampagne.light
            : theme.palette.mediumChampagne.dark
      }}
    >
      {job.name}
    </div>
  );
}

export default TimelineItem;
