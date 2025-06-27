import React from 'react';
import { personalInfo, aboutMe } from '../../data/portfolioData';
import './About.css';

const About = () => {
  const resumePath = personalInfo.resume;
  
  // Split the about me text into paragraphs
  const paragraphs = aboutMe.split('\n\n');
  
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Get to know me better</p>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            {paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
            
            <div className="about-info">
              <div className="info-item">
                <span className="info-label">Location:</span>
                <span className="info-value">{personalInfo.location}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Email:</span>
                <span className="info-value">{personalInfo.email}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Education:</span>
                <span className="info-value">MPS Analytics, Northeastern University</span>
              </div>
            </div>
            
            <div className="about-cta">
              <a href={resumePath} download className="btn-primary">
                <svg className="download-icon" viewBox="0 0 24 24" width="20" height="20">
                  <path fill="currentColor" d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z" />
                </svg>
                Download Resume
              </a>
              <button 
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })} 
                className="btn-secondary"
              >
                Let's Connect
              </button>
            </div>
          </div>
          
          <div className="about-image">
            <div className="image-container">
              <img 
                src="/images/profile.jpg" 
                alt="Rohith Krishnamurthy" 
                onError={(e) => {
                  // Try different extensions if the image fails to load
                  const fallbacks = [
                    '/images/profile.JPG',
                    '/images/profile.png',
                    '/images/profile.PNG',
                    '/images/profile_old.jpg',
                    '/images/profile_old.JPG'
                  ];
                  const current = e.target.dataset.fallbackIndex || 0;
                  const nextIndex = parseInt(current);
                  
                  if (nextIndex < fallbacks.length) {
                    e.target.src = fallbacks[nextIndex];
                    e.target.dataset.fallbackIndex = nextIndex + 1;
                  }
                }}
              />
              <div className="image-decoration"></div>
            </div>
            
            <div className="stats-grid">
              <div className="stat-item">
                <h4>5+</h4>
                <p>Years Experience</p>
              </div>
              <div className="stat-item">
                <h4>20+</h4>
                <p>Projects Completed</p>
              </div>
              <div className="stat-item">
                <h4>10+</h4>
                <p>Technologies</p>
              </div>
              <div className="stat-item">
                <h4>100%</h4>
                <p>Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;