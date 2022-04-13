import React from 'react';
import HorizontalScroll from 'react-scroll-horizontal';

import './history.css';
function History(props) {
  const parent = { width: `60em`, height: `30em` };
  return (
    <section id="History">
      <div className="section-wrapper">History Section</div>
      <div style={parent}>
        <HorizontalScroll>
          <div className="child">test</div>
          <div className="child"></div>
          <div className="child"></div>
        </HorizontalScroll>
      </div>
    </section>
  );
}

export default History;
