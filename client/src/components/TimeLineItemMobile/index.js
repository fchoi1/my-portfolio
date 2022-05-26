import React from 'react';
import Moment from 'react-moment';

import './timelinemobileitem.css';

function TimeLineItemMobile(props) {
  const { item, num, history } = props;

  return (
    <div className="tl-content-wrapper tl-mobile-item-container container">
      <div className="tl-mobile-left">
        <div className="tl-content-title-wrapper tl-mobile-wrapper">
          <span className="tl-content-title tl-mobile-title">{item.name}</span>
        </div>

        {item.position && (
          <div className="tl-content-position-wrapper">
            <span className="tl-content-position">{item.position}</span>
          </div>
        )}

        <div className="tl-content-date tl-mobile-date">
          <span className="tl-item-date">
            <Moment date={item.startDate} format="MMM YYYY" />
          </span>
        </div>

        {item.location && (
          <div className="tl-content-location-wrapper">
            <span className="tl-content-location tl-mobile-location">
              {item.location}
            </span>
          </div>
        )}
      </div>

      <div className="tl-mobile-right">
        <div className="tl-content-description">
          <ul className="tl-content-description-list tl-mobile-description-list">
            {item.description &&
              item.description.map((description, i) => (
                <li key={i}>
                  <span className="tl-content-description-list-span">
                    {description}
                  </span>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TimeLineItemMobile;
