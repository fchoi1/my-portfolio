import React from 'react';

import { useProjectContext } from '../../contexts/ProjectProvider';
import ProjectItem from '../../components/ProjectItem';
import './project.css';

function Projects(props) {
  const { projects, setProjects } = useProjectContext();
  console.log(projects);
  return (
    <section id="Projects">
      <div className="section-wrapper">
        Project Sections
        <div className="container projects-container ">
          <div className=" projects-name-wrapper section-name-wrapper">
            <h3 className="projects-name section-name">03-Projects</h3>

            {projects &&
              projects.map((project, i) => (
                <ProjectItem project={project} key={i}></ProjectItem>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
