// Education.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCertificate } from 'react-icons/fa';
import { education, certifications } from '../../data/portfolioData';
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
          <h2 className="section-title">Education & Certifications</h2>
          <p className="section-subtitle">Academic foundation and industry credentials</p>
        </motion.div>

        <div className="credentials-grid">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              className="credential-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="credential-icon">
                <FaGraduationCap />
              </div>
              <div className="credential-body">
                <h3 className="degree">{edu.degree}</h3>
                <p className="institution">{edu.school}</p>
                <div className="education-meta">
                  <span>{edu.location}</span>
                  <span>•</span>
                  <span>{edu.duration}</span>
                </div>
              </div>
            </motion.div>
          ))}

          {certifications.map((cert, index) => (
            <motion.div
              key={`cert-${cert.id}`}
              className="credential-card certification-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: (education.length + index) * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="credential-icon cert-icon">
                <FaCertificate />
              </div>
              <div className="credential-body">
                <span className="credential-tag">Certification</span>
                <h3 className="degree">{cert.name}</h3>
                <p className="institution">{cert.issuer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
