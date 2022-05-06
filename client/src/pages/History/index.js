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

  const scrollRef = useHorizontalScroll();

  const handleClick = (e) => {
    if (!e.target.getAttribute('data-type')) return;

    if (e.target.getAttribute('data-type') === 'right') {
      setScrollVal((prev) => prev  - 200);
    } else if (e.target.getAttribute('data-type') === 'left') {
      setScrollVal((prev) => prev + 200);
    }
    console.log(scrollVal);
  };

  return (
    <section id="Journey">
      <div className="section-wrapper">
        <div className="history-title-container container">
          <div className=" history-name-wrapper section-name-wrapper">
            <h3 className="history-name section-name textRight">
              02-My Journey
            </h3>
          </div>
        </div>
        <div className="history-container container">
          <div className="button-wrapper left-history">
            <IconButton data-type="left" size="large" onClick={handleClick}>
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
            <IconButton data-type="right" size="large" onClick={handleClick}>
              <ArrowForwardIcon />
            </IconButton>
          </div>
        </div>
      </div>
    </section>
  );
}

export default History;
