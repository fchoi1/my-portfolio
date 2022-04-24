import React, { useRef, useEffect } from 'react';
import HorizontalScroll from '../HorizontalScroll';
import TimelineItem from '../TimelineItem';

import './timeline.css';

function TimeLine(props) {
  const { historyList, scrollVal, setScrollVal } = props;


  const first = useRef(null);
  useEffect(() => {
    console.log(first.current.getBoundingClientRect());
  }, [first]);

  const handleScroll = (el) => {
    console.log('scrolling');
  };

  return (
    <div className="timeline" onScroll={handleScroll}>
      <HorizontalScroll animValues={scrollVal}>
        {historyList &&
          historyList.map((historyItem, i) => (
            <div ref={i === 1 ? first : null} key={i}>
              <TimelineItem item={historyItem} num={i} />
            </div>
          ))}
      </HorizontalScroll>
    </div>
  );
}

export default TimeLine;
