import React from 'react';
import './hero.css';

function Hero(props) {
  return (
    <section className="hero-section" id="Hero">
      <div className="section-wrapper">
        <div className="hero-container container">
          <div className="hero-intro-wrapper">
            <span className="hero-intro">Hi, my name is</span>
          </div>
          <div className="hero-name-wrapper">
            <h1 className="hero-name">Fabio Choi</h1>
            <h3 className="hero-comment">I build things for the web.</h3>
          </div>
          <div className="title-wrapper">
            <p className="title">
              I am a web developer, and engineer graduate from University of
              Waterloo. I've always had a passionate for programming and working
              with new technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
