import React from 'react';
import HorizontalScroll from 'react-scroll-horizontal';
import { ScrollView } from 'react-native';

import TimelineItem from '../../components/TimelineItem';

import { useHorizontalScroll } from '../../components/Scroll';

import './history.css';
function History(props) {
  // const parent = { width: `60em`, height: `30em` };

  const historyList = [
    {
      name: 'Job 1',
      position: 'Web Dev',
      location: 'Toronto, ON',
      startDate: 'Jan 2016',
      endDate: 'Dec 2018',
      description:
        'Eiusmod reprehenderit pariatur magna elit ipsum ex nostrud est fugiat ut esse magna veniam. Magna deserunt commodo non sit fugiat quis sit dolor consequat. Proident nostrud excepteur do mollit culpa nostrud nostrud pariatur consequat ullamco esse.'
    },
    {
      name: 'Job 2',
      position: 'Engineer',
      location: 'Calgary, AB',
      startDate: 'Jan 2021',
      endDate: 'Apr 2021',
      description:
        'Eiusmod reprehenderit pariatur magna elit ipsum ex nostrud est fugiat ut esse magna veniam. Magna deserunt commodo non sit fugiat quis sit dolor consequat. Proident nostrud excepteur do mollit culpa nostrud nostrud pariatur consequat ullamco esse.'
    },
    {
      name: 'Job 3',
      position: 'Test QA',
      location: 'Montreal, QC',
      startDate: 'Sept 2021',
      endDate: 'Mar 2022',
      description:
        'Eiusmod reprehenderit pariatur magna elit ipsum ex nostrud est fugiat ut esse magna veniam. Magna deserunt commodo non sit fugiat quis sit dolor consequat. Proident nostrud excepteur do mollit culpa nostrud nostrud pariatur consequat ullamco esse.'
    }
  ];

  const scrollRef = useHorizontalScroll();

  return (
    <section id="History">
      <div className="section-wrapper">
        <div className="history-container container">
          <div className=" history-name-wrapper section-name-wrapper">
            <h3 className="history-name section-name textRight">02-History</h3>
          </div>

          <div className="history-scroll-wrapper">
            <HorizontalScroll>
              {historyList &&
                historyList.map((job, i) => (
                  <TimelineItem job={job} num={i} key={i} />
                ))}
            </HorizontalScroll>
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
