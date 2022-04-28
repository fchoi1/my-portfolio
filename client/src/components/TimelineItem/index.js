import React from 'react';
import { useTheme } from '@mui/material/styles';

import { useHistoryContext } from 'contexts/HistoryProvider';
import classNames from 'classnames';

import './timelineitem.css';

function TimelineItem(props) {
  const { item, num } = props;

  const { history } = useHistoryContext();


  const theme = useTheme();

  // theme.palette.mediumChampagne.light

  const useWide =
    history.length === num + 1 ||
    num === 0 ||
    (history[num - 1]?.type === history[num].type &&
      history[num + 1]?.type === history[num].type);

  const oneSideRight =
    history.length !== num + 1 &&
    history[num - 1]?.type === history[num].type &&
    history[num + 1]?.type !== history[num].type;

  const oneSideLeft =
    num !== 0 &&
    history[num - 1]?.type !== history[num].type &&
    history[num + 1]?.type === history[num].type;

  const isStartOneSide =
    num === 0 && history[num + 1]?.type !== history[num].type;
  const isEndOneSide =
    history.length === num + 1 && history[num - 1]?.type !== history[num].type;

  // console.log(num, isStartOneSide, isEndOneSide);
  // console.log(useWide, oneSideLeft, oneSideRight, num);

  const timelineWrapper = classNames({
    'timeline-item-wrapper': true,
    'timeline-item-wrapper-one-side-left': oneSideLeft || isEndOneSide,
    'timeline-item-wrapper-one-side-right': oneSideRight || isStartOneSide,
    'timeline-item-wrapper-wide ': useWide,
    'timeline-bottom': item.type === 'project'
  });

  const timelineItem = classNames({
    'timeline-item': true,
    'timeline-item-wide ': useWide,
    'timeline-item-one-side':
      oneSideLeft || oneSideRight || isEndOneSide || isStartOneSide,
    'timeline-bottom': item.type === 'job'
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
          <div className="timeline-branch-wrapper">
            <div className="timeline-branch">
              <div className="timeline-content-date">{item.startDate}</div>
            </div>
          </div>

          <div className="timeline-content-wrapper">
            <div className="timeline-content-title">{item.name}</div>

            <div className="timeline-content-type">{item.type}</div>
            {item.position && (
              <div className="timeline-content-position">{item.position}</div>
            )}
            <div className="timeline-content-details">
              {item.location && (
                <div className="timeline-content-position">{item.location}</div>
              )}
            </div>
            <span className="timeline-content-description">
              {item.description}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default TimelineItem;
