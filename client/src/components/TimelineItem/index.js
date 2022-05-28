import React from 'react';
import Moment from 'react-moment';

import { useTheme } from '@mui/material/styles';
import { useBreakPoint } from 'contexts/MuiThemeProvider';

import classNames from 'classnames';

import './timelineitem.css';

const checkPosition = (list, item, i, isMobile) => {
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
  } else if (item.type === 'other') {
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
  return isMobile
    ? {
        useWide: !isMobile,
        oneSideLeft: !isMobile,
        oneSideRight: !isMobile,
        isStartOneSide: !isMobile,
        isEndOneSide: !isMobile
      }
    : { useWide, oneSideLeft, oneSideRight, isStartOneSide, isEndOneSide };
};

function TimelineItem(props) {
  const { item, num, history } = props;

  const breakpoint = useBreakPoint();

  const isMobile = ['md', 'sm', 'xs'].includes(breakpoint);

  const theme = useTheme();

  const { useWide, oneSideLeft, oneSideRight, isStartOneSide, isEndOneSide } =
    checkPosition(history, item, num, isMobile);

  // theme.palette.mediumChampagne.light

  const timelineWrapper = classNames({
    'tl-item-wrapper': true,
    'tl-item-wrapper-one-side-left': oneSideLeft || isEndOneSide,
    'tl-item-wrapper-one-side-right': oneSideRight || isStartOneSide,
    'tl-item-wrapper-wide ': useWide,
    'timeline-bottom': item.type === 'other' && !isMobile
  });

  const timelineItem = classNames({
    'tl-item': true,
    'tl-item-wide ': useWide && !isMobile,
    'tl-item-one-side':
      oneSideLeft || oneSideRight || isEndOneSide || isStartOneSide,
    'timeline-bottom': item.type === 'job' && !isMobile
  });

  const timelineDate = classNames({
    'tl-content-date': true,
    'tl-content-date-top': item.type === 'job' && !isMobile
  });

  return (
    <>
      <div data-timelineid={num} className={timelineWrapper}>
        <div className={timelineItem}>
          <div className="tl-branch-wrapper">
            <div className="tl-branch">
              <div className={timelineDate}>
                <span className="tl-item-date">
                  <Moment date={item.startDate} format="MMM YYYY" />
                </span>
              </div>
            </div>
          </div>

          <div className="tl-content-wrapper">
            <div className="tl-content-title-wrapper">
              <span className="tl-content-title">{item.name}</span>
            </div>

            {/* <div className="tl-content-type">{item.type}</div> */}
            {item.position && (
              <div className="tl-content-position-wrapper">
                <span className="tl-content-position">{item.position}</span>
              </div>
            )}
            <div className="tl-content-details">
              {item.location && (
                <div className="tl-content-location-wrapper">
                  <span className="tl-content-location">{item.location}</span>
                </div>
              )}
            </div>
            <div className="tl-content-description">
              <ul className="tl-content-description-list defaultUL">
                {item.description &&
                  item.description.map((description, i) => (
                    <li key={i}>
                      <span className="tl-content-description-list-span">
                        {description}
                      </span>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TimelineItem;
