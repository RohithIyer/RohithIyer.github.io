import React, { useState } from 'react';
import { skillsData, getSkillCategories } from '../../data/skillsData';
import './Skills.css';

const Skills = () => {
  const categories = getSkillCategories();
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const handleImageError = (e) => {
    const img = e.target;
    const originalSrc = img.getAttribute('data-original-src') || img.src;

    const variations = [
      originalSrc,
      originalSrc.replace('.PNG', '.png'),
      originalSrc.replace('.png', '.PNG'),
      originalSrc.replace('.jpg', '.JPG'),
      originalSrc.replace('.JPG', '.jpg')
    ];

    const currentIndex = parseInt(img.getAttribute('data-variation-index') || '0', 10);

    if (currentIndex < variations.length - 1) {
      img.setAttribute('data-variation-index', String(currentIndex + 1));
      img.setAttribute('data-original-src', originalSrc);
      img.src = variations[currentIndex + 1];
    } else {
      img.style.display = 'none';
    }
  };

  return (
    <section className="skills" id="skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">Tools and platforms I use to build production data & AI systems</p>
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
              <div key={`${selectedCategory}-${index}`} className="skill-card">
                <div className="skill-header">
                  {skill.icon ? (
                    <img
                      src={skill.icon}
                      alt={`${skill.name} logo`}
                      className="skill-icon"
                      onError={handleImageError}
                      data-variation-index="0"
                    />
                  ) : (
                    <div className="skill-badge" aria-hidden="true">
                      {skill.badge || skill.name.slice(0, 2).toUpperCase()}
                    </div>
                  )}
                  <h4 className="skill-name">{skill.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-footer">
          <p className="skills-note">
            Focused on reliable cloud data pipelines, serverless orchestration, and evaluated AI systems.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
