import React from 'react';
import './projectitem.css';

import ImageDisplayList from 'components/ImageList';

function ProjectItem(props) {
  const { project } = props;
  return (
    <div>
      <div className="project-item-container container ">
        <div className="project-item-name-wrapper">
          <h4 className="project-item-name">{project.name}</h4>
        </div>

        <div className="project-item-description-wrapper">
          <p className="project-item-description">{project.description}</p>
        </div>

        <div className="project-item-link-wrapper">
          <div>Github {project.github}</div>
          <div>{project.website && `Website: ${project.website}`}</div>
        </div>

        <div className="project-item-images-wrapper">
          <ImageDisplayList images={project.images} />
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;
