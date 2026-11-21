import React, { useState } from 'react';
import { skillsData, skillCategoryNotes, getSkillCategories } from '../../data/skillsData';
import './Skills.css';

const Skills = () => {
  const categories = getSkillCategories();
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

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
                  <img
                    src={skill.icon}
                    alt={`${skill.name} logo`}
                    className="skill-icon"
                  />
                  <h4 className="skill-name">{skill.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-footer">
          <p className="skills-note">
            {skillCategoryNotes[selectedCategory]}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
