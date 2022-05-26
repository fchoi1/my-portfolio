import React, { useEffect, useState } from 'react';

import './projectitem.css';

import ImageDisplayList from 'components/ImageList';
import PItemList from './PItemList';
import PItemParagraph from './PItemParagraph';

import returnClass from 'components/ProjectItem/ProjectItemClassNames';
import classNames from 'classnames';

import { useBreakPoint } from 'contexts/MuiThemeProvider';

function ProjectItem(props) {
  const { project, num, showMoreRef, showMore } = props;
  const reversed = num % 2 === 1;

  const hideAnimation = `fade-out 0.3s 500ms ease-out forwards`;
  const showAnimation = `fade-in 0.5s ease-out `;

  const [more, setMore] = useState('none');
  const [animationStyle, setAnimationStyle] = useState('');

  const breakpoint = useBreakPoint();

  const leftContent = classNames({
    'p-item-left-content': reversed && !['md', 'sm', 'xs'].includes(breakpoint),
    'p-item-right-content':
      !reversed && !['md', 'sm', 'xs'].includes(breakpoint),
    'p-item-single-left': ['md', 'sm', 'xs'].includes(breakpoint)
  });

  const rightContent = classNames({
    'p-item-left-content':
      !reversed && !['md', 'sm', 'xs'].includes(breakpoint),
    'p-item-right-content':
      reversed && !['md', 'sm', 'xs'].includes(breakpoint),
    'p-item-single-right': ['md', 'sm', 'xs'].includes(breakpoint)
  });

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

  const className = returnClass(reversed);

  return (
    <div
      ref={showMoreRef}
      style={{ animation: animationStyle, display: num > 2 ? more : 'inherit' }}
    >
      <div className="p-item-container container ">
        <div className={'p-item-name-wrapper'}>
          <h4 className="p-item-name">{project.name}</h4>
        </div>

        {/* buttons? */}
        <div className="p-item-link-wrapper">
          {project.github && (
            <span className="p-item-link">
              <a href={project.github} target="_blank" rel="noreferrer">
                Github Repo
              </a>
            </span>
          )}
          
          {project.website && (
            <span className="p-item-link">
              <a href={project.website} target="_blank" rel="noreferrer">
                Live Website
              </a>
            </span>
          )}
        </div>

        <div className={rightContent}>
          <div className={className.Image}>
            <ImageDisplayList images={project.images} />
          </div>

          <div className={className.Description}>
            <PItemParagraph text={project.description} />
          </div>

          <div className={className.Tech}>
            <PItemList title="Technologies" itemList={project.technologies} />
          </div>
        </div>

        <div className={leftContent}>
          <div className={className.Role}>
            <PItemParagraph title="My Role" text={project.role} />
          </div>

          <div className={className.RoadBlock}>
            <PItemParagraph title="Roadblocks" text={project.roadBlocks} />
          </div>

          <div className={className.Solution}>
            <PItemParagraph title="Solutions" text={project.solution} />
          </div>

          <div className={className.Features}>
            <PItemList title="Features" itemList={project.features} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;
