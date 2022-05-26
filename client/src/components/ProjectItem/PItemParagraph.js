import React from 'react';

function PItemParagraph(props) {
  const { text, title } = props;

  return (
    <>
      <h5 className="p-item-sub-title">{title}</h5>
      <span className="p-item-text">{text}</span>
    </>
  );
}

export default PItemParagraph;
