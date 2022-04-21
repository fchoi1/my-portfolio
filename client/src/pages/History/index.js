import React from 'react';
import TimeLine from '../../components/TimeLine';

import { useHorizontalScroll } from '../../components/Scroll';
import { useHistoryContext } from '../../contexts/HistoryProvider';

import './history.css';
function History(props) {
  // const parent = { width: `60em`, height: `30em` };

  const { history } = useHistoryContext();
  console.log(history);

  const scrollRef = useHorizontalScroll();

  return (
    <section id="History">
      <div className="section-wrapper">
        <div className="history-container container">
          <div className=" history-name-wrapper section-name-wrapper">
            <h3 className="history-name section-name textRight">02-History</h3>
          </div>

          <div className="history-scroll-wrapper">
            <TimeLine historyList={history} />
          </div>

          {/* <div className="test-scroll-wrapper">
            <div
              ref={scrollRef}
              style={{ width: 600, overflow: 'auto', height: '30vh' }}
            >
              <h4>test scroll with react native</h4>

              <div style={{ whiteSpace: 'nowrap' }}>
                I will definitely overflow due to the small width of my parent
                container LMagna enim ut culpa ipsum tempor occaecat
                reprehenderit consectetur sint. Eiusmod id aute et cupidatat
                enim dolor mollit reprehenderit id velit et ea velit do.
                Consectetur pariatur mollit dolor eu. Culpa exercitation
                occaecat sit tempor mollit nostrud excepteur ullamco. Laboris
                est quis amet anim ad mollit qui ex cupidatat culpa irure duis
                magna. Laboris ipsum ex elit fugiat non est ex.
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default History;
