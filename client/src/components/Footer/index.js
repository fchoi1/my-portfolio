import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Box } from '@mui/system';

import { useProfileContext } from '../../contexts/ProfileProvider';

import './footer.css';

function Footer(props) {
  const { profile, setProfile } = useProfileContext();
  return (
    <footer className="footer--pin">
      <div className="icon-wrapper">
        <Box className="icon" sx={{ margin: 1 }}>
          <a href={`https://www.github.com/${profile.github}`} className="mx-1">
            <GitHubIcon color="atomicTangerine" sx={{ fontSize: 60 }} />
          </a>
        </Box>
        <Box className="icon" sx={{ margin: 1 }}>
          <a href={`${profile.linkedin}`} className="mx-1">
            <LinkedInIcon color="mediumChampagne" sx={{ fontSize: 60 }} />
          </a>
        </Box>

        <Box className="icon" sx={{ margin: 1 }}>
          <a href={profile.instagram} className="mx-1">
            <InstagramIcon color="liverChestnut" sx={{ fontSize: 60 }} />
          </a>
        </Box>
      </div>
    </footer>
  );
}

export default Footer;
