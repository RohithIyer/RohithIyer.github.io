import React from 'react';
import { personalInfo, aboutMe } from '../../data/portfolioData';
import './About.css';

const About = () => {
  const resumePath = personalInfo.resume;

  // Split the about me text into paragraphs
  const paragraphs = aboutMe.split('\n\n');

  // Function to render text with markdown-style bold
  const renderParagraph = (text) => {
    const parts = text.split(/(\*\*[^*]+\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i}>{part.slice(2, -2)}</strong>;
      }
      // Handle bullet points
      if (part.includes('•')) {
        const lines = part.split('\n').filter(line => line.trim());
        return (
          <div key={i} className="bullet-list">
            {lines.map((line, j) => (
              <div key={j} className="bullet-item">{line}</div>
            ))}
          </div>
        );
      }
      return <span key={i}>{part}</span>;
    });
  };

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
              <p key={index} className="about-paragraph">{renderParagraph(paragraph)}</p>
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
              <a href={resumePath} target="_blank" rel="noopener noreferrer" className="btn-primary">
                <svg className="view-icon" viewBox="0 0 24 24" width="20" height="20">
                  <path fill="currentColor" d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" />
                </svg>
                View Resume
              </a>
              <a href={resumePath} download className="btn-outline">
                <svg className="download-icon" viewBox="0 0 24 24" width="20" height="20">
                  <path fill="currentColor" d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z" />
                </svg>
                Download PDF
              </a>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;