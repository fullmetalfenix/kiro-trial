import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="section about-section">
      <div className="about-content">
        <div className="about-text">
          <h2 className="section-title">About Me</h2>
          <p className="about-description">
            I'm a passionate full-stack developer with over 5 years of experience 
            creating digital solutions that make a difference. I love turning complex 
            problems into simple, beautiful designs.
          </p>
          <p className="about-description">
            When I'm not coding, you can find me exploring new technologies, 
            contributing to open source projects, or enjoying a good cup of coffee 
            while reading about the latest industry trends.
          </p>
          <div className="stats">
            <div className="stat">
              <h3>50+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat">
              <h3>5+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat">
              <h3>20+</h3>
              <p>Happy Clients</p>
            </div>
          </div>
        </div>
        <div className="about-image">
          <div className="image-placeholder">
            <span>Your Photo Here</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;