import React, { useState, useRef } from 'react';

import TimelineItem from 'components/TimelineItem';
import TimeLineItemMobile from 'components/TimeLineItemMobile';
import TimeLineDivider from 'components/TimeLineDivider';

import { useHistoryContext, addYearDivider } from 'contexts/HistoryProvider';

function TimeLineMobile(props) {
  const { historyList } = props;
  const first = useRef(null);
  const [currHistoryList] = useState(addYearDivider(historyList));

  return (
    <div className="mobile-timeline">
      {currHistoryList &&
        currHistoryList.map((historyItem, i) => {
          return historyItem.type === 'divider' ? (
            <div ref={i === 1 ? first : null} key={i}>
              <TimeLineDivider item={historyItem} num={i} />
            </div>
          ) : (
            <div ref={i === 1 ? first : null} key={i}>
              {/* <TimelineItem
                item={historyItem}
                history={currHistoryList}
                num={i}
              /> */}
              <TimeLineItemMobile
                item={historyItem}
                history={currHistoryList}
                num={i}
              />
            </div>
          );
        })}
    </div>
  );
}

export default TimeLineMobile;
