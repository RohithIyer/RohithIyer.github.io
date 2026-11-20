import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { projectsData, getCategories } from '../../data/portfolioData';
import './Projects.css';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredProject, setHoveredProject] = useState(null);
  const navigate = useNavigate();

  const categories = getCategories();
  const filteredProjects = selectedCategory === 'All'
    ? projectsData
    : projectsData.filter((project) => project.category === selectedCategory);

  const handleImageError = (e) => {
    const img = e.target;
    const originalSrc = img.getAttribute('data-original-src') || img.src;

    const variations = [
      originalSrc,
      originalSrc.replace('.jpg', '.JPG'),
      originalSrc.replace('.JPG', '.jpg'),
      originalSrc.replace('.png', '.PNG'),
      originalSrc.replace('.PNG', '.png')
    ];

    const currentIndex = parseInt(img.getAttribute('data-variation-index') || '0', 10);

    if (currentIndex < variations.length - 1) {
      img.setAttribute('data-variation-index', String(currentIndex + 1));
      img.setAttribute('data-original-src', originalSrc);
      img.src = variations[currentIndex + 1];
    } else {
      img.src = '/images/banner1.jpg';
    }
  };

  const handleViewProject = (projectId) => {
    navigate(`/project/${projectId}`);
  };

  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Project Case Studies</h2>
          <p className="section-subtitle">Deep dives into AI agents, forecasting pipelines, and analytics platforms</p>
        </div>

        <div className="project-filters">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="project-card"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div
                className="project-image"
                onClick={() => handleViewProject(project.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleViewProject(project.id);
                  }
                }}
              >
                <img
                  src={project.images[0]}
                  alt={project.title}
                  onError={handleImageError}
                  data-variation-index="0"
                />
                <div className={`project-overlay ${hoveredProject === project.id ? 'visible' : ''}`}>
                  <button
                    type="button"
                    className="view-project-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleViewProject(project.id);
                    }}
                  >
                    Read Case Study
                  </button>
                </div>
              </div>

              <div className="project-content">
                <span className="project-category">{project.category}</span>
                <h3 className="project-title">
                  <Link to={`/project/${project.id}`} className="project-title-link">
                    {project.title}
                  </Link>
                </h3>
                <p className="project-description">{project.description}</p>

                <div className="project-tech">
                  {project.technologies.slice(0, 4).map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="tech-tag more">+{project.technologies.length - 4}</span>
                  )}
                </div>

                <div className="project-links">
                  <Link to={`/project/${project.id}`} className="details-link">
                    Case Study
                  </Link>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="github-link"
                    >
                      <svg viewBox="0 0 24 24" width="18" height="18">
                        <path fill="currentColor" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      Source Code
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
