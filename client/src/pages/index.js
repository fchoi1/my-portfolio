import React from 'react';

//pages
import About from './About';
import History from './History';
import Projects from './Projects';
import Contact from './Contact';
import Hero from './Hero';

function MainPage(props) {
  return (
    <>
      <Hero />
      <About />
      <History />
      <Projects />
      <Contact />
    </>
  );
}

export default MainPage;
