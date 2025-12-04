import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Foodies',
      description: 'Full-stack food ordering platform with dynamic React UI, cart system, payment integration, admin panel, category filters, and search functionality.',
      tech: ['Spring Boot', 'React.js', 'MongoDB', 'REST APIs'],
      github: 'https://github.com/ar1fali/foodies',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      title: 'Hotel Management System',
      description: 'Role-based authentication system with customer and admin portals for room searching, booking, reservation management, and inventory control.',
      tech: ['Spring Boot', 'Angular', 'SQL', 'REST APIs'],
      github: 'https://github.com/ar1fali/hotel-management',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      title: 'Employee Management System',
      description: 'Complete CRUD application for employee data with search, filter, sorting capabilities, form validation, and React Hooks for state management.',
      tech: ['Spring Boot', 'React.js', 'MySQL', 'REST APIs'],
      github: 'https://github.com/ar1fali/employee-management',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
      title: 'TempDrive',
      description: 'Temporary file sharing system with React frontend. Planned backend features include password protection, auto-deletion, and Telegram API integration.',
      tech: ['React.js', 'Spring Boot (WIP)', 'Telegram API'],
      github: 'https://github.com/ar1fali/tempdrive',
      badge: 'In Progress',
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    }
  ];

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              {project.badge && <span className="project-badge">{project.badge}</span>}
              <div className="project-header" style={{ background: project.gradient }}>
                <h3>{project.title}</h3>
              </div>
              <div className="project-body">
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
              <div className="project-footer">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;