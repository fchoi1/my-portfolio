import React, { useRef, useEffect, useState } from 'react';
import { useHistoryContext } from 'contexts/HistoryProvider';

import HorizontalScroll from 'components/HorizontalScroll';
import TimelineItem from 'components/TimelineItem';
import moment from 'moment';

import './timeline.css';

const addYearDivider = (historyList) => {
  let prevYear, nextYear;
  let newArray = [];
  for (let i = 1; i < historyList.length; i++) {
    prevYear = moment(historyList[i - 1].startDate, 'MMM YYYY').year();
    nextYear = moment(historyList[i].startDate, 'MMM YYYY').year();

    if (prevYear < nextYear) {
      console.log('Less', prevYear, nextYear);
      newArray.push({ startDate: prevYear, type: 'divider' });
    }
    newArray.push(historyList[i]);
  }
  return newArray;
};

function TimeLine(props) {
  const { historyList, scrollVal, setScrollVal } = props;
  const first = useRef(null);
  const [currHistoryList, setCurrHistoryList] = useState(
    addYearDivider(historyList)
  );

  const { setHistory } = useHistoryContext();
  setHistory(currHistoryList);

  console.log('curr', currHistoryList);

  const [prevYear, setPrevYear] = useState(
    historyList ? historyList[0].startDate : ''
  );

  useEffect(() => {
    if (first?.current) console.log(first.current.getBoundingClientRect());
  }, [first]);

  return (
    <div className="timeline">
      <HorizontalScroll animValues={scrollVal}>
        {currHistoryList &&
          currHistoryList.map((historyItem, i) => {
            console.log(historyItem.type === 'divider', historyItem.type);
            return historyItem.type === 'divider' ? (
              <div key={i}>
                <span>{historyItem.startDate} </span>
              </div>
            ) : (
              <div ref={i === 1 ? first : null} key={i}>
                <TimelineItem item={historyItem} num={i} />
              </div>
            );
          })}
      </HorizontalScroll>
    </div>
  );
}

export default TimeLine;
