import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p className="about-intro">
              I'm a passionate full-stack developer specializing in building robust backend systems with <strong>Spring Boot</strong> and creating modern user interfaces with <strong>React.js</strong>.
            </p>
            <p>
              With over 3 years of experience using Linux command-line tools on Arch Linux and Neovim, I've developed a workflow that maximizes efficiency and productivity. My approach focuses on writing clean, maintainable code and building scalable applications.
            </p>
            <div className="about-highlights">
              <div className="highlight-item">
                <div className="highlight-icon">🎓</div>
                <h3>Education</h3>
                <p>B.Tech in Computer Science (2021-2025)<br/>CGPA: 7.33</p>
                <p className="small">Mangalmay Institute of Engineering</p>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon">💼</div>
                <h3>Experience</h3>
                <p>3+ Years with Linux CLI</p>
                <p className="small">Arch Linux & Neovim Power User</p>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon">🏆</div>
                <h3>Certifications</h3>
                <p>DSA • Java • OOP • DBMS</p>
                <p className="small">NoSQL Databases</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;