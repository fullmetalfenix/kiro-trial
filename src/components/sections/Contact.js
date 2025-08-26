import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
    alert('Message sent! (This is a demo)');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="section contact-section">
      <div className="contact-content">
        <h2 className="section-title">Get In Touch</h2>
        <p className="contact-subtitle">
          Have a project in mind? Let's work together to bring your ideas to life.
        </p>
        
        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">📧</div>
              <div>
                <h4>Email</h4>
                <p>john.doe@example.com</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">📱</div>
              <div>
                <h4>Phone</h4>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <div>
                <h4>Location</h4>
                <p>San Francisco, CA</p>
              </div>
            </div>
            
            <div className="social-links">
              <a href="#" className="social-link">LinkedIn</a>
              <a href="#" className="social-link">GitHub</a>
              <a href="#" className="social-link">Twitter</a>
            </div>
          </div>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            
            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;