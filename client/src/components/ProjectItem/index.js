import React from 'react';

function ProjectItem(props) {
  const { project } = props;
  return (
    <div>
      <div className="project-item-wrapper">
        <div className="project-item-name">
          <h4>{project.name}</h4>
        </div>
        <div className="project-item-description">
          <p>{project.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;
