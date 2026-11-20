// ProjectDetails.js
import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGithub, FaArrowLeft, FaCheckCircle } from 'react-icons/fa';
import { projects } from '../../data/portfolioData';
import './ProjectDetails.css';

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === parseInt(id, 10));
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveImage(0);
  }, [id]);

  if (!project) {
    return (
      <div className="project-not-found">
        <h2>Project not found</h2>
        <Link to="/" className="back-button">Back to Home</Link>
      </div>
    );
  }

  const images = project.images || [];
  const mainImage = images[activeImage] || images[0] || '/images/banner1.jpg';

  return (
    <div className="project-details-page">
      <header className="details-header">
        <div className="container">
          <button
            type="button"
            className="back-button"
            onClick={() => navigate('/')}
          >
            <FaArrowLeft /> Back to Portfolio
          </button>
        </div>
      </header>

      <motion.section
        className="project-details"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container">
          <motion.div
            className="details-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="details-meta-top">
              <span className="details-category">{project.category}</span>
              {project.date && <span className="details-date">{project.date}</span>}
            </div>

            <h1 className="project-name">{project.title}</h1>
            <p className="lead-text center-lead">{project.description}</p>

            <motion.div
              className="project-hero-image"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <img src={mainImage} alt={`${project.title} screenshot ${activeImage + 1}`} />
            </motion.div>

            {images.length > 1 && (
              <div className="project-gallery-thumbs">
                {images.map((imgSrc, idx) => (
                  <button
                    type="button"
                    key={idx}
                    className={`gallery-thumb ${idx === activeImage ? 'active' : ''}`}
                    onClick={() => setActiveImage(idx)}
                    aria-label={`View screenshot ${idx + 1}`}
                  >
                    <img src={imgSrc} alt={`${project.title} thumbnail ${idx + 1}`} />
                  </button>
                ))}
              </div>
            )}

            <div className="details-body">
              {(project.problem || project.architecture) && (
                <div className="case-study-grid">
                  {project.problem && (
                    <div className="case-study-box">
                      <h2>The Problem</h2>
                      <p>{project.problem}</p>
                    </div>
                  )}
                  {project.architecture && (
                    <div className="case-study-box">
                      <h2>Architecture & Approach</h2>
                      <p>{project.architecture}</p>
                    </div>
                  )}
                </div>
              )}

              <div className="tech-stack">
                <h3>Tools & Technologies</h3>
                <div className="tech-tags-detailed">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag-detailed">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {project.features && project.features.length > 0 && (
                <div className="achievements">
                  <h3>Key Capabilities & Outcomes</h3>
                  <ul className="achievements-list">
                    {project.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.35, delay: 0.08 * idx }}
                      >
                        <FaCheckCircle className="check-icon" />
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="project-actions">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-button"
                  >
                    <FaGithub /> View Source on GitHub
                  </a>
                )}
              </div>

              <div className="other-projects">
                <h3>More Case Studies</h3>
                <div className="related-projects">
                  {projects
                    .filter((p) => p.id !== project.id)
                    .slice(0, 3)
                    .map((relatedProject) => (
                      <Link
                        key={relatedProject.id}
                        to={`/project/${relatedProject.id}`}
                        className="related-project-card"
                      >
                        <img
                          src={relatedProject.images[0]}
                          alt={relatedProject.title}
                        />
                        <h4>{relatedProject.title}</h4>
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default ProjectDetails;
