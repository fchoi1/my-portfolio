import React, { useEffect, useState } from 'react';

import './projectitem.css';

import ImageDisplayList from 'components/ImageList';
import PItemList from './PItemList';
import PItemParagraph from './PItemParagraph';

import returnClass from 'components/ProjectItem/ProjectItemClassNames';
import classNames from 'classnames';
import { scrollToTargetAdjusted } from 'components/Scroll';
import { useBreakPoint } from 'contexts/MuiThemeProvider';
import { Button } from '@mui/material';

function ProjectItem(props) {
  const { project, num, showMoreRef, showMore } = props;
  const reversed = num % 2 === 1;

  // For hiding entire item
  const hideAnimation = `fade-out 0.3s 500ms ease-out forwards`;
  const showAnimation = `fade-in 0.5s ease-out `;
  const [more, setMore] = useState('none');
  const [animationStyle, setAnimationStyle] = useState('');

  // For hiding project details for breakpoint
  const [detailAnimationStyle, setDetailAnimationStyle] = useState('');
  const [showProjectDetails, setShowProjectDetails] = useState({
    showDetails: false,
    displayDetails: 'none'
  });

  const breakpoint = useBreakPoint();

  const isMobile = ['md', 'sm', 'xs'].includes(breakpoint);

  const leftContent = classNames({
    'p-item-left-content': reversed && !isMobile,
    'p-item-right-content': !reversed && !isMobile,
    'p-item-single-left': isMobile
  });

  const rightContent = classNames({
    'p-item-left-content': !reversed && !isMobile,
    'p-item-right-content': reversed && !isMobile,
    'p-item-single-right': isMobile
  });

  const animateDetails = (show) => {
    if (show) {
      setDetailAnimationStyle(showAnimation);
    } else {
      setDetailAnimationStyle(hideAnimation);
    }
  };

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
    if (isMobile) {
      setShowProjectDetails({
        showDetails: true,
        displayDetails: 'none'
      });
    } else {
      setDetailAnimationStyle(showAnimation);
      setShowProjectDetails({
        showDetails: true,
        displayDetails: 'inherit'
      });
    }
  }, [isMobile, setDetailAnimationStyle, showAnimation]);

  const className = returnClass(reversed);
  const handleShow = (event) => {
    if (event.target.parentNode.parentNode) {
      scrollToTargetAdjusted(event.target.parentNode.parentNode, 100);
    }
    animateDetails(showProjectDetails.showDetails);

    setShowProjectDetails((prevState) => {
      return {
        showDetails: !prevState.showDetails,
        displayDetails: prevState.showDetails ? 'inherit' : 'none'
      };
    });
  };

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
            <Button
              sx={{
                color: 'var(--tertiary)',
                '&:hover': {
                  color: 'var(--quinary)'
                }
              }}
              color="quaternary"
              variant="contained"
              onClick={() => {
                window.open(project.github);
              }}
            >
              Github
            </Button>
          )}

          {project.website && (
            <Button
              sx={{
                color: 'var(--tertiary)',
                '&:hover': {
                  color: 'var(--quinary)'
                }
              }}
              color="quaternary"
              variant="contained"
              onClick={() => {
                window.open(project.website);
              }}
            >
              Live Website
            </Button>
          )}
        </div>

        <div className={rightContent}>
          {project.images.length > 0 && (
            <div className={className.Image}>
              <ImageDisplayList images={project.images} />
            </div>
          )}

          <div className={className.Description}>
            <PItemParagraph
              text={isMobile ? project.descriptionShort : project.description}
            />
          </div>

          <div className={className.Tech}>
            <PItemList title="Technologies" itemList={project.technologies} />
          </div>
        </div>

        <div className="projects-list-show-details">
          <Button onClick={handleShow} color="secondary">
            {showProjectDetails.showDetails ? 'Details' : 'Hide Details'}
          </Button>
        </div>

        <div
          className={leftContent}
          style={{
            animation: detailAnimationStyle,
            display: isMobile && showProjectDetails.displayDetails
          }}
        >
          {project.role && (
            <div className={className.Role}>
              <PItemParagraph title="My Role" text={project.role} />
            </div>
          )}

          {project.roadBlocks && (
            <div className={className.RoadBlock}>
              <PItemParagraph title="Roadblocks" text={project.roadBlocks} />
            </div>
          )}

          {project.solution && (
            <div className={className.Solution}>
              <PItemParagraph title="Solutions" text={project.solution} />
            </div>
          )}

          {project.features && (
            <div className={className.Features}>
              <PItemList title="Features" itemList={project.features} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;
