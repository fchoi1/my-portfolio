import React from 'react';
import { Avatar } from '@mui/material';

import { useProfileContext } from '../../contexts/ProfileProvider';

import './about.css';

function About(props) {
  const { profile, setProfile } = useProfileContext();

  console.log(profile.avatarImage);

  return (
    <section className="page-section" id="About">
      <div className="section-wrapper">
        About me Section
        <div className="about-container">
          <div className="section-name about-name-wrapper">
            <h3 className="about-name">About me</h3>
          </div>

          {/* <div className="about-title-wrapper">
            <h3 className="about-title">
              ITS Analyst and Upcoming Web Developer
            </h3>
          </div> */}

          <div className="avatar-wrapper">
            <Avatar
              className="avatar"
              alt="Fabio Choi"
              src={profile.avatarImage}
              sx={{ width: '100%', height: '100%' }}
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
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
