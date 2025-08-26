import React, { useState } from 'react';
import './Profile.css';

const Profile = () => {
  const [profile, setProfile] = useState({
    name: 'John Doe',
    title: 'Software Developer',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    bio: 'Passionate developer with 5+ years of experience in React and Node.js. Love building user-friendly applications and solving complex problems.',
    avatar: 'https://via.placeholder.com/150',
    skills: ['React', 'JavaScript', 'Node.js', 'Python', 'CSS'],
    experience: [
      {
        company: 'Tech Corp',
        position: 'Senior Developer',
        duration: '2022 - Present'
      },
      {
        company: 'StartupXYZ',
        position: 'Frontend Developer',
        duration: '2020 - 2022'
      }
    ]
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (field, value) => {
    setProfile(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="avatar-section">
          <img src={profile.avatar} alt="Profile" className="avatar" />
          {isEditing && (
            <input
              type="url"
              value={profile.avatar}
              onChange={(e) => handleInputChange('avatar', e.target.value)}
              placeholder="Avatar URL"
              className="avatar-input"
            />
          )}
        </div>
        
        <div className="basic-info">
          {isEditing ? (
            <>
              <input
                type="text"
                value={profile.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="name-input"
              />
              <input
                type="text"
                value={profile.title}
                onChange={(e) => handleInputChange('title', e.target.value)}
                className="title-input"
              />
            </>
          ) : (
            <>
              <h1 className="name">{profile.name}</h1>
              <h2 className="title">{profile.title}</h2>
            </>
          )}
        </div>
        
        <button className="edit-btn" onClick={handleEdit}>
          {isEditing ? 'Save' : 'Edit'}
        </button>
      </div>

      <div className="profile-content">
        <div className="contact-info">
          <h3>Contact Information</h3>
          {isEditing ? (
            <>
              <input
                type="email"
                value={profile.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder="Email"
              />
              <input
                type="tel"
                value={profile.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                placeholder="Phone"
              />
              <input
                type="text"
                value={profile.location}
                onChange={(e) => handleInputChange('location', e.target.value)}
                placeholder="Location"
              />
            </>
          ) : (
            <>
              <p><strong>Email:</strong> {profile.email}</p>
              <p><strong>Phone:</strong> {profile.phone}</p>
              <p><strong>Location:</strong> {profile.location}</p>
            </>
          )}
        </div>

        <div className="bio-section">
          <h3>About</h3>
          {isEditing ? (
            <textarea
              value={profile.bio}
              onChange={(e) => handleInputChange('bio', e.target.value)}
              rows="4"
              className="bio-textarea"
            />
          ) : (
            <p>{profile.bio}</p>
          )}
        </div>

        <div className="skills-section">
          <h3>Skills</h3>
          <div className="skills-list">
            {profile.skills.map((skill, index) => (
              <span key={index} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>

        <div className="experience-section">
          <h3>Experience</h3>
          {profile.experience.map((exp, index) => (
            <div key={index} className="experience-item">
              <h4>{exp.position}</h4>
              <p className="company">{exp.company}</p>
              <p className="duration">{exp.duration}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;