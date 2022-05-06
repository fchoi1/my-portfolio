import React from 'react';
import { Avatar } from '@mui/material';

import { useProfileContext } from 'contexts/ProfileProvider';

import './about.css';

function About(props) {
  const { profile } = useProfileContext();

  console.log(profile.avatarImage);

  return (
    <section className="page-section" id="About">
      <div className="section-wrapper">
        <div className="about-container container">
          <div className=" about-name-wrapper section-name-wrapper">
            <h3 className="about-name section-name">01-About me</h3>
          </div>

          <div className="avatar-wrapper">
            <Avatar
              className="avatar"
              alt="Fabio Choi"
              variant="square"
              src={profile.avatarImage}
              sx={{ width: '100%', height: 'auto', objectfit: 'cover' }}
            />
          </div>

          <div className="about-content-wrapper">
            <p className="about-content">
              Hey there! My name is Fabio and I enjoy programming and learning
              about cool stuff. Since highschool, I've had a passion for both
              physics and math which is where I took programming and computer
              engineering courses. After my bachelors in mechanical engineering,
              I began to pursue my other passion for programming and took a
              bootcamp course to hone my previous programming skills I developed
              in my past co-ops.
            </p>
            <span>Some technologies that I am working with recently:</span>
            <ul className="tech-list">
              <li className="tech-item">
                <span>JavaScript (ES6+)</span>
              </li>
              <li>
                <span>React</span>
              </li>
              <li>
                <span>NodeJS</span>
              </li>
              <li>
                <span>MongoDB</span>
              </li>
              <li>
                <span>ExpressJS</span>
              </li>
              <li>
                <span>Python</span>
              </li>
              <li>
                <span>Material UI</span>
              </li>
              <li>
                <span>SocketIO</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
