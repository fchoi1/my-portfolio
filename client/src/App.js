import './App.css';

import NavBar from 'components/Nav';
import MainPage from 'pages';

// Contexts
import MuiThemeProvider from './contexts/MuiThemeProvider';
import { ProfileProvider } from './contexts/ProfileProvider';
import { ProjectProvider } from './contexts/ProjectProvider';
import { HistoryProvider } from './contexts/HistoryProvider';

import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Footer from 'components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MuiThemeProvider>
          <ProfileProvider>
            <ProjectProvider>
              <HistoryProvider>

                <NavBar />
                <Routes>
                  <Route exact path="/" element={<MainPage />} />
                </Routes>
                <Footer />
                
              </HistoryProvider>
            </ProjectProvider>
          </ProfileProvider>
        </MuiThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
