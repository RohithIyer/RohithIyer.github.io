// Navigation.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaFileDownload } from 'react-icons/fa';
import { personalInfo } from '../../data/portfolioData';
import './Navigation.css';

const Navigation = () => {
  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleResumeClick = () => {
    // Open resume in new tab for preview
    window.open(personalInfo.resume, '_blank');
  };

  return (
    <nav className="navigation-section">
      <div className="nav-container">
        <motion.div
          className="nav-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              className="nav-button"
              onClick={(e) => handleNavClick(e, item.href)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              {item.name}
            </motion.a>
          ))}
          
          <motion.button
            className="nav-button resume-button"
            onClick={handleResumeClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <FaFileDownload className="resume-icon" />
            Resume
          </motion.button>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navigation;