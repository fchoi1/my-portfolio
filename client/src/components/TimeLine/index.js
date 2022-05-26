import React, { useRef, useState } from 'react';
import classNames from 'classnames';
import { addYearDivider } from 'contexts/HistoryProvider';

import HorizontalScroll from 'components/HorizontalScroll';

import TimelineItem from 'components/TimelineItem';
import TimeLineDivider from 'components/TimeLineDivider';

import './timeline.css';

function TimeLine(props) {
  const { historyList } = props;
  const first = useRef(null);
  const [currHistoryList] = useState(addYearDivider(historyList));

  const timeline = classNames({
    timeline: true,
    'timeline-gradient': true
  });

  return (
    <div className={timeline}>
      <div className=" timeline-gradient-right">
        <div className=" timeline-gradient-left">
          <div className="timeline-line">
            <HorizontalScroll>
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
        </div>
      </div>
    </div>
  );
}

export default TimeLine;
