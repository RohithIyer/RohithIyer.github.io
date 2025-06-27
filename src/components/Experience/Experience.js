// Experience.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaMapMarkerAlt, FaCalendar } from 'react-icons/fa';
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
          <h2 className="section-title">Work Experience</h2>
        </motion.div>

        <div className="experience-timeline">
          {experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              className={`experience-item ${index % 2 === 0 ? 'left' : 'right'}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="timeline-marker">
                <FaBriefcase />
              </div>
              
              <motion.div
                className="experience-card"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="position">{exp.position}</h3>
                <h4 className="company">{exp.company}</h4>
                
                <div className="experience-meta">
                  <span className="location">
                    <FaMapMarkerAlt /> {exp.location}
                  </span>
                  <span className="duration">
                    <FaCalendar /> {exp.duration}
                  </span>
                </div>
                
                <ul className="responsibilities">
                  {exp.responsibilities.map((responsibility, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 * idx }}
                      viewport={{ once: true }}
                    >
                      {responsibility}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;