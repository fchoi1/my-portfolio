import React from 'react';

//pages
import About from './About';
import History from './History';
import Projects from './Projects';
import Contact from './Contact';
import Hero from './Hero';

import { ScrollProvider } from 'contexts/ScrollProvider';

function MainPage(props) {
  return (
    <>
      <Hero />
      <About />
      <ScrollProvider>
        <History />
      </ScrollProvider>
      <Projects />
      <Contact />
    </>
  );
}

export default MainPage;
