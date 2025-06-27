// src/components/ResumeModal/ResumeModal.js
import React from 'react';
import { personalInfo } from '../../data/portfolioData';
import './ResumeModal.css';

const ResumeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = personalInfo.resume;
    link.download = 'Rohith_Krishnamurthy_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="resume-modal-overlay" onClick={onClose}>
      <div className="resume-modal" onClick={(e) => e.stopPropagation()}>
        <div className="resume-modal-header">
          <h3>Resume - {personalInfo.name}</h3>
          <button className="modal-close-btn" onClick={onClose}>
            ×
          </button>
        </div>
        <div className="resume-modal-body">
          <iframe
            src={personalInfo.resume}
            title="Resume Preview"
            width="100%"
            height="600px"
          />
        </div>
        <div className="resume-modal-footer">
          <button className="btn-download-resume" onClick={handleDownload}>
            <svg viewBox="0 0 24 24" width="20" height="20">
              <path fill="currentColor" d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z" />
            </svg>
            Download PDF
          </button>
          <button className="btn-close-modal" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;