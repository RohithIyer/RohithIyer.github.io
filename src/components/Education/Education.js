// Education.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaTrophy } from 'react-icons/fa';
import { education } from '../../data/portfolioData';
import './Education.css';

const Education = () => {
  return (
    <section id="education" className="education">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Education</h2>
        </motion.div>

        <div className="education-timeline">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              className="education-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="education-icon">
                <FaGraduationCap />
              </div>
              
              <div className="education-content">
                <h3 className="degree">{edu.degree}</h3>
                <h4 className="institution">{edu.institution}</h4>
                <div className="education-meta">
                  <span className="location">{edu.location}</span>
                  <span className="duration">{edu.duration}</span>
                </div>
                
                {edu.gpa && (
                  <div className="gpa-badge">
                    <FaTrophy className="trophy-icon" />
                    <span>GPA: {edu.gpa}</span>
                  </div>
                )}
                
                {edu.achievements && (
                  <ul className="achievements">
                    {edu.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;