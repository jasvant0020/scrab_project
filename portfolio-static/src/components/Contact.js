import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <p className="contact-intro">
              I'm currently available for Spring Boot developer roles and freelance opportunities. 
              Let's connect and build something amazing together!
            </p>
            <div className="contact-methods">
              <a href="mailto:arifalu230@gmail.com" className="contact-method">
                <div className="method-icon">📧</div>
                <div className="method-details">
                  <h4>Email</h4>
                  <p>arifalu230@gmail.com</p>
                </div>
              </a>
              <a href="tel:+919102629415" className="contact-method">
                <div className="method-icon">📱</div>
                <div className="method-details">
                  <h4>Phone</h4>
                  <p>+91-9102629415</p>
                </div>
              </a>
              <a href="https://linkedin.com/in/ar1fali" target="_blank" rel="noopener noreferrer" className="contact-method">
                <div className="method-icon">💼</div>
                <div className="method-details">
                  <h4>LinkedIn</h4>
                  <p>linkedin.com/in/ar1fali</p>
                </div>
              </a>
              <a href="https://github.com/ar1fali" target="_blank" rel="noopener noreferrer" className="contact-method">
                <div className="method-icon">💻</div>
                <div className="method-details">
                  <h4>GitHub</h4>
                  <p>github.com/ar1fali</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;