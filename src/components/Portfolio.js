import React, { useState, useEffect } from 'react';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Contact from './sections/Contact';
import Navigation from './Navigation';
import './Portfolio.css';

const Portfolio = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const sections = ['hero', 'about', 'projects', 'skills', 'experience', 'contact'];

  const navigateToSection = (index) => {
    setCurrentSection(index);
  };

  const navigateUp = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
    }
  };

  const navigateDown = () => {
    if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        navigateUp();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        navigateDown();
      }
    };

    const handleWheel = (e) => {
      e.preventDefault();
      
      // Throttle wheel events to prevent too rapid scrolling
      if (window.wheelTimeout) return;
      
      window.wheelTimeout = setTimeout(() => {
        window.wheelTimeout = null;
      }, 100);

      if (e.deltaY > 0) {
        // Scrolling down
        navigateDown();
      } else if (e.deltaY < 0) {
        // Scrolling up
        navigateUp();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('wheel', handleWheel, { passive: false });
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('wheel', handleWheel);
      if (window.wheelTimeout) {
        clearTimeout(window.wheelTimeout);
        window.wheelTimeout = null;
      }
    };
  }, [currentSection]);

  return (
    <div className="portfolio">
      <Navigation 
        sections={sections}
        currentSection={currentSection}
        onNavigate={navigateToSection}
      />
      
      <div className="arrow-nav arrow-up" onClick={navigateUp}>
        <span>↑</span>
      </div>
      
      <div className="arrow-nav arrow-down" onClick={navigateDown}>
        <span>↓</span>
      </div>

      <div 
        className="sections-container"
        style={{ transform: `translateY(-${currentSection * 100}vh)` }}
      >
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </div>
    </div>
  );
};

export default Portfolio;