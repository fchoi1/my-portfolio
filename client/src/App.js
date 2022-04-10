import './App.css';
import NavBar from './components/Nav';

// Contexts
import MuiThemeProvider from './contexts/MuiThemeProvider';
import { ProfileProvider } from './contexts/ProfileProvider';

import { Switch, Route, Redirect } from 'react-router-dom';

//pages
import About from './pages/About';
import History from './pages/History';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <MuiThemeProvider>
        <ProfileProvider>
          <NavBar />
          <About />
          <History />
          <Projects />
          <Contact />
          <Footer />
        </ProfileProvider>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
