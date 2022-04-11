import React from 'react';

function Hero(props) {
  return (
    <section className="hero-section" id="Hero">
      <div style={{ height: '100vh' }}>
        <p>Hi, my name is</p>
        <div className="hero-name-wrapper">
          <h1 className="hero-name">Fabio Choi</h1>
          <h1 className="hero-comment">I build things for the web</h1>
        </div>
        <div className="title-wrapper">
          <h3 className="title"> ITS Analyst and Upcoming Web Developer</h3>
        </div>
      </div>
    </section>
  );
}

export default Hero;
