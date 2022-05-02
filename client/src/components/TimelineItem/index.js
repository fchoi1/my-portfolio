import React from 'react';
import Moment from 'react-moment';

import { useTheme } from '@mui/material/styles';

import { useHistoryContext } from 'contexts/HistoryProvider';
import classNames from 'classnames';

import './timelineitem.css';

const checkPosition = (list, item, i) => {
  let useWide, oneSideLeft, oneSideRight, isStartOneSide, isEndOneSide;

  if (item.type === 'job') {
    useWide =
      i + 1 === list.length ||
      i === 0 ||
      (list[i - 1]?.type === item.type && list[i + 1]?.type === item.type);

    oneSideLeft =
      i !== 0 &&
      (list[i - 1]?.type !== item.type || list[i + 1]?.type === 'divider') &&
      list[i + 1]?.type === item.type;

    oneSideRight =
      list.length !== i + 1 &&
      list[i - 1]?.type === item.type &&
      (list[i + 1]?.type !== item.type || list[i + 1]?.type === 'divider');

    isStartOneSide = i === 0 && list[i + 1]?.type !== item?.type;

    isEndOneSide =
      list.length === i + 1 &&
      (list[i - 1]?.type !== item?.type || list[i - 1]?.type === 'divider');
  } else if (item.type === 'project') {
    useWide =
      i + 1 === list.length ||
      i === 0 ||
      ((list[i - 1]?.type === item.type || list[i - 1]?.type === 'divider') &&
        (list[i + 1]?.type === item.type || list[i + 1]?.type === 'divider'));

    oneSideLeft =
      i !== 0 &&
      list[i - 1]?.type !== item.type &&
      list[i + 1]?.type !== 'divider' &&
      list[i + 1]?.type === item.type;

    oneSideRight =
      list.length !== i + 1 &&
      list[i - 1]?.type === item.type &&
      list[i + 1]?.type !== item.type &&
      list[i + 1]?.type !== 'divider';

    isStartOneSide = i === 0 && list[i + 1]?.type !== item?.type;

    isEndOneSide =
      list.length === i + 1 &&
      (list[i - 1]?.type !== item?.type || list[i - 1]?.type === 'divider');
  }
  return { useWide, oneSideLeft, oneSideRight, isStartOneSide, isEndOneSide };
};

function TimelineItem(props) {
  const { item, num, history } = props;

  // const { history } = useHistoryContext();
  console.log(history);

  const theme = useTheme();

  const { useWide, oneSideLeft, oneSideRight, isStartOneSide, isEndOneSide } =
    checkPosition(history, item, num);

  // theme.palette.mediumChampagne.light

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

  const timelineDate = classNames({
    'timeline-content-date': true,
    'timeline-content-date-top': item.type === 'job'
  });

  return (
    <>
      <div data-timelineid={num} className={timelineWrapper}>
        <div className={timelineItem}>
          <div className="timeline-branch-wrapper">
            <div className="timeline-branch">
              <div className={timelineDate}>
                <Moment date={item.startDate} format="MMM YYYY" />
              </div>
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
