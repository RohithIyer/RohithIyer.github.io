import React, { useState } from 'react';
import { skillsData, getSkillCategories } from '../../data/skillsData';
import './Skills.css';

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState("Core Tools");
  const categories = getSkillCategories();

  const handleImageError = (e) => {
    const img = e.target;
    const originalSrc = img.getAttribute('data-original-src') || img.src;
    
    // Try different cases and extensions
    const variations = [
      originalSrc,
      originalSrc.replace('.jpg', '.JPG'),
      originalSrc.replace('.JPG', '.jpg'),
      originalSrc.replace('.png', '.PNG'),
      originalSrc.replace('.PNG', '.png'),
      originalSrc.replace('.jpeg', '.JPEG'),
      originalSrc.replace('.JPEG', '.jpeg'),
      originalSrc.replace('.svg', '.SVG'),
      originalSrc.replace('.SVG', '.svg')
    ];
    
    const currentIndex = parseInt(img.getAttribute('data-variation-index') || '0');
    
    if (currentIndex < variations.length - 1) {
      img.setAttribute('data-variation-index', currentIndex + 1);
      img.setAttribute('data-original-src', originalSrc);
      img.src = variations[currentIndex + 1];
    } else {
      // If all variations fail, use a placeholder or hide the image
      img.style.display = 'none';
      // Or use a default tech icon
      // img.src = '/images/logos/default-tech.png';
    }
  };

  return (
    <section className="skills" id="skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">Technologies I work with</p>
        </div>

        <div className="skills-tabs">
          {categories.map((category) => (
            <button
              key={category}
              className={`tab-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="skills-content">
          <div className="skills-grid">
            {skillsData[selectedCategory].map((skill, index) => (
              <div key={index} className="skill-card">
                <div className="skill-header">
                  {skill.icon && (
                    <img 
                      src={skill.icon} 
                      alt={`${skill.name} logo`} 
                      className="skill-icon"
                      onError={handleImageError}
                      data-variation-index="0"
                    />
                  )}
                  <h4 className="skill-name">{skill.name}</h4>
                </div>
                <div className="skill-progress">
                  <div className="progress-bar">
                    <div 
                      className="progress-fill" 
                      style={{ width: `${skill.level}%` }}
                      data-level={`${skill.level}%`}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="skills-visualization">
            <div className="radar-chart">
              {/* You can add a radar chart visualization here using a library like Chart.js or D3.js */}
              <div className="chart-placeholder">
                <h3>Skill Proficiency Overview</h3>
                <div className="skill-bars">
                  {skillsData[selectedCategory].map((skill, index) => (
                    <div key={index} className="skill-bar-item">
                      <span className="skill-label">{skill.name}</span>
                      <div className="horizontal-bar">
                        <div 
                          className="bar-fill" 
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${index * 0.1}s`
                          }}
                        ></div>
                      </div>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="skills-footer">
          <p className="skills-note">
            Always learning and expanding my skill set. Currently exploring Cloud Computing and DevOps practices.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;