import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Create 10 blank project cards
  const projects = Array.from({ length: 10 }, (_, index) => ({
    title: `Project ${index + 1}`,
    description: "Project description goes here. Add details about the technologies used, features implemented, and challenges overcome.",
    tech: ["React", "CSS", "JavaScript"],
    liveLink: "#",
    repoLink: "#"
  }));

  const cardsPerView = 3;
  const maxIndex = projects.length - cardsPerView;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex >= maxIndex ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex <= 0 ? maxIndex : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(Math.min(index, maxIndex));
  };

  // Calculate the transform based on card width + gap
  const cardWidth = 100 / cardsPerView; // Each card takes 33.333% of visible area
  const translateX = currentIndex * cardWidth;

  return (
    <section className="section projects-section">
      <div className="projects-content">
        <h2 className="section-title">My Projects</h2>
        <p style={{ textAlign: 'center', opacity: 0.8, marginBottom: '1rem' }}>
          Showing projects {currentIndex + 1}-{Math.min(currentIndex + cardsPerView, projects.length)} of {projects.length}
        </p>
        
        <div className="carousel-container">
          <button className="carousel-btn prev-btn" onClick={prevSlide}>
            ‹
          </button>
          
          <div className="carousel-wrapper">
            <div 
              className="carousel-track"
              style={{ 
                transform: `translateX(-${translateX}%)`
              }}
            >
              {projects.map((project, index) => (
                <div key={index} className="project-card">
                  <div className="project-image">
                    <span>Project Screenshot</span>
                  </div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a href={project.liveLink} className="project-link">Live Demo</a>
                    <a href={project.repoLink} className="project-link">View Code</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button className="carousel-btn next-btn" onClick={nextSlide}>
            ›
          </button>
        </div>
        
        <div className="carousel-indicators">
          {Array.from({ length: maxIndex + 1 }, (_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;