import React from 'react';
import './Navigation.css';

const Navigation = ({ sections, currentSection, onNavigate }) => {
  return (
    <nav className="dot-navigation">
      {sections.map((section, index) => (
        <div
          key={section}
          className={`nav-dot ${index === currentSection ? 'active' : ''}`}
          onClick={() => onNavigate(index)}
          title={section.charAt(0).toUpperCase() + section.slice(1)}
        >
          <span className="nav-label">{section}</span>
        </div>
      ))}
    </nav>
  );
};

export default Navigation;