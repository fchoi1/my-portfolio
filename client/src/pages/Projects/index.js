import React, { useEffect, useState, useRef } from 'react';

import { scrollToTargetAdjusted } from 'components/Scroll';
import { Button } from '@mui/material';
import { useProjectContext } from 'contexts/ProjectProvider';
import ProjectItem from 'components/ProjectItem';

import './project.css';

function Projects(props) {
  const { projects, setProjects } = useProjectContext();
  const [showMore, setShowMore] = useState(false);

  const showMoreRef = useRef(null);

  const handleShow = (event) => {
    setShowMore(!showMore);

    if (showMoreRef.current) {
      scrollToTargetAdjusted(showMoreRef.current, 100);
    }
  };

  return (
    <section id="Projects">
      <div className="section-wrapper">
        Project Sections
        <div className="container projects-container ">
          <div className=" projects-name-wrapper section-name-wrapper">
            <h3 className="projects-name section-name">03-Projects</h3>
          </div>
          <div className="projects-list-wrapper">
            {projects &&
              projects.map((project, i) => (
                <ProjectItem
                  project={project}
                  num={i}
                  key={i}
                  showMore={showMore}
                  showMoreRef={i === 2 ? showMoreRef : null}
                ></ProjectItem>
              ))}
          </div>
          <div className="projects-list-show-more">
            <Button onClick={handleShow} color='secondary'>
              {showMore ? 'show less' : 'show more'}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
