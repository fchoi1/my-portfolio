import './App.css';
import NavBar from './components/Nav';
import MuiThemeProvider from './contexts/MuiThemeProvider';

import { Switch, Route, Redirect } from 'react-router-dom';


//pages
import About from './pages/About';
import History from './pages/History';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

// Theme
import { ThemeProvider, createTheme } from '@mui/material/styles';

function App() {
  return (
    <div className="App">
      <MuiThemeProvider>
        <NavBar></NavBar>
        <About />
        <History />
        <Projects />
        <Contact />
      </MuiThemeProvider>
    </div>
  );
}

export default App;
