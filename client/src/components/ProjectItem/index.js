import React, { useEffect, useState } from 'react';
import './projectitem.css';

import ImageDisplayList from 'components/ImageList';

import classNames from 'classnames';

function ProjectItem(props) {
  const { project, num, showMoreRef, showMore } = props;
  const reversed = num % 2 === 0;

  const hideAnimation = `fade-out 0.3s 500ms ease-out forwards`;
  const showAnimation = `fade-in 0.5s ease-out `;

  let [more, setMore] = useState('none');
  let [animationStyle, setAnimationStyle] = useState('');

  useEffect(() => {
    setMore('inherit');
    if (showMore && num > 2) {
      setAnimationStyle(showAnimation);
    } else if (!showMore && num > 2) {
      setAnimationStyle(hideAnimation);
    }
  }, [showMore, more, hideAnimation, showAnimation, setAnimationStyle, num]);

  useEffect(() => {
    setMore('none');
  }, []);

  const projectItemName = classNames({
    'project-item-name-wrapper': true,
    'project-item-name-wrapper-right': reversed
  });

  const projectItemDescription = classNames({
    'project-item-description-wrapper': true,
    'project-item-description-right': reversed
  });

  const projectItemLink = classNames({
    'project-item-link-wrapper': true,
    'project-item-link-wrapper-right': reversed
  });
  const projectItemImage = classNames({
    'project-item-images-wrapper': true,
    'project-item-images-wrapper-left': reversed
  });

  return (
    <div
      ref={showMoreRef}
      style={{ animation: animationStyle, display: num > 2 ? more : 'inherit' }}
    >
      {/* <div ref={showMoreRef} className={TStyle}> */}
      <div className="project-item-container container ">
        <div className={projectItemName}>
          <h4 className="project-item-name">{project.name}</h4>
        </div>

        <div className={projectItemDescription}>
          <p className="project-item-description">{project.description}</p>
        </div>

        <div className={projectItemLink}>
          <span className="project-item-link">
            {project.github && <a href={project.github}>Github Repo</a>}
          </span>

          <span className="project-item-link">
            {project.website && <a href={project.website}>Website</a>}
          </span>
        </div>

        <div className={projectItemImage}>
          <ImageDisplayList images={project.images} />
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;
