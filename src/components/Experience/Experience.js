// Experience.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaLayerGroup, FaMapMarkerAlt, FaCalendar } from 'react-icons/fa';
import { experience } from '../../data/portfolioData';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Engineering Focus & Systems Built</h2>
          <p className="section-subtitle">
            The architectures, pipelines, and engineering themes behind my roles—complementing the formal timeline in my resume
          </p>
        </motion.div>

        <div className="work-focus-grid">
          {experience.map((exp, index) => (
            <motion.article
              key={exp.id}
              className="work-focus-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              viewport={{ once: true }}
            >
              <div className="work-focus-top">
                <span className="work-theme-badge">
                  <FaLayerGroup className="theme-icon" />
                  {exp.theme}
                </span>
                <div className="experience-meta">
                  <span className="duration">
                    <FaCalendar /> {exp.duration}
                  </span>
                  <span className="location">
                    <FaMapMarkerAlt /> {exp.location}
                  </span>
                </div>
              </div>

              <div className="work-role-header">
                <h3 className="position">{exp.position}</h3>
                <h4 className="company">{exp.company}</h4>
              </div>

              <p className="work-focus-summary">{exp.focus}</p>

              <div className="systems-section">
                <h5 className="systems-heading">Systems & Architecture</h5>
                <ul className="systems-list">
                  {exp.systemsBuilt.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="work-tech-stack">
                {exp.technologies.map((tech, idx) => (
                  <span key={idx} className="work-tech-pill">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
