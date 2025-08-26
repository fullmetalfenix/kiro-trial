import React from 'react';
import './Skills.css';

const Skills = () => {
  const certifications = [
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      description: "Demonstrates expertise in designing distributed systems on AWS. Covers compute, networking, storage, and database AWS services for scalable applications.",
      logo: "AWS"
    },
    {
      title: "React Developer Certification",
      issuer: "Meta",
      date: "2023",
      description: "Advanced React development skills including hooks, context, performance optimization, and modern React patterns for building scalable applications.",
      logo: "React"
    },
    {
      title: "Google Cloud Professional",
      issuer: "Google Cloud",
      date: "2022",
      description: "Professional-level expertise in Google Cloud Platform services, architecture design, and implementation of cloud solutions.",
      logo: "GCP"
    },
    {
      title: "Certified Kubernetes Administrator",
      issuer: "Cloud Native Computing Foundation",
      date: "2022",
      description: "Demonstrates skills in installation, configuration, and management of Kubernetes clusters in production environments.",
      logo: "K8s"
    },
    {
      title: "MongoDB Certified Developer",
      issuer: "MongoDB Inc.",
      date: "2021",
      description: "Expertise in MongoDB database design, development, and optimization. Covers aggregation, indexing, and performance tuning.",
      logo: "MongoDB"
    },
    {
      title: "Docker Certified Associate",
      issuer: "Docker Inc.",
      date: "2021",
      description: "Proficiency in containerization, Docker orchestration, security, and best practices for container-based application deployment.",
      logo: "Docker"
    }
  ];

  return (
    <section className="section skills-section">
      <div className="skills-content">
        <h2 className="section-title">Certificates & Certifications</h2>
        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div key={index} className="certification-card">
              <div className="card-inner">
                <div className="card-front">
                  <div className="cert-logo">{cert.logo}</div>
                  <h3 className="cert-title">{cert.title}</h3>
                  <p className="cert-issuer">{cert.issuer}</p>
                  <p className="cert-date">{cert.date}</p>
                </div>
                <div className="card-back">
                  <h3 className="cert-title">{cert.title}</h3>
                  <p className="cert-description">{cert.description}</p>
                  <div className="cert-badge">Certified</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;