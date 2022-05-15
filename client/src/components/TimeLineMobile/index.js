import React, { useState } from 'react';
import { useHistoryContext, addYearDivider } from 'contexts/HistoryProvider';
import classNames from 'classnames';

function TimeLineMobile(props) {
  const { historyList } = props;

  const [currHistoryList] = useState(addYearDivider(historyList));

  return <div className="mobile-timeline"></div>;
}

export default TimeLineMobile;
