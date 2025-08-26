import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      company: "Tech Solutions Inc.",
      position: "Senior Full Stack Developer",
      duration: "2022 - Present",
      description: "Lead development of web applications using React and Node.js. Mentored junior developers and implemented CI/CD pipelines.",
      achievements: [
        "Increased application performance by 40%",
        "Led a team of 5 developers",
        "Implemented automated testing reducing bugs by 60%"
      ]
    },
    {
      company: "Digital Agency Co.",
      position: "Frontend Developer",
      duration: "2020 - 2022",
      description: "Developed responsive web applications and collaborated with design teams to create pixel-perfect user interfaces.",
      achievements: [
        "Built 15+ client websites",
        "Improved page load times by 50%",
        "Introduced modern development practices"
      ]
    },
    {
      company: "StartupXYZ",
      position: "Junior Developer",
      duration: "2019 - 2020",
      description: "Started my career building features for a growing SaaS platform. Learned modern web development practices and agile methodologies.",
      achievements: [
        "Contributed to 20+ feature releases",
        "Learned React and modern JavaScript",
        "Participated in code reviews and pair programming"
      ]
    }
  ];

  return (
    <section className="section experience-section">
      <div className="experience-content">
        <h2 className="section-title">Work Experience</h2>
        <div className="horizontal-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-card">
              <div className="card-marker">{index + 1}</div>
              <div className="card-content">
                <div className="experience-header">
                  <h3 className="position">{exp.position}</h3>
                  <span className="duration">{exp.duration}</span>
                </div>
                <h4 className="company">{exp.company}</h4>
                <p className="description">{exp.description}</p>
                <ul className="achievements">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;