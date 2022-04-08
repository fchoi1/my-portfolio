import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

import './footer.css';

function Footer(props) {
  let iconStyles = { color: 'white' };
  
  const { profile } = props;
  return (
    <footer className="footer--pin">
      <div className="icon-wrapper">
        <a href={`https://www.github.com/${profile.github}`} className="mx-1">
          <GitHubIcon size="50" style={iconStyles} />
        </a>
        <a href={`${profile.linkedin}`} className="mx-1">
          <LinkedInIcon size="50" style={iconStyles} />
        </a>

        <a href={profile.instgram} className="mx-1">
          <InstagramIcon size="50" style={iconStyles} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
