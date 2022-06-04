import React from 'react';

// Contexts
import MuiThemeProvider from 'contexts/MuiThemeProvider';
import { ProfileProvider } from 'contexts/ProfileProvider';
import { ProjectProvider } from 'contexts/ProjectProvider';
import { HistoryProvider } from 'contexts/HistoryProvider';

export const wrapRootElement = ({ element }) => {
  return (
    <MuiThemeProvider>
      <ProfileProvider>
        <ProjectProvider>
          <HistoryProvider>{element}</HistoryProvider>
        </ProjectProvider>
      </ProfileProvider>
    </MuiThemeProvider>
  );
};
