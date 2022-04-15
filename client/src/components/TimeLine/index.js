import React, { useRef, useEffect } from 'react';
import HorizontalScroll from '../HorizontalScroll';
import TimelineItem from '../TimelineItem';

import './timeline.css';

function TimeLine(props) {
  const { historyList } = props;

  const first = useRef(null);
  useEffect(() => {
    console.log(first.current.getBoundingClientRect());
  }, [first]);

  const handleScroll = (el) => {
    console.log('scrolling');
  };


  return (
    <div className="timeline" onScroll={handleScroll}>

      <HorizontalScroll >
        {historyList &&
          historyList.map((job, i) => (
            <div ref={i === 1 ? first : null} key={i}>
              <TimelineItem job={job} num={i} />
            </div>
          ))}
      </HorizontalScroll>
    </div>
  );
}

export default TimeLine;
