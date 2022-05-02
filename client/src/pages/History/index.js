import React, { useState } from 'react';
import TimeLine from 'components/TimeLine';

import { useHorizontalScroll } from 'components/Scroll';
import { useHistoryContext } from 'contexts/HistoryProvider';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { IconButton } from '@mui/material';

import './history.css';
function History(props) {
  // const parent = { width: `60em`, height: `30em` };

  const { history } = useHistoryContext();
  const [scrollVal, setScrollVal] = useState(0);

  console.log(history);

  const scrollRef = useHorizontalScroll();

  return (
    <section id="Journey">
      <div className="section-wrapper">
        <div className="history-container container">
          <div className=" history-name-wrapper section-name-wrapper">
            <h3 className="history-name section-name textRight">
              02-My Journey
            </h3>
          </div>

          <div className="button-wrapper left-history">
            <IconButton size="large">
              <ArrowBackIcon />
            </IconButton>
          </div>

          <div className="history-scroll-wrapper">
            <TimeLine
              historyList={history}
              scrollVal={scrollVal}
              setScrollVal={setScrollVal}
            />
          </div>

          <div className="button-wrapper right-history">
            <IconButton size="large">
              <ArrowForwardIcon />
            </IconButton>
          </div>
        </div>
      </div>
    </section>
  );
}

export default History;
