import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import { Box } from '@mui/material';

import { useProfileContext } from 'contexts/ProfileProvider';

import './footer.css';

function Footer(props) {
  const { profile } = useProfileContext();
  return (
    <footer className="footer--pin">
      <div className="icon-wrapper">
        <Box className="icon" sx={{ margin: 1 }}>
          <a href={`https://www.github.com/${profile.github}`} className="mx-1">
            <GitHubIcon color="tertiary" sx={{ fontSize: 60 }} />
          </a>
        </Box>
        <Box className="icon" sx={{ margin: 1 }}>
          <a href={`${profile.linkedin}`} className="mx-1">
            <LinkedInIcon color="quinary" sx={{ fontSize: 60 }} />
          </a>
        </Box>

        <Box className="icon" sx={{ margin: 1 }}>
          <a href={profile.instagram} className="mx-1">
            <InstagramIcon color="senary" sx={{ fontSize: 60 }} />
          </a>
        </Box>
        <Box className="icon" sx={{ margin: 1 }}>
          <a href={profile.email} className="mx-1">
            <EmailIcon color="tertiary" sx={{ fontSize: 60 }} />
          </a>
        </Box>
      </div>
    </footer>
  );
}

export default Footer;
