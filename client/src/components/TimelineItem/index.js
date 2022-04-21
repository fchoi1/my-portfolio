import React from 'react';
import { useTheme } from '@mui/material/styles';

import { useHistoryContext } from '../../contexts/HistoryProvider';
import classNames from 'classnames';

import './timelineitem.css';

function TimelineItem(props) {
  const { job, num } = props;

  const { history } = useHistoryContext();

  console.log(history.length, num);

  const theme = useTheme();

  // theme.palette.mediumChampagne.light

  const useWide =
    history.length === num + 1 ||
    num === 0 ||
    history[num - 1]?.type === history[num].type ||
    history[num + 1]?.type === history[num].type;

  console.log(useWide);

  const timelineWrapper = classNames({
    'timeline-item-wrapper': true,
    'timeline-item-wrapper-wide ': useWide,
    'timeline-bottom': job.type === 'project',
    'timeline-item-wrapper-end': history.length === num + 1 || num === 0
  });

  const timelineItem = classNames({
    'timeline-item': true,
    'timeline-item-wide ': useWide,
    'timeline-bottom': job.type === 'job',
    'timeline-end': history.length === num + 1 || num === 0
  });

  return (
    <>
      <div
        data-timelineid={num}
        className={timelineWrapper}
        style={{
          backgroundColor:
            num % 2 === 0
              ? theme.palette.mediumChampagne.light
              : theme.palette.mediumChampagne.dark
        }}
      >
        <div className={timelineItem}>
          <div className="timeline-branch"></div>
          {job.name} and type {job.type}
        </div>
      </div>
    </>
  );
}

export default TimelineItem;
