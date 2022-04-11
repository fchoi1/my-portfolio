import React from 'react';
import { Grid, Avatar } from '@mui/material';

import { useProfileContext } from '../../contexts/ProfileProvider';

import './about.css';

function About(props) {
  const { profile, setProfile } = useProfileContext();

  console.log(profile.avatarImage);

  return (
    <section className="page-section" id="About">
      <div style={{ height: '100vh' }}>
        About me Section
        <div className="about-name-wrapper">
          <h1 className="about-name">About me</h1>
        </div>
        <Grid
          container
          spacing={{ xs: 0, sm: 3 }}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={8} sm={7} md={6} sx={{ mx: { xs: 3, sm: 0 } }}>
            <div className="title-wrapper">
              <h3 className="title"> ITS Analyst and Upcoming Web Developer</h3>
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            sm="auto"
            sx={{ display: 'flex', justifyContent: 'center' }}
          >
            <div className="avatar-wrapper">
              <Avatar
                alt="Fabio Choi"
                src={profile.avatarImage}
                sx={{ width: '100%', height: '100%' }}
              />
            </div>
          </Grid>
          <Grid item sx={{ display: 'flex', justifyContent: 'center' }}>
            <div className="about-content-wrapper">
              <p className="about-content">
                ITS Business Analyst with an engineering background with over 2
                years of industry experience along with 6 internships in
                engineering teams. Strong foundation in engineering design
                principles and agile methodology. Seeking new opportunities to
                use strong problem solving, design and adaptability skills in
                software & web development. Fluent in JavaScript, HTML, CSS with
                strong foundational web development principles.
              </p>
            </div>
          </Grid>
        </Grid>
      </div>
    </section>
  );
}

export default About;
