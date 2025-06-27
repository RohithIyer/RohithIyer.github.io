// ProjectDetails.js
import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGithub, FaArrowLeft, FaCheckCircle } from 'react-icons/fa';
import { projects } from '../../data/portfolioData';
import './ProjectDetails.css';

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="project-not-found">
        <h2>Project not found</h2>
        <Link to="/">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="project-details-page">
      <header className="details-header">
        <div className="container">
          <button
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
        transition={{ duration: 0.6 }}
      >
        <div className="container">
          <motion.div
            className="details-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="project-name">{project.title}</h1>
            
            <motion.div
              className="project-hero-image"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <img src={project.detailsImage} alt={project.title} />
            </motion.div>

            <div className="details-body">
              <div className="project-overview">
                <h2>Project Overview</h2>
                <p className="lead-text">{project.description}</p>
              </div>

              <div className="tech-stack">
                <h3>🔧 Tools & Technologies</h3>
                <div className="tech-tags-detailed">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag-detailed">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="achievements">
                <h3>📈 Key Achievements</h3>
                <ul className="achievements-list">
                  {project.achievements.map((achievement, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 * idx }}
                    >
                      <FaCheckCircle className="check-icon" />
                      <span>{achievement}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="project-actions">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-button"
                >
                  <FaGithub /> View on GitHub
                </a>
              </div>

              <div className="other-projects">
                <h3>Other Projects</h3>
                <div className="related-projects">
                  {projects
                    .filter(p => p.id !== project.id)
                    .slice(0, 3)
                    .map((relatedProject) => (
                      <Link
                        key={relatedProject.id}
                        to={`/project/${relatedProject.id}`}
                        className="related-project-card"
                      >
                        <img src={relatedProject.image} alt={relatedProject.title} />
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