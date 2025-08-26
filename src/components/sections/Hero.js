import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="section hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          Hi, I'm <span className="highlight">John Doe</span>
        </h1>
        <h2 className="hero-subtitle">Full Stack Developer</h2>
        <p className="hero-description">
          I create beautiful, responsive web applications with modern technologies
        </p>
        <div className="hero-cta">
          <button className="cta-button primary">View My Work</button>
          <button className="cta-button secondary">Get In Touch</button>
        </div>
      </div>
      <div className="hero-visual">
        <div className="floating-elements">
          <div className="element element-1"></div>
          <div className="element element-2"></div>
          <div className="element element-3"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;