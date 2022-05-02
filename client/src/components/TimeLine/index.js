import React, { useRef, useEffect, useState } from 'react';
import { useHistoryContext } from 'contexts/HistoryProvider';

import HorizontalScroll from 'components/HorizontalScroll';
import TimelineItem from 'components/TimelineItem';
import TimeLineDivider from 'components/TimeLineDivider';
import moment from 'moment';

import './timeline.css';

const addYearDivider = (historyList) => {
  let prevYear, nextYear;
  let newArray = [];
  // initial
  prevYear = moment(historyList[0]?.startDate, 'MMM YYYY').year();
  newArray.push({ startDate: prevYear, type: 'divider' });

  for (let i = 0; i < historyList.length; i++) {
    prevYear = moment(historyList[i]?.startDate, 'MMM YYYY').year();
    nextYear = moment(historyList[i + 1]?.startDate, 'MMM YYYY').year();
    console.log(i, prevYear, nextYear, prevYear < nextYear);
    if (!nextYear) {
      break;
    }

    newArray.push(historyList[i]);

    if (prevYear < nextYear)
      newArray.push({ startDate: nextYear, type: 'divider' });
  }
  newArray.push(historyList[historyList.length - 1]);

  return newArray;
};

function TimeLine(props) {
  const { historyList, scrollVal, setScrollVal } = props;
  const first = useRef(null);
  const [currHistoryList, setCurrHistoryList] = useState(
    addYearDivider(historyList)
  );

  const { setHistory } = useHistoryContext();

  // useEffect(() => {
  //   setHistory(currHistoryList);
  // }, []);

  // console.log('curr', currHistoryList);

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
            return historyItem.type === 'divider' ? (
              <div ref={i === 1 ? first : null} key={i}>
                <TimeLineDivider item={historyItem} num={i} />
              </div>
            ) : (
              <div ref={i === 1 ? first : null} key={i}>
                <TimelineItem
                  item={historyItem}
                  history={currHistoryList}
                  num={i}
                />
              </div>
            );
          })}
      </HorizontalScroll>
    </div>
  );
}

export default TimeLine;
