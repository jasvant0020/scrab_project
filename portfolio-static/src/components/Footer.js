import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} Arif Ali. All rights reserved.</p>
          <div className="footer-links">
            <a href="https://github.com/ar1fali" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/ar1fali" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="mailto:arifalu230@gmail.com">Email</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;