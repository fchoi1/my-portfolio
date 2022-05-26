import React from 'react';

function PItemList(props) {
  const { itemList, title } = props;
  return (
    <>
      <h5 className="p-item-sub-title">{title}</h5>
      <ul>
        {itemList &&
          itemList.map((item, i) => (
            <li key={i}>
              <span>{item}</span>
            </li>
          ))}
      </ul>
    </>
  );
}

export default PItemList;
