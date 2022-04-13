import React from 'react';
import HorizontalScroll from 'react-scroll-horizontal';

import './history.css';
function History(props) {
  // const parent = { width: `60em`, height: `30em` };
  return (
    <section id="History">
      <div className="section-wrapper">
        History Section
        <div className="history-scroll-wrapper">
          <HorizontalScroll>
            <div className="child">test</div>
            <div className="child">test2</div>
            <div className="child">test3</div>
          </HorizontalScroll>
        </div>
      </div>
    </section>
  );
}

export default History;
