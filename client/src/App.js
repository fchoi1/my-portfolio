import './App.css';
import NavBar from './components/Nav';
import MuiThemeProvider from './contexts/MuiThemeProvider';

import { Switch, Route, Redirect } from 'react-router-dom';

//pages
import About from './pages/About';
import History from './pages/History';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

import Footer from './components/Footer';

function App() {
  const profile = {
    github: 'fchoi1',
    linkedin: 'https://www.linkedin.com/in/fchoi1/',
    instagram: 'https://www.instagram.com/w4ng0/'
  };
  return (
    <div className="App">
      <MuiThemeProvider>
        <NavBar></NavBar>
        <About />
        <History />
        <Projects />
        <Contact />

        <Footer profile={profile} />
      </MuiThemeProvider>
    </div>
  );
}

export default App;
