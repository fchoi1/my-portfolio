import React from 'react';
import { Avatar } from '@mui/material';

import { useProfileContext } from 'contexts/ProfileProvider';

import './about.css';

function About(props) {
  const { profile } = useProfileContext();

  return (
    <section className="page-section" id="About">
      <div className="section-wrapper">
        <div className="about-container container">
          <div className=" about-name-wrapper section-name-wrapper">
            <h3 className="about-name section-name">About me</h3>
          </div>

          <div className="avatar-wrapper">
            <Avatar
              className="avatar"
              alt="Fabio Choi"
              src={profile.avatarImage}
              sx={{
                width: '100%',
                height: 'auto',
                objectfit: 'cover',
                border: '2px solid lightgray',
                '&:hover': {
                  border: '2px solid var(--secondary)',
                  borderRadius: '40%',
                  boxShadow:
                    'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'
                }
              }}
            />
          </div>

          <div className="about-content-wrapper">
            <p className="about-content">
              Hey there! I'm Fabio, an ambitious Full Stack Web Developer with a
              passion for clean code and user-friendly applications. With a
              background in mechanical engineering and industry experience, I
              bring a strong foundation in engineering design principles and a
              solid two years of experience, including six internships. I thrive
              in agile environments, embrace new technologies, and love
              collaborating with cross-functional teams. Let's create something
              extraordinary together!
            </p>
            <br />
            <span>Here are some technologies that I have worked with:</span>
            <ul className="tech-list defaultUL">
              <li className="tech-item">
                <span>TypeScript/JavaScript(ES6+)</span>
              </li>
              <li className="tech-item">
                <span>React</span>
              </li>
              <li className="tech-item">
                <span>BackboneJS</span>
              </li>
              <li className="tech-item">
                <span>NodeJS</span>
              </li>
              <li className="tech-item">
                <span>SQL</span>
              </li>
              <li className="tech-item">
                <span>JQuery</span>
              </li>
              <li className="tech-item">
                <span>MongoDB</span>
              </li>
              <li className="tech-item">
                <span>ExpressJS</span>
              </li>
              <li className="tech-item">
                <span>Python</span>
              </li>
              <li className="tech-item">
                <span>Material UI</span>
              </li>
              <li className="tech-item">
                <span>SocketIO</span>
              </li>
              <li className="tech-item">
                <span>Bootstrap</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
